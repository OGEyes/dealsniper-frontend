import { Pressable, Text, View } from 'react-native';
import { C, F } from '@/lib/theme';

type Props = {
  yes: number;
  onPick?: (answer: 'Yes' | 'No') => void;
  size?: 'md' | 'lg';
  selected?: 'Yes' | 'No' | null;
};

export function YesNoPill({ yes, onPick, size = 'md', selected = null }: Props) {
  const yesP = Math.round(yes * 100);
  const noP = 100 - yesP;
  const h = size === 'lg' ? 44 : 36;
  const fs = size === 'lg' ? 15 : 13;

  return (
    <View style={{ flexDirection: 'row', gap: 6, width: '100%' }}>
      <Pressable
        onPress={() => onPick?.('Yes')}
        style={{
          flex: 1,
          height: h,
          backgroundColor: selected === 'Yes' ? C.yes : C.yesBg,
          borderRadius: 8,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontFamily: F.bold, fontWeight: '700', fontSize: fs, color: selected === 'Yes' ? '#0a1a0e' : C.yes, letterSpacing: -0.1 }}>
          Yes
        </Text>
        <Text style={{ fontFamily: F.monoSemibold, fontWeight: '600', fontSize: fs, color: selected === 'Yes' ? '#0a1a0e' : C.yes }}>
          {yesP}¢
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onPick?.('No')}
        style={{
          flex: 1,
          height: h,
          backgroundColor: selected === 'No' ? C.no : C.noBg,
          borderRadius: 8,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontFamily: F.bold, fontWeight: '700', fontSize: fs, color: selected === 'No' ? '#1a0707' : C.no, letterSpacing: -0.1 }}>
          No
        </Text>
        <Text style={{ fontFamily: F.monoSemibold, fontWeight: '600', fontSize: fs, color: selected === 'No' ? '#1a0707' : C.no }}>
          {noP}¢
        </Text>
      </Pressable>
    </View>
  );
}
