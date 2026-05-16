import { Text, View } from 'react-native';
import { CoinIcon } from '@/components/icons';
import { C, F } from '@/lib/theme';
import { fmtCoins, fmtCountdown } from '@/lib/format';
import { useNow } from '@/lib/hooks/useNow';
import type { Question, World } from '@/types';

export function CardFooter({ question: q, world }: { question: Question; world?: World }) {
  const now = useNow(15_000);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 9,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
          <CoinIcon size={11} />
          <Text style={{ fontFamily: F.monoSemibold, fontSize: 11.5, color: C.textDim, fontWeight: '600' }}>
            {fmtCoins(q.volume)}
          </Text>
          <Text style={{ fontFamily: F.regular, fontSize: 11.5, color: C.textMute }}>vol</Text>
        </View>
        {world && (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <View style={{ width: 6, height: 6, borderRadius: 99, backgroundColor: world.color }} />
            <Text style={{ fontFamily: F.regular, fontSize: 11.5, color: C.textMute }}>{world.name}</Text>
          </View>
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <View style={{ width: 5, height: 5, borderRadius: 99, backgroundColor: C.yes }} />
        <Text style={{ fontFamily: F.mono, fontSize: 11.5, color: C.textMute }}>
          {fmtCountdown(q.locksAt - now)}
        </Text>
      </View>
    </View>
  );
}
