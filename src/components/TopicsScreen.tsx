import { categories, articles } from '../data';
import { useState } from 'react';

interface TopicsScreenProps {
  onArticlePress: (id: number) => void;
}

export default function TopicsScreen({ onArticlePress }: TopicsScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? articles.filter(a => a.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : articles;

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900">Topics</h1>
        <p className="text-gray-500 text-sm mt-0.5">Explore by category</p>
      </div>

      {/* Categories Grid */}
      <div className="px-5 mt-4">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
              className={`relative rounded-2xl p-4 text-left overflow-hidden transition-all active:scale-95 ${
                selectedCategory === cat.name
                  ? 'ring-2 ring-emerald-500 ring-offset-2 scale-[0.97]'
                  : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-90`} />
              <div className="relative">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-sm mt-2 leading-tight">{cat.name}</h3>
                <p className="text-white/70 text-xs mt-1">{cat.count} Articles</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Articles */}
      <div className="mt-6 px-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900 font-bold text-base">
            {selectedCategory ? selectedCategory : 'All Articles'}
          </h3>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-emerald-700 text-xs font-medium"
            >
              Clear Filter ✕
            </button>
          )}
        </div>

        <div className="space-y-3">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onArticlePress(article.id)}
              className="flex gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer active:bg-gray-50 transition-colors"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${article.imageGradient} shrink-0 flex items-center justify-center`}>
                <span className="text-white/50 text-xl">📄</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-medium ${article.categoryColor} mb-1`}>
                  {article.category}
                </span>
                <h4 className="text-gray-900 font-semibold text-sm leading-tight line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-500 text-[11px] mt-1">
                  {article.author} • {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
