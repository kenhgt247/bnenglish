import { Word } from '../../../types';

export interface ListeningQuestion {
  promptText: string;
  choices: string[];
  correctIndex: number;
  type: 'word' | 'sentence';
}

export function generateListeningQuestions(words: Word[], count: number = 10): ListeningQuestion[] {
  const questions: ListeningQuestion[] = [];
  const shuffledWords = [...words].sort(() => 0.5 - Math.random()).slice(0, count);

  for (const word of shuffledWords) {
    const type = Math.random() > 0.5 && word.example_en ? 'sentence' : 'word';
    const promptText = type === 'sentence' ? word.example_en! : word.word;
    const correctChoice = type === 'sentence' ? word.example_vi! : word.meaning_vi;
    
    const otherChoices = words
      .filter(w => w.id !== word.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => type === 'sentence' ? (w.example_vi || w.meaning_vi) : w.meaning_vi);
      
    const choices = [correctChoice, ...otherChoices].sort(() => 0.5 - Math.random());
    const correctIndex = choices.indexOf(correctChoice);

    questions.push({
      promptText,
      choices,
      correctIndex,
      type
    });
  }

  return questions;
}
