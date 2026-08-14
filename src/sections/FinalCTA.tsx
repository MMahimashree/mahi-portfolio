import { ArrowRight, Sparkles } from 'lucide-react';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

export default function FinalCTA() {
  return (
    <Section id="final-cta" className="py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-space-700/50 px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nebula-purple/15 blur-[100px] animate-pulse-soft" />
          <div className="relative flex flex-col items-center gap-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-nebula-purple to-nebula-blue text-white shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-5xl">Have a problem worth building?</h2>
            <p className="max-w-xl text-lg text-slate-400">Let's turn an idea into something people can use.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href="#contact" className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-110">
                Let's Connect <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#projects" className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
