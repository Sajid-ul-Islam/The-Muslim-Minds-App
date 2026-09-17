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
import { Ionicons } from '@expo/vector-icons';
import { categories, articles, Category, Article } from '../data';
import { colors, getGradientColors, getCategoryBadgeStyle } from '../theme';

interface TopicsScreenProps {
  onArticlePress: (id: number) => void;
}

const windowWidth = Dimensions.get('window').width;
const cardWidth = (windowWidth - 40 - 12) / 2;

export default function TopicsScreen({ onArticlePress }: TopicsScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? articles.filter((a) => a.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : articles;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Topics</Text>
        <Text style={styles.headerSubtitle}>Explore by category</Text>
      </View>

      {/* Categories Grid */}
      <View style={styles.gridContainer}>
        {categories.map((cat: Category) => {
          const isSelected = selectedCategory === cat.name;
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
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
                <Text style={styles.categoryName} numberOfLines={2}>
                  {cat.name}
                </Text>
                <Text style={styles.categoryCount}>{cat.count} Articles</Text>
                {isSelected && (
                  <View style={styles.checkmarkBadge}>
                    <Ionicons name="checkmark-circle" size={18} color="#ffffff" />
                  </View>
                )}
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
                  <Ionicons name="document-text-outline" size={22} color="rgba(255,255,255,0.7)" />
                </LinearGradient>

                <View style={styles.articleInfo}>
                  <View style={[styles.inlineBadge, { backgroundColor: badgeStyle.bg }]}>
                    <Text style={[styles.inlineBadgeText, { color: badgeStyle.text }]}>
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
    paddingTop: 16,
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
    minHeight: 110,
    justifyContent: 'space-between',
  },
  categoryIcon: {
    fontSize: 26,
  },
  categoryName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 8,
  },
  categoryCount: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    marginTop: 4,
  },
  checkmarkBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
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
    fontWeight: '600',
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
    width: 70,
    height: 70,
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
