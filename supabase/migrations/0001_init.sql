-- Hunch — initial schema
-- Run this in the Supabase SQL editor once your project is provisioned.

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  avatar_url text,
  coins integer not null default 1000,
  xp integer not null default 0,
  level integer not null default 1,
  anime_league text default 'anime_only' check (anime_league in ('anime_only', 'manga_reader')),
  followed_worlds text[] default array['anime', 'movies', 'markets'],
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table worlds (
  id text primary key,
  name text not null,
  icon text,
  description text,
  is_live boolean default true
);

create table events (
  id uuid primary key default gen_random_uuid(),
  world_id text references worlds(id) not null,
  external_id text,
  title text not null,
  subtitle text,
  image_url text,
  metadata jsonb,
  starts_at timestamptz,
  ends_at timestamptz,
  status text default 'upcoming' check (status in ('upcoming', 'active', 'completed')),
  created_at timestamptz default now()
);
create index events_world_status_idx on events(world_id, status);

create table questions (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id) on delete cascade,
  world_id text references worlds(id) not null,
  text text not null,
  question_type text not null check (question_type in ('binary', 'multi', 'numeric')),
  options jsonb,
  league_restriction text,
  base_payout_multiplier numeric default 2.0,
  resolution_date timestamptz not null,
  status text default 'open' check (status in ('open', 'locked', 'resolved', 'voided')),
  correct_answer text,
  created_at timestamptz default now()
);
create index questions_status_resolution_idx on questions(status, resolution_date);

create table user_predictions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  question_id uuid references questions(id) on delete cascade,
  answer text not null,
  coins_wagered integer not null check (coins_wagered > 0),
  payout_multiplier numeric not null,
  resolved boolean default false,
  won boolean,
  coins_won integer default 0,
  xp_earned integer default 0,
  created_at timestamptz default now(),
  unique(user_id, question_id)
);
create index user_predictions_user_idx on user_predictions(user_id, resolved);

create table leaderboards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  world_id text,
  period text not null check (period in ('weekly', 'all_time')),
  period_start timestamptz,
  score integer not null default 0,
  predictions_won integer default 0,
  predictions_total integer default 0,
  rank integer,
  updated_at timestamptz default now(),
  unique(user_id, world_id, period, period_start)
);
create index leaderboards_lookup_idx on leaderboards(world_id, period, period_start, rank);

create table coin_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  amount integer not null,
  reason text not null,
  related_prediction_id uuid references user_predictions(id),
  balance_after integer not null,
  created_at timestamptz default now()
);
create index coin_transactions_user_idx on coin_transactions(user_id, created_at desc);

-- RLS
alter table profiles enable row level security;
alter table user_predictions enable row level security;
alter table coin_transactions enable row level security;
alter table events enable row level security;
alter table questions enable row level security;
alter table leaderboards enable row level security;
alter table worlds enable row level security;

create policy "Users can read all profiles" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can read own predictions" on user_predictions for select using (auth.uid() = user_id);
create policy "Users can insert own predictions" on user_predictions for insert with check (auth.uid() = user_id);
create policy "Users can read own transactions" on coin_transactions for select using (auth.uid() = user_id);
create policy "Public read events" on events for select using (true);
create policy "Public read questions" on questions for select using (true);
create policy "Public read leaderboards" on leaderboards for select using (true);
create policy "Public read worlds" on worlds for select using (true);

-- Seed the launch worlds
insert into worlds (id, name, description) values
  ('anime', 'Anime', 'Weekly episodes, MAL scores, league play'),
  ('movies', 'Movies & TV', 'Box office, ratings, renewals'),
  ('markets', 'Markets', 'Stocks & crypto, daily and weekly')
on conflict (id) do nothing;
