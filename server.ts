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

    socket.on("create_room", ({ grade, mode, type, playerName }) => {
      console.log("create_room received:", { grade, mode, type, playerName });
      const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const room = {
        id: roomId,
        grade,
        mode, // 'ai' or 'pvp'
        type, // '1v1', '2v2'
        players: [{ id: socket.id, name: playerName || `Player ${socket.id.substring(0, 4)}`, score: 0, hp: 100, ready: mode === 'ai' }],
        ai: mode === 'ai' ? { name: 'Gemini AI', hp: 100, score: 0 } : null,
        status: 'waiting',
        questions: []
      };
      rooms.set(roomId, room);
      socket.join(roomId);
      console.log("Room created:", roomId);
      socket.emit("room_created", room);
      io.emit("update_rooms", Array.from(rooms.values()).filter(r => r.status === 'waiting'));
    });

    socket.on("join_room", ({ roomId, playerName }) => {
      const room = rooms.get(roomId);
      if (room && room.status === 'waiting') {
        if (room.mode === 'pvp' && room.players.length < (room.type === '1v1' ? 2 : 4)) {
          room.players.push({ id: socket.id, name: playerName || `Player ${socket.id.substring(0, 4)}`, score: 0, hp: 100, ready: false, hasAnswered: false });
          socket.join(roomId);
          io.to(roomId).emit("room_updated", room);
        } else if (room.mode === 'ai') {
          socket.emit("error", "AI Arena is private.");
        }
      }
    });

    socket.on("toggle_ready", (roomId) => {
      const room = rooms.get(roomId);
      if (room && room.status === 'waiting') {
        const player = room.players.find(p => p.id === socket.id);
        if (player) {
          player.ready = !player.ready;
          io.to(roomId).emit("room_updated", room);

          // Start game if all ready and full
          const allReady = room.players.every(p => p.ready);
          const isFull = room.players.length >= (room.type === '1v1' ? 2 : 4);
          if (allReady && isFull) {
            room.status = 'playing';
            io.to(roomId).emit("request_questions", { roomId, grade: room.grade });
            io.emit("update_rooms", Array.from(rooms.values()).filter(r => r.status === 'waiting'));
          }
        }
      }
    });

    socket.on("start_ai_battle", (roomId) => {
      const room = rooms.get(roomId);
      if (room && room.mode === 'ai') {
        room.status = 'playing';
        io.to(roomId).emit("request_questions", { roomId, grade: room.grade });
        io.emit("update_rooms", Array.from(rooms.values()).filter(r => r.status === 'waiting'));
      }
    });

    socket.on("set_questions", ({ roomId, questions }) => {
      const room = rooms.get(roomId);
      if (room && room.status === 'playing') {
        room.questions = questions;
        room.currentQuestionIndex = 0;
        room.players.forEach(p => p.hasAnswered = false);
        if (room.ai) room.ai.hasAnswered = false;
        io.to(roomId).emit("game_started", { questions: room.questions });
        
        if (room.mode === 'ai') {
          triggerAIAnswer(roomId, 0);
        }
      }
    });

    function triggerAIAnswer(roomId, questionIndex) {
      const aiDelay = Math.floor(Math.random() * 5000) + 3000; // 3-8 seconds
      setTimeout(() => {
        const room = rooms.get(roomId);
        if (!room || room.status !== 'playing' || room.mode !== 'ai' || !room.ai) return;
        if (room.currentQuestionIndex !== questionIndex || room.ai.hasAnswered) return;

        const isCorrect = Math.random() < 0.7; // 70% accuracy
        const currentQuestion = room.questions[questionIndex];
        const answer = isCorrect ? currentQuestion.correctAnswer : "wrong_answer";
        
        handleAnswerSubmit(roomId, 'ai', answer, aiDelay);
      }, aiDelay);
    }

    function handleAnswerSubmit(roomId, playerId, answer, timeTaken) {
      const room = rooms.get(roomId);
      if (!room || room.status !== 'playing') return;

      let player;
      if (playerId === 'ai') {
        player = room.ai;
      } else {
        player = room.players.find(p => p.id === playerId);
      }

      if (!player || player.hasAnswered) return;
      player.hasAnswered = true;

      const currentQuestion = room.questions[room.currentQuestionIndex];
      const isCorrect = answer === currentQuestion.correctAnswer;

      if (isCorrect) {
        player.score += Math.max(10, 20 - Math.floor(timeTaken / 1000));
        if (playerId === 'ai') {
          room.players.forEach(p => {
            p.hp -= 15;
            io.to(roomId).emit("player_action", { playerId: p.id, isCorrect: false, hp: p.hp, score: p.score });
          });
        } else {
          if (room.mode === 'ai' && room.ai) {
            room.ai.hp -= 15;
            io.to(roomId).emit("player_action", { playerId: 'ai', isCorrect: false, hp: room.ai.hp, score: room.ai.score });
          } else {
            room.players.forEach(p => {
              if (p.id !== playerId) {
                p.hp -= 15;
                io.to(roomId).emit("player_action", { playerId: p.id, isCorrect: false, hp: p.hp, score: p.score });
              }
            });
          }
        }
      } else {
        player.hp -= 10;
        // If wrong, opponent gets score
        if (playerId === 'ai') {
          room.players.forEach(p => {
            p.score += 10;
            io.to(roomId).emit("player_action", { playerId: p.id, isCorrect: true, hp: p.hp, score: p.score });
          });
        } else {
          if (room.mode === 'ai' && room.ai) {
            room.ai.score += 10;
            io.to(roomId).emit("player_action", { playerId: 'ai', isCorrect: true, hp: room.ai.hp, score: room.ai.score });
          } else {
            room.players.forEach(p => {
              if (p.id !== playerId) {
                p.score += 10;
                io.to(roomId).emit("player_action", { playerId: p.id, isCorrect: true, hp: p.hp, score: p.score });
              }
            });
          }
        }
      }

      io.to(roomId).emit("player_action", { playerId, isCorrect, hp: player.hp, score: player.score });

      const anyDead = room.players.some(p => p.hp <= 0) || (room.mode === 'ai' && room.ai && room.ai.hp <= 0);
      if (anyDead) {
        endGame(roomId, "K.O.");
        return;
      }

      const allPlayersAnswered = room.players.every(p => p.hasAnswered);
      const aiAnswered = room.mode === 'pvp' || (room.ai && room.ai.hasAnswered);
      
      if (allPlayersAnswered && aiAnswered) {
        setTimeout(() => {
          room.players.forEach(p => p.hasAnswered = false);
          if (room.ai) room.ai.hasAnswered = false;
          room.currentQuestionIndex++;
          if (room.currentQuestionIndex >= room.questions.length) {
            endGame(roomId, "Hết câu hỏi");
          } else {
            io.to(roomId).emit("next_question", { questionIndex: room.currentQuestionIndex });
            if (room.mode === 'ai') {
              triggerAIAnswer(roomId, room.currentQuestionIndex);
            }
          }
        }, 2000);
      }
    }

    socket.on("submit_answer", ({ roomId, answer, timeTaken }) => {
      handleAnswerSubmit(roomId, socket.id, answer, timeTaken);
    });

    const leaveRoom = (socketId) => {
      for (const [roomId, room] of rooms.entries()) {
        const playerIndex = room.players.findIndex((p) => p.id === socketId);
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
          io.emit("update_rooms", Array.from(rooms.values()).filter((r) => r.status === 'waiting'));
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
