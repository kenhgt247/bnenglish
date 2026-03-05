import { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { Trophy, Users, User, Bot, Swords, Shield, Zap, Heart, Timer, Send, MessageSquare, ChevronRight, Play, Plus, Share2, LogOut, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from "@google/genai";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Player {
  id: string;
  name: string;
  score: number;
  hp: number;
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
  status: 'waiting' | 'playing' | 'finished';
}

export default function ArenaPage() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);
  const [gameState, setGameState] = useState<'lobby' | 'room' | 'battle' | 'result'>('lobby');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [createOptions, setCreateOptions] = useState({ grade: '6', mode: 'ai' as 'ai' | 'pvp', type: '1v1' as '1v1' | '2v2' });

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);

    // Check for room ID in URL
    const urlParams = new URLSearchParams(window.location.search);
    const roomIdFromUrl = urlParams.get('room');
    if (roomIdFromUrl) {
      newSocket.emit("join_room", roomIdFromUrl);
    }

    newSocket.on("update_rooms", (availableRooms: Room[]) => {
      setRooms(availableRooms);
    });

    newSocket.on("room_created", (room: Room) => {
      setCurrentRoom(room);
      setGameState('room');
      // Update URL with room ID
      const url = new URL(window.location.href);
      url.searchParams.set('room', room.id);
      window.history.replaceState({}, '', url.toString());
    });

    newSocket.on("room_updated", (room: Room) => {
      setCurrentRoom(room);
    });

    newSocket.on("request_questions", async ({ roomId, grade }: { roomId: string, grade: string }) => {
      // Only the first player in the room generates the questions to avoid duplicates
      // We check this by seeing if the current player's socket ID matches the first player's ID
      // We need to use a ref or a way to get the latest room state
      // For now, we'll just check if we are in the room
      setIsGenerating(true);
      try {
        const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || "";
        if (!apiKey) {
          throw new Error("API key is missing. Please configure GEMINI_API_KEY.");
        }
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Generate 10 English multiple choice questions for grade ${grade} students based on Vietnamese curriculum. 
          Return JSON array of objects: { question: string, options: string[], correctAnswer: string, explanation: string }`,
          config: { 
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correctAnswer: { type: Type.STRING },
                  explanation: { type: Type.STRING }
                },
                required: ["question", "options", "correctAnswer", "explanation"]
              }
            }
          }
        });
        
        const generatedQuestions = JSON.parse(response.text || "[]");
        newSocket.emit("set_questions", { roomId, questions: generatedQuestions });
      } catch (error) {
        console.error("Failed to generate questions:", error);
        setBattleLog(prev => ["Lỗi khởi tạo trận đấu!", ...prev]);
      } finally {
        setIsGenerating(false);
      }
    });

    newSocket.on("game_started", ({ questions }: { questions: Question[] }) => {
      setQuestions(questions);
      setGameState('battle');
      setCurrentQuestionIndex(0);
      setTimeLeft(15);
    });

    newSocket.on("player_action", ({ playerId, isCorrect, hp, score }) => {
      setCurrentRoom(prev => {
        if (!prev) return null;
        return {
          ...prev,
          players: prev.players.map(p => p.id === playerId ? { ...p, hp, score } : p)
        };
      });
      
      const playerName = currentRoom?.players.find(p => p.id === playerId)?.name || "Player";
      setBattleLog(prev => [`${playerName} ${isCorrect ? 'tấn công chính xác!' : 'bị trúng đòn!'}`, ...prev.slice(0, 4)]);
    });

    newSocket.on("game_ended", ({ reason, players }) => {
      setGameState('result');
      setBattleLog(prev => [reason, ...prev]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const createRoom = (grade: string, mode: 'ai' | 'pvp', type: '1v1' | '2v2' = '1v1') => {
    socket?.emit("create_room", { grade, mode, type });
  };

  const joinRoom = (roomId: string) => {
    socket?.emit("join_room", roomId);
    // Update URL with room ID
    const url = new URL(window.location.href);
    url.searchParams.set('room', roomId);
    window.history.replaceState({}, '', url.toString());
  };

  const leaveRoom = () => {
    socket?.emit("leave_room");
    setGameState('lobby');
    setCurrentRoom(null);
    // Clear room from URL
    const url = new URL(window.location.href);
    url.searchParams.delete('room');
    window.history.replaceState({}, '', url.toString());
  };

  const inviteFriends = () => {
    if (!currentRoom) return;
    const url = new URL(window.location.href);
    url.searchParams.set('room', currentRoom.id);
    navigator.clipboard.writeText(url.toString());
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
    setBattleLog(prev => ["Đã sao chép link mời bạn bè!", ...prev]);
  };

  const startBattle = () => {
    if (currentRoom?.mode === 'ai') {
      socket?.emit("start_ai_battle", currentRoom.id);
    }
  };

  const submitAnswer = (answer: string) => {
    if (selectedAnswer || !currentRoom) return;
    
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    
    socket?.emit("submit_answer", { 
      roomId: currentRoom.id, 
      answer, 
      timeTaken: (15 - timeLeft) * 1000 
    });

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setTimeLeft(15);
      }
    }, 2000);
  };

  useEffect(() => {
    if (gameState === 'battle' && timeLeft > 0 && !selectedAnswer) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !selectedAnswer) {
      submitAnswer(""); // Timeout
    }
  }, [timeLeft, gameState, selectedAnswer]);

  if (gameState === 'lobby') {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6 font-sans selection:bg-cyan-500/30">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-5xl font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase">
                English Arena
              </h1>
              <p className="text-slate-400 font-mono text-sm mt-2 uppercase tracking-widest">Battle for Knowledge • Grade 6-9</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-2xl flex items-center gap-2 text-slate-400 hover:text-white hover:border-red-500/50 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-tighter">Exit</span>
              </button>
              <div className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Weekly Rank</div>
                  <div className="text-lg font-black italic">#12</div>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Swords className="w-4 h-4" /> Available Battles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {rooms.length === 0 ? (
                    <div className="col-span-2 border-2 border-dashed border-slate-800 rounded-3xl p-12 text-center">
                      <p className="text-slate-500 font-medium italic">No active arenas. Create your own!</p>
                    </div>
                  ) : (
                    rooms.map(room => (
                      <motion.div 
                        key={room.id}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="bg-slate-900 border border-slate-800 p-6 rounded-3xl group cursor-pointer"
                        onClick={() => joinRoom(room.id)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <span className="bg-blue-500/10 text-blue-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                            Grade {room.grade}
                          </span>
                          <span className="text-slate-600 font-mono text-xs">#{room.id}</span>
                        </div>
                        <h3 className="text-xl font-black italic mb-2 uppercase group-hover:text-cyan-400 transition-colors">
                          {room.mode === 'ai' ? 'AI Training' : 'PvP Arena'}
                        </h3>
                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            <span>{room.players.length}/{room.type === '1v1' ? 2 : 4}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Shield className="w-4 h-4" />
                            <span>{room.type}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </section>

              <section>
                <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Quick Create
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['6', '7', '8', '9'].map(grade => (
                    <button 
                      key={grade}
                      onClick={() => createRoom(grade, 'ai')}
                      className="bg-slate-900 border border-slate-800 p-4 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all group"
                    >
                      <div className="text-2xl font-black italic mb-1 group-hover:text-cyan-400">Lớp {grade}</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">AI Battle</div>
                    </button>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                  <Zap className="w-24 h-24 text-white fill-white" />
                </div>
                <h3 className="text-2xl font-black italic mb-2 uppercase leading-tight">Custom<br/>Battle Arena</h3>
                <p className="text-blue-100/70 text-sm mb-6 font-medium">Create a custom room to challenge friends or practice with AI.</p>
                <button 
                  onClick={() => setShowCreateModal(true)}
                  className="w-full bg-white text-slate-950 font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors"
                >
                  CREATE CUSTOM ROOM <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Create Room Modal */}
              <AnimatePresence>
                {showCreateModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] max-w-md w-full shadow-2xl"
                    >
                      <h3 className="text-2xl font-black italic uppercase mb-6">Create Arena</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Select Grade</label>
                          <div className="grid grid-cols-4 gap-2">
                            {['6', '7', '8', '9'].map(g => (
                              <button 
                                key={g}
                                onClick={() => setCreateOptions(prev => ({ ...prev, grade: g }))}
                                className={cn(
                                  "py-3 rounded-xl font-black italic transition-all",
                                  createOptions.grade === g ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                                )}
                              >
                                {g}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Battle Mode</label>
                          <div className="grid grid-cols-2 gap-2">
                            <button 
                              onClick={() => setCreateOptions(prev => ({ ...prev, mode: 'ai' }))}
                              className={cn(
                                "py-4 rounded-xl font-black italic flex items-center justify-center gap-2 transition-all",
                                createOptions.mode === 'ai' ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                              )}
                            >
                              <Bot className="w-4 h-4" /> AI
                            </button>
                            <button 
                              onClick={() => setCreateOptions(prev => ({ ...prev, mode: 'pvp' }))}
                              className={cn(
                                "py-4 rounded-xl font-black italic flex items-center justify-center gap-2 transition-all",
                                createOptions.mode === 'pvp' ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                              )}
                            >
                              <Swords className="w-4 h-4" /> PVP
                            </button>
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button 
                            onClick={() => setShowCreateModal(false)}
                            className="flex-1 bg-slate-800 text-slate-400 font-black py-4 rounded-2xl hover:bg-slate-700 transition-colors"
                          >
                            CANCEL
                          </button>
                          <button 
                            onClick={() => {
                              createRoom(createOptions.grade, createOptions.mode, createOptions.type);
                              setShowCreateModal(false);
                            }}
                            className="flex-1 bg-white text-slate-950 font-black py-4 rounded-2xl hover:bg-cyan-50 transition-colors"
                          >
                            CREATE
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem]">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Weekly Top Striker</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-black italic text-sm",
                        i === 1 ? "bg-yellow-500 text-slate-950" : "bg-slate-800 text-slate-400"
                      )}>{i}</div>
                      <div className="flex-1">
                        <div className="text-sm font-bold">Player_{i}234</div>
                        <div className="text-[10px] text-slate-500 uppercase font-bold">Level 42 • 12.4k XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'room' && currentRoom) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
          
          <div className="mb-8">
            <div className="inline-block bg-blue-500/10 text-blue-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Arena Lobby • #{currentRoom.id}
            </div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">
              {currentRoom.mode === 'ai' ? 'AI Training Session' : 'Waiting for Players'}
            </h2>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            {currentRoom.players.map(p => (
              <div key={p.id} className="text-center group">
                <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center mb-4 group-hover:border-cyan-500 transition-colors">
                  <User className="w-12 h-12 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="text-sm font-black italic uppercase">{p.name}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Ready</div>
              </div>
            ))}
            {currentRoom.mode === 'ai' && (
              <div className="text-center opacity-50">
                <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-700 border-dashed flex items-center justify-center mb-4">
                  <Bot className="w-12 h-12 text-slate-600" />
                </div>
                <div className="text-sm font-black italic uppercase">Gemini AI</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Opponent</div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {showCopySuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-emerald-500/20 text-emerald-400 text-xs font-bold py-2 rounded-xl border border-emerald-500/30 mb-2"
                >
                  Link copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={startBattle}
              disabled={isGenerating}
              className="bg-white text-slate-950 font-black py-5 rounded-3xl text-xl uppercase tracking-tighter hover:bg-cyan-50 transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isGenerating ? (
                <>GENERATING BATTLE... <Loader2 className="w-6 h-6 animate-spin" /></>
              ) : (
                <>START BATTLE <Zap className="w-6 h-6 fill-current" /></>
              )}
            </button>
            <div className="flex gap-4">
              <button 
                onClick={inviteFriends}
                className="flex-1 bg-slate-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors"
              >
                <Share2 className="w-4 h-4" /> INVITE FRIENDS
              </button>
              <button 
                onClick={leaveRoom}
                className="bg-slate-800 text-red-400 font-bold p-4 rounded-2xl hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'battle' && questions.length > 0) {
    const currentQuestion = questions[currentQuestionIndex];
    const player = currentRoom?.players[0];
    const opponent = currentRoom?.mode === 'ai' ? { name: 'Gemini AI', hp: 100, score: 0 } : currentRoom?.players[1];

    return (
      <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 font-sans overflow-hidden">
        {/* Battle Header */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 mb-12">
          {/* Player Stats */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black italic text-xl">P1</div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Player One</div>
                  <div className="text-xl font-black italic uppercase tracking-tighter">{player?.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black text-slate-500 uppercase">Score</div>
                <div className="text-2xl font-black italic text-cyan-400">{player?.score}</div>
              </div>
            </div>
            <div className="relative h-4 bg-slate-900 rounded-full border border-slate-800 overflow-hidden">
              <motion.div 
                initial={{ width: '100%' }}
                animate={{ width: `${player?.hp}%` }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-widest mix-blend-difference">
                HP {player?.hp}/100
              </div>
            </div>
          </div>

          {/* Opponent Stats */}
          <div className="space-y-4 text-right">
            <div className="flex justify-between items-end flex-row-reverse">
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-black italic text-xl">
                  {currentRoom?.mode === 'ai' ? <Bot className="w-6 h-6" /> : 'P2'}
                </div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Opponent</div>
                  <div className="text-xl font-black italic uppercase tracking-tighter">{opponent?.name}</div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black text-slate-500 uppercase">Score</div>
                <div className="text-2xl font-black italic text-red-500">{opponent?.score}</div>
              </div>
            </div>
            <div className="relative h-4 bg-slate-900 rounded-full border border-slate-800 overflow-hidden">
              <motion.div 
                initial={{ width: '100%' }}
                animate={{ width: `${opponent?.hp}%` }}
                className="absolute top-0 right-0 h-full bg-gradient-to-l from-red-500 to-orange-400"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-widest mix-blend-difference">
                HP {opponent?.hp}/100
              </div>
            </div>
          </div>
        </div>

        {/* Main Battle Area */}
        <div className="max-w-4xl mx-auto relative">
          {/* Question Card */}
          <motion.div 
            key={currentQuestionIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
              <motion.div 
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 15, ease: 'linear' }}
                className="h-full bg-cyan-500"
              />
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Question {currentQuestionIndex + 1}/10</span>
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-black text-xl">
                <Timer className="w-5 h-5" /> {timeLeft}s
              </div>
            </div>

            <h3 className="text-3xl font-bold leading-tight mb-12 text-center">
              {currentQuestion.question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => submitAnswer(option)}
                  disabled={!!selectedAnswer}
                  className={cn(
                    "p-6 rounded-2xl border-2 text-left font-bold transition-all flex items-center gap-4",
                    selectedAnswer === option 
                      ? (isCorrect ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-red-500/20 border-red-500 text-red-400")
                      : (selectedAnswer && option === currentQuestion.correctAnswer ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-slate-800 border-slate-700 hover:border-slate-500")
                  )}
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-black uppercase">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  {option}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Battle Log */}
          <div className="mt-8 flex justify-center">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl px-6 py-3 flex items-center gap-4">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-r border-slate-800 pr-4">Battle Log</div>
              <div className="flex gap-4 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {battleLog.map((log, i) => (
                    <motion.span 
                      key={log + i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-xs font-bold italic text-slate-400 whitespace-nowrap"
                    >
                      {log}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'result' && currentRoom) {
    const winner = [...currentRoom.players].sort((a, b) => b.score - a.score)[0];
    
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-[3rem] p-12 text-center"
        >
          <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy className="w-12 h-12 text-yellow-500" />
          </div>
          
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-2">Battle Result</h2>
          <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-12">Final Standings</p>

          <div className="space-y-4 mb-12">
            {[...currentRoom.players].sort((a, b) => b.score - a.score).map((p, i) => (
              <div key={p.id} className={cn(
                "p-6 rounded-3xl flex items-center justify-between",
                i === 0 ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50" : "bg-slate-800/50 border border-slate-700"
              )}>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-black italic text-slate-500">#{i + 1}</div>
                  <div className="text-left">
                    <div className="font-black uppercase italic">{p.name}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Level Up +250 XP</div>
                  </div>
                </div>
                <div className="text-2xl font-black italic text-cyan-400">{p.score}</div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setGameState('lobby')}
            className="w-full bg-white text-slate-950 font-black py-5 rounded-3xl text-xl uppercase tracking-tighter hover:bg-cyan-50 transition-colors"
          >
            RETURN TO LOBBY
          </button>
        </motion.div>
      </div>
    );
  }

  return null;
}
