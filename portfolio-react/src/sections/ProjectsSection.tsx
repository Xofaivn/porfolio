import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../content/siteData';
import { useI18n } from '../hooks/useI18n';
import { useLanguageMode } from '../hooks/useLanguageMode';

export function ProjectsSection() {
  const { t } = useI18n();
  const { language } = useLanguageMode();

  return (
    <section id="projects" className="scroll-mt-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white/95 sm:text-3xl">{t('sections.projects.title')}</h2>
          <p className="mt-2 text-sm text-white/70 sm:text-base">
            {language === 'vi'
              ? 'Click vào mỗi project để mở GitHub trong tab mới.'
              : 'Click a project to open its GitHub link in a new tab.'}
          </p>
        </motion.div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.githubUrl} className="h-full">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

