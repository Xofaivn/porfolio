import { motion } from 'framer-motion';
import { GitBranch, Mail, ShieldCheck, Star } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { awardsByLang, education, englishCertificatesByLang, gpa } from '../content/siteData';
import { useI18n } from '../hooks/useI18n';
import { useLanguageMode } from '../hooks/useLanguageMode';
import bachKhoaLogo from '../assets/logobachkhoa.png';


function SocialIcon({ label }: { label: string }) {
  const lower = label.toLowerCase();
  if (lower.includes('github')) return <GitBranch size={16} />;
  if (lower.includes('linkedin')) return <Star size={16} />;
  if (lower.includes('email')) return <Mail size={16} />;
  return <ShieldCheck size={16} />;
}

export function InfoSection() {
  const { t } = useI18n();
  const { language } = useLanguageMode();

  return (
    <section id="info" className="scroll-mt-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-white/95 sm:text-3xl">{t('sections.info.title')}</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-1">
          <GlassCard>
            <div className="flex items-center gap-2 mb-3">
              <a href="https://hcmut.edu.vn/" target="_blank" rel="noopener noreferrer"
                className="h-24 w-24 shrink-0 rounded-lg flex items-center justify-center"
              >
                <img
                  src={bachKhoaLogo}
                  alt="Bach Khoa logo"
                  className="h-full w-full object-contain hover:opacity-80 transition-opacity cursor-pointer"
                />
              </a>
              <div>
                <p className="text-sm font-bold text-white/95">{education.degreeByLang[language]}</p>
                <p className="text-xs text-white/70 mt-1">{education.schoolFullNameByLang[language]}</p>
                <p className="text-xs text-white/60 mt-1">{education.levelByLang[language]} • {education.startDate} - {education.endDate}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-3">

              <div className="border-t border-white/10 pt-3">
                <p className="text-sm font-bold text-white/95 mb-1">{language === 'vi' ? 'Hiệu suất' : 'Performance'}</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-white/95">GPA</p>
                  <span className="text-sm font-semibold text-primary/90">{gpa}</span>
                </div>
              </div>
            </div>

            <p className="text-sm font-bold text-white/95">English Certificates</p>
            <div className="mt-3 flex flex-col gap-2">
              {englishCertificatesByLang[language].map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                    <ShieldCheck size={16} />
                  </span>
                  <p className="text-sm font-semibold text-white/80">{c}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <p className="text-sm font-bold text-white/95">Awards</p>
            <div className="mt-3 flex flex-col gap-2">
              {awardsByLang[language].map((a) => (
                <div key={a} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <Star size={16} />
                  </span>
                  <p className="text-sm font-semibold text-white/80">{a}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}