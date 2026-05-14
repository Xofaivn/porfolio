import { motion } from 'framer-motion';
import type { Project } from '../content/siteData';
import { useLanguageMode } from '../hooks/useLanguageMode';

const cardClass =
  'group block h-full rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-xl';

const springTransition = { type: 'spring', stiffness: 260, damping: 20 } as const;

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguageMode();

  const body = (
    <>
      <h3 className="text-lg font-semibold text-white/95">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        {project.descriptionByLang[language]}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary/80"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );

  if (project.githubUrl) {
    return (
      <motion.a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={springTransition}
        className={cardClass}
      >
        {body}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={springTransition}
      className={cardClass}
    >
      {body}
    </motion.div>
  );
}
