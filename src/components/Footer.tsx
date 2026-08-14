import { footer } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 sm:px-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-nebula-purple to-nebula-blue font-display text-base font-bold text-white shadow-glow">
          {footer.name.split(' ').map((w) => w[0]).join('')}
        </div>
        <p className="font-display text-lg font-semibold text-white">{footer.name}</p>
        <p className="text-sm text-slate-400">{footer.tagline}</p>

        <div className="flex items-center gap-4">
          {footer.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              aria-label={l.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-nebula-cyan/40 hover:text-nebula-cyan hover:shadow-glow-cyan"
            >
              <l.icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {footer.name}. Built with React, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
