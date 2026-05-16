export const fmtCoins = (n: number): string => {
  const v = Math.round(n);
  if (v >= 1_000_000) return (v / 1_000_000).toFixed(1) + 'M';
  if (v >= 10_000) return (v / 1000).toFixed(0) + 'k';
  if (v >= 1000) return (v / 1000).toFixed(1) + 'k';
  return v.toLocaleString();
};

export const fmtPct = (p: number): string => `${Math.round(p * 100)}%`;

export const fmtCents = (p: number): string => `${Math.round(p * 100)}¢`;

export const fmtCountdown = (ms: number): string => {
  if (ms < 0) return 'locked';
  const m = Math.floor(ms / 60_000);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0) return `${d}d ${h % 24}h`;
  if (h > 0) return `${h}h ${m % 60}m`;
  if (m > 0) return `${m}m`;
  return `${Math.floor(ms / 1000)}s`;
};
