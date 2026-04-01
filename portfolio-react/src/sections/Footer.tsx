import { useI18n } from '../hooks/useI18n';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs text-white/60">{t('footer.license')}</p>
      </div>
    </footer>
  );
}

