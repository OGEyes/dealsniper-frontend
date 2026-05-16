import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { BackIcon } from '@/components/icons';
import { Cover } from '@/components/Cover';
import { YesNoPill } from '@/components/YesNoPill';
import { MultiOption } from '@/components/MultiOption';
import { LeagueTag } from '@/components/LeagueTag';
import { CardFooter } from '@/components/CardFooter';
import { EVENTS, QUESTIONS, WORLDS } from '@/data/mock';
import { C, F } from '@/lib/theme';

export default function PredictionScreen() {
  const router = useRouter();
  const { questionId } = useLocalSearchParams<{ questionId: string }>();
  const q = QUESTIONS.find((x) => x.id === questionId);
  const event = q ? EVENTS.find((e) => e.id === q.eventId) : undefined;
  const world = q ? WORLDS.find((w) => w.id === q.worldId) : undefined;

  if (!q) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.bg, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: C.textDim, fontFamily: F.regular }}>Question not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={{ paddingHorizontal: 12, paddingTop: 4, paddingBottom: 8 }}>
        <Pressable
          onPress={() => router.back()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: C.card,
            borderWidth: 1,
            borderColor: C.border,
          }}>
          <BackIcon color={C.text} />
        </Pressable>
      </View>

      <View style={{ padding: 16, gap: 16 }}>
        <View style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
          {event && <Cover cover={event.cover} size={56} radius={12} />}
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: F.semibold, fontWeight: '600', fontSize: 14, color: C.textDim }}>
              {event?.title}
            </Text>
            <Text
              style={{
                fontFamily: F.bold,
                fontWeight: '700',
                fontSize: 20,
                color: C.text,
                lineHeight: 26,
                marginTop: 2,
                letterSpacing: -0.3,
              }}>
              {q.text}
            </Text>
          </View>
        </View>

        {q.league && <LeagueTag league={q.league} />}

        {q.type === 'binary' && <YesNoPill yes={q.yes} size="lg" />}
        {q.type === 'multi' && (
          <View style={{ gap: 8 }}>
            {q.options.map((o) => (
              <MultiOption key={o} label={o} p={q.odds[o] ?? 0} />
            ))}
          </View>
        )}
        {q.type === 'numeric' && (
          <View
            style={{
              padding: 16,
              borderRadius: 12,
              backgroundColor: C.card,
              borderWidth: 1,
              borderColor: C.border,
            }}>
            <Text style={{ fontFamily: F.regular, color: C.textDim, fontSize: 13 }}>
              Slider input lands with the prediction flow milestone.
            </Text>
          </View>
        )}

        <View
          style={{
            padding: 14,
            borderRadius: 14,
            backgroundColor: C.card,
            borderWidth: 1,
            borderColor: C.border,
          }}>
          <CardFooter question={q} world={world} />
        </View>
      </View>
    </SafeAreaView>
  );
}
