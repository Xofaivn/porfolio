import { motion } from 'framer-motion';

interface Bokeh {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const generateBokehElements = (): Bokeh[] => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 80 + 40,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.50 + 0.05,
  }));
};

export function BokehBackground() {
  const bokehElements = generateBokehElements();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {bokehElements.map((bokeh) => (
        <motion.div
          key={bokeh.id}
          className="absolute rounded-full blur-3xl"
          style={{
            left: bokeh.left,
            top: bokeh.top,
            width: bokeh.size,
            height: bokeh.size,
            background: `radial-gradient(circle, ${bokeh.id % 2 === 0 ? 'rgba(0, 150, 136, 1)' : 'rgba(0, 188, 212, 0.9)'}, transparent)`,
            opacity: bokeh.opacity,
            mixBlendMode: 'screen',
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            scale: [1, Math.random() * 1.2 + 0.6, Math.random() * 1.2 + 0.6, 1],
          }}
          transition={{
            duration: bokeh.duration,
            delay: bokeh.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
