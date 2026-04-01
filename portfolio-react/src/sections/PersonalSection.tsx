import { motion } from 'framer-motion';
import avtImage from '../assets/avt.jpg';
import { profile } from '../content/siteData';
import { useI18n } from '../hooks/useI18n';
import { useLanguageMode } from '../hooks/useLanguageMode';

export function PersonalSection() {
  const { t } = useI18n();
  const { language } = useLanguageMode();

  return (
    <section id="about" className="scroll-mt-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl sm:p-10"
        >
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-5">
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-32 sm:w-28">
                <img
                  src={avtImage}
                  alt={`${profile.name} avatar`}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  {profile.location}
                </p>
                <h1 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {profile.headline[language]}
                </h1>
                <p className="mt-3 text-sm text-white/70 sm:text-base">{t('sections.about.subtitle')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

