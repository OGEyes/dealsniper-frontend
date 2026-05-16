const CG_API = 'https://api.coingecko.com/api/v3';

export async function fetchTopCrypto(limit = 50) {
  const res = await fetch(
    `${CG_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1`,
  );
  return res.json();
}

export async function fetchCryptoPrice(id: string) {
  const res = await fetch(
    `${CG_API}/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`,
  );
  return res.json();
}
