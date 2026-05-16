import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C, F } from '@/lib/theme';

export function ComingSoon({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 }}>
        <Text style={{ fontFamily: F.bold, fontWeight: '700', fontSize: 26, color: C.text, letterSpacing: -0.8 }}>
          {title}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 }}>
        <View
          style={{
            padding: 28,
            borderRadius: 18,
            backgroundColor: C.card,
            borderWidth: 1,
            borderColor: C.border,
            alignItems: 'center',
            maxWidth: 320,
          }}>
          <Text style={{ fontFamily: F.semibold, fontWeight: '600', fontSize: 16, color: C.text, marginBottom: 6 }}>
            Coming up next
          </Text>
          <Text
            style={{
              fontFamily: F.regular,
              fontSize: 13.5,
              color: C.textDim,
              textAlign: 'center',
              lineHeight: 19,
            }}>
            {subtitle ?? 'This screen is part of the next milestone. The Home feed has the full design — start there.'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
