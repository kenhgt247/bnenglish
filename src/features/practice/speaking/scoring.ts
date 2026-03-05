export function normalize(text: string): string {
  return text.toLowerCase().replace(/[.,?!;:'"]/g, '').replace(/\s+/g, ' ').trim();
}

export function similarity(target: string, transcript: string): number {
  const t1 = normalize(target).split(' ');
  const t2 = normalize(transcript).split(' ');
  
  if (t1.length === 0) return 0;
  
  let matches = 0;
  const t2Copy = [...t2];
  
  for (const word of t1) {
    const idx = t2Copy.indexOf(word);
    if (idx !== -1) {
      matches++;
      t2Copy.splice(idx, 1);
    }
  }
  
  const score = (matches / t1.length) * 100;
  return Math.min(100, Math.round(score));
}

export type TokenStatus = 'ok' | 'miss' | 'extra' | 'wrong';

export interface DiffToken {
  token: string;
  status: TokenStatus;
}

export function diffTokens(target: string, transcript: string): DiffToken[] {
  const t1 = normalize(target).split(' ');
  const t2 = normalize(transcript).split(' ');
  
  const result: DiffToken[] = [];
  
  for (let i = 0; i < t1.length; i++) {
    const word1 = t1[i];
    const word2 = t2[i];
    
    if (word1 === word2) {
      result.push({ token: word1, status: 'ok' });
    } else if (!word2) {
      result.push({ token: word1, status: 'miss' });
    } else {
      if (t2.includes(word1)) {
        result.push({ token: word1, status: 'wrong' });
      } else {
        result.push({ token: word1, status: 'miss' });
      }
    }
  }
  
  return result;
}
