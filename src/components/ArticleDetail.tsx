import type { Article } from '../data';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export default function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  return (
    <div className="pb-8 animate-fade-in">
      {/* Hero Image */}
      <div className={`relative bg-gradient-to-br ${article.imageGradient} h-64`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 active:bg-black/50 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Share Button */}
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 active:bg-black/50 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium ${article.categoryColor} shadow-sm`}>
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 -mt-4 relative">
        <div className="bg-white rounded-t-2xl pt-6 pb-4">
          {/* Title */}
          <h1 className="text-gray-900 font-bold text-xl leading-tight">
            {article.title}
          </h1>

          {/* Author & Date */}
          <div className="flex items-center gap-3 mt-4 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-xs shadow">
              {article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm">{article.author}</p>
              <p className="text-gray-500 text-xs">{article.date}</p>
            </div>
          </div>

          {/* Article Body */}
          <div className="mt-4 space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {article.excerpt}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              The exploration of these ideas requires us to engage deeply with both classical 
              Islamic intellectual traditions and contemporary theoretical frameworks. Through 
              careful analysis, we can uncover new perspectives that challenge dominant narratives 
              and open up fresh avenues for understanding.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              This article examines the historical context and contemporary implications of the 
              topic at hand. By drawing on diverse sources — from classical texts to modern 
              scholarship — we aim to provide a comprehensive analysis that speaks to both 
              academic rigor and practical relevance.
            </p>

            {/* Pull Quote */}
            <div className="border-l-4 border-emerald-500 pl-4 py-2 my-6 bg-emerald-50 rounded-r-lg">
              <p className="text-emerald-900 text-sm font-medium italic leading-relaxed">
                "When a civilization loses its language, it loses the ability to interpret its world. 
                Language is not merely a messenger of communication; it is the grammar of existence."
              </p>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              The implications of this analysis extend far beyond academic discourse. They touch 
              upon fundamental questions of identity, knowledge production, and the politics of 
              representation in our contemporary world. As we navigate these complex terrain, 
              it becomes clear that intellectual decolonization is not merely an academic exercise 
              but a vital project for the Muslim ummah.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              Through engagement with both primary sources and secondary literature, this piece 
              seeks to contribute to ongoing conversations about the future of Muslim intellectual 
              life. The challenges are significant, but so too are the resources available within 
              our own tradition for meeting them.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {['Philosophy', 'Islamic Thought', 'Analysis', 'Contemporary'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[11px] rounded-full font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-medium text-sm active:bg-emerald-700 transition-colors shadow-sm">
              <span>📖</span> Read Full Article
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 active:bg-gray-200 transition-colors">
              🔖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
