import { type ReactNode } from 'react';
import Reveal from '@/components/Reveal';

/**
 * SectionHeading — consistent eyebrow + title block used across sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-nebula-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
