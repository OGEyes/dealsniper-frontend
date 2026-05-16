import { Text, View } from 'react-native';
import { CoinIcon } from '@/components/icons';
import { C, F } from '@/lib/theme';
import { fmtCoins } from '@/lib/format';

type Props = {
  amount: number;
  size?: 'sm' | 'md' | 'lg';
  plain?: boolean;
};

export function CoinChip({ amount, size = 'md', plain = false }: Props) {
  const sz = size === 'sm' ? { fs: 12, padV: 3, padH: 7, ic: 12 }
    : size === 'lg' ? { fs: 16, padV: 6, padH: 10, ic: 16 }
    : { fs: 13, padV: 4, padH: 8, ic: 14 };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: sz.padV,
        paddingHorizontal: sz.padH,
        borderRadius: 999,
        backgroundColor: plain ? 'transparent' : 'rgba(245,181,0,0.10)',
        borderWidth: plain ? 0 : 1,
        borderColor: 'rgba(245,181,0,0.18)',
      }}>
      <CoinIcon size={sz.ic} />
      <Text style={{ fontFamily: F.monoSemibold, fontWeight: '600', fontSize: sz.fs, color: C.gold, letterSpacing: -0.2 }}>
        {fmtCoins(amount)}
      </Text>
    </View>
  );
}
