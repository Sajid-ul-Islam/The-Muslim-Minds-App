import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, StatusBar as RNStatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/components/HomeScreen';
import TopicsScreen from './src/components/TopicsScreen';
import VideosScreen from './src/components/VideosScreen';
import AboutScreen from './src/components/AboutScreen';
import ArticleDetail from './src/components/ArticleDetail';
import BottomNav, { Screen } from './src/components/BottomNav';
import UpdateBanner from './src/components/UpdateBanner';
import { useOTAUpdate } from './src/hooks/useOTAUpdate';
import { articles } from './src/data';
import { colors } from './src/theme';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  // Initialize OTA updates listener and auto-check
  const { isUpdateReady, reloadApp, dismissUpdate } = useOTAUpdate(true);

  useEffect(() => {
    if (Platform.OS === 'android') {
      RNStatusBar.setTranslucent(true);
      RNStatusBar.setBackgroundColor('transparent');
    }
  }, []);

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

  const isLightStatusBar =
    selectedArticle !== null ||
    activeScreen === 'home' ||
    activeScreen === 'about';

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <StatusBar style={isLightStatusBar ? 'light' : 'dark'} />

        {/* OTA Update Banner */}
        <UpdateBanner
          visible={isUpdateReady}
          onRestart={reloadApp}
          onDismiss={dismissUpdate}
        />

        {/* Edge-to-Edge Full Screen Content */}
        <View style={styles.screenContainer}>{renderScreen()}</View>

        {/* Bottom Navigation */}
        {!selectedArticle && (
          <BottomNav active={activeScreen} onNavigate={setActiveScreen} />
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
});
