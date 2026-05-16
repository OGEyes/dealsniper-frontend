import { create } from 'zustand';
import { MOCK_USER } from '@/data/mock';
import type { User } from '@/types';

type UserState = {
  user: User;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  setLeague: (league: User['league']) => void;
};

export const useUserStore = create<UserState>((set, get) => ({
  user: MOCK_USER,
  addCoins: (amount) =>
    set((s) => ({ user: { ...s.user, coins: s.user.coins + amount } })),
  spendCoins: (amount) => {
    const { user } = get();
    if (user.coins < amount) return false;
    set({ user: { ...user, coins: user.coins - amount } });
    return true;
  },
  setLeague: (league) => set((s) => ({ user: { ...s.user, league } })),
}));
