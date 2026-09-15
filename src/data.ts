export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  categoryColor: string;
  imageGradient: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'philosophy', name: 'Philosophy', count: 12, icon: '📚', color: 'from-emerald-500 to-teal-600' },
  { id: 'history', name: 'History', count: 9, icon: '🏛️', color: 'from-amber-500 to-orange-600' },
  { id: 'literature', name: 'Literature', count: 5, icon: '✍️', color: 'from-purple-500 to-indigo-600' },
  { id: 'contemporary', name: 'Contemporary Analysis', count: 15, icon: '🔍', color: 'from-blue-500 to-cyan-600' },
  { id: 'political', name: 'Political Philosophy', count: 8, icon: '⚖️', color: 'from-red-500 to-rose-600' },
  { id: 'geopolitics', name: 'Geopolitics', count: 7, icon: '🌍', color: 'from-slate-500 to-gray-700' },
  { id: 'decolonial', name: 'Decolonial Thought', count: 6, icon: '🌱', color: 'from-green-500 to-emerald-600' },
  { id: 'islamic-thought', name: 'Islamic Thought', count: 10, icon: '🕌', color: 'from-teal-500 to-cyan-700' },
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'The Crisis of Language in Modern Civilization',
    excerpt: 'When a civilization loses its language, it loses the ability to interpret its world. Language is not merely a messenger of communication; it is the grammar of existence...',
    author: 'Musa Al Hafij',
    date: 'Aug 11, 2026',
    category: 'Contemporary Analysis',
    categoryColor: 'bg-blue-100 text-blue-800',
    imageGradient: 'from-blue-600 via-indigo-700 to-purple-800',
  },
  {
    id: 2,
    title: 'Islam and Sharia Governance in Malaysian Constitution',
    excerpt: 'A comparative constitutional law analysis of the position of Islam in the Malaysian constitution and the framework of Sharia governance presents a fascinating study...',
    author: 'Naim Hasan',
    date: 'Jun 26, 2026',
    category: 'Political Philosophy',
    categoryColor: 'bg-red-100 text-red-800',
    imageGradient: 'from-emerald-600 via-teal-700 to-cyan-800',
  },
  {
    id: 3,
    title: 'Turkey\'s Defense Industry Development & Geopolitics',
    excerpt: 'Turkey\'s military rise — Full report and statistics. Late 2020. War is ongoing in the mountainous region of Nagorno-Karabakh. The world witnessed something entirely new...',
    author: 'Editorial Team',
    date: 'Jun 15, 2026',
    category: 'Geopolitics',
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
    categoryColor: 'bg-emerald-100 text-emerald-800',
    imageGradient: 'from-amber-600 via-orange-700 to-red-800',
  },
  {
    id: 5,
    title: 'Coloniality and the Construction of Modern Knowledge Systems',
    excerpt: 'Michael Lind recently wrote in London\'s center-right publication UnHerd that Western civilization is crumbling from within. This is not surprising...',
    author: 'Editorial Team',
    date: 'May 21, 2026',
    category: 'Decolonial Thought',
    categoryColor: 'bg-green-100 text-green-800',
    imageGradient: 'from-violet-600 via-purple-700 to-indigo-800',
  },
  {
    id: 6,
    title: 'The Methodological Racism in Philosophy',
    excerpt: 'The racist perspectives of several renowned modern philosophers are now well known. John Locke, David Hume, Immanuel Kant, or G.W.F...',
    author: 'Editorial Team',
    date: 'May 19, 2026',
    category: 'Philosophy',
    categoryColor: 'bg-emerald-100 text-emerald-800',
    imageGradient: 'from-rose-600 via-pink-700 to-fuchsia-800',
  },
  {
    id: 7,
    title: 'The Value of Philosophy — Bertrand Russell',
    excerpt: 'What is the main identity of philosophy, and why should we study it? This question is especially important to raise. Because of the influence of science...',
    author: 'Bertrand Russell',
    date: 'Aug 4, 2026',
    category: 'Philosophy',
    categoryColor: 'bg-emerald-100 text-emerald-800',
    imageGradient: 'from-sky-600 via-blue-700 to-indigo-800',
  },
  {
    id: 8,
    title: 'Bengal\'s Globalization and the Golden Fiber Tragedy',
    excerpt: '1872. Rahim Sheikh, a marginal farmer in Faridpur district of East Bengal. His ancestors have been cultivating rice on the same land for generations...',
    author: 'Abdullah Al-Madani',
    date: 'Aug 16, 2026',
    category: 'History',
    categoryColor: 'bg-amber-100 text-amber-800',
    imageGradient: 'from-yellow-600 via-amber-700 to-orange-800',
  },
  {
    id: 9,
    title: 'Waqf: Institutional Political Economy of Sultanate Bengal',
    excerpt: 'In almost every district of Bangladesh, one can find lands, shops, ponds, or buildings whose owners are not any individual or family...',
    author: 'Abdullah Al-Madani',
    date: 'Aug 6, 2026',
    category: 'History',
    categoryColor: 'bg-amber-100 text-amber-800',
    imageGradient: 'from-teal-600 via-emerald-700 to-green-800',
  },
  {
    id: 10,
    title: 'The Origin of the Work of Art — Martin Heidegger',
    excerpt: 'Martin Heidegger\'s "The Origin of the Work of Art" is one of the most epoch-making texts in 20th-century aesthetics and philosophy...',
    author: 'Martin Heidegger',
    date: 'Jul 28, 2026',
    category: 'Philosophy',
    categoryColor: 'bg-emerald-100 text-emerald-800',
    imageGradient: 'from-stone-600 via-neutral-700 to-zinc-800',
  },
  {
    id: 11,
    title: 'Imagined Communities: Origin and Spread of Nationalism',
    excerpt: 'In discussions of nationalism, nation-state, and modern political identity, Benedict Anderson\'s timeless work "Imagined Communities" remains essential...',
    author: 'Editorial Team',
    date: 'Aug 10, 2026',
    category: 'Political Philosophy',
    categoryColor: 'bg-red-100 text-red-800',
    imageGradient: 'from-indigo-600 via-violet-700 to-purple-800',
  },
  {
    id: 12,
    title: 'Does God Exist? — Kalam Cosmological Argument',
    excerpt: 'One of the oldest and most important questions of human civilization is — does God truly exist? Humans have been trying to answer this since prehistoric times...',
    author: 'Mir Salman Shamyl',
    date: 'Sep 2, 2026',
    category: 'Islamic Thought',
    categoryColor: 'bg-teal-100 text-teal-800',
    imageGradient: 'from-cyan-600 via-teal-700 to-emerald-800',
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
