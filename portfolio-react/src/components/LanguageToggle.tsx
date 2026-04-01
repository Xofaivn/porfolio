import { Globe } from 'lucide-react';
import { useLanguageMode } from '../hooks/useLanguageMode';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, toggleLanguage } = useLanguageMode();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition ${className}`}
      aria-label="Toggle language"
      title="Toggle language"
    >
      <Globe size={16} />
      <span className="w-6 text-center">{language === 'en' ? 'EN' : 'VI'}</span>
    </button>
  );
}

