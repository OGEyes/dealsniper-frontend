const FINNHUB_API = 'https://finnhub.io/api/v1';
const KEY = process.env.EXPO_PUBLIC_FINNHUB_KEY ?? '';

export async function fetchStockQuote(symbol: string) {
  const res = await fetch(`${FINNHUB_API}/quote?symbol=${symbol}&token=${KEY}`);
  return res.json();
}
