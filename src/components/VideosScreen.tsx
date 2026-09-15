export default function VideosScreen() {
  const videos = [
    {
      id: 1,
      title: 'Bengali Nationalism and Hindutva Narrative Interaction',
      duration: '45:20',
      speaker: 'Dr. Mahmudur Rahman',
      views: '12.4K',
      gradient: 'from-blue-600 to-indigo-800',
    },
    {
      id: 2,
      title: 'The Crisis of Language in Modern Civilization',
      duration: '38:15',
      speaker: 'Musa Al Hafij',
      views: '8.7K',
      gradient: 'from-emerald-600 to-teal-800',
    },
    {
      id: 3,
      title: 'Coloniality and Modern Knowledge Systems',
      duration: '52:30',
      speaker: 'Editorial Team',
      views: '15.2K',
      gradient: 'from-purple-600 to-violet-800',
    },
    {
      id: 4,
      title: 'Islam and Sharia Governance: Legal Analysis',
      duration: '41:45',
      speaker: 'Naim Hasan',
      views: '6.3K',
      gradient: 'from-amber-600 to-orange-800',
    },
    {
      id: 5,
      title: 'Turkey Defense Industry & Geopolitics',
      duration: '55:10',
      speaker: 'Editorial Team',
      views: '21.8K',
      gradient: 'from-slate-600 to-gray-800',
    },
    {
      id: 6,
      title: 'Civil Disobedience and Political Resistance',
      duration: '33:25',
      speaker: 'Editorial Team',
      views: '9.1K',
      gradient: 'from-rose-600 to-pink-800',
    },
  ];

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900">Videos</h1>
        <p className="text-gray-500 text-sm mt-0.5">Lectures, interviews & discussions</p>
      </div>

      {/* Featured Video */}
      <div className="px-5 mt-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-900 h-48 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
              <span className="text-white text-3xl ml-1">▶</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">LIVE</span>
            <h3 className="text-white font-bold text-sm mt-1.5">New Diploma Program 2026 — Introduction</h3>
            <p className="text-white/70 text-xs mt-0.5">Critical Social Thought & Islamic Tradition</p>
          </div>
        </div>
      </div>

      {/* Video List */}
      <div className="mt-5 px-5">
        <h3 className="text-gray-900 font-bold text-base mb-3">Recent Videos</h3>
        <div className="space-y-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex gap-3 p-2 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer active:bg-gray-50 transition-colors"
            >
              <div className={`relative w-28 h-20 rounded-lg bg-gradient-to-br ${video.gradient} shrink-0 flex items-center justify-center`}>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-sm ml-0.5">▶</span>
                </div>
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="flex-1 min-w-0 py-0.5">
                <h4 className="text-gray-900 font-semibold text-sm leading-tight line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-gray-500 text-[11px] mt-1.5">{video.speaker}</p>
                <p className="text-gray-400 text-[10px] mt-0.5">{video.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
