import { aiBuilding } from '@/data/portfolio';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { ArrowDown } from 'lucide-react';

export default function AIBuilding() {
  return (
    <Section id="ai-building" glow>
      <div className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="AI + Building"
          title={<>AI + Building</>}
          subtitle={aiBuilding.subtitle}
        />

        {/* Statement */}
        <Reveal>
          <blockquote className="mx-auto max-w-3xl rounded-2xl glass border-l-2 border-nebula-cyan p-6 text-center text-base leading-relaxed text-slate-300 sm:text-lg">
            {aiBuilding.statement}
          </blockquote>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiBuilding.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-500 hover:border-white/20 hover:shadow-glow hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-nebula-purple/20 to-nebula-cyan/20 text-nebula-cyan transition-all group-hover:scale-110 group-hover:shadow-glow-cyan">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Workflow */}
        <Reveal>
          <div className="rounded-3xl glass p-6 sm:p-10">
            <h3 className="mb-8 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              The Workflow
            </h3>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-0">
              {aiBuilding.workflow.map((step, i) => (
                <div key={step} className="flex flex-col items-center sm:flex-row">
                  <div className="relative rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-display text-sm font-bold text-white transition-all hover:border-nebula-cyan/40 hover:bg-nebula-cyan/10 hover:shadow-glow-cyan">
                    <span className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-nebula-purple to-nebula-blue text-[0.6rem] text-white">
                      {i + 1}
                    </span>
                    {step}
                  </div>
                  {i < aiBuilding.workflow.length - 1 && (
                    <ArrowDown className="my-1 h-4 w-4 text-nebula-purple/50 sm:mx-2 sm:rotate-[-90deg]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
