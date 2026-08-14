import { useMemo } from 'react';

/**
 * GalaxyBackground — fixed full-screen cinematic cosmic backdrop.
 * Layers: deep gradient → drifting nebulae → multi-layer parallax starfield
 *         → orbiting planets → comet streaks → subtle grid → vignette.
 * Pure CSS / SVG, no heavy libraries. Respects prefers-reduced-motion.
 */
export default function GalaxyBackground() {
  const farStars = useMemo(
    () =>
      Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.2 + 0.4,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
        opacity: Math.random() * 0.4 + 0.15,
      })),
    []
  );

  const midStars = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.8 + 0.8,
        delay: Math.random() * 6,
        duration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.3,
      })),
    []
  );

  const nearStars = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 1.5,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.6 + 0.4,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-space-900">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-900 via-space-800 to-space-900" />

      {/* Drifting nebulae — larger, slower, more cinematic */}
      <div className="absolute -top-40 -left-40 h-[50rem] w-[50rem] rounded-full bg-nebula-purple/20 blur-[140px] animate-nebula-move" />
      <div className="absolute top-1/4 -right-40 h-[45rem] w-[45rem] rounded-full bg-nebula-blue/15 blur-[140px] animate-nebula-move" style={{ animationDelay: '10s', animationDuration: '55s' }} />
      <div className="absolute bottom-0 left-1/4 h-[40rem] w-[40rem] rounded-full bg-nebula-cyan/10 blur-[140px] animate-nebula-move" style={{ animationDelay: '20s', animationDuration: '60s' }} />
      <div className="absolute top-2/3 left-1/2 h-[35rem] w-[35rem] rounded-full bg-nebula-pink/8 blur-[140px] animate-nebula-move" style={{ animationDelay: '5s', animationDuration: '50s' }} />

      {/* Far starfield — slow upward drift */}
      <div className="absolute inset-0 animate-star-drift">
        {farStars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Mid starfield — gentle reverse drift for parallax */}
      <div className="absolute inset-0 animate-star-drift-rev">
        {midStars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Near starfield — bright, slow twinkle, no drift (foreground) */}
      <div className="absolute inset-0">
        {nearStars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,0.4)`,
            }}
          />
        ))}
      </div>

      {/* Planets — orbiting decorative spheres placed between sections */}
      {/* Planet 1 — purple gas giant, upper area */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden md:block">
        <div className="relative">
          {/* Orbit ring */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
          {/* Planet body */}
          <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-nebula-purple via-indigo-600 to-space-700 animate-planet-glow">
            {/* Surface texture */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
            {/* Ring */}
            <div className="absolute left-1/2 top-1/2 h-3 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-nebula-purple/30 rotate-[20deg]" />
          </div>
          {/* Orbiting moon */}
          <div className="absolute left-1/2 top-1/2 h-0 w-0 animate-orbit">
            <div className="absolute h-2.5 w-2.5 rounded-full bg-slate-300 shadow-glow" style={{ transform: 'translate(-50%, -50%)' }} />
          </div>
        </div>
      </div>

      {/* Planet 2 — cyan ice planet, lower area */}
      <div className="pointer-events-none absolute left-[5%] top-[55%] hidden md:block">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-nebula-cyan via-blue-400 to-space-700 animate-planet-glow" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/25" />
          </div>
          <div className="absolute left-1/2 top-1/2 h-0 w-0 animate-orbit-rev">
            <div className="absolute h-2 w-2 rounded-full bg-nebula-cyan/60 shadow-glow-cyan" style={{ transform: 'translate(-50%, -50%)' }} />
          </div>
        </div>
      </div>

      {/* Planet 3 — small amber-rose dwarf, far right lower */}
      <div className="pointer-events-none absolute right-[12%] top-[75%] hidden lg:block">
        <div className="relative">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400/80 via-rose-500/60 to-space-700 animate-planet-glow" style={{ animationDelay: '4s' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
          </div>
        </div>
      </div>

      {/* Comet streaks — cross the screen occasionally */}
      <div className="pointer-events-none absolute left-0 top-[15%] h-0.5 w-32 animate-comet">
        <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent" style={{ filter: 'blur(0.5px)' }} />
      </div>
      <div className="pointer-events-none absolute left-0 top-[60%] h-0.5 w-24 animate-comet-2" style={{ animationDelay: '7s' }}>
        <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-nebula-cyan/60 to-transparent" style={{ filter: 'blur(0.5px)' }} />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Vignette — cinematic edge darkening */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,6,15,0.7)_100%)]" />
    </div>
  );
}
