import { GoogleGenAI, Type } from "@google/genai";
import { GameLevel, GameType } from "../types/game";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function generateGameLevels(
  topic: string,
  count: number,
  gameType: GameType
): Promise<GameLevel[]> {
  const prompt = `Generate ${count} game levels for a language learning game about "${topic}".
  The game type must be "${gameType}".
  Return the result as a JSON array of objects conforming to the GameLevel interface.
  
  Interface:
  {
    id: number;
    chapterId: number;
    type: "${gameType}";
    title: string;
    difficulty: number; // 1-5
    data: any; // Structure depends on game type
    image?: string;
  }
  
  For "sentence-ordering", data should be { sentence: string[] }.
  For "fill-in-the-blanks", data should be { sentence: string, blank: string, options: string[] }.
  For "word-matching", data should be { pairs: { word: string, translation: string }[] }.
  
  Ensure the difficulty increases from 1 to 5.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          required: ["id", "chapterId", "type", "title", "difficulty", "data"],
          properties: {
            id: { type: Type.INTEGER },
            chapterId: { type: Type.INTEGER },
            type: { type: Type.STRING },
            title: { type: Type.STRING },
            difficulty: { type: Type.INTEGER },
            data: {
              type: Type.OBJECT,
              properties: {
                pairs: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      word: { type: Type.STRING },
                      translation: { type: Type.STRING },
                    },
                  },
                },
                sentence: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                blank: { type: Type.STRING },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
              },
            },
            image: { type: Type.STRING },
          },
        },
      },
    },
  });

  if (!response.text) {
    throw new Error("Failed to generate game levels");
  }

  return JSON.parse(response.text) as GameLevel[];
}
