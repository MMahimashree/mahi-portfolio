import { useState } from 'react';
import { teaching } from '@/data/portfolio';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { GraduationCap, BookOpen, ArrowRight } from 'lucide-react';

export default function Teaching() {
  const [active, setActive] = useState(0);

  return (
    <Section id="teaching" glow>
      <div className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Teaching / Explaining"
          title={teaching.heading}
          subtitle={teaching.subtitle.replace('\n', ' ')}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          {/* Topic picker */}
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-3xl glass p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-nebula-purple/20 to-nebula-cyan/20 text-nebula-cyan">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Teach Me</h3>
                  <p className="text-xs text-slate-400">Pick a topic. I'll explain it simply.</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {teaching.topics.map((t, i) => (
                  <button
                    key={t.question}
                    onClick={() => setActive(i)}
                    className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                      active === i
                        ? 'border-nebula-cyan/40 bg-nebula-cyan/10 text-white shadow-glow-cyan'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {t.question}
                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${
                        active === i ? 'translate-x-0 text-nebula-cyan' : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Explanation */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col gap-5 rounded-3xl glass-strong p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-nebula-purple to-nebula-blue text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {teaching.topics[active].question}
                </h3>
              </div>

              <div
                key={active}
                className="flex-1 text-base leading-relaxed text-slate-300"
                style={{ animation: 'fadeInUp 0.5s ease' }}
              >
                {teaching.topics[active].answer.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>

              {/* How I teach */}
              <div className="mt-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-nebula-cyan">
                  {teaching.howLabel}
                </p>
                <p className="text-sm leading-relaxed text-slate-400">{teaching.howText}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </Section>
  );
}
