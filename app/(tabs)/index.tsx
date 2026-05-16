import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { CoinChip } from '@/components/ui/CoinChip';
import { Chip } from '@/components/ui/Chip';
import { Cover } from '@/components/Cover';
import { PredictionCard } from '@/components/PredictionCard';
import { SearchIcon } from '@/components/icons';
import { EVENTS, QUESTIONS, WORLDS } from '@/data/mock';
import { useUserStore } from '@/lib/stores/useUserStore';
import { useNow } from '@/lib/hooks/useNow';
import { fmtCountdown } from '@/lib/format';
import { C, F } from '@/lib/theme';
import type { Question, World, AppEvent, WorldId } from '@/types';

const HOUR = 60 * 60 * 1000;

type ChipFilter = 'foryou' | 'hot' | 'closing' | WorldId;

const chips: { id: ChipFilter; label: string }[] = [
  { id: 'foryou', label: 'For you' },
  { id: 'hot', label: '🔥 Hot' },
  { id: 'closing', label: 'Closing soon' },
  { id: 'anime', label: 'Anime' },
  { id: 'markets', label: 'Markets' },
  { id: 'movies', label: 'Movies' },
];

export default function HomeScreen() {
  const router = useRouter();
  const user = useUserStore((s) => s.user);
  const now = useNow(30_000);
  const [filter, setFilter] = useState<ChipFilter>('foryou');

  const evtMap = useMemo(() => Object.fromEntries(EVENTS.map((e) => [e.id, e])) as Record<string, AppEvent>, []);
  const worldMap = useMemo(() => Object.fromEntries(WORLDS.map((w) => [w.id, w])) as Record<string, World>, []);

  const questions = useMemo(() => {
    let qs: Question[] = QUESTIONS.filter((q) => q.locksAt > now);
    if (filter === 'hot') qs = qs.filter((q) => q.hot || q.volume > 50_000);
    else if (filter === 'closing') qs = qs.filter((q) => q.locksAt - now < 12 * HOUR);
    else if (filter !== 'foryou') qs = qs.filter((q) => q.worldId === filter);
    qs.sort((a, b) => a.locksAt - b.locksAt);
    return qs;
  }, [filter, now]);

  const closingSoon = useMemo(
    () =>
      QUESTIONS.filter((q) => q.locksAt - now > 0 && q.locksAt - now < 6 * HOUR)
        .sort((a, b) => a.locksAt - b.locksAt)
        .slice(0, 4),
    [now],
  );

  const openPrediction = (q: Question) =>
    router.push({ pathname: '/prediction/[questionId]', params: { questionId: q.id } });

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}>
        {/* Top bar */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontFamily: F.bold, fontWeight: '700', fontSize: 26, color: C.text, letterSpacing: -0.8 }}>
            Hunch
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Pressable
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: C.card,
                borderWidth: 1,
                borderColor: C.border,
              }}>
              <SearchIcon color={C.text} />
            </Pressable>
            <CoinChip amount={user.coins} />
          </View>
        </View>

        {/* Closing soon rail */}
        <View style={{ marginBottom: 16 }}>
          <View
            style={{
              paddingHorizontal: 16,
              paddingBottom: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <View style={{ width: 6, height: 6, borderRadius: 99, backgroundColor: C.yes }} />
              <Text
                style={{
                  fontFamily: F.semibold,
                  fontWeight: '600',
                  fontSize: 12,
                  color: C.textDim,
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                }}>
                Locking soon
              </Text>
            </View>
            <Text style={{ fontFamily: F.regular, fontSize: 11, color: C.textMute }}>
              {closingSoon.length} markets
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
            {closingSoon.map((q) => {
              const ev = evtMap[q.eventId];
              return (
                <Pressable
                  key={q.id}
                  onPress={() => openPrediction(q)}
                  style={{
                    width: 200,
                    backgroundColor: C.card,
                    borderRadius: 12,
                    padding: 11,
                    borderWidth: 1,
                    borderColor: C.border,
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    {ev && <Cover cover={ev.cover} size={28} radius={7} />}
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontFamily: F.monoSemibold,
                          fontWeight: '600',
                          fontSize: 11,
                          color: C.yes,
                        }}>
                        {fmtCountdown(q.locksAt - now)}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{ fontFamily: F.regular, fontSize: 10.5, color: C.textMute }}>
                        {ev?.title}
                      </Text>
                    </View>
                  </View>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontFamily: F.medium,
                      fontWeight: '500',
                      fontSize: 12.5,
                      color: C.text,
                      lineHeight: 17,
                      minHeight: 34,
                    }}>
                    {q.text}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Filter chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8, paddingBottom: 14 }}>
          {chips.map((c) => (
            <Chip key={c.id} label={c.label} on={filter === c.id} onPress={() => setFilter(c.id)} />
          ))}
        </ScrollView>

        {/* Feed */}
        <View style={{ paddingHorizontal: 16, gap: 10 }}>
          {questions.length === 0 ? (
            <View
              style={{
                padding: 32,
                alignItems: 'center',
                backgroundColor: C.card,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: C.border,
              }}>
              <Text style={{ fontFamily: F.semibold, color: C.textDim, fontWeight: '600' }}>
                No markets match that filter.
              </Text>
            </View>
          ) : (
            questions.map((q) => (
              <PredictionCard
                key={q.id}
                question={q}
                event={evtMap[q.eventId]}
                world={worldMap[q.worldId]}
                onOpen={openPrediction}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
