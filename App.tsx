import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/components/HomeScreen';
import TopicsScreen from './src/components/TopicsScreen';
import VideosScreen from './src/components/VideosScreen';
import AboutScreen from './src/components/AboutScreen';
import ArticleDetail from './src/components/ArticleDetail';
import BottomNav, { Screen } from './src/components/BottomNav';
import { articles } from './src/data';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const selectedArticle = selectedArticleId
    ? articles.find((a) => a.id === selectedArticleId) || null
    : null;

  const renderScreen = () => {
    if (selectedArticle) {
      return (
        <ArticleDetail
          article={selectedArticle}
          onBack={() => setSelectedArticleId(null)}
        />
      );
    }

    switch (activeScreen) {
      case 'home':
        return (
          <HomeScreen
            onArticlePress={setSelectedArticleId}
            onSeeAllPress={() => setActiveScreen('topics')}
          />
        );
      case 'topics':
        return <TopicsScreen onArticlePress={setSelectedArticleId} />;
      case 'videos':
        return <VideosScreen />;
      case 'about':
        return <AboutScreen />;
      default:
        return <HomeScreen onArticlePress={setSelectedArticleId} />;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <StatusBar style={selectedArticle || activeScreen === 'home' || activeScreen === 'about' ? 'light' : 'dark'} />
        <View style={styles.screenContainer}>{renderScreen()}</View>
        {!selectedArticle && (
          <BottomNav active={activeScreen} onNavigate={setActiveScreen} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#047857',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
});
