import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { HomeIcon, LeadersIcon, PicksIcon, ProfileIcon, WorldsIcon } from '@/components/icons';
import { C, F } from '@/lib/theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: C.text,
        tabBarInactiveTintColor: C.textMute,
        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: 12,
          marginBottom: Platform.OS === 'ios' ? 24 : 12,
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: C.border,
          borderRadius: 22,
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: 'rgba(22,26,38,0.92)',
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontFamily: F.semibold,
          fontWeight: '600',
          fontSize: 10.5,
          letterSpacing: -0.1,
          marginTop: 2,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
        sceneStyle: { backgroundColor: C.bg },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="worlds"
        options={{
          title: 'Worlds',
          tabBarIcon: ({ color }) => <WorldsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="picks"
        options={{
          title: 'My Picks',
          tabBarIcon: ({ color }) => <PicksIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="leaders"
        options={{
          title: 'Leaders',
          tabBarIcon: ({ color }) => <LeadersIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'You',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
