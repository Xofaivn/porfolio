import type React from 'react';

export function GlassCard({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

