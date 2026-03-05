import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Sparkles, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sendMessageToTeacher, ChatMessage } from '../services/aiTeacher';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function AITeacherPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Chào em! Thầy là giáo viên tiếng Anh AI của em. Thầy có thể giúp em học từ vựng, ngữ pháp, luyện hội thoại hoặc giải bài tập từ lớp 6 đến lớp 9. Em cần thầy giúp gì hôm nay nào? 😊'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const response = await sendMessageToTeacher(userMessage, history);
      setMessages(prev => [...prev, { role: 'model', text: response || 'Thầy xin lỗi, có chút trục trặc kỹ thuật. Em thử lại nhé!' }]);
    } catch (error) {
      console.error('AI Teacher Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Thầy xin lỗi, hiện tại thầy không thể trả lời. Em hãy kiểm tra kết nối mạng hoặc thử lại sau nhé!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm('Em có chắc muốn xóa toàn bộ cuộc trò chuyện này không?')) {
      setMessages([
        {
          role: 'model',
          text: 'Chào em! Thầy đã sẵn sàng bắt đầu bài học mới. Em muốn học gì nào?'
        }
      ]);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="font-bold text-slate-800">Giáo Viên Tiếng Anh AI</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-slate-500 font-medium">Đang trực tuyến</span>
            </div>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Xóa cuộc trò chuyện"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-4 max-w-[85%]",
              message.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center",
              message.role === 'user' ? "bg-blue-600" : "bg-white border border-slate-200"
            )}>
              {message.role === 'user' ? (
                <User className="w-5 h-5 text-white" />
              ) : (
                <Bot className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div className={cn(
              "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
              message.role === 'user' 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
            )}>
              <div className="prose prose-sm max-w-none prose-slate">
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4 mr-auto max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
              <Bot className="w-5 h-5 text-blue-600" />
            </div>
            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Nhập câu hỏi hoặc bài tập của em tại đây..."
            className="flex-1 bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-3 rounded-xl transition-all shadow-sm shadow-blue-200"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3" />
          Thầy AI có thể giúp em học tốt hơn mỗi ngày!
        </p>
      </div>
    </div>
  );
}
