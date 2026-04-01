import { FolderGit2, Info, Layers, Mail, User } from 'lucide-react';
import { useMemo, type ReactNode } from 'react';
import { useI18n } from '../hooks/useI18n';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { LanguageToggle } from './LanguageToggle';

type NavItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

export function TopNavbar() {
  const { t } = useI18n();
  const scrollToSection = useScrollToSection();

  const items: NavItem[] = useMemo(
    () => [
      { id: 'about', label: t('nav.about'), icon: <User size={14} /> },
      { id: 'info', label: t('nav.info'), icon: <Info size={14} /> },
      { id: 'projects', label: t('nav.projects'), icon: <FolderGit2 size={14} /> },
      { id: 'stacks', label: t('nav.stacks'), icon: <Layers size={14} /> },
      { id: 'contact', label: t('nav.contact'), icon: <Mail size={14} /> },
    ],
    [t],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto grid max-w-screen-xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3">
        <div />
        <nav className="flex items-center justify-center gap-2 overflow-x-auto">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/10"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-2">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

