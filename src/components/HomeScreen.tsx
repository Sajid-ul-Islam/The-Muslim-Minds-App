import { articles, featuredPosts, speakers } from '../data';

interface HomeScreenProps {
  onArticlePress: (id: number) => void;
}

export default function HomeScreen({ onArticlePress }: HomeScreenProps) {
  return (
    <div className="pb-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 px-5 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-white text-2xl font-bold tracking-tight">The Muslim Minds</h1>
            <p className="text-emerald-200 text-sm mt-0.5">Intellectual Discourse & Analysis</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-lg">🔔</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles, topics, authors..."
            className="w-full bg-white/15 backdrop-blur-sm text-white placeholder-emerald-200 rounded-xl px-4 py-3 pl-10 text-sm border border-white/20 outline-none focus:border-white/40 transition-colors"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-200">🔍</span>
        </div>
      </div>

      {/* Announcement Banner */}
      <div className="mx-5 -mt-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3 flex items-center gap-3 shadow-sm">
        <span className="text-2xl">🎓</span>
        <div className="flex-1">
          <p className="text-xs font-semibold text-amber-800">New Diploma Program 2026</p>
          <p className="text-[11px] text-amber-600 mt-0.5">Critical Social Thought & Islamic Tradition</p>
        </div>
        <span className="text-amber-600 text-lg">→</span>
      </div>

      {/* Featured Article - Hero */}
      <div className="mt-5 px-5">
        <div
          onClick={() => onArticlePress(featuredPosts[0].id)}
          className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer active:scale-[0.98] transition-transform"
        >
          <div className={`bg-gradient-to-br ${featuredPosts[0].imageGradient} h-48 flex items-end`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="relative p-4 w-full">
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${featuredPosts[0].categoryColor} mb-2`}>
                {featuredPosts[0].category}
              </span>
              <h2 className="text-white font-bold text-lg leading-tight text-shadow">
                {featuredPosts[0].title}
              </h2>
              <p className="text-white/70 text-xs mt-1.5">
                {featuredPosts[0].author} • {featuredPosts[0].date}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Articles */}
      <div className="mt-6 px-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900 font-bold text-base">Recent Articles</h3>
          <button className="text-emerald-700 text-xs font-medium">See All →</button>
        </div>

        <div className="space-y-3">
          {articles.slice(1, 7).map((article) => (
            <div
              key={article.id}
              onClick={() => onArticlePress(article.id)}
              className="flex gap-3 p-2 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer active:bg-gray-50 transition-colors"
            >
              <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${article.imageGradient} shrink-0 flex items-center justify-center`}>
                <span className="text-white/50 text-2xl">📄</span>
              </div>
              <div className="flex-1 min-w-0 py-0.5">
                <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-medium ${article.categoryColor} mb-1`}>
                  {article.category}
                </span>
                <h4 className="text-gray-900 font-semibold text-sm leading-tight line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-500 text-[11px] mt-1.5">
                  {article.author} • {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Speakers Section */}
      <div className="mt-6 px-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900 font-bold text-base">Writers & Speakers</h3>
          <button className="text-emerald-700 text-xs font-medium">View All →</button>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5 pb-2">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="flex flex-col items-center shrink-0 w-20">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {speaker.initials}
              </div>
              <p className="text-[10px] text-gray-700 font-medium mt-1.5 text-center leading-tight line-clamp-2">
                {speaker.name}
              </p>
              <p className="text-[9px] text-gray-400">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* More Articles */}
      <div className="mt-6 px-5">
        <h3 className="text-gray-900 font-bold text-base mb-3">Featured Posts</h3>
        <div className="space-y-3">
          {articles.slice(7, 12).map((article) => (
            <div
              key={article.id}
              onClick={() => onArticlePress(article.id)}
              className="flex gap-3 p-2 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer active:bg-gray-50 transition-colors"
            >
              <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${article.imageGradient} shrink-0 flex items-center justify-center`}>
                <span className="text-white/50 text-2xl">📄</span>
              </div>
              <div className="flex-1 min-w-0 py-0.5">
                <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-medium ${article.categoryColor} mb-1`}>
                  {article.category}
                </span>
                <h4 className="text-gray-900 font-semibold text-sm leading-tight line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-500 text-[11px] mt-1.5">
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
