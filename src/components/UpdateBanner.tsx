import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

interface UpdateBannerProps {
  visible: boolean;
  onRestart: () => void;
  onDismiss: () => void;
}

export default function UpdateBanner({ visible, onRestart, onDismiss }: UpdateBannerProps) {
  if (!visible) return null;

  return (
    <View style={styles.bannerContainer}>
      <LinearGradient
        colors={['#065f46', '#047857']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.iconCircle}>
          <Ionicons name="cloud-download-outline" size={18} color="#ffffff" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Update Available</Text>
          <Text style={styles.subtitle}>Restart the app to apply the latest changes.</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.restartButton} activeOpacity={0.8} onPress={onRestart}>
            <Text style={styles.restartText}>Restart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dismissButton} activeOpacity={0.7} onPress={onDismiss}>
            <Ionicons name="close" size={16} color="#d1fae5" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#ffffff',
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 10,
    color: '#a7f3d0',
    marginTop: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    gap: 6,
  },
  restartButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  restartText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  dismissButton: {
    padding: 4,
  },
});
