import type { Screen } from '../App';

interface BottomNavProps {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  const navItems: { id: Screen; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'topics', label: 'Topics', icon: '📂' },
    { id: 'videos', label: 'Videos', icon: '▶️' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <nav className="bg-white border-t border-gray-200 px-2 pt-2 pb-6 safe-bottom shrink-0">
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl transition-all ${
              active === item.id
                ? 'text-emerald-700 scale-105'
                : 'text-gray-400'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
            {active === item.id && (
              <div className="w-1 h-1 rounded-full bg-emerald-600 mt-0.5" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
