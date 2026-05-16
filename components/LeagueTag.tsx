import { Text, View } from 'react-native';
import { C, F } from '@/lib/theme';
import type { League } from '@/types';

export function LeagueTag({ league }: { league?: League }) {
  if (!league) return null;
  const label = league === 'anime_only' ? 'Anime-only' : 'Manga reader';
  const color = league === 'anime_only' ? C.accent : C.pink;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 5,
        backgroundColor: color + '1f',
        alignSelf: 'flex-start',
      }}>
      <View style={{ width: 5, height: 5, borderRadius: 99, backgroundColor: color }} />
      <Text style={{ fontFamily: F.semibold, fontWeight: '600', fontSize: 10.5, color, letterSpacing: 0.1 }}>
        {label}
      </Text>
    </View>
  );
}
