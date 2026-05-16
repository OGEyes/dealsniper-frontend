const ANILIST_API = 'https://graphql.anilist.co';

const CURRENT_SEASON_QUERY = `
  query ($season: MediaSeason, $year: Int) {
    Page(page: 1, perPage: 50) {
      media(season: $season, seasonYear: $year, type: ANIME, status: RELEASING) {
        id
        title { romaji english }
        coverImage { large }
        episodes
        nextAiringEpisode { episode airingAt timeUntilAiring }
        averageScore
        genres
      }
    }
  }
`;

export async function fetchCurrentSeasonAnime() {
  const now = new Date();
  const month = now.getMonth();
  const season =
    month < 3 ? 'WINTER' : month < 6 ? 'SPRING' : month < 9 ? 'SUMMER' : 'FALL';

  const res = await fetch(ANILIST_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: CURRENT_SEASON_QUERY,
      variables: { season, year: now.getFullYear() },
    }),
  });
  const data = await res.json();
  return data.data.Page.media;
}
