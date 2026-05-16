import { Pressable, Text } from 'react-native';
import { C, F } from '@/lib/theme';
import { fmtPct } from '@/lib/format';

type Props = {
  label: string;
  p: number;
  selected?: boolean;
  onPick?: (label: string) => void;
  compact?: boolean;
};

export function MultiOption({ label, p, selected = false, onPick, compact = false }: Props) {
  return (
    <Pressable
      onPress={() => onPick?.(label)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: compact ? 8 : 12,
        paddingHorizontal: compact ? 10 : 14,
        backgroundColor: selected ? C.yesBg : 'rgba(255,255,255,0.03)',
        borderWidth: 1,
        borderColor: selected ? C.yes + '66' : C.border,
        borderRadius: 10,
      }}>
      <Text style={{ fontFamily: F.medium, fontWeight: '500', fontSize: 14, color: C.text }}>{label}</Text>
      <Text
        style={{
          fontFamily: F.monoSemibold,
          fontWeight: '600',
          fontSize: 13,
          color: selected ? C.yes : C.textDim,
        }}>
        {fmtPct(p)}
      </Text>
    </Pressable>
  );
}
