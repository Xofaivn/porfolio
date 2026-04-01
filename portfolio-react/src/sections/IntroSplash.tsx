import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type Phase = 'text' | 'split';

export function IntroSplash({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>('text');
  const [showText, setShowText] = useState(true);
  const phrase = 'From Xofai with love';

  const timing = useMemo(
    () => ({
      textFadeOutAtMs: 2300,
      splitStartAtMs: 2700,
      doneAtMs: 3900,
    }),
    [],
  );

  useEffect(() => {
    const t1 = window.setTimeout(() => setShowText(false), timing.textFadeOutAtMs);
    const t2 = window.setTimeout(() => setPhase('split'), timing.splitStartAtMs);
    const t3 = window.setTimeout(() => onDone(), timing.doneAtMs);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [onDone, timing.doneAtMs, timing.splitStartAtMs, timing.textFadeOutAtMs]);

  return (
    <section className="fixed inset-0 z-[100] bg-black" aria-label="Intro">
      <motion.div
        className="pointer-events-none absolute inset-0 grid place-items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 1 : 0 }}
        transition={{ duration: 0.65, ease: 'easeInOut' }}
      >
        <div className="relative">
          <motion.p
            className="text-2xl font-medium tracking-[0.08em] text-white/90 sm:text-4xl"
            initial={{ filter: 'blur(8px)', scale: 0.98, opacity: 0 }}
            animate={{ filter: 'blur(0px)', scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {phrase.split('').map((char, idx) => (
              <motion.span
                key={`${char}-${idx}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.45, ease: 'easeOut' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            className="mx-auto mt-3 h-px w-0 bg-white/35"
            initial={{ width: 0 }}
            animate={{ width: '68%' }}
            transition={{ delay: 0.35, duration: 0.65, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 h-[50vh] w-full bg-black"
        initial={{ y: 0 }}
        animate={{ y: phase === 'split' ? '-100%' : 0 }}
        transition={{ duration: 1.05, ease: 'circOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[50vh] w-full bg-black"
        initial={{ y: 0 }}
        animate={{ y: phase === 'split' ? '100%' : 0 }}
        transition={{ duration: 1.05, ease: 'circOut' }}
      />
    </section>
  );
}

