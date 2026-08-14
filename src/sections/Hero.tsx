import { useState } from 'react';
import { ArrowRight, Download, Sparkles, Award } from 'lucide-react';
import { personal, links } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      {/* Radial glow behind hero */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nebula-purple/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-nebula-cyan/30 bg-nebula-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-nebula-cyan">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-nebula-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-nebula-cyan" />
              </span>
              {personal.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {personal.name}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-sm font-medium text-slate-400 sm:text-base">{personal.roleLine}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="flex flex-col gap-2 border-l-2 border-nebula-purple/50 pl-5">
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {personal.headline1}
              </p>
              <p className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                {personal.headline2}
              </p>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="max-w-xl text-base leading-relaxed text-slate-400">{personal.bio}</p>
          </Reveal>

          {/* Photo — shown on mobile between intro text and CTA buttons */}
          <Reveal delay={380} className="flex lg:hidden">
            <ProfilePortrait imgError={imgError} setImgError={setImgError} />
          </Reveal>

          <Reveal delay={420}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-blue px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-cyan hover:brightness-110"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={personal.resume}
                download
                className="group flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-nebula-blue/40 hover:bg-nebula-blue/10"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3">
                <Sparkles className="h-4 w-4 text-nebula-cyan" />
                <span className="text-xs font-medium text-slate-400">Currently building with</span>
                <div className="flex flex-wrap gap-2">
                  {personal.currentlyBuilding.map((t) => (
                    <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {/* LeetCode 100 Days Badge */}
              <a
                href={links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl glass px-4 py-3 transition-all hover:border-nebula-cyan/40 hover:shadow-glow-cyan"
              >
                <Award className="h-4 w-4 text-nebula-cyan" />
                <span className="text-xs font-semibold text-white">100 Days</span>
                <span className="text-xs text-slate-400">LeetCode</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: premium profile portrait — desktop only */}
        <Reveal delay={300} className="hidden lg:flex justify-center lg:justify-end">
          <ProfilePortrait imgError={imgError} setImgError={setImgError} large />
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <div className="h-2 w-1 rounded-full bg-white/50 animate-float-slow" />
        </div>
      </div>
    </section>
  );
}

/* ---- Premium profile portrait ---- */
function ProfilePortrait({
  imgError,
  setImgError,
  large = false,
}: {
  imgError: boolean;
  setImgError: (v: boolean) => void;
  large?: boolean;
}) {
  const size = large ? 'h-80 w-80 sm:h-96 sm:w-96' : 'h-56 w-56';

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer animated glow ring */}
      <div
        className={`absolute rounded-full bg-gradient-to-tr from-nebula-purple/30 via-nebula-blue/20 to-nebula-cyan/30 blur-2xl animate-pulse-soft ${size}`}
      />
      {/* Rotating gradient border */}
      <div className={`absolute rounded-full bg-gradient-to-tr from-nebula-purple via-nebula-blue to-nebula-cyan animate-spin-slow ${size}`} style={{ padding: '2px' }} />
      {/* Inner dark ring */}
      <div className={`absolute rounded-full bg-space-900 ${size}`} style={{ margin: '4px' }} />

      {/* Glass card behind portrait */}
      <div className={`absolute rounded-full glass-strong ${size}`} style={{ margin: '8px' }} />

      {/* Portrait */}
      <div
        className={`relative overflow-hidden rounded-full border-2 border-white/10 shadow-glow ${size}`}
        style={{ margin: '6px' }}
      >
        {!imgError ? (
          <img
            src={personal.profileImage}
            alt={personal.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-space-700 to-space-600 font-display text-4xl font-bold text-white/40">
            {personal.initials}
          </div>
        )}
      </div>

      {/* Floating accent dots */}
      <div className="absolute -top-2 right-8 h-3 w-3 rounded-full bg-nebula-cyan/60 animate-float-slow" />
      <div className="absolute bottom-6 -left-2 h-2 w-2 rounded-full bg-nebula-purple/60 animate-float-slower" />
      <div className="absolute top-1/3 -right-4 h-2.5 w-2.5 rounded-full bg-nebula-blue/40 animate-float-slow" />
    </div>
  );
}
