import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { F } from '@/lib/theme';
import type { Cover as CoverType } from '@/types';

type Props = {
  cover: CoverType;
  size?: number;
  radius?: number;
};

export function Cover({ cover, size = 44, radius = 10 }: Props) {
  const isTicker = cover.kind === 'ticker';
  const inner = isTicker ? cover.symbol : cover.glyph;
  return (
    <LinearGradient
      colors={[cover.from, cover.to]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: radius,
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.1)',
        }}
      />
      <Text
        style={{
          color: '#fff',
          fontWeight: isTicker ? '800' : '700',
          fontFamily: isTicker ? F.bold : undefined,
          fontSize: size * (isTicker ? 0.42 : 0.5),
          textShadowColor: 'rgba(0,0,0,0.3)',
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 0,
        }}>
        {inner}
      </Text>
    </LinearGradient>
  );
}
