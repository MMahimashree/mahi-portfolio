import { type ReactNode } from 'react';

/**
 * Section — semantic wrapper with consistent vertical rhythm + radial glow.
 */
export default function Section({
  id,
  children,
  className = '',
  glow = false,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      {glow && (
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 -translate-y-1/3 rounded-full bg-nebula-purple/10 blur-[100px]" />
      )}
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
