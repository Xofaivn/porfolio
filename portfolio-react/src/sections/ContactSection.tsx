import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { profile, socialLinksByLang } from '../content/siteData';
import { useI18n } from '../hooks/useI18n';
import { useLanguageMode } from '../hooks/useLanguageMode';

export function ContactSection() {
  const { t } = useI18n();
  const { language } = useLanguageMode();

  const emailLink = socialLinksByLang[language].find((s) => s.href.startsWith('mailto:'));
  const email = emailLink?.href.replace('mailto:', '') ?? 'your-email@example.com';

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white/95 sm:text-3xl">{t('sections.contact.title')}</h2>
          <p className="mt-2 text-sm text-white/70 sm:text-base">{t('sections.contact.subtitle')}</p>
        </motion.div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <GlassCard className="h-full">
            <div className="flex flex-col justify-evenly h-full">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/25 ring-1 ring-white/10">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white/95">Phone</p>
                  <p className="text-xs text-white/60">{profile.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/25 ring-1 ring-white/10">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white/95">Personal Email</p>
                  <p className="text-xs text-white/60">{profile.personalEmail}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/25 ring-1 ring-white/10">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white/95">Email</p>
                  <p className="text-xs text-white/60">{email}</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="h-full">
            <p className="text-sm font-bold text-white/95">{language === 'vi' ? 'Social links' : 'Social links'}</p>
            <div className="mt-4 grid gap-2">
              {socialLinksByLang[language].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  <span>{s.label}</span>
                  <span className="text-xs text-white/60">↗</span>
                </a>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

