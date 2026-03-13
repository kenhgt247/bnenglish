export type GameType = 'word-matching' | 'sentence-ordering' | 'fill-in-the-blanks';

export interface GameLevel {
  id: number;
  chapterId: number;
  type: GameType;
  title: string;
  difficulty: number; // 1-5
  data: any; // Structure depends on game type
  image?: string; // URL or SVG identifier
}
