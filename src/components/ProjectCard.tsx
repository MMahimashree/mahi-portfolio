import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { FeaturedProject } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function ProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  return (
    <Reveal delay={index * 120}>
      <article className="group relative flex flex-col overflow-hidden rounded-3xl glass transition-all duration-500 hover:border-white/20 hover:shadow-glow">
        {/* Image / placeholder */}
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06]">
          {showImage ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-space-700 via-space-600 to-space-700">
              <div className="flex flex-col items-center gap-3 text-slate-500">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Github className="h-6 w-6" />
                </div>
                <p className="text-xs">Replace /src/assets/project-{index + 1}.png</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-space-900/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-xs text-slate-400">
                <span className="h-1 w-1 rounded-full bg-nebula-cyan" />
                {h}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="mt-auto flex flex-wrap gap-3 pt-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-nebula-blue/40 hover:bg-nebula-blue/10 hover:text-white"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-nebula-cyan/40 hover:bg-nebula-cyan/10 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
