# Hunch (working name)

Mobile prediction game with multiple "worlds" (anime, movies & TV, markets) where users predict outcomes with virtual coins.

> This is the **Week 1-2 foundation** of the project — Expo scaffold, design system, and a working Home feed with mock data. Backend, auth, and the other tabs are stubbed.

## Stack

- Expo SDK 52 + Expo Router (typed routes)
- TypeScript (strict)
- NativeWind v4 (Tailwind for RN)
- Zustand (state)
- Supabase (planned — client stubbed in `lib/supabase.ts`)
- react-native-svg (icons)
- Geist + Geist Mono fonts

## Run it

```bash
npm install
npx expo start
```

Press `i` for iOS sim, `a` for Android, `w` for web.

## What's built

- Design tokens (`lib/theme.ts`) — palette and font families ported from the Hunch mockup
- Reusable components in `components/` — `PredictionCard`, `YesNoPill`, `MultiOption`, `Cover`, `LeagueTag`, `CardFooter`, `Tag`, `Chip`, `CoinChip`, icon set
- Tab navigation (Home, Worlds, My Picks, Leaders, You)
- **Home feed** — filter chips, "Locking soon" horizontal rail, prediction cards, live countdowns
- Prediction detail screen (`app/prediction/[questionId].tsx`) — placeholder layout
- Mock data in `data/mock.ts` (3 worlds, 8 events, 9 questions across all three types)

## What's stubbed

- API integration helpers (`lib/api/{anilist,tmdb,coingecko,finnhub}.ts`) — function shapes only
- Supabase client (`lib/supabase.ts`) — reads env vars, warns if missing
- Other tabs (Worlds, My Picks, Leaders) — placeholder screens
- DB schema lives at `supabase/migrations/0001_init.sql` — paste into the Supabase SQL editor when ready

## Environment

Copy `.env.example` to `.env.local` and fill in:

```
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
EXPO_PUBLIC_TMDB_KEY=
EXPO_PUBLIC_FINNHUB_KEY=
EXPO_PUBLIC_POSTHOG_KEY=
EXPO_PUBLIC_SENTRY_DSN=
```

The Home prototype works with no env vars set.

## Next milestones

1. Auth flow + onboarding (world picker, league select, username)
2. Worlds hub + per-world detail
3. Prediction placement flow (wager slider, payout preview, coin deduction)
4. My Picks (pending / resolved tabs)
5. Leaderboards + XP system
6. Admin resolution panel
