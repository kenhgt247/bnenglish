import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface GeneratedWord {
  word: string;
  ipa: string;
  pos: string;
  meaning_vi: string;
  example_en: string;
  example_vi: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

async function withRetry<T>(fn: () => Promise<T>, maxRetries: number = 3): Promise<T> {
  let lastError: any;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      // Check if it's a rate limit error (429)
      const errorMsg = error?.message || "";
      const isRateLimit = errorMsg.includes("429") || errorMsg.includes("RESOURCE_EXHAUSTED") || error?.status === "RESOURCE_EXHAUSTED";
      
      if (isRateLimit) {
        const delay = Math.pow(2, i) * 3000 + Math.random() * 1000;
        console.warn(`Rate limit hit. Retrying in ${Math.round(delay)}ms... (Attempt ${i + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw lastError;
}

export async function generateB1Words(batchSize: number = 50, offset: number = 0): Promise<GeneratedWord[]> {
  return withRetry(async () => {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a list of ${batchSize} English vocabulary words at B1 (Intermediate) level, starting from offset ${offset}. 
      Focus on words used in daily communication and basic work environments.
      Return the result as a JSON array of objects with the following properties:
      - word: the English word
      - ipa: the IPA pronunciation
      - pos: part of speech (n, v, adj, adv, etc.)
      - meaning_vi: Vietnamese meaning
      - example_en: an example sentence in English
      - example_vi: the Vietnamese translation of the example sentence
      
      Ensure the words are distinct and relevant to B1 level.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              ipa: { type: Type.STRING },
              pos: { type: Type.STRING },
              meaning_vi: { type: Type.STRING },
              example_en: { type: Type.STRING },
              example_vi: { type: Type.STRING },
            },
            required: ["word", "ipa", "pos", "meaning_vi", "example_en", "example_vi"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  });
}

export async function generateB2Words(batchSize: number = 50, offset: number = 0): Promise<GeneratedWord[]> {
  return withRetry(async () => {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a list of ${batchSize} English vocabulary words at B2 (Upper Intermediate) level, starting from offset ${offset}. 
      Focus on academic, professional, and complex social vocabulary.
      Return the result as a JSON array of objects with the following properties:
      - word: the English word
      - ipa: the IPA pronunciation
      - pos: part of speech (n, v, adj, adv, etc.)
      - meaning_vi: Vietnamese meaning
      - example_en: an example sentence in English
      - example_vi: the Vietnamese translation of the example sentence
      
      Ensure the words are distinct and relevant to B2 level.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              ipa: { type: Type.STRING },
              pos: { type: Type.STRING },
              meaning_vi: { type: Type.STRING },
              example_en: { type: Type.STRING },
              example_vi: { type: Type.STRING },
            },
            required: ["word", "ipa", "pos", "meaning_vi", "example_en", "example_vi"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  });
}

export async function generateC1C2Words(batchSize: number = 50, offset: number = 0): Promise<GeneratedWord[]> {
  return withRetry(async () => {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a list of ${batchSize} English vocabulary words at C1 (Advanced) and C2 (Proficiency) level, starting from offset ${offset}. 
      Focus on sophisticated, literary, rare, and highly nuanced vocabulary.
      Return the result as a JSON array of objects with the following properties:
      - word: the English word
      - ipa: the IPA pronunciation
      - pos: part of speech (n, v, adj, adv, etc.)
      - meaning_vi: Vietnamese meaning
      - example_en: an example sentence in English
      - example_vi: the Vietnamese translation of the example sentence
      
      Ensure the words are distinct and relevant to C1/C2 level.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              ipa: { type: Type.STRING },
              pos: { type: Type.STRING },
              meaning_vi: { type: Type.STRING },
              example_en: { type: Type.STRING },
              example_vi: { type: Type.STRING },
            },
            required: ["word", "ipa", "pos", "meaning_vi", "example_en", "example_vi"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  });
}

export async function generateA1A2Words(batchSize: number = 50, offset: number = 0): Promise<GeneratedWord[]> {
  return withRetry(async () => {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a list of ${batchSize} English vocabulary words at A1 (Beginner) and A2 (Elementary) level, starting from offset ${offset}. 
      Focus on common, everyday vocabulary used in basic communication.
      Return the result as a JSON array of objects with the following properties:
      - word: the English word
      - ipa: the IPA pronunciation
      - pos: part of speech (n, v, adj, adv, etc.)
      - meaning_vi: Vietnamese meaning
      - example_en: an example sentence in English
      - example_vi: the Vietnamese translation of the example sentence
      
      Ensure the words are distinct and relevant to A1/A2 level.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              ipa: { type: Type.STRING },
              pos: { type: Type.STRING },
              meaning_vi: { type: Type.STRING },
              example_en: { type: Type.STRING },
              example_vi: { type: Type.STRING },
            },
            required: ["word", "ipa", "pos", "meaning_vi", "example_en", "example_vi"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  });
}

export async function generateQuizQuestions(level: string, batchSize: number = 20): Promise<QuizQuestion[]> {
  return withRetry(async () => {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate ${batchSize} multiple choice English quiz questions for ${level} level.
      Return the result as a JSON array of objects with the following properties:
      - question: the question text
      - options: an array of 4 options
      - answer: the correct option
      - explanation: a brief explanation of the correct answer`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              answer: { type: Type.STRING },
              explanation: { type: Type.STRING },
            },
            required: ["question", "options", "answer", "explanation"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  });
}
