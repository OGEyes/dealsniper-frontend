import { Text, View } from 'react-native';
import { C, F } from '@/lib/theme';

type Props = {
  label: string;
  color?: string;
  dim?: boolean;
};

export function Tag({ label, color, dim = false }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 5,
        backgroundColor: dim
          ? 'rgba(255,255,255,0.04)'
          : color
            ? color + '1c'
            : 'rgba(255,255,255,0.06)',
        alignSelf: 'flex-start',
      }}>
      <Text
        style={{
          fontFamily: F.semibold,
          fontWeight: '600',
          fontSize: 10.5,
          letterSpacing: 0.4,
          color: dim ? C.textDim : color || C.text,
          textTransform: 'uppercase',
        }}>
        {label}
      </Text>
    </View>
  );
}
