import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  const PORT = 3000;

  // AI Arena Logic
  const rooms = new Map();

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("create_room", ({ grade, mode, type }) => {
      const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const room = {
        id: roomId,
        grade,
        mode, // 'ai' or 'pvp'
        type, // '1v1', '2v2'
        players: [{ id: socket.id, name: `Player ${socket.id.substring(0, 4)}`, score: 0, hp: 100 }],
        status: 'waiting',
        questions: []
      };
      rooms.set(roomId, room);
      socket.join(roomId);
      socket.emit("room_created", room);
      io.emit("update_rooms", Array.from(rooms.values()).filter(r => r.status === 'waiting'));
    });

    socket.on("join_room", (roomId) => {
      const room = rooms.get(roomId);
      if (room && room.status === 'waiting') {
        room.players.push({ id: socket.id, name: `Player ${socket.id.substring(0, 4)}`, score: 0, hp: 100 });
        socket.join(roomId);
        io.to(roomId).emit("room_updated", room);
        
        // Start game if full
        if (room.mode === 'pvp' && room.players.length >= (room.type === '1v1' ? 2 : 4)) {
          io.to(roomId).emit("request_questions", { roomId, grade: room.grade });
        }
      }
    });

    socket.on("start_ai_battle", (roomId) => {
      const room = rooms.get(roomId);
      if (room && room.mode === 'ai') {
        io.to(roomId).emit("request_questions", { roomId, grade: room.grade });
      }
    });

    socket.on("set_questions", ({ roomId, questions }) => {
      const room = rooms.get(roomId);
      if (room && room.status === 'waiting') {
        room.status = 'playing';
        room.questions = questions;
        room.currentQuestionIndex = 0;
        io.to(roomId).emit("game_started", { questions: room.questions });
      }
    });

    socket.on("submit_answer", ({ roomId, answer, timeTaken }) => {
      const room = rooms.get(roomId);
      if (!room || room.status !== 'playing') return;

      const player = room.players.find(p => p.id === socket.id);
      if (!player) return;

      const currentQuestion = room.questions[room.currentQuestionIndex];
      const isCorrect = answer === currentQuestion.correctAnswer;

      if (isCorrect) {
        player.score += Math.max(10, 20 - Math.floor(timeTaken / 1000));
      } else {
        player.hp -= 10;
      }

      io.to(roomId).emit("player_action", { playerId: socket.id, isCorrect, hp: player.hp, score: player.score });

      // Check if game over or next question
      if (player.hp <= 0) {
        endGame(roomId, `Player ${player.name} was defeated!`);
      }
    });

    const leaveRoom = (socketId: string) => {
      for (const [roomId, room] of rooms.entries()) {
        const playerIndex = room.players.findIndex((p: any) => p.id === socketId);
        if (playerIndex !== -1) {
          room.players.splice(playerIndex, 1);
          if (room.players.length === 0) {
            rooms.delete(roomId);
          } else {
            io.to(roomId).emit("room_updated", room);
            if (room.status === 'playing') {
              endGame(roomId, "A player has left the battle.");
            }
          }
          io.emit("update_rooms", Array.from(rooms.values()).filter((r: any) => r.status === 'waiting'));
          break;
        }
      }
    };

    socket.on("leave_room", () => {
      leaveRoom(socket.id);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      leaveRoom(socket.id);
    });
  });

  function endGame(roomId, reason) {
    const room = rooms.get(roomId);
    if (!room) return;
    room.status = 'finished';
    io.to(roomId).emit("game_ended", { reason, players: room.players });
    rooms.delete(roomId);
  }

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
