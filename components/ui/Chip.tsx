import { Pressable, Text } from 'react-native';
import { C, F } from '@/lib/theme';

type Props = {
  label: string;
  on: boolean;
  onPress: () => void;
  color?: string;
};

export function Chip({ label, on, onPress, color }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 11,
        paddingVertical: 6,
        borderRadius: 99,
        backgroundColor: on ? (color ? color + '22' : 'rgba(255,255,255,0.08)') : 'transparent',
        borderWidth: 1,
        borderColor: on ? color || C.borderHi : C.border,
      }}>
      <Text
        style={{
          fontFamily: F.semibold,
          fontWeight: '600',
          fontSize: 12.5,
          color: on ? color || C.text : C.textDim,
          letterSpacing: -0.1,
        }}>
        {label}
      </Text>
    </Pressable>
  );
}
