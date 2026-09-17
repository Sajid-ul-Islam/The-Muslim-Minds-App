export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  categoryBn?: string;
  categoryColor: string;
  imageGradient: string;
}

export interface Category {
  id: string;
  name: string;
  nameBn: string;
  count: number;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'philosophy', name: 'Philosophy', nameBn: 'দর্শন', count: 18, icon: '📚', color: 'from-blue-600 to-indigo-800' },
  { id: 'history', name: 'History', nameBn: 'ইতিহাস', count: 14, icon: '🏛️', color: 'from-amber-600 to-orange-800' },
  { id: 'literature', name: 'Literature', nameBn: 'সাহিত্য', count: 9, icon: '✍️', color: 'from-purple-500 to-violet-700' },
  { id: 'modernism', name: 'Modernity', nameBn: 'মডার্নিটি', count: 16, icon: '⚡', color: 'from-sky-600 to-blue-800' },
  { id: 'atheism', name: 'Atheism & Doubts', nameBn: 'নাস্তিকতা', count: 8, icon: '🔬', color: 'from-rose-600 to-red-800' },
  { id: 'orientalism', name: 'Orientalism', nameBn: 'প্রাচ্যবাদ', count: 7, icon: '📜', color: 'from-yellow-600 to-amber-800' },
  { id: 'contemporary', name: 'Contemporary Analysis', nameBn: 'সমসাময়িক বিশ্লেষণ', count: 21, icon: '🔍', color: 'from-cyan-600 to-blue-700' },
  { id: 'islamic-thought', name: 'Islamic Thought', nameBn: 'ইসলামিক চিন্তাধারা', count: 15, icon: '🕌', color: 'from-emerald-600 to-teal-800' },
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'The Crisis of Language in Modern Civilization',
    excerpt: 'When a civilization loses its language, it loses the ability to interpret its world. Language is not merely a messenger of communication; it is the grammar of existence...',
    author: 'Musa Al Hafij',
    date: 'Aug 11, 2026',
    category: 'Contemporary Analysis',
    categoryBn: 'সমসাময়িক বিশ্লেষণ',
    categoryColor: 'bg-blue-100 text-blue-800',
    imageGradient: 'from-blue-600 via-indigo-700 to-purple-800',
  },
  {
    id: 2,
    title: 'Islam and Sharia Governance in Malaysian Constitution',
    excerpt: 'A comparative constitutional law analysis of the position of Islam in the Malaysian constitution and the framework of Sharia governance presents a fascinating study...',
    author: 'Naim Hasan',
    date: 'Jun 26, 2026',
    category: 'Philosophy',
    categoryBn: 'দর্শন',
    categoryColor: 'bg-indigo-100 text-indigo-800',
    imageGradient: 'from-sky-600 via-blue-700 to-indigo-800',
  },
  {
    id: 3,
    title: "Turkey's Defense Industry Development & Geopolitics",
    excerpt: 'Turkey\'s military rise — Full report and statistics. Late 2020. War is ongoing in the mountainous region of Nagorno-Karabakh. The world witnessed something entirely new...',
    author: 'Editorial Team',
    date: 'Jun 15, 2026',
    category: 'Contemporary Analysis',
    categoryBn: 'সমসাময়িক বিশ্লেষণ',
    categoryColor: 'bg-slate-100 text-slate-800',
    imageGradient: 'from-gray-700 via-slate-800 to-zinc-900',
  },
  {
    id: 4,
    title: 'Civil Disobedience: State Apparatus, Citizen Conscience',
    excerpt: 'The foundations of the modern state system are built on the equation of legal legitimacy and sovereign power. According to Max Weber\'s definition...',
    author: 'Editorial Team',
    date: 'Jun 9, 2026',
    category: 'Philosophy',
    categoryBn: 'দর্শন',
    categoryColor: 'bg-blue-100 text-blue-800',
    imageGradient: 'from-blue-600 via-indigo-700 to-purple-800',
  },
  {
    id: 5,
    title: 'Coloniality and the Construction of Modern Knowledge Systems',
    excerpt: 'Western civilization is facing critical internal contradictions. This article examines the epistemic hegemony established during the colonial era and the urgency of intellectual decolonization...',
    author: 'Editorial Team',
    date: 'May 21, 2026',
    category: 'Modernity',
    categoryBn: 'মডার্নিটি',
    categoryColor: 'bg-purple-100 text-purple-800',
    imageGradient: 'from-purple-500 via-indigo-600 to-violet-800',
  },
  {
    id: 6,
    title: 'The Methodological Racism in Philosophy',
    excerpt: 'The racist perspectives of several renowned modern philosophers are now well scrutinized. John Locke, David Hume, Immanuel Kant, or G.W.F. Hegel...',
    author: 'Editorial Team',
    date: 'May 19, 2026',
    category: 'Philosophy',
    categoryBn: 'দর্শন',
    categoryColor: 'bg-blue-100 text-blue-800',
    imageGradient: 'from-blue-600 to-indigo-800',
  },
  {
    id: 7,
    title: 'The Value of Philosophy — Bertrand Russell',
    excerpt: 'What is the main identity of philosophy, and why should we study it? This question is especially important to raise because of the dominating influence of scientism...',
    author: 'Bertrand Russell',
    date: 'Aug 4, 2026',
    category: 'Philosophy',
    categoryBn: 'দর্শন',
    categoryColor: 'bg-blue-100 text-blue-800',
    imageGradient: 'from-sky-600 via-blue-700 to-indigo-800',
  },
  {
    id: 8,
    title: "Bengal's Globalization and the Golden Fiber Tragedy",
    excerpt: '1872. Rahim Sheikh, a marginal farmer in Faridpur district of East Bengal. His ancestors had been cultivating rice on the same land for generations until British colonial cash-crop pressures began...',
    author: 'Abdullah Al-Madani',
    date: 'Aug 16, 2026',
    category: 'History',
    categoryBn: 'ইতিহাস',
    categoryColor: 'bg-amber-100 text-amber-800',
    imageGradient: 'from-yellow-600 via-amber-700 to-orange-800',
  },
  {
    id: 9,
    title: 'Waqf: Institutional Political Economy of Sultanate Bengal',
    excerpt: 'Across Bengal, centuries-old Waqf endowments established the economic bedrock for educational institutions, hospices, and public works outside state control...',
    author: 'Abdullah Al-Madani',
    date: 'Aug 6, 2026',
    category: 'History',
    categoryBn: 'ইতিহাস',
    categoryColor: 'bg-amber-100 text-amber-800',
    imageGradient: 'from-amber-600 via-orange-700 to-red-800',
  },
  {
    id: 10,
    title: 'The Origin of the Work of Art — Martin Heidegger',
    excerpt: 'Martin Heidegger\'s "The Origin of the Work of Art" is one of the most epoch-making texts in 20th-century aesthetics and philosophy...',
    author: 'Martin Heidegger',
    date: 'Jul 28, 2026',
    category: 'Literature',
    categoryBn: 'সাহিত্য',
    categoryColor: 'bg-purple-100 text-purple-800',
    imageGradient: 'from-purple-500 to-violet-700',
  },
  {
    id: 11,
    title: 'Imagined Communities: Origin and Spread of Nationalism',
    excerpt: 'In discussions of nationalism, nation-state, and modern political identity, Benedict Anderson\'s timeless work "Imagined Communities" remains essential...',
    author: 'Editorial Team',
    date: 'Aug 10, 2026',
    category: 'Modernity',
    categoryBn: 'মডার্নিটি',
    categoryColor: 'bg-sky-100 text-sky-800',
    imageGradient: 'from-sky-600 to-blue-800',
  },
  {
    id: 12,
    title: 'Does God Exist? — Kalam Cosmological Argument',
    excerpt: 'One of the oldest and most important questions of human civilization is — does God truly exist? An examination of classical Kalam proofs and contemporary physics...',
    author: 'Mir Salman Shamyl',
    date: 'Sep 2, 2026',
    category: 'Islamic Thought',
    categoryBn: 'ইসলামিক চিন্তাধারা',
    categoryColor: 'bg-emerald-100 text-emerald-800',
    imageGradient: 'from-emerald-600 to-teal-800',
  },
];

export const featuredPosts = articles.slice(0, 5);

export const speakers = [
  { name: 'Musa Al Hafij', role: 'Scholar & Writer', initials: 'MH' },
  { name: 'Naim Hasan', role: 'Researcher', initials: 'NH' },
  { name: 'Abdullah Al-Madani', role: 'Historian', initials: 'AM' },
  { name: 'Dr. Mahmudur Rahman', role: 'Analyst', initials: 'MR' },
  { name: 'Tahmid Islam', role: 'Writer & Activist', initials: 'TI' },
  { name: 'Muhammad Nur-e-Alam', role: 'Journalist', initials: 'NA' },
];
