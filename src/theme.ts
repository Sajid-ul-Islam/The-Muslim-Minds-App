export const colors = {
  primary: '#059669', // emerald-600
  primaryDark: '#065f46', // emerald-800
  primaryGradient: ['#047857', '#065f46', '#134e4a'] as const,
  background: '#f8fafc',
  card: '#ffffff',
  text: '#0f172a',
  textSecondary: '#64748b',
  textMuted: '#94a3b8',
  border: '#e2e8f0',
  accentAmber: '#d97706',
};

export function getGradientColors(gradientClass?: string): readonly [string, string, ...string[]] {
  if (!gradientClass) return ['#059669', '#0d9488'];
  
  if (gradientClass.includes('from-blue-600')) {
    return ['#2563eb', '#4338ca', '#6b21a8'];
  }
  if (gradientClass.includes('from-emerald-600')) {
    return ['#059669', '#0f766e', '#155e75'];
  }
  if (gradientClass.includes('from-gray-700') || gradientClass.includes('from-slate-600')) {
    return ['#374151', '#1e293b', '#0f172a'];
  }
  if (gradientClass.includes('from-amber-600')) {
    return ['#d97706', '#c2410c', '#991b1b'];
  }
  if (gradientClass.includes('from-violet-600')) {
    return ['#7c3aed', '#7e22ce', '#3730a3'];
  }
  if (gradientClass.includes('from-rose-600')) {
    return ['#e11d48', '#be185d', '#86198f'];
  }
  if (gradientClass.includes('from-sky-600')) {
    return ['#0284c7', '#1d4ed8', '#3730a3'];
  }
  if (gradientClass.includes('from-yellow-600')) {
    return ['#ca8a04', '#b45309', '#c2410c'];
  }
  if (gradientClass.includes('from-teal-600') || gradientClass.includes('from-emerald-700')) {
    return ['#047857', '#0f766e', '#065f46'];
  }
  if (gradientClass.includes('from-stone-600')) {
    return ['#57534e', '#404040', '#18181b'];
  }
  if (gradientClass.includes('from-indigo-600')) {
    return ['#4f46e5', '#6d28d9', '#581c87'];
  }
  if (gradientClass.includes('from-cyan-600')) {
    return ['#0891b2', '#0f766e', '#065f46'];
  }
  if (gradientClass.includes('from-emerald-500')) {
    return ['#10b981', '#0d9488'];
  }
  if (gradientClass.includes('from-amber-500')) {
    return ['#f59e0b', '#ea580c'];
  }
  if (gradientClass.includes('from-purple-500') || gradientClass.includes('from-purple-600')) {
    return ['#a855f7', '#6366f1'];
  }
  if (gradientClass.includes('from-blue-500')) {
    return ['#3b82f6', '#06b6d4'];
  }
  if (gradientClass.includes('from-red-500')) {
    return ['#ef4444', '#e11d48'];
  }
  if (gradientClass.includes('from-slate-500')) {
    return ['#64748b', '#374151'];
  }
  if (gradientClass.includes('from-green-500')) {
    return ['#22c55e', '#059669'];
  }

  return ['#059669', '#0f766e'];
}

export function getCategoryBadgeStyle(categoryColorClass?: string): { bg: string; text: string } {
  if (!categoryColorClass) return { bg: '#e2e8f0', text: '#334155' };
  
  if (categoryColorClass.includes('blue')) {
    return { bg: '#dbeafe', text: '#1e40af' };
  }
  if (categoryColorClass.includes('red')) {
    return { bg: '#fee2e2', text: '#991b1b' };
  }
  if (categoryColorClass.includes('slate')) {
    return { bg: '#f1f5f9', text: '#334155' };
  }
  if (categoryColorClass.includes('emerald')) {
    return { bg: '#d1fae5', text: '#065f46' };
  }
  if (categoryColorClass.includes('green')) {
    return { bg: '#dcfce7', text: '#166534' };
  }
  if (categoryColorClass.includes('amber')) {
    return { bg: '#fef3c7', text: '#92400e' };
  }
  if (categoryColorClass.includes('teal')) {
    return { bg: '#ccfbf1', text: '#115e59' };
  }
  return { bg: '#e0f2fe', text: '#0369a1' };
}
