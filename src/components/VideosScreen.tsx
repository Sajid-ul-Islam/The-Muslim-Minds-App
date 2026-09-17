import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { getGradientColors } from '../theme';

interface VideoItem {
  id: number;
  title: string;
  duration: string;
  speaker: string;
  views: string;
  gradient: string;
}

export default function VideosScreen() {
  const insets = useSafeAreaInsets();

  const videos: VideoItem[] = [
    {
      id: 1,
      title: 'Bengali Nationalism and Hindutva Narrative Interaction',
      duration: '45:20',
      speaker: 'Dr. Mahmudur Rahman',
      views: '12.4K',
      gradient: 'from-blue-600 to-indigo-800',
    },
    {
      id: 2,
      title: 'The Crisis of Language in Modern Civilization',
      duration: '38:15',
      speaker: 'Musa Al Hafij',
      views: '8.7K',
      gradient: 'from-sky-600 to-blue-800',
    },
    {
      id: 3,
      title: 'Coloniality and Modern Knowledge Systems',
      duration: '52:30',
      speaker: 'Editorial Team',
      views: '15.2K',
      gradient: 'from-purple-500 to-violet-700',
    },
    {
      id: 4,
      title: 'Islam and Sharia Governance: Legal Analysis',
      duration: '41:45',
      speaker: 'Naim Hasan',
      views: '6.3K',
      gradient: 'from-amber-600 to-orange-800',
    },
    {
      id: 5,
      title: 'Turkey Defense Industry & Geopolitics',
      duration: '55:10',
      speaker: 'Editorial Team',
      views: '21.8K',
      gradient: 'from-gray-700 to-slate-900',
    },
    {
      id: 6,
      title: 'Civil Disobedience and Political Resistance',
      duration: '33:25',
      speaker: 'Editorial Team',
      views: '9.1K',
      gradient: 'from-rose-600 to-red-800',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Edge-to-Edge Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Text style={styles.headerTitle}>Videos • ভিডিও আর্কাইভ</Text>
        <Text style={styles.headerSubtitle}>বক্তৃতা, আলোচনা, বুক রিভিউ ও সংশয় নিরসন</Text>
      </View>

      {/* Featured Video */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.featuredCard} activeOpacity={0.9}>
          <LinearGradient
            colors={['#0056D2', '#003E99', '#020D34']}
            style={styles.featuredGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.featuredPlayButton}>
              <Ionicons name="play" size={28} color="#ffffff" style={{ marginLeft: 3 }} />
            </View>
            <View style={styles.featuredOverlay}>
              <View style={styles.liveBadge}>
                <Text style={styles.liveBadgeText}>FEATURED</Text>
              </View>
              <Text style={styles.featuredTitle}>
                New Diploma Program 2026 — Introduction
              </Text>
              <Text style={styles.featuredSubtitle}>
                Critical Social Thought & Islamic Tradition
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Video List */}
      <View style={[styles.sectionContainer, styles.lastSection]}>
        <Text style={styles.sectionTitle}>Recent Videos • সাম্প্রতিক ভিডিও</Text>
        <View style={styles.videosList}>
          {videos.map((video) => (
            <TouchableOpacity key={video.id} style={styles.videoCard} activeOpacity={0.7}>
              <LinearGradient
                colors={getGradientColors(video.gradient)}
                style={styles.videoThumbnail}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.smallPlayButton}>
                  <Ionicons name="play" size={14} color="#ffffff" style={{ marginLeft: 2 }} />
                </View>
                <View style={styles.durationBadge}>
                  <Text style={styles.durationText}>{video.duration}</Text>
                </View>
              </LinearGradient>

              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle} numberOfLines={2}>
                  {video.title}
                </Text>
                <Text style={styles.videoSpeaker}>{video.speaker}</Text>
                <Text style={styles.videoViews}>{video.views} views</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  sectionContainer: {
    marginTop: 18,
    paddingHorizontal: 20,
  },
  lastSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 12,
  },
  featuredCard: {
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  featuredGradient: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredPlayButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(2, 13, 52, 0.5)',
  },
  liveBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#0056D2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 6,
  },
  liveBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  featuredTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  featuredSubtitle: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 12,
    marginTop: 2,
  },
  videosList: {
    gap: 12,
  },
  videoCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  videoThumbnail: {
    width: 110,
    height: 74,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  smallPlayButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: 'rgba(2, 13, 52, 0.8)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '600',
  },
  videoInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  videoTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1e293b',
    lineHeight: 17,
  },
  videoSpeaker: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 4,
  },
  videoViews: {
    fontSize: 10,
    color: '#94a3b8',
    marginTop: 2,
  },
});
