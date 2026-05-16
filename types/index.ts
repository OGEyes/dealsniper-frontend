export type WorldId = 'anime' | 'movies' | 'markets' | 'sports' | 'politics' | 'gaming';

export type League = 'anime_only' | 'manga_reader';

export interface World {
  id: WorldId;
  name: string;
  color: string;
  description?: string;
}

export type Cover =
  | { kind: 'art'; glyph: string; from: string; to: string }
  | { kind: 'ticker'; symbol: string; from: string; to: string };

export interface AppEvent {
  id: string;
  worldId: WorldId;
  title: string;
  subtitle?: string;
  cover: Cover;
}

export type QuestionType = 'binary' | 'multi' | 'numeric';

export interface BaseQuestion {
  id: string;
  eventId: string;
  worldId: WorldId;
  text: string;
  flavor?: string;
  type: QuestionType;
  locksAt: number;
  volume: number;
  hot?: boolean;
  league?: League;
}

export interface BinaryQuestion extends BaseQuestion {
  type: 'binary';
  yes: number;
}

export interface MultiQuestion extends BaseQuestion {
  type: 'multi';
  options: string[];
  odds: Record<string, number>;
}

export interface NumericQuestion extends BaseQuestion {
  type: 'numeric';
  range: { min: number; max: number; unit: string };
  consensus: number;
}

export type Question = BinaryQuestion | MultiQuestion | NumericQuestion;

export interface UserPrediction {
  id: string;
  questionId: string;
  answer: string;
  coinsWagered: number;
  payoutMultiplier: number;
  resolved: boolean;
  won?: boolean;
  coinsWon?: number;
  createdAt: number;
}

export interface User {
  username: string;
  avatar: string;
  coins: number;
  xp: number;
  xpForNextLevel: number;
  level: number;
  league: League;
  followedWorlds: WorldId[];
}
