import { Pressable, Text, View } from 'react-native';
import { Cover } from '@/components/Cover';
import { FireIcon } from '@/components/icons';
import { LeagueTag } from '@/components/LeagueTag';
import { MultiOption } from '@/components/MultiOption';
import { YesNoPill } from '@/components/YesNoPill';
import { CardFooter } from '@/components/CardFooter';
import { C, F } from '@/lib/theme';
import type { AppEvent, Question, World } from '@/types';

type Props = {
  question: Question;
  event?: AppEvent;
  world?: World;
  onOpen?: (q: Question) => void;
  compact?: boolean;
};

export function PredictionCard({ question: q, event, world, onOpen, compact = false }: Props) {
  const showFlavor = !compact && 'flavor' in q && q.flavor;

  return (
    <Pressable
      onPress={() => onOpen?.(q)}
      style={{
        width: '100%',
        backgroundColor: C.card,
        borderRadius: 14,
        padding: compact ? 12 : 14,
        borderWidth: 1,
        borderColor: C.border,
        position: 'relative',
      }}>
      {q.hot && (
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 3,
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 5,
            backgroundColor: C.pink + '24',
          }}>
          <FireIcon size={10} color={C.pink} />
          <Text
            style={{
              fontFamily: F.bold,
              fontWeight: '700',
              fontSize: 10,
              color: C.pink,
              letterSpacing: 0.4,
              textTransform: 'uppercase',
            }}>
            Hot
          </Text>
        </View>
      )}

      <View style={{ flexDirection: 'row', gap: 11, alignItems: 'flex-start', marginBottom: 11 }}>
        {event && <Cover cover={event.cover} size={42} />}
        <View style={{ flex: 1, paddingRight: q.hot ? 32 : 0 }}>
          <Text
            style={{
              fontFamily: F.semibold,
              fontWeight: '600',
              fontSize: 14.5,
              color: C.text,
              lineHeight: 18,
              marginBottom: 2,
            }}>
            {q.text}
          </Text>
          {event && (
            <Text style={{ fontFamily: F.regular, fontSize: 12, color: C.textDim, lineHeight: 16 }}>
              {event.title}
            </Text>
          )}
        </View>
      </View>

      {showFlavor && (
        <View
          style={{
            marginBottom: 10,
            padding: 10,
            paddingLeft: 10,
            borderRadius: 8,
            backgroundColor: 'rgba(255,255,255,0.025)',
            borderLeftWidth: 2,
            borderLeftColor: C.accent,
          }}>
          <Text style={{ fontFamily: F.regular, fontSize: 12, color: C.textDim, lineHeight: 17 }}>{q.flavor}</Text>
        </View>
      )}

      {q.league && (
        <View style={{ marginBottom: 9, flexDirection: 'row' }}>
          <LeagueTag league={q.league} />
        </View>
      )}

      {q.type === 'binary' && <YesNoPill yes={q.yes} />}

      {q.type === 'multi' && (
        <View style={{ gap: 5 }}>
          {q.options.slice(0, 3).map((o) => (
            <MultiOption key={o} label={o} p={q.odds[o] ?? 0} compact />
          ))}
          {q.options.length > 3 && (
            <Text style={{ fontFamily: F.regular, fontSize: 11.5, color: C.textMute, paddingTop: 4 }}>
              +{q.options.length - 3} more
            </Text>
          )}
        </View>
      )}

      {q.type === 'numeric' && (
        <View
          style={{
            padding: 12,
            borderRadius: 10,
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderWidth: 1,
            borderColor: C.border,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{ fontFamily: F.regular, fontSize: 11, color: C.textMute, marginBottom: 2 }}>Range</Text>
            <Text style={{ fontFamily: F.monoSemibold, fontWeight: '600', fontSize: 13.5, color: C.text }}>
              {q.range.unit}
              {q.range.min} – {q.range.unit}
              {q.range.max}
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontFamily: F.regular, fontSize: 11, color: C.textMute, marginBottom: 2 }}>Consensus</Text>
            <Text style={{ fontFamily: F.monoSemibold, fontWeight: '700', fontSize: 13.5, color: C.accent }}>
              {q.range.unit}
              {q.consensus}
            </Text>
          </View>
        </View>
      )}

      <CardFooter question={q} world={world} />
    </Pressable>
  );
}
