import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CoinChip } from '@/components/ui/CoinChip';
import { useUserStore } from '@/lib/stores/useUserStore';
import { C, F } from '@/lib/theme';

export default function ProfileScreen() {
  const user = useUserStore((s) => s.user);
  const xpPct = Math.min(1, user.xp / user.xpForNextLevel);

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 }}>
        <Text style={{ fontFamily: F.bold, fontWeight: '700', fontSize: 26, color: C.text, letterSpacing: -0.8 }}>
          You
        </Text>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            padding: 18,
            borderRadius: 18,
            backgroundColor: C.card,
            borderWidth: 1,
            borderColor: C.border,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: C.cardHi,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 30 }}>{user.avatar}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: F.semibold, fontWeight: '600', fontSize: 17, color: C.text }}>
                @{user.username}
              </Text>
              <Text style={{ fontFamily: F.regular, fontSize: 13, color: C.textDim, marginTop: 2 }}>
                Level {user.level} · {user.xp.toLocaleString()} XP
              </Text>
            </View>
            <CoinChip amount={user.coins} size="md" />
          </View>

          <View style={{ marginTop: 14 }}>
            <View
              style={{
                height: 8,
                borderRadius: 99,
                backgroundColor: 'rgba(255,255,255,0.06)',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  width: `${xpPct * 100}%`,
                  height: '100%',
                  borderRadius: 99,
                  backgroundColor: C.accent,
                }}
              />
            </View>
            <Text style={{ fontFamily: F.regular, fontSize: 11.5, color: C.textMute, marginTop: 6 }}>
              {user.xpForNextLevel - user.xp} XP to level {user.level + 1}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
