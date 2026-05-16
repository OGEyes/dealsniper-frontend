import Svg, { Circle, Path, Rect, Text as SvgText } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

const stroke = (color: string = 'currentColor') => ({
  stroke: color,
  fill: 'none' as const,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const HomeIcon = ({ size = 22, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M3 11.5L12 4l9 7.5V20a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-8.5z" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const WorldsIcon = ({ size = 22, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={9} {...stroke(color)} strokeWidth={1.8} />
    <Path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const PicksIcon = ({ size = 22, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M5 4h14v17l-7-3.5L5 21V4z" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const LeadersIcon = ({ size = 22, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M6 9h12v3a6 6 0 11-12 0V9z" {...stroke(color)} strokeWidth={1.8} />
    <Path d="M6 9V5h12v4M9 21h6M12 18v3M3 9a3 3 0 003 3M21 9a3 3 0 01-3 3" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const ProfileIcon = ({ size = 22, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx={12} cy={8} r={4} {...stroke(color)} strokeWidth={1.8} />
    <Path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const SearchIcon = ({ size = 18, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx={11} cy={11} r={7} {...stroke(color)} strokeWidth={1.8} />
    <Path d="M21 21l-4.3-4.3" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const FireIcon = ({ size = 14, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M12 3s4 4 4 8a4 4 0 11-8 0c0-2 1-3 1-3s0 2 2 2-1-4 1-7zM7 14a5 5 0 1010 0" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const BackIcon = ({ size = 20, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M15 18l-6-6 6-6" {...stroke(color)} strokeWidth={2} />
  </Svg>
);

export const ChevIcon = ({ size = 14, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M9 6l6 6-6 6" {...stroke(color)} strokeWidth={2} />
  </Svg>
);

export const CoinIcon = ({ size = 16 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={9} fill="#f5b500" />
    <Circle cx={12} cy={12} r={9} stroke="#b88500" strokeOpacity={0.4} strokeWidth={1.2} fill="none" />
    <Circle cx={12} cy={12} r={6.5} stroke="#b88500" strokeOpacity={0.5} strokeWidth={0.8} fill="none" />
    <SvgText x={12} y={16} textAnchor="middle" fontSize={10} fontWeight="800" fill="#7a5400">H</SvgText>
  </Svg>
);

export const BoltIcon = ({ size = 14, color = '#f5b500' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill={color} />
  </Svg>
);

export const TrophyIcon = ({ size = 14, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M7 4h10v6a5 5 0 11-10 0V4z" {...stroke(color)} strokeWidth={1.8} />
    <Path d="M7 7H4v2a3 3 0 003 3M17 7h3v2a3 3 0 01-3 3M10 21h4M12 18v3" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const BellIcon = ({ size = 20, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M6 9a6 6 0 1112 0v4l1.5 3h-15L6 13V9zM10 19a2 2 0 004 0" {...stroke(color)} strokeWidth={1.8} />
  </Svg>
);

export const GearIcon = ({ size = 20, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={3} {...stroke(color)} strokeWidth={1.8} />
    <Path
      d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.7 1.7 0 008 19.4a1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H2a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3h0a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8v0a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"
      {...stroke(color)} strokeWidth={1.6}
    />
  </Svg>
);

export const PulseDot = ({ size = 6, color = '#22c55e' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 6 6">
    <Circle cx={3} cy={3} r={3} fill={color} />
  </Svg>
);

export { Svg, Path, Circle, Rect };
