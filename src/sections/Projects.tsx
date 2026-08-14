import { featuredProjects, otherBuilds } from '@/data/portfolio';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import { Github, ExternalLink } from 'lucide-react';

/* Subtle shooting star divider — appears between project rows */
function ShootingStars() {
  return (
    <div className="relative h-12 sm:h-16" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 64" preserveAspectRatio="none">
        <defs>
          <linearGradient id="starTrail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="100"
          y1="32"
          x2="500"
          y2="32"
          stroke="url(#starTrail)"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="animate-dash"
        />
        <line
          x1="700"
          y1="32"
          x2="1100"
          y2="32"
          stroke="url(#starTrail)"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="animate-dash"
          style={{ animationDelay: '1.5s' }}
        />
        <circle cx="500" cy="32" r="1.5" fill="#22d3ee" className="animate-twinkle" />
        <circle cx="1100" cy="32" r="1.5" fill="#7c3aed" className="animate-twinkle" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  );
}

export default function Projects() {
  const row1 = featuredProjects.slice(0, 2);
  const row2 = featuredProjects.slice(2, 4);

  return (
    <Section id="projects" glow>
      <div className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Featured Projects</>}
          subtitle="Things I've built, experimented with and learned from."
        />

        {/* Row 1 */}
        <div className="grid gap-6 lg:grid-cols-2">
          {row1.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Shooting stars between rows */}
        <ShootingStars />

        {/* Row 2 — two more editable project slots */}
        <div className="grid gap-6 lg:grid-cols-2">
          {row2.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + 2} />
          ))}
        </div>

        {/* Other builds */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              Other Builds & Hackathon Work
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherBuilds.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl glass p-5 transition-all duration-500 hover:border-white/20 hover:shadow-glow hover:-translate-y-1">
                  <h4 className="font-display text-base font-bold text-white">{b.title}</h4>
                  <p className="flex-1 text-xs leading-relaxed text-slate-400">{b.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {b.github && (
                      <a
                        href={b.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-nebula-blue/40 hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {b.liveDemo && (
                      <a
                        href={b.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-nebula-cyan/40 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
