import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

export type Screen = 'home' | 'topics' | 'videos' | 'about';

interface BottomNavProps {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  const insets = useSafeAreaInsets();

  const navItems: {
    id: Screen;
    label: string;
    labelBn: string;
    icon: keyof typeof Ionicons.glyphMap;
    iconActive: keyof typeof Ionicons.glyphMap;
  }[] = [
    { id: 'home', label: 'Home', labelBn: 'প্রচ্ছদ', icon: 'home-outline', iconActive: 'home' },
    { id: 'topics', label: 'Topics', labelBn: 'টপিকস', icon: 'grid-outline', iconActive: 'grid' },
    { id: 'videos', label: 'Videos', labelBn: 'ভিডিও', icon: 'play-circle-outline', iconActive: 'play-circle' },
    { id: 'about', label: 'About', labelBn: 'আমাদের কথা', icon: 'information-circle-outline', iconActive: 'information-circle' },
  ];

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      <View style={styles.navRow}>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.navButton}
              onPress={() => onNavigate(item.id)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={isActive ? item.iconActive : item.icon}
                size={22}
                color={isActive ? colors.primary : colors.textMuted}
              />
              <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
                {item.label}
              </Text>
              {isActive ? (
                <View style={styles.activeDot} />
              ) : (
                <View style={styles.inactiveDotPlaceholder} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 10,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  navLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#94a3b8',
    marginTop: 3,
  },
  navLabelActive: {
    color: colors.primary,
    fontWeight: '700',
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginTop: 3,
  },
  inactiveDotPlaceholder: {
    width: 4,
    height: 4,
    marginTop: 3,
  },
});
