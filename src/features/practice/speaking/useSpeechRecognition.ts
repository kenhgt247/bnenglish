import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

export function useSpeechRecognition() {
  const [isSupported, setIsSupported] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = true;
    recog.lang = 'en-US';

    recog.onresult = (event: any) => {
      let currentTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setTranscript(currentTranscript);
    };

    recog.onerror = (event: any) => {
      if (event.error === 'no-speech') {
        toast.error('Không nghe thấy gì, vui lòng thử lại.');
      } else {
        console.error('Speech recognition error', event.error);
        if (event.error === 'not-allowed') {
          toast.error('Vui lòng cấp quyền sử dụng Micro cho trình duyệt.');
        }
      }
      setIsListening(false);
    };

    recog.onend = () => {
      setIsListening(false);
    };

    setRecognition(recog);
  }, []);

  const startListening = useCallback(() => {
    if (recognition) {
      setTranscript('');
      setIsListening(true);
      try {
        recognition.start();
      } catch (e: any) {
        console.error('Speech recognition start error:', e);
        // If it fails because it's already started, we can ignore it
        if (e.name === 'DOMException' && e.message.includes('already started')) {
          return;
        }
        setIsListening(false);
        toast.error('Không thể khởi động nhận diện giọng nói. Vui lòng kiểm tra Micro.');
      }
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  }, [recognition]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
  }, []);

  return { isSupported, isListening, transcript, startListening, stopListening, resetTranscript };
}
