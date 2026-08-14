import { Download, Eye, FileText } from 'lucide-react';
import { personal } from '@/data/portfolio';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

export default function Resume() {
  return (
    <Section id="resume" glow className="py-16 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-nebula-purple/15 via-space-700/80 to-nebula-blue/15 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-nebula-purple/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-nebula-cyan/10 blur-[80px]" />
          <div className="relative flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="flex items-start gap-4">
              <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-nebula-cyan sm:flex">
                <FileText className="h-7 w-7" />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-nebula-cyan">The detailed version</p>
                <h2 className="mb-2 font-display text-2xl font-bold text-white sm:text-3xl">Want the detailed version?</h2>
                <p className="max-w-lg text-sm leading-relaxed text-slate-400">Explore my projects, technical skills, achievements and experience in one page.</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={personal.resume} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10">
                <Eye className="h-4 w-4" /> View Resume
              </a>
              <a href={personal.resume} download className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-blue px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-110">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
