import { FolderGit2, Info, Layers, Mail, Menu, User, X } from 'lucide-react';
import { useMemo, useState, type ReactNode } from 'react';
import { useI18n } from '../hooks/useI18n';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

type NavItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const scrollToSection = useScrollToSection();
  const { t } = useI18n();

  const items: NavItem[] = useMemo(
    () => [
      { id: 'about', label: t('nav.about'), icon: <User size={16} /> },
      { id: 'info', label: t('nav.info'), icon: <Info size={16} /> },
      { id: 'projects', label: t('nav.projects'), icon: <FolderGit2 size={16} /> },
      { id: 'stacks', label: t('nav.stacks'), icon: <Layers size={16} /> },
      { id: 'contact', label: t('nav.contact'), icon: <Mail size={16} /> },
    ],
    [t],
  );

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 backdrop-blur-xl sm:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={16} />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        } sm:hidden`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-80 max-w-[85vw] border-r border-white/10 bg-gradient-to-b from-primary/25 to-black/10 p-4 backdrop-blur-xl transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:w-72`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary/30 ring-1 ring-white/10" />
            <div className="leading-tight">
              <p className="text-sm font-bold text-white/95">Portfolio</p>
              <p className="text-xs text-white/60">Software Developer</p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/90 hover:bg-white/10 transition sm:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>
        </div>

        <nav className="mt-6 space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                scrollToSection(item.id);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-2 text-left text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85">
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}

