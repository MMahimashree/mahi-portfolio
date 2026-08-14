import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navItems, personal, links } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2"
          aria-label="Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-nebula-purple to-nebula-blue font-display text-sm font-bold text-white shadow-glow transition-transform group-hover:scale-105">
            {personal.initials}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNav(item.href)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.href
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {active === item.href && (
                  <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-nebula-cyan to-transparent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:border-nebula-cyan/50 hover:bg-nebula-cyan/10 hover:shadow-glow-cyan sm:flex"
          >
            <Sparkles className="h-3.5 w-3.5 text-nebula-cyan" />
            Let's Connect
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          open ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <ul className="glass-strong mx-4 mb-4 flex flex-col gap-1 rounded-2xl p-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNav(item.href)}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  active === item.href
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-blue px-4 py-3 text-sm font-semibold text-white"
            >
              <Sparkles className="h-4 w-4" /> Let's Connect
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
