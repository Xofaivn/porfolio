import { Moon, Sun } from 'lucide-react';
import { useThemeMode } from '../hooks/useThemeMode';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useThemeMode();

  const Icon = theme === 'dark' ? Sun : Moon;
  const label = theme === 'dark' ? 'Light mode' : 'Dark mode';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition ${className}`}
      aria-label={label}
      title={label}
    >
      <Icon size={16} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

