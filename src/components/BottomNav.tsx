import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

export type Screen = 'home' | 'topics' | 'videos' | 'about';

interface BottomNavProps {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  const navItems: { id: Screen; label: string; icon: keyof typeof Ionicons.glyphMap; iconActive: keyof typeof Ionicons.glyphMap }[] = [
    { id: 'home', label: 'Home', icon: 'home-outline', iconActive: 'home' },
    { id: 'topics', label: 'Topics', icon: 'folder-outline', iconActive: 'folder' },
    { id: 'videos', label: 'Videos', icon: 'play-circle-outline', iconActive: 'play-circle' },
    { id: 'about', label: 'About', icon: 'information-circle-outline', iconActive: 'information-circle' },
  ];

  return (
    <View style={styles.container}>
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
              {isActive ? <View style={styles.activeDot} /> : <View style={styles.inactiveDotPlaceholder} />}
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
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 8,
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
    paddingHorizontal: 12,
  },
  navLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#94a3b8',
    marginTop: 3,
  },
  navLabelActive: {
    color: colors.primary,
    fontWeight: '600',
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
