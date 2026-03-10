import { useState, useEffect, useRef } from 'react';
import { Trophy, Users, User, Bot, Swords, Shield, Zap, Heart, Timer, LogOut, Loader2, CheckCircle2, Share2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast';
import { io, Socket } from 'socket.io-client';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Player {
  id: string;
  name: string;
  score: number;
  hp: number;
  ready?: boolean;
  hasAnswered?: boolean;
  isCorrect?: boolean | null;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface Room {
  id: string;
  grade: string;
  mode: 'ai' | 'pvp';
  type: '1v1' | '2v2';
  players: Player[];
  ai?: Player | null;
  status: 'waiting' | 'playing' | 'finished';
  questions?: Question[];
  currentQuestionIndex?: number;
  gameResult?: { reason: string, players: Player[] } | null;
  createdAt: number;
}

export default function ArenaPage() {
  const { user, profile } = useAuthStore();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);
  const [gameState, setGameState] = useState<'lobby' | 'room' | 'battle' | 'result'>('lobby');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createOptions, setCreateOptions] = useState({ grade: '6', mode: 'ai' as 'ai' | 'pvp', type: '1v1' as '1v1' | '2v2' });
  const [shake, setShake] = useState(false);
  const [gameResult, setGameResult] = useState<{ reason: string, players: Player[] } | null>(null);

  const [guestId] = useState(() => `guest_${Math.random().toString(36).substring(2, 8)}`);
  const playerId = user?.uid || guestId;
  const playerName = profile?.displayName || user?.email || `Guest ${playerId.substring(6, 10)}`;

  useEffect(() => {
    // Connect to Socket.io server
    const newSocket = io(window.location.origin);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to Arena server');
    });

    newSocket.on('update_rooms', (updatedRooms: Room[]) => {
      setRooms(updatedRooms);
    });

    newSocket.on('room_created', (room: Room) => {
      setCurrentRoom(room);
      setGameState('room');
    });

    newSocket.on('room_updated', (room: Room) => {
      setCurrentRoom(room);
    });

    newSocket.on('request_questions', async ({ roomId, grade }) => {
      // Only the first player (host) generates questions
      setCurrentRoom(prev => prev ? { ...prev, status: 'playing' } : null);
      if (newSocket.id === currentRoom?.players[0]?.id || !currentRoom) {
        await generateQuestions(roomId, grade, newSocket);
      }
    });

    newSocket.on('game_started', ({ questions: newQuestions }) => {
      setQuestions(newQuestions);
      setCurrentQuestionIndex(0);
      setGameState('battle');
      setTimeLeft(15);
      setSelectedAnswer(null);
      setIsCorrect(null);
    });

    newSocket.on('player_action', ({ playerId: actionPlayerId, isCorrect: actionIsCorrect, hp, score }) => {
      setCurrentRoom(prev => {
        if (!prev) return prev;
        const newPlayers = [...prev.players];
        let newAi = prev.ai ? { ...prev.ai } : null;

        if (actionPlayerId === 'ai' && newAi) {
          newAi.hp = hp;
          newAi.score = score;
          newAi.hasAnswered = true;
          newAi.isCorrect = actionIsCorrect;
        } else {
          const pIndex = newPlayers.findIndex(p => p.id === actionPlayerId);
          if (pIndex !== -1) {
            newPlayers[pIndex].hp = hp;
            newPlayers[pIndex].score = score;
            newPlayers[pIndex].hasAnswered = true;
            newPlayers[pIndex].isCorrect = actionIsCorrect;
          }
        }

        return { ...prev, players: newPlayers, ai: newAi };
      });
    });

    newSocket.on('next_question', ({ questionIndex }) => {
      setCurrentQuestionIndex(questionIndex);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setTimeLeft(15);
      setCurrentRoom(prev => {
        if (!prev) return prev;
        const newPlayers = prev.players.map(p => ({ ...p, hasAnswered: false, isCorrect: null }));
        const newAi = prev.ai ? { ...prev.ai, hasAnswered: false, isCorrect: null } : null;
        return { ...prev, players: newPlayers, ai: newAi };
      });
    });

    newSocket.on('game_ended', ({ reason, players }) => {
      setGameResult({ reason, players });
      setGameState('result');
    });

    newSocket.on('error', (msg) => {
      toast.error(msg);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const generateQuestions = async (roomId: string, grade: string, activeSocket: Socket) => {
    setIsGenerating(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback to server-side generation if needed, but we do it client-side for now
        // Wait, the instructions say to use process.env.GEMINI_API_KEY
        throw new Error("API key is missing.");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate 10 English multiple choice questions for grade ${grade} students in Vietnam. Focus on vocabulary and grammar units from the Global Success English textbook. Return JSON array of objects: { question: string, options: string[], correctAnswer: string, explanation: string }`,
        config: { responseMimeType: "application/json" }
      });
      
      const generatedQuestions = JSON.parse(response.text || "[]");
      activeSocket.emit('set_questions', { roomId, questions: generatedQuestions });
    } catch (error) {
      console.error("Failed to generate questions:", error);
      toast.error("Lỗi tạo câu hỏi. Vui lòng thử lại.");
      setGameState('lobby');
      setCurrentRoom(null);
    } finally {
      setIsGenerating(false);
    }
  };

  const createRoom = (grade: string, mode: 'ai' | 'pvp', type: '1v1' | '2v2' = '1v1') => {
    if (socket) {
      socket.emit('create_room', { grade, mode, type, playerName });
    }
  };

  const joinRoom = (roomId: string) => {
    if (socket) {
      socket.emit('join_room', { roomId, playerName });
    }
  };

  const toggleReady = () => {
    if (socket && currentRoom) {
      socket.emit('toggle_ready', currentRoom.id);
    }
  };

  const startBattle = () => {
    if (socket && currentRoom && currentRoom.mode === 'ai') {
      socket.emit('start_ai_battle', currentRoom.id);
    }
  };

  const leaveRoom = () => {
    if (socket) {
      socket.emit('leave_room');
    }
    setGameState('lobby');
    setCurrentRoom(null);
  };

  const submitAnswer = (answer: string) => {
    if (selectedAnswer !== null || !currentRoom || !socket) return;
    
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    
    const timeTaken = (15 - timeLeft) * 1000;
    socket.emit('submit_answer', { roomId: currentRoom.id, answer, timeTaken });
  };

  useEffect(() => {
    if (gameState === 'battle' && timeLeft > 0 && selectedAnswer === null) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && selectedAnswer === null) {
      submitAnswer("");
    }
  }, [timeLeft, gameState, selectedAnswer]);

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full animate-ping"></div>
          <Loader2 className="w-16 h-16 md:w-24 md:h-24 text-cyan-400 animate-spin" />
        </div>
        <h2 className="text-xl md:text-3xl font-black italic uppercase mt-8 tracking-widest text-center">Đang thiết lập chiến trường...</h2>
      </div>
    );
  }

  if (gameState === 'lobby') {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6 font-sans">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 uppercase">English Arena</h1>
            <button onClick={() => window.location.href = '/'} className="bg-slate-900 p-2 rounded-xl text-slate-400 hover:text-white"><LogOut className="w-5 h-5" /></button>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rooms.map(room => (
              <div key={room.id} onClick={() => joinRoom(room.id)} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 cursor-pointer hover:border-cyan-500">
                <div className="text-xs font-bold text-slate-500">Grade {room.grade} - {room.mode.toUpperCase()}</div>
                <div className="text-lg font-black italic">{room.id}</div>
                <div className="text-sm text-slate-400 mt-2">{room.players.length} / {room.type === '1v1' ? 2 : 4} Players</div>
              </div>
            ))}
            <button onClick={() => setShowCreateModal(true)} className="bg-blue-600 p-4 rounded-2xl font-black italic text-center">CREATE ROOM</button>
          </div>
          
          {showCreateModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
              <div className="bg-slate-900 p-6 rounded-3xl w-full max-w-sm">
                <h3 className="text-xl font-black italic mb-4">Create Room</h3>
                <select className="w-full bg-slate-800 p-3 rounded-xl mb-4" onChange={(e) => setCreateOptions({...createOptions, grade: e.target.value})}>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                </select>
                <select className="w-full bg-slate-800 p-3 rounded-xl mb-4" onChange={(e) => setCreateOptions({...createOptions, mode: e.target.value as 'ai' | 'pvp'})}>
                  <option value="ai">AI Battle</option>
                  <option value="pvp">PvP</option>
                </select>
                <div className="flex gap-2">
                  <button onClick={() => setShowCreateModal(false)} className="flex-1 bg-slate-800 p-3 rounded-xl">CANCEL</button>
                  <button onClick={() => { createRoom(createOptions.grade, createOptions.mode); setShowCreateModal(false); }} className="flex-1 bg-blue-600 p-3 rounded-xl font-black">CREATE</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (gameState === 'room' && currentRoom) {
    const isMeReady = currentRoom.players.find(p => p.id === socket?.id)?.ready;
    return (
      <div className="min-h-screen bg-slate-950 text-white p-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-slate-900 p-8 rounded-3xl text-center relative">
          <button onClick={leaveRoom} className="absolute top-4 right-4 text-slate-500 hover:text-white">
            <LogOut className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-black italic uppercase mb-8">Arena Lobby #{currentRoom.id}</h2>
          <div className="flex justify-center gap-4 mb-8">
            {currentRoom.players.map((p) => (
              <div key={p.id} className="text-center">
                <div className={cn("w-16 h-16 rounded-full border-4 flex items-center justify-center mb-2", p.ready ? "border-emerald-500" : "border-slate-700")}>
                  <User className={cn("w-8 h-8", p.ready ? "text-emerald-400" : "text-slate-500")} />
                </div>
                <div className="text-xs font-bold">{p.name} {p.id === socket?.id ? '(You)' : ''}</div>
              </div>
            ))}
            {currentRoom.mode === 'ai' && currentRoom.ai && (
               <div className="text-center">
                 <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center mb-2">
                   <Bot className="w-8 h-8 text-emerald-400" />
                 </div>
                 <div className="text-xs font-bold">{currentRoom.ai.name}</div>
               </div>
            )}
          </div>
          {currentRoom.mode === 'ai' ? (
            <button onClick={startBattle} className="w-full bg-white text-black font-black py-4 rounded-2xl">START BATTLE</button>
          ) : (
            <button onClick={toggleReady} className={cn("w-full font-black py-4 rounded-2xl", isMeReady ? "bg-emerald-600" : "bg-white text-black")}>
              {isMeReady ? "READY!" : "I'M READY"}
            </button>
          )}
        </div>
      </div>
    );
  }

  if (gameState === 'battle' && questions.length > 0) {
    const currentQuestion = questions[currentQuestionIndex];
    const player = currentRoom?.players.find(p => p.id === socket?.id) || currentRoom?.players[0];
    const opponent = currentRoom?.mode === 'ai' ? currentRoom.ai : currentRoom?.players.find(p => p.id !== socket?.id);

    return (
      <div className="min-h-screen bg-slate-950 text-white p-4 font-sans flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 px-3 py-1 rounded-lg font-black">{player?.hp} HP</div>
            <div className="font-bold">{player?.name}</div>
          </div>
          <div className="text-cyan-400 font-mono font-black">{timeLeft}s</div>
          <div className="flex items-center gap-2">
            <div className="font-bold">{opponent?.name}</div>
            <div className="bg-red-600 px-3 py-1 rounded-lg font-black">{opponent?.hp} HP</div>
          </div>
        </div>
        <motion.div animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.4 }} className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-8 text-center">{currentQuestion.question}</h3>
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, idx) => (
              <button key={idx} onClick={() => submitAnswer(option)} disabled={selectedAnswer !== null || player?.hasAnswered} className={cn("p-4 rounded-2xl border-2 text-left font-bold", selectedAnswer === option ? (isCorrect ? "border-emerald-500" : "border-red-500") : "border-slate-700")}>
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (gameState === 'result' && currentRoom) {
    const isWin = currentRoom.players.find(p => p.id === socket?.id)?.hp! > 0;
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6 flex items-center justify-center">
        <div className="bg-slate-900 p-12 rounded-3xl text-center max-w-md w-full border border-slate-800">
          <Trophy className={cn("w-20 h-20 mx-auto mb-6", isWin ? "text-yellow-500" : "text-slate-600")} />
          <h2 className={cn("text-4xl font-black italic uppercase mb-2", isWin ? "text-yellow-400" : "text-slate-400")}>
            {isWin ? "VICTORY!" : "DEFEAT"}
          </h2>
          <p className="text-slate-400 mb-8">{gameResult?.reason}</p>
          
          <div className="space-y-4 mb-8 text-left">
            {currentRoom.players.map(p => (
              <div key={p.id} className="bg-slate-800 p-4 rounded-xl flex justify-between items-center">
                <span className="font-bold">{p.name} {p.id === socket?.id ? '(You)' : ''}</span>
                <span className="text-emerald-400 font-mono">{p.score} pts</span>
              </div>
            ))}
            {currentRoom.mode === 'ai' && currentRoom.ai && (
              <div className="bg-slate-800 p-4 rounded-xl flex justify-between items-center">
                <span className="font-bold text-cyan-400">Gemini AI</span>
                <span className="text-emerald-400 font-mono">{currentRoom.ai.score} pts</span>
              </div>
            )}
          </div>

          <button onClick={() => { setGameState('lobby'); setCurrentRoom(null); }} className="w-full bg-white text-black font-black py-4 px-8 rounded-2xl hover:bg-slate-200 transition-colors">
            RETURN TO LOBBY
          </button>
        </div>
      </div>
    );
  }

  return null;
}

