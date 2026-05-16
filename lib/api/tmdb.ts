const TMDB_API = 'https://api.themoviedb.org/3';
const KEY = process.env.EXPO_PUBLIC_TMDB_KEY ?? '';

export async function fetchUpcomingMovies() {
  const res = await fetch(`${TMDB_API}/movie/upcoming?api_key=${KEY}&region=US`);
  return res.json();
}

export async function fetchTrendingTV() {
  const res = await fetch(`${TMDB_API}/trending/tv/week?api_key=${KEY}`);
  return res.json();
}
