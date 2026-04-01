import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { stacksByLang } from '../content/siteData';
import { useI18n } from '../hooks/useI18n';
import { useLanguageMode } from '../hooks/useLanguageMode';

export function StacksSection() {
  const { t } = useI18n();
  const { language } = useLanguageMode();

  return (
    <section id="stacks" className="scroll-mt-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white/95 sm:text-3xl">{t('sections.stacks.title')}</h2>
        </motion.div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {stacksByLang[language].map((g) => (
            <GlassCard key={g.title} className="h-full">
              <p className="text-sm font-bold text-white/95">{g.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

