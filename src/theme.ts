export const colors = {
  primary: '#0056D2', // Authentic Royal Blue from logo
  primaryDark: '#020D34', // Deep Navy from site header/footer
  primaryLight: '#0062E0', // Vibrant Blue
  primaryGradient: ['#0056D2', '#003E99', '#020D34'] as const,
  accentPurple: '#7118FF',
  accentCyan: '#00D2FF',
  accentAmber: '#d97706',
  background: '#f8fafc',
  card: '#ffffff',
  text: '#0f172a',
  textSecondary: '#64748b',
  textMuted: '#94a3b8',
  border: '#e2e8f0',
};

export function getGradientColors(gradientClass?: string): readonly [string, string, ...string[]] {
  if (!gradientClass) return ['#0056D2', '#020D34'];
  
  if (gradientClass.includes('from-blue-600') || gradientClass.includes('from-blue-500')) {
    return ['#0056D2', '#003E99', '#020D34'];
  }
  if (gradientClass.includes('from-emerald-600') || gradientClass.includes('from-teal-600')) {
    return ['#059669', '#0f766e', '#020D34'];
  }
  if (gradientClass.includes('from-gray-700') || gradientClass.includes('from-slate-600')) {
    return ['#1e293b', '#0f172a', '#020D34'];
  }
  if (gradientClass.includes('from-amber-600') || gradientClass.includes('from-amber-500')) {
    return ['#d97706', '#b45309', '#78350f'];
  }
  if (gradientClass.includes('from-purple-500') || gradientClass.includes('from-violet-600')) {
    return ['#7118FF', '#581c87', '#020D34'];
  }
  if (gradientClass.includes('from-rose-600') || gradientClass.includes('from-red-500')) {
    return ['#e11d48', '#be185d', '#881337'];
  }
  if (gradientClass.includes('from-sky-600')) {
    return ['#0284c7', '#0056D2', '#020D34'];
  }
  if (gradientClass.includes('from-yellow-600')) {
    return ['#ca8a04', '#b45309', '#c2410c'];
  }
  if (gradientClass.includes('from-indigo-600')) {
    return ['#4338ca', '#312e81', '#020D34'];
  }
  if (gradientClass.includes('from-cyan-600')) {
    return ['#0891b2', '#0e7490', '#020D34'];
  }
  if (gradientClass.includes('from-green-500')) {
    return ['#16a34a', '#15803d', '#14532d'];
  }

  return ['#0056D2', '#020D34'];
}

export function getCategoryBadgeStyle(categoryColorClass?: string): { bg: string; text: string } {
  if (!categoryColorClass) return { bg: '#eff6ff', text: '#0056D2' };
  
  if (categoryColorClass.includes('blue')) {
    return { bg: '#dbeafe', text: '#0056D2' };
  }
  if (categoryColorClass.includes('purple')) {
    return { bg: '#f3e8ff', text: '#7118FF' };
  }
  if (categoryColorClass.includes('red')) {
    return { bg: '#fee2e2', text: '#b91c1c' };
  }
  if (categoryColorClass.includes('slate')) {
    return { bg: '#f1f5f9', text: '#334155' };
  }
  if (categoryColorClass.includes('emerald') || categoryColorClass.includes('teal')) {
    return { bg: '#ccfbf1', text: '#0f766e' };
  }
  if (categoryColorClass.includes('green')) {
    return { bg: '#dcfce7', text: '#15803d' };
  }
  if (categoryColorClass.includes('amber')) {
    return { bg: '#fef3c7', text: '#b45309' };
  }
  return { bg: '#eff6ff', text: '#0056D2' };
}
