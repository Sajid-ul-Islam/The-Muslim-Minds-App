import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { useOTAUpdate } from '../hooks/useOTAUpdate';

export default function AboutScreen() {
  const insets = useSafeAreaInsets();
  const { checkForUpdate, isChecking, isUpdateReady, reloadApp, metadata } = useOTAUpdate(false);

  const handleConnect = (type: string) => {
    switch (type) {
      case 'Website':
        Linking.openURL('https://themuslimminds.org').catch(() => {});
        break;
      case 'YouTube':
        Linking.openURL('https://www.youtube.com/@themuslimmindsbd').catch(() => {});
        break;
      case 'Twitter/X':
        Linking.openURL('https://x.com/demuslimmindsbd').catch(() => {});
        break;
      case 'Facebook':
        Linking.openURL('https://www.facebook.com/themuslimmindsbd').catch(() => {});
        break;
      default:
        Alert.alert(type, 'Visit themuslimminds.org or email contact@themuslimminds.org');
    }
  };

  const handleCheckUpdates = async () => {
    const result = await checkForUpdate(true);
    if (result.isAvailable) {
      Alert.alert(
        'Update Ready',
        'A new version has been downloaded. Restart the app now to apply it.',
        [
          { text: 'Later', style: 'cancel' },
          { text: 'Restart Now', onPress: reloadApp },
        ]
      );
    } else {
      Alert.alert('App Updates', result.message || 'Your app is up to date.');
    }
  };

  const focusAreas = [
    { icon: '📚', title: 'Philosophy & Political Thought', titleBn: 'দর্শন ও রাজনৈতিক চিন্তাধারা', desc: 'Critical engagement with Western and Islamic philosophical traditions' },
    { icon: '🏛️', title: 'History & Decolonial Studies', titleBn: 'ইতিহাস ও উপনিবেশহীন জ্ঞানকাণ্ড', desc: 'Re-examining history and knowledge through decolonial frameworks' },
    { icon: '🌍', title: 'Geopolitics & Contemporary Analysis', titleBn: 'সমসাময়িক ভূ-রাজনীতি ও বিশ্লেষণ', desc: 'Understanding global dynamics and statecraft through Islamic perspectives' },
    { icon: '🕌', title: 'Islamic Thought & Tradition', titleBn: 'ইসলামিক ঐতিহ্য ও বুদ্ধিবৃত্তিক ধারা', desc: 'Exploring the depth of classical tradition and modern challenges' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Edge-to-Edge Brand Header */}
      <LinearGradient
        colors={colors.primaryGradient}
        style={[styles.header, { paddingTop: insets.top + 20 }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Official Brand Icon */}
        <View style={styles.brandIconWrapper}>
          <Image
            source={require('../../assets/brand-icon.png')}
            style={styles.brandIcon}
            resizeMode="cover"
          />
        </View>

        {/* Official Logo Text */}
        <Image
          source={require('../../assets/logo-white.png')}
          style={styles.headerLogo}
          resizeMode="contain"
        />

        <Text style={styles.headerTagline}>Decoding Muslim Minds</Text>
        <Text style={styles.headerSubtitle}>Intellectual Discourse & Analysis</Text>

        <Text style={styles.headerBio}>
          Exploring philosophy, history, politics, and Islamic thought through rigorous intellectual discourse.
        </Text>
      </LinearGradient>

      {/* Stats Card */}
      <View style={styles.statsWrapper}>
        <View style={styles.statsCard}>
          <View style={styles.statCol}>
            <Text style={styles.statNumber}>100+</Text>
            <Text style={styles.statLabel}>Articles</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statCol}>
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>Videos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statCol}>
            <Text style={styles.statNumber}>30+</Text>
            <Text style={styles.statLabel}>Speakers</Text>
          </View>
        </View>
      </View>

      {/* About Us */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>About Us • আমাদের কথা</Text>
        <Text style={styles.paragraph}>
          The Muslim Minds is a platform dedicated to fostering critical intellectual discourse within the Muslim community. We explore philosophy, history, political thought, decolonial studies, and Islamic tradition through rigorous analysis and diverse perspectives.
        </Text>
        <Text style={[styles.paragraph, { marginTop: 10 }]}>
          আমাদের উদ্দেশ্য হলো বুদ্ধিবৃত্তিক জ্ঞানচর্চার বিকাশ, উপনিবেশহীন চিন্তা এবং সমসাময়িক সংকটসমূহের গভীর বিশ্লেষণ প্রদান করা।
        </Text>
      </View>

      {/* Focus Areas */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Our Focus Areas</Text>
        <View style={styles.focusList}>
          {focusAreas.map((item, idx) => (
            <View key={idx} style={styles.focusCard}>
              <Text style={styles.focusIcon}>{item.icon}</Text>
              <View style={styles.focusContent}>
                <Text style={styles.focusTitle}>{item.title}</Text>
                <Text style={styles.focusTitleBn}>{item.titleBn}</Text>
                <Text style={styles.focusDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Diploma Program */}
      <View style={styles.sectionContainer}>
        <View style={styles.diplomaCard}>
          <Text style={styles.diplomaIcon}>🎓</Text>
          <View style={styles.diplomaContent}>
            <Text style={styles.diplomaTitle}>Diploma Program 2026</Text>
            <Text style={styles.diplomaTitleBn}>নতুন ডিপ্লোমা প্রোগ্রাম ২০২৬</Text>
            <Text style={styles.diplomaDesc}>
              Critical Social Thought & Islamic Tradition — A comprehensive program exploring the intersections of modern social theory and Islamic intellectual heritage.
            </Text>
            <TouchableOpacity
              style={styles.learnMoreBtn}
              activeOpacity={0.8}
              onPress={() => Linking.openURL('https://themuslimminds.org/diploma').catch(() => {})}
            >
              <Text style={styles.learnMoreText}>Visit Diploma Page →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* App Updates (OTA) */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>App Updates</Text>
        <View style={styles.updateCard}>
          <View style={styles.updateRow}>
            <View style={styles.updateIconWrap}>
              <Ionicons name="cloud-download-outline" size={24} color={colors.primary} />
            </View>
            <View style={styles.updateInfo}>
              <Text style={styles.updateVersion}>The Muslim Minds v1.0.0</Text>
              <Text style={styles.updateStatus}>
                {metadata.isEnabled
                  ? `OTA Updates: Active (${metadata.channel || 'production'})`
                  : 'OTA Updates: Active in standalone builds'}
              </Text>
            </View>
          </View>

          {isUpdateReady ? (
            <TouchableOpacity
              style={[styles.updateActionBtn, { backgroundColor: colors.primaryDark }]}
              activeOpacity={0.8}
              onPress={reloadApp}
            >
              <Ionicons name="refresh" size={16} color="#ffffff" style={{ marginRight: 6 }} />
              <Text style={styles.updateActionText}>Restart to Apply Update</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.updateActionBtn}
              activeOpacity={0.8}
              disabled={isChecking}
              onPress={handleCheckUpdates}
            >
              {isChecking ? (
                <>
                  <ActivityIndicator size="small" color="#ffffff" style={{ marginRight: 8 }} />
                  <Text style={styles.updateActionText}>Checking for Updates...</Text>
                </>
              ) : (
                <>
                  <Ionicons name="sync-outline" size={16} color="#ffffff" style={{ marginRight: 6 }} />
                  <Text style={styles.updateActionText}>Check for Updates</Text>
                </>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Connect With Us */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Connect With Us</Text>
        <View style={styles.connectRow}>
          {[
            { icon: 'globe-outline' as const, label: 'Website' },
            { icon: 'logo-youtube' as const, label: 'YouTube' },
            { icon: 'logo-twitter' as const, label: 'Twitter/X' },
            { icon: 'logo-facebook' as const, label: 'Facebook' },
          ].map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.connectBtn}
              activeOpacity={0.7}
              onPress={() => handleConnect(item.label)}
            >
              <Ionicons name={item.icon} size={22} color={colors.primary} />
              <Text style={styles.connectLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerCopy}>© 2026 The Muslim Minds</Text>
        <Text style={styles.footerLink}>themuslimminds.org</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  brandIconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 14,
  },
  brandIcon: {
    width: '100%',
    height: '100%',
  },
  headerLogo: {
    width: 200,
    height: 44,
  },
  headerTagline: {
    fontSize: 14,
    fontWeight: '700',
    color: '#93c5fd',
    marginTop: 4,
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#bfdbfe',
    fontWeight: '500',
    marginTop: 2,
  },
  headerBio: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 18,
    paddingHorizontal: 16,
  },
  statsWrapper: {
    paddingHorizontal: 20,
    marginTop: -24,
  },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    alignItems: 'center',
  },
  statCol: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#e2e8f0',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
    fontWeight: '500',
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 21,
    color: '#475569',
  },
  focusList: {
    gap: 10,
  },
  focusCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 14,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  focusIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  focusContent: {
    flex: 1,
  },
  focusTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0f172a',
  },
  focusTitleBn: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 1,
  },
  focusDesc: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 3,
    lineHeight: 16,
  },
  diplomaCard: {
    flexDirection: 'row',
    backgroundColor: '#eff6ff',
    borderWidth: 1,
    borderColor: '#bfdbfe',
    borderRadius: 16,
    padding: 16,
    alignItems: 'flex-start',
  },
  diplomaIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  diplomaContent: {
    flex: 1,
  },
  diplomaTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1e3a8a',
  },
  diplomaTitleBn: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 1,
  },
  diplomaDesc: {
    fontSize: 11,
    color: '#1e40af',
    lineHeight: 16,
    marginTop: 4,
  },
  learnMoreBtn: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 8,
    marginTop: 10,
  },
  learnMoreText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
  },
  updateCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  updateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  updateIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  updateInfo: {
    flex: 1,
  },
  updateVersion: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  updateStatus: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
  },
  updateActionBtn: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateActionText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  connectRow: {
    flexDirection: 'row',
    gap: 10,
  },
  connectBtn: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  connectLabel: {
    fontSize: 10,
    color: '#475569',
    fontWeight: '600',
    marginTop: 4,
  },
  footer: {
    marginTop: 36,
    marginBottom: 40,
    alignItems: 'center',
  },
  footerCopy: {
    fontSize: 12,
    color: '#94a3b8',
  },
  footerLink: {
    fontSize: 11,
    color: '#cbd5e1',
    marginTop: 3,
  },
});
