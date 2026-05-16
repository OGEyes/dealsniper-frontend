import type { World, AppEvent, Question, User } from '@/types';

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;
const now = Date.now();

export const MOCK_USER: User = {
  username: 'dr_called_it',
  avatar: '🦊',
  coins: 3247,
  xp: 1340,
  xpForNextLevel: 1850,
  level: 11,
  league: 'anime_only',
  followedWorlds: ['anime', 'movies', 'markets'],
};

export const WORLDS: World[] = [
  { id: 'anime', name: 'Anime', color: '#ff5277', description: 'Weekly episodes, MAL scores, league play' },
  { id: 'movies', name: 'Movies & TV', color: '#f5b500', description: 'Box office, ratings, renewals' },
  { id: 'markets', name: 'Markets', color: '#22c55e', description: 'Stocks & crypto, daily and weekly' },
  { id: 'sports', name: 'Sports', color: '#3b82f6', description: 'Coming soon' },
  { id: 'politics', name: 'Politics', color: '#a855f7', description: 'Coming soon' },
  { id: 'gaming', name: 'Gaming', color: '#06b6d4', description: 'Coming soon' },
];

export const EVENTS: AppEvent[] = [
  {
    id: 'ev_jjk',
    worldId: 'anime',
    title: 'Jujutsu Kaisen S3 · Ep 7',
    cover: { kind: 'art', glyph: '呪', from: '#7c3aed', to: '#ef4444' },
  },
  {
    id: 'ev_op',
    worldId: 'anime',
    title: 'One Piece · Ep 1126',
    cover: { kind: 'art', glyph: '海', from: '#0ea5e9', to: '#facc15' },
  },
  {
    id: 'ev_dandadan',
    worldId: 'anime',
    title: 'Dandadan · Ep 9',
    cover: { kind: 'art', glyph: '幽', from: '#ec4899', to: '#a855f7' },
  },
  {
    id: 'ev_dune',
    worldId: 'movies',
    title: 'Dune: Part Three',
    cover: { kind: 'art', glyph: '砂', from: '#f59e0b', to: '#7c2d12' },
  },
  {
    id: 'ev_severance',
    worldId: 'movies',
    title: 'Severance S3',
    cover: { kind: 'art', glyph: 'S', from: '#0c4a6e', to: '#06b6d4' },
  },
  {
    id: 'ev_nvda',
    worldId: 'markets',
    title: 'NVIDIA · NVDA',
    cover: { kind: 'ticker', symbol: 'NV', from: '#22c55e', to: '#064e3b' },
  },
  {
    id: 'ev_btc',
    worldId: 'markets',
    title: 'Bitcoin · BTC',
    cover: { kind: 'ticker', symbol: '₿', from: '#f59e0b', to: '#7c2d12' },
  },
  {
    id: 'ev_tsla',
    worldId: 'markets',
    title: 'Tesla · TSLA',
    cover: { kind: 'ticker', symbol: 'TS', from: '#ef4444', to: '#450a0a' },
  },
];

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    eventId: 'ev_jjk',
    worldId: 'anime',
    text: 'Will Gojo appear in the next episode?',
    flavor: 'Last week\'s post-credits hinted strongly at a flashback arc.',
    type: 'binary',
    yes: 0.67,
    locksAt: now + 4 * HOUR,
    volume: 84320,
    hot: true,
    league: 'anime_only',
  },
  {
    id: 'q2',
    eventId: 'ev_btc',
    worldId: 'markets',
    text: 'Will BTC close above $98k today?',
    type: 'binary',
    yes: 0.42,
    locksAt: now + 2 * HOUR,
    volume: 152100,
  },
  {
    id: 'q3',
    eventId: 'ev_nvda',
    worldId: 'markets',
    text: 'Will NVDA close green today?',
    type: 'binary',
    yes: 0.58,
    locksAt: now + 90 * 60 * 1000,
    volume: 67500,
    hot: true,
  },
  {
    id: 'q4',
    eventId: 'ev_dandadan',
    worldId: 'anime',
    text: 'Will this episode score 8.5+ on MAL within 24h?',
    type: 'binary',
    yes: 0.71,
    locksAt: now + 11 * HOUR,
    volume: 21430,
  },
  {
    id: 'q5',
    eventId: 'ev_op',
    worldId: 'anime',
    text: 'How many manga chapters will be covered in Ep 1126?',
    type: 'multi',
    options: ['1 chapter', '1.5 chapters', '2 chapters', '2+ chapters'],
    odds: { '1 chapter': 0.18, '1.5 chapters': 0.46, '2 chapters': 0.28, '2+ chapters': 0.08 },
    locksAt: now + 18 * HOUR,
    volume: 12800,
    league: 'manga_reader',
  },
  {
    id: 'q6',
    eventId: 'ev_dune',
    worldId: 'movies',
    text: 'Will Dune: Part Three open #1 at the box office?',
    type: 'binary',
    yes: 0.83,
    locksAt: now + 5 * DAY,
    volume: 245000,
    hot: true,
  },
  {
    id: 'q7',
    eventId: 'ev_tsla',
    worldId: 'markets',
    text: 'Where will TSLA close Friday?',
    type: 'numeric',
    range: { min: 220, max: 280, unit: '$' },
    consensus: 247,
    locksAt: now + 3 * DAY,
    volume: 38200,
  },
  {
    id: 'q8',
    eventId: 'ev_severance',
    worldId: 'movies',
    text: 'Will Severance get renewed for S4 within 30 days of finale?',
    type: 'binary',
    yes: 0.62,
    locksAt: now + 12 * DAY,
    volume: 18900,
  },
  {
    id: 'q9',
    eventId: 'ev_jjk',
    worldId: 'anime',
    text: 'Will the OP/ED change before the season ends?',
    type: 'binary',
    yes: 0.39,
    locksAt: now + 20 * DAY,
    volume: 9400,
    league: 'anime_only',
  },
];

export const MY_PREDICTIONS = [
  { id: 'p1', questionId: 'q1', answer: 'Yes', coinsWagered: 200, payoutMultiplier: 1.9, resolved: false, createdAt: now - 2 * HOUR },
  { id: 'p2', questionId: 'q3', answer: 'Yes', coinsWagered: 150, payoutMultiplier: 1.9, resolved: false, createdAt: now - 1 * HOUR },
];
