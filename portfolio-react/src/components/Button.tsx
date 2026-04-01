import type React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60';
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white shadow-soft hover:bg-secondary'
      : 'bg-transparent text-white/90 hover:bg-white/10 border border-white/10';

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

