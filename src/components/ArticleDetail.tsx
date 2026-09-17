import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Share,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Article } from '../data';
import { colors, getGradientColors, getCategoryBadgeStyle } from '../theme';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export default function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  const insets = useSafeAreaInsets();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${article.title}\nBy ${article.author}\n\nRead more on The Muslim Minds: https://themuslimminds.org`,
        title: article.title,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    Alert.alert(
      !isBookmarked ? 'Bookmarked' : 'Removed',
      !isBookmarked ? 'Article added to your bookmarks.' : 'Article removed from bookmarks.'
    );
  };

  const badgeStyle = getCategoryBadgeStyle(article.categoryColor);
  const initials = article.author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: insets.bottom + 32 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Header */}
      <LinearGradient
        colors={getGradientColors(article.imageGradient)}
        style={[
          styles.hero,
          {
            paddingTop: insets.top + 14,
            height: 250 + insets.top,
          },
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.heroButtonsRow}>
          <TouchableOpacity
            style={styles.circleButton}
            activeOpacity={0.8}
            onPress={onBack}
          >
            <Ionicons name="arrow-back" size={20} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.circleButton}
            activeOpacity={0.8}
            onPress={handleShare}
          >
            <Ionicons name="share-social-outline" size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.heroBottomRow}>
          <View style={[styles.categoryBadge, { backgroundColor: badgeStyle.bg }]}>
            <Text style={[styles.categoryBadgeText, { color: badgeStyle.text }]}>
              {article.categoryBn ? `${article.categoryBn} • ${article.category}` : article.category}
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* Content Body */}
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{article.title}</Text>

        {/* Author info */}
        <View style={styles.authorRow}>
          <LinearGradient
            colors={['#0056D2', '#7118FF']}
            style={styles.authorAvatar}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.authorInitials}>{initials}</Text>
          </LinearGradient>
          <View style={styles.authorDetails}>
            <Text style={styles.authorName}>{article.author}</Text>
            <Text style={styles.articleDate}>{article.date}</Text>
          </View>
        </View>

        {/* Text Paragraphs */}
        <Text style={[styles.paragraph, styles.leadParagraph]}>
          {article.excerpt}
        </Text>

        <Text style={styles.paragraph}>
          The exploration of these ideas requires us to engage deeply with both classical Islamic intellectual traditions and contemporary theoretical frameworks. Through careful analysis, we can uncover new perspectives that challenge dominant narratives and open up fresh avenues for understanding.
        </Text>

        <Text style={styles.paragraph}>
          This article examines the historical context and contemporary implications of the topic at hand. By drawing on diverse sources — from classical texts to modern scholarship — we aim to provide a comprehensive analysis that speaks to both academic rigor and practical relevance.
        </Text>

        {/* Pull Quote */}
        <View style={styles.pullQuote}>
          <Text style={styles.pullQuoteText}>
            “When a civilization loses its language, it loses the ability to interpret its world. Language is not merely a messenger of communication; it is the grammar of existence.”
          </Text>
        </View>

        <Text style={styles.paragraph}>
          The implications of this analysis extend far beyond academic discourse. They touch upon fundamental questions of identity, knowledge production, and the politics of representation in our contemporary world. As we navigate these complex terrain, it becomes clear that intellectual decolonization is not merely an academic exercise but a vital project for the Muslim ummah.
        </Text>

        <Text style={styles.paragraph}>
          Through engagement with both primary sources and secondary literature, this piece seeks to contribute to ongoing conversations about the future of Muslim intellectual life. The challenges are significant, but so too are the resources available within our own tradition for meeting them.
        </Text>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          {['Philosophy', 'Islamic Thought', 'Analysis', 'Contemporary'].map((tag) => (
            <View key={tag} style={styles.tagBadge}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.readFullBtn}
            activeOpacity={0.8}
            onPress={() => Alert.alert('Full Article', 'Opening complete article in reader mode...')}
          >
            <Ionicons name="book-outline" size={18} color="#ffffff" style={{ marginRight: 6 }} />
            <Text style={styles.readFullText}>Read Full Article</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bookmarkBtn, isBookmarked && styles.bookmarkBtnActive]}
            activeOpacity={0.8}
            onPress={handleBookmark}
          >
            <Ionicons
              name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
              size={20}
              color={isBookmarked ? colors.primary : '#64748b'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hero: {
    height: 250,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  heroButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBottomRow: {
    alignItems: 'flex-start',
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  contentWrapper: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -16,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: 28,
    letterSpacing: -0.4,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  authorAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  authorInitials: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  authorDetails: {
    justifyContent: 'center',
  },
  authorName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  articleDate: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 23,
    color: '#334155',
    marginBottom: 16,
  },
  leadParagraph: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1e293b',
    lineHeight: 24,
  },
  pullQuote: {
    backgroundColor: '#eff6ff',
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    borderRadius: 8,
    padding: 14,
    marginVertical: 12,
  },
  pullQuoteText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#1e40af',
    lineHeight: 22,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  tagBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 24,
  },
  readFullBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  readFullText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  bookmarkBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkBtnActive: {
    backgroundColor: '#dbeafe',
  },
});
