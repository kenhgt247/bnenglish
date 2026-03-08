import { useState, useEffect, useRef } from 'react';
import { Trophy, Users, User, Bot, Swords, Shield, Zap, Heart, Timer, LogOut, Loader2, CheckCircle2, Share2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAuthStore } from '../store/useAuthStore';
import { db } from '../lib/firebase';
import { collection, doc, setDoc, onSnapshot, updateDoc, deleteDoc, query, where, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

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
  const [rooms, setRooms] = useState<Room[]>([]);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);
  const currentRoomRef = useRef<Room | null>(null);
  const [gameState, setGameState] = useState<'lobby' | 'room' | 'battle' | 'result'>('lobby');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createOptions, setCreateOptions] = useState({ grade: '6', mode: 'ai' as 'ai' | 'pvp', type: '1v1' as '1v1' | '2v2' });
  const [shake, setShake] = useState(false);
  const [gameResult, setGameResult] = useState<{ reason: string, players: Player[] } | null>(null);
  const aiTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [guestId] = useState(() => `guest_${Math.random().toString(36).substring(2, 8)}`);
  const playerId = user?.uid || guestId;
  const playerName = profile?.displayName || user?.email || `Guest ${playerId.substring(6, 10)}`;

  useEffect(() => {
    currentRoomRef.current = currentRoom;
  }, [currentRoom]);

  // Listen to available rooms
  useEffect(() => {
    const q = query(collection(db, 'arena_rooms'), where('status', '==', 'waiting'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const availableRooms: Room[] = [];
      snapshot.forEach((doc) => {
        const room = { id: doc.id, ...doc.data() } as Room;
        if (room.mode === 'pvp') {
          availableRooms.push(room);
        }
      });
      setRooms(availableRooms);
    }, (error) => {
      console.error("Error fetching rooms:", error);
      if (error.code === 'permission-denied') {
        toast.error("Không có quyền truy cập Đấu trường. Vui lòng đăng nhập.");
      }
    });

    return () => unsubscribe();
  }, []);

  // Listen to current room
  useEffect(() => {
    if (!currentRoom?.id) return;

    const unsubscribe = onSnapshot(doc(db, 'arena_rooms', currentRoom.id), async (docSnap) => {
      if (docSnap.exists()) {
        const roomData = { id: docSnap.id, ...docSnap.data() } as Room;
        setCurrentRoom(roomData);

        if (roomData.status === 'playing' && gameState !== 'battle') {
          if (roomData.questions && roomData.questions.length > 0) {
            setQuestions(roomData.questions);
            setGameState('battle');
            setCurrentQuestionIndex(roomData.currentQuestionIndex || 0);
            setTimeLeft(15);
            setBattleLog([]);
          } else if (roomData.players[0].id === playerId && !isGenerating) {
            // Host generates questions
            generateQuestions(roomData.id, roomData.grade);
          }
        } else if (roomData.status === 'finished' && gameState !== 'result') {
          setGameResult(roomData.gameResult || null);
          setGameState('result');
        } else if (roomData.status === 'playing' && gameState === 'battle') {
           // Handle next question
           if (roomData.currentQuestionIndex !== undefined && roomData.currentQuestionIndex !== currentQuestionIndex) {
             setCurrentQuestionIndex(roomData.currentQuestionIndex);
             setSelectedAnswer(null);
             setIsCorrect(null);
             setTimeLeft(15);
           }
        }
      } else {
        // Room deleted
        if (gameState !== 'lobby') {
          setGameState('lobby');
          setCurrentRoom(null);
          toast.error("Phòng đã bị đóng.");
        }
      }
    }, (error) => {
      console.error("Error fetching current room:", error);
      if (error.code === 'permission-denied') {
        toast.error("Mất kết nối với phòng đấu. Vui lòng thử lại.");
        setGameState('lobby');
        setCurrentRoom(null);
      }
    });

    return () => unsubscribe();
  }, [currentRoom?.id, gameState, currentQuestionIndex, playerId, isGenerating]);

  // AI Logic
  useEffect(() => {
    if (gameState === 'battle' && currentRoom?.mode === 'ai' && currentRoom.status === 'playing') {
      const room = currentRoom;
      if (room.ai && !room.ai.hasAnswered && room.currentQuestionIndex === currentQuestionIndex) {
        if (!aiTimerRef.current) {
          const aiDelay = Math.floor(Math.random() * 5000) + 3000;
          aiTimerRef.current = setTimeout(() => {
            handleAIAnswer(room);
            aiTimerRef.current = null;
          }, aiDelay);
        }
      }
    }
    return () => {
      if (aiTimerRef.current) {
        clearTimeout(aiTimerRef.current);
        aiTimerRef.current = null;
      }
    };
  }, [gameState, currentRoom, currentQuestionIndex]);

  const handleAIAnswer = async (room: Room) => {
    if (!room.questions) return;
    const isCorrect = Math.random() < 0.7;
    const currentQuestion = room.questions[room.currentQuestionIndex || 0];
    const answer = isCorrect ? currentQuestion.correctAnswer : "wrong_answer";
    
    // Update AI state
    const newAi = { ...room.ai!, hasAnswered: true, isCorrect };
    let newPlayers = [...room.players];
    
    if (isCorrect) {
      newAi.score += 15;
      newPlayers = newPlayers.map(p => ({ ...p, hp: Math.max(0, p.hp - 15) }));
    } else {
      newAi.hp = Math.max(0, newAi.hp - 10);
      newPlayers = newPlayers.map(p => ({ ...p, score: p.score + 10 }));
    }

    await updateDoc(doc(db, 'arena_rooms', room.id), {
      ai: newAi,
      players: newPlayers
    });

    checkRoundEnd({ ...room, ai: newAi, players: newPlayers });
  };

  const generateQuestions = async (roomId: string, grade: string) => {
    setIsGenerating(true);
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("API key is missing.");
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate 10 English multiple choice questions for grade ${grade} students in Vietnam. Focus on vocabulary and grammar units from the Global Success English textbook. Return JSON array of objects: { question: string, options: string[], correctAnswer: string, explanation: string }`,
        config: { responseMimeType: "application/json" }
      });
      
      const generatedQuestions = JSON.parse(response.text || "[]");
      await updateDoc(doc(db, 'arena_rooms', roomId), {
        questions: generatedQuestions,
        currentQuestionIndex: 0
      });
    } catch (error) {
      console.error("Failed to generate questions:", error);
      toast.error("Lỗi tạo câu hỏi. Vui lòng thử lại.");
      await deleteDoc(doc(db, 'arena_rooms', roomId));
      setGameState('lobby');
      setCurrentRoom(null);
    } finally {
      setIsGenerating(false);
    }
  };

  const createRoom = async (grade: string, mode: 'ai' | 'pvp', type: '1v1' | '2v2' = '1v1') => {
    const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newRoom: Room = {
      id: roomId,
      grade,
      mode,
      type,
      players: [{ id: playerId, name: playerName, score: 0, hp: 100, ready: mode === 'ai', hasAnswered: false }],
      ai: mode === 'ai' ? { id: 'ai', name: 'Gemini AI', hp: 100, score: 0, hasAnswered: false } : null,
      status: 'waiting',
      createdAt: Date.now()
    };

    await setDoc(doc(db, 'arena_rooms', roomId), newRoom);
    setCurrentRoom(newRoom);
    setGameState('room');
  };

  const joinRoom = async (roomId: string) => {
    const roomRef = doc(db, 'arena_rooms', roomId);
    const roomSnap = await getDoc(roomRef);
    if (roomSnap.exists()) {
      const room = roomSnap.data() as Room;
      
      const existingPlayer = room.players.find(p => p.id === playerId);
      if (existingPlayer) {
        setCurrentRoom(room);
        setGameState(room.status === 'playing' ? 'battle' : 'room');
        return;
      }

      if (room.status === 'waiting' && room.mode === 'pvp' && room.players.length < (room.type === '1v1' ? 2 : 4)) {
        const newPlayers = [...room.players, { id: playerId, name: playerName, score: 0, hp: 100, ready: false, hasAnswered: false }];
        await updateDoc(roomRef, { players: newPlayers });
        setCurrentRoom({ ...room, players: newPlayers });
        setGameState('room');
      } else {
        toast.error("Phòng đã đầy hoặc đang chơi.");
      }
    } else {
      toast.error("Phòng không tồn tại.");
    }
  };

  const toggleReady = async () => {
    if (!currentRoom) return;
    const roomRef = doc(db, 'arena_rooms', currentRoom.id);
    const newPlayers = currentRoom.players.map(p => p.id === playerId ? { ...p, ready: !p.ready } : p);
    
    const allReady = newPlayers.every(p => p.ready);
    const isFull = newPlayers.length >= (currentRoom.type === '1v1' ? 2 : 4);
    
    if (allReady && isFull) {
      await updateDoc(roomRef, { players: newPlayers, status: 'playing' });
    } else {
      await updateDoc(roomRef, { players: newPlayers });
    }
  };

  const startBattle = async () => {
    if (currentRoom && currentRoom.mode === 'ai') {
      await updateDoc(doc(db, 'arena_rooms', currentRoom.id), { status: 'playing' });
    }
  };

  const leaveRoom = async () => {
    if (currentRoom) {
      const roomRef = doc(db, 'arena_rooms', currentRoom.id);
      const newPlayers = currentRoom.players.filter(p => p.id !== playerId);
      if (newPlayers.length === 0) {
        await deleteDoc(roomRef);
      } else {
        await updateDoc(roomRef, { players: newPlayers });
      }
    }
    setGameState('lobby');
    setCurrentRoom(null);
  };

  const submitAnswer = async (answer: string) => {
    if (selectedAnswer !== null || !currentRoom || !currentRoom.questions) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentRoom.questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    
    const timeTaken = (15 - timeLeft) * 1000;
    
    // Update local player state
    let newPlayers = [...currentRoom.players];
    let newAi = currentRoom.ai ? { ...currentRoom.ai } : null;
    
    const playerIndex = newPlayers.findIndex(p => p.id === playerId);
    if (playerIndex === -1) return;
    
    newPlayers[playerIndex].hasAnswered = true;
    newPlayers[playerIndex].isCorrect = correct;
    
    if (correct) {
      newPlayers[playerIndex].score += Math.max(10, 20 - Math.floor(timeTaken / 1000));
      if (currentRoom.mode === 'ai' && newAi) {
        newAi.hp = Math.max(0, newAi.hp - 15);
      } else {
        newPlayers = newPlayers.map(p => p.id !== playerId ? { ...p, hp: Math.max(0, p.hp - 15) } : p);
      }
    } else {
      newPlayers[playerIndex].hp = Math.max(0, newPlayers[playerIndex].hp - 10);
      if (currentRoom.mode === 'ai' && newAi) {
        newAi.score += 10;
      } else {
        newPlayers = newPlayers.map(p => p.id !== playerId ? { ...p, score: p.score + 10 } : p);
      }
    }

    const updatedRoom = { ...currentRoom, players: newPlayers, ai: newAi };
    await updateDoc(doc(db, 'arena_rooms', currentRoom.id), {
      players: newPlayers,
      ai: newAi
    });

    checkRoundEnd(updatedRoom);
  };

  const checkRoundEnd = async (room: Room) => {
    // Only host checks round end to avoid duplicate updates
    if (room.players[0].id !== playerId) return;

    const anyDead = room.players.some(p => p.hp <= 0) || (room.mode === 'ai' && room.ai && room.ai.hp <= 0);
    if (anyDead) {
      await updateDoc(doc(db, 'arena_rooms', room.id), {
        status: 'finished',
        gameResult: { reason: "K.O.", players: room.players }
      });
      return;
    }

    const allPlayersAnswered = room.players.every(p => p.hasAnswered);
    const aiAnswered = room.mode === 'pvp' || (room.ai && room.ai.hasAnswered);
    
    if (allPlayersAnswered && aiAnswered) {
      setTimeout(async () => {
        const resetPlayers = room.players.map(p => ({ ...p, hasAnswered: false, isCorrect: null }));
        const resetAi = room.ai ? { ...room.ai, hasAnswered: false, isCorrect: null } : null;
        const nextIndex = (room.currentQuestionIndex || 0) + 1;
        
        if (room.questions && nextIndex >= room.questions.length) {
          await updateDoc(doc(db, 'arena_rooms', room.id), {
            status: 'finished',
            gameResult: { reason: "Hết câu hỏi", players: resetPlayers }
          });
        } else {
          await updateDoc(doc(db, 'arena_rooms', room.id), {
            players: resetPlayers,
            ai: resetAi,
            currentQuestionIndex: nextIndex
          });
        }
      }, 2000);
    }
  };

  useEffect(() => {
    if (gameState === 'battle' && timeLeft > 0 && selectedAnswer === null) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && selectedAnswer === null) {
      submitAnswer("");
    }
  }, [timeLeft, gameState, selectedAnswer]);

  // Clean up empty rooms on unmount
  useEffect(() => {
    return () => {
      if (currentRoomRef.current && currentRoomRef.current.status === 'waiting') {
        const roomRef = doc(db, 'arena_rooms', currentRoomRef.current.id);
        getDoc(roomRef).then(snap => {
           if(snap.exists()) {
             const room = snap.data() as Room;
             const newPlayers = room.players.filter(p => p.id !== playerId);
             if (newPlayers.length === 0) {
               deleteDoc(roomRef);
             } else {
               updateDoc(roomRef, { players: newPlayers });
             }
           }
        });
      }
    };
  }, []);

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
    const isMeReady = currentRoom.players.find(p => p.id === playerId)?.ready;
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
                <div className="text-xs font-bold">{p.name}</div>
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
    const player = currentRoom?.players.find(p => p.id === playerId) || currentRoom?.players[0];
    const opponent = currentRoom?.mode === 'ai' ? currentRoom.ai : currentRoom?.players.find(p => p.id !== playerId);

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
    const isWin = currentRoom.players.find(p => p.id === playerId)?.hp! > 0;
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
                <span className="font-bold">{p.name}</span>
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
