import { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import TopicsScreen from './components/TopicsScreen';
import VideosScreen from './components/VideosScreen';
import AboutScreen from './components/AboutScreen';
import ArticleDetail from './components/ArticleDetail';
import BottomNav from './components/BottomNav';
import StatusBar from './components/StatusBar';
import { articles } from './data';

export type Screen = 'home' | 'topics' | 'videos' | 'about';

function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const selectedArticle = selectedArticleId ? articles.find(a => a.id === selectedArticleId) : null;

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
        return <HomeScreen onArticlePress={setSelectedArticleId} />;
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
    <div className="h-screen w-screen bg-gray-950 flex items-center justify-center overflow-hidden">
      {/* Phone Frame */}
      <div className="relative w-full max-w-[430px] h-full max-h-[932px] bg-gray-50 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-800 flex flex-col">
        {/* Status Bar */}
        <StatusBar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto scrollbar-hide">
          {renderScreen()}
        </main>

        {/* Bottom Navigation */}
        {!selectedArticle && (
          <BottomNav active={activeScreen} onNavigate={setActiveScreen} />
        )}
      </div>
    </div>
  );
}

export default App;
