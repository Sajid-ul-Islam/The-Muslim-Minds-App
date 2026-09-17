import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { articles, featuredPosts, speakers, Article } from '../data';
import { colors, getGradientColors, getCategoryBadgeStyle } from '../theme';

interface HomeScreenProps {
  onArticlePress: (id: number) => void;
  onSeeAllPress?: () => void;
}

export default function HomeScreen({ onArticlePress, onSeeAllPress }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = searchQuery.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (a.categoryBn && a.categoryBn.includes(searchQuery.trim()))
      )
    : articles;

  const heroArticle = featuredPosts[0];

  const handleDiplomaPress = () => {
    Linking.openURL('https://themuslimminds.org/diploma').catch(() => {});
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Edge-to-Edge Brand Header */}
      <LinearGradient
        colors={colors.primaryGradient}
        style={[styles.header, { paddingTop: insets.top + 10 }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.topRow}>
          <View style={styles.brandRow}>
            {/* Official The Muslim Minds Logo */}
            <Image
              source={require('../../assets/logo-white.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.appTagline}>Decoding Muslim Minds</Text>
          </View>

          <TouchableOpacity style={styles.bellButton} activeOpacity={0.8}>
            <Ionicons name="notifications-outline" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={18} color="#93c5fd" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search articles, topics, authors..."
            placeholderTextColor="#93c5fd"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={18} color="#93c5fd" />
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>

      {/* Official Announcement Banner */}
      <View style={styles.bannerWrapper}>
        <TouchableOpacity style={styles.banner} activeOpacity={0.85} onPress={handleDiplomaPress}>
          <View style={styles.bannerIconCircle}>
            <Text style={styles.bannerEmoji}>🎓</Text>
          </View>
          <View style={styles.bannerContent}>
            <View style={styles.bannerBadgeRow}>
              <Text style={styles.bannerBadge}>Diploma 2026</Text>
              <Text style={styles.bannerTitle}>নতুন ডিপ্লোমা প্রোগ্রাম শুরু হয়েছে!</Text>
            </View>
            <Text style={styles.bannerSubtitle}>ক্রিটিক্যাল সোশ্যাল থট অ্যান্ড ইসলামিক ট্র্যাডিশন</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Hero Featured Article */}
      {!searchQuery && (
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.heroCard}
            activeOpacity={0.9}
            onPress={() => onArticlePress(heroArticle.id)}
          >
            <LinearGradient
              colors={getGradientColors(heroArticle.imageGradient)}
              style={styles.heroGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.heroOverlay}>
                <View
                  style={[
                    styles.categoryBadge,
                    { backgroundColor: getCategoryBadgeStyle(heroArticle.categoryColor).bg },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryBadgeText,
                      { color: getCategoryBadgeStyle(heroArticle.categoryColor).text },
                    ]}
                  >
                    {heroArticle.categoryBn ? `${heroArticle.categoryBn} • ` : ''}
                    {heroArticle.category}
                  </Text>
                </View>
                <Text style={styles.heroTitle}>{heroArticle.title}</Text>
                <Text style={styles.heroMeta}>
                  {heroArticle.author} • {heroArticle.date}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}

      {/* Recent Articles Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {searchQuery ? `Search Results (${filteredArticles.length})` : 'Recent Articles'}
          </Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={styles.seeAllText}>See All →</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.articlesList}>
          {(searchQuery ? filteredArticles : articles.slice(1, 7)).map((article: Article) => {
            const badgeStyle = getCategoryBadgeStyle(article.categoryColor);
            return (
              <TouchableOpacity
                key={article.id}
                style={styles.articleCard}
                activeOpacity={0.7}
                onPress={() => onArticlePress(article.id)}
              >
                <LinearGradient
                  colors={getGradientColors(article.imageGradient)}
                  style={styles.articleThumbnail}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name="document-text-outline" size={24} color="rgba(255,255,255,0.75)" />
                </LinearGradient>

                <View style={styles.articleInfo}>
                  <View style={[styles.inlineBadge, { backgroundColor: badgeStyle.bg }]}>
                    <Text style={[styles.inlineBadgeText, { color: badgeStyle.text }]}>
                      {article.categoryBn ? `${article.categoryBn} • ` : ''}
                      {article.category}
                    </Text>
                  </View>
                  <Text style={styles.articleTitle} numberOfLines={2}>
                    {article.title}
                  </Text>
                  <Text style={styles.articleMeta}>
                    {article.author} • {article.date}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Writers & Speakers */}
      {!searchQuery && (
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Writers & Speakers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>View All →</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.speakersScroll}
          >
            {speakers.map((speaker, idx) => (
              <View key={idx} style={styles.speakerCard}>
                <LinearGradient
                  colors={['#0056D2', '#020D34']}
                  style={styles.speakerAvatar}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={styles.speakerInitials}>{speaker.initials}</Text>
                </LinearGradient>
                <Text style={styles.speakerName} numberOfLines={2}>
                  {speaker.name}
                </Text>
                <Text style={styles.speakerRole} numberOfLines={1}>
                  {speaker.role}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* More Featured Posts */}
      {!searchQuery && (
        <View style={[styles.sectionContainer, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Featured Posts</Text>
          <View style={styles.articlesList}>
            {articles.slice(7, 12).map((article) => {
              const badgeStyle = getCategoryBadgeStyle(article.categoryColor);
              return (
                <TouchableOpacity
                  key={article.id}
                  style={styles.articleCard}
                  activeOpacity={0.7}
                  onPress={() => onArticlePress(article.id)}
                >
                  <LinearGradient
                    colors={getGradientColors(article.imageGradient)}
                    style={styles.articleThumbnail}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Ionicons name="document-text-outline" size={24} color="rgba(255,255,255,0.75)" />
                  </LinearGradient>

                  <View style={styles.articleInfo}>
                    <View style={[styles.inlineBadge, { backgroundColor: badgeStyle.bg }]}>
                      <Text style={[styles.inlineBadgeText, { color: badgeStyle.text }]}>
                        {article.categoryBn ? `${article.categoryBn} • ` : ''}
                        {article.category}
                      </Text>
                    </View>
                    <Text style={styles.articleTitle} numberOfLines={2}>
                      {article.title}
                    </Text>
                    <Text style={styles.articleMeta}>
                      {article.author} • {article.date}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  brandRow: {
    flex: 1,
  },
  logoImage: {
    width: 170,
    height: 40,
    alignSelf: 'flex-start',
  },
  appTagline: {
    color: '#93c5fd',
    fontSize: 12,
    marginTop: 2,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
    padding: 0,
  },
  bannerWrapper: {
    paddingHorizontal: 20,
    marginTop: -16,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  bannerIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  bannerEmoji: {
    fontSize: 20,
  },
  bannerContent: {
    flex: 1,
  },
  bannerBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },
  bannerBadge: {
    backgroundColor: '#dbeafe',
    color: colors.primary,
    fontSize: 9,
    fontWeight: '800',
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderRadius: 4,
  },
  bannerTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0f172a',
  },
  bannerSubtitle: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  lastSection: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0f172a',
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  heroCard: {
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  heroGradient: {
    height: 205,
    justifyContent: 'flex-end',
  },
  heroOverlay: {
    padding: 16,
    backgroundColor: 'rgba(2, 13, 52, 0.45)',
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 8,
  },
  categoryBadgeText: {
    fontSize: 10,
    fontWeight: '800',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
  },
  heroMeta: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 12,
    marginTop: 6,
  },
  articlesList: {
    gap: 10,
  },
  articleCard: {
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
  articleThumbnail: {
    width: 76,
    height: 76,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  inlineBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  inlineBadgeText: {
    fontSize: 9,
    fontWeight: '700',
  },
  articleTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1e293b',
    lineHeight: 18,
  },
  articleMeta: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 4,
  },
  speakersScroll: {
    paddingRight: 10,
    gap: 14,
  },
  speakerCard: {
    width: 76,
    alignItems: 'center',
  },
  speakerAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  speakerInitials: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  speakerName: {
    fontSize: 11,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 14,
  },
  speakerRole: {
    fontSize: 9,
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 2,
  },
});
