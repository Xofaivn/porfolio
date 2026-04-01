import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useI18n } from '../hooks/useI18n';

export function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={t('common.backToTop')}
      title={t('common.backToTop')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 shadow-soft backdrop-blur-xl transition-opacity ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      } hover:bg-white/10`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

