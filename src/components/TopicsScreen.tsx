import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { categories, articles, Category, Article } from '../data';
import { colors, getGradientColors, getCategoryBadgeStyle } from '../theme';

interface TopicsScreenProps {
  onArticlePress: (id: number) => void;
}

const windowWidth = Dimensions.get('window').width;
const cardWidth = (windowWidth - 40 - 12) / 2;

export default function TopicsScreen({ onArticlePress }: TopicsScreenProps) {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? articles.filter(
        (a) =>
          a.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          (a.categoryBn && a.categoryBn.includes(selectedCategory))
      )
    : articles;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Edge-to-Edge Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Text style={styles.headerTitle}>Topics • বিষয়শ্রেণী</Text>
        <Text style={styles.headerSubtitle}>Explore articles by intellectual categories</Text>
      </View>

      {/* Categories Grid */}
      <View style={styles.gridContainer}>
        {categories.map((cat: Category) => {
          const isSelected = selectedCategory === cat.name || selectedCategory === cat.nameBn;
          return (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryCard, isSelected && styles.categoryCardSelected]}
              activeOpacity={0.85}
              onPress={() => setSelectedCategory(isSelected ? null : cat.name)}
            >
              <LinearGradient
                colors={getGradientColors(cat.color)}
                style={styles.cardGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.cardTopRow}>
                  <Text style={styles.categoryIcon}>{cat.icon}</Text>
                  {isSelected && (
                    <Ionicons name="checkmark-circle" size={20} color="#ffffff" />
                  )}
                </View>

                <View>
                  <Text style={styles.categoryNameBn} numberOfLines={1}>
                    {cat.nameBn}
                  </Text>
                  <Text style={styles.categoryName} numberOfLines={1}>
                    {cat.name}
                  </Text>
                  <Text style={styles.categoryCount}>{cat.count} Articles</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Filtered Articles Section */}
      <View style={styles.articlesSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {selectedCategory ? selectedCategory : 'All Articles'}
          </Text>
          {selectedCategory && (
            <TouchableOpacity onPress={() => setSelectedCategory(null)}>
              <Text style={styles.clearFilterText}>Clear Filter ✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.articlesList}>
          {filteredArticles.map((article: Article) => {
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
                  <Ionicons name="document-text-outline" size={22} color="rgba(255,255,255,0.75)" />
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 12,
  },
  categoryCard: {
    width: cardWidth,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryCardSelected: {
    transform: [{ scale: 0.97 }],
    borderWidth: 2,
    borderColor: colors.primary,
  },
  cardGradient: {
    padding: 14,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 26,
  },
  categoryNameBn: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 20,
  },
  categoryName: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 1,
  },
  categoryCount: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 10,
    marginTop: 4,
  },
  articlesSection: {
    marginTop: 24,
    paddingHorizontal: 20,
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
  clearFilterText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
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
    width: 72,
    height: 72,
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
});
