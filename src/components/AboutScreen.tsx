export default function AboutScreen() {
  return (
    <div className="pb-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 px-5 pt-8 pb-10 text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shadow-lg">
          <span className="text-4xl">🕌</span>
        </div>
        <h1 className="text-white text-2xl font-bold mt-4">The Muslim Minds</h1>
        <p className="text-emerald-200 text-sm mt-1">Intellectual Discourse & Analysis</p>
        <p className="text-emerald-300/70 text-xs mt-2 max-w-xs mx-auto">
          Exploring philosophy, history, politics, and Islamic thought through rigorous intellectual discourse.
        </p>
      </div>

      {/* Stats */}
      <div className="mx-5 -mt-5 bg-white rounded-2xl shadow-lg p-4 grid grid-cols-3 gap-3">
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-700">100+</p>
          <p className="text-[10px] text-gray-500 mt-0.5">Articles</p>
        </div>
        <div className="text-center border-x border-gray-100">
          <p className="text-2xl font-bold text-emerald-700">50+</p>
          <p className="text-[10px] text-gray-500 mt-0.5">Videos</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-700">30+</p>
          <p className="text-[10px] text-gray-500 mt-0.5">Speakers</p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-5 mt-6">
        <h3 className="text-gray-900 font-bold text-base mb-2">About Us</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          The Muslim Minds is a platform dedicated to fostering critical intellectual discourse 
          within the Muslim community. We explore philosophy, history, political thought, 
          decolonial studies, and Islamic tradition through rigorous analysis and diverse perspectives.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-3">
          Our mission is to decolonize knowledge systems and provide a space for authentic 
          Muslim intellectual engagement with contemporary issues.
        </p>
      </div>

      {/* Mission */}
      <div className="px-5 mt-6">
        <h3 className="text-gray-900 font-bold text-base mb-3">Our Focus Areas</h3>
        <div className="space-y-2">
          {[
            { icon: '📚', title: 'Philosophy & Political Thought', desc: 'Critical engagement with Western and Islamic philosophical traditions' },
            { icon: '🏛️', title: 'History & Decolonial Studies', desc: 'Re-examining history through decolonial frameworks' },
            { icon: '🌍', title: 'Geopolitics & Contemporary Analysis', desc: 'Understanding current events through Islamic perspectives' },
            { icon: '🕌', title: 'Islamic Thought & Tradition', desc: 'Exploring the richness of Islamic intellectual heritage' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
              <span className="text-xl">{item.icon}</span>
              <div>
                <h4 className="text-gray-900 font-semibold text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diploma Program */}
      <div className="px-5 mt-6">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎓</span>
            <div>
              <h4 className="text-amber-900 font-bold text-sm">Diploma Program 2026</h4>
              <p className="text-amber-700 text-xs mt-1 leading-relaxed">
                Critical Social Thought & Islamic Tradition — A comprehensive program 
                exploring the intersections of modern social theory and Islamic intellectual heritage.
              </p>
              <button className="mt-3 bg-amber-600 text-white text-xs font-medium px-4 py-2 rounded-lg active:bg-amber-700 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="px-5 mt-6">
        <h3 className="text-gray-900 font-bold text-base mb-3">Connect With Us</h3>
        <div className="flex gap-3">
          {[
            { icon: '🌐', label: 'Website' },
            { icon: '📧', label: 'Email' },
            { icon: '📱', label: 'Social' },
            { icon: '🎙️', label: 'Podcast' },
          ].map((item, idx) => (
            <button
              key={idx}
              className="flex-1 flex flex-col items-center gap-1 p-3 rounded-xl bg-gray-50 border border-gray-100 active:bg-gray-100 transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] text-gray-600 font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 mt-8 text-center">
        <p className="text-gray-400 text-xs">© 2026 The Muslim Minds</p>
        <p className="text-gray-300 text-[10px] mt-1">themuslimminds.org</p>
      </div>
    </div>
  );
}
