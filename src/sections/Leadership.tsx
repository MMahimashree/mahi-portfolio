import { leadership } from '@/data/portfolio';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function Leadership() {
  return (
    <Section id="leadership" glow>
      <div className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Entrepreneurship & Leadership"
          title={<>Building Beyond Code</>}
          subtitle="Technology matters most when you can bring people along with the idea."
        />

        <div className="relative grid gap-6 md:grid-cols-2">
          <div className="pointer-events-none absolute left-5 top-8 bottom-8 hidden w-px bg-gradient-to-b from-nebula-purple/50 via-nebula-blue/30 to-transparent md:block" />
          {leadership.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="group relative h-full rounded-2xl glass p-6 transition-all duration-500 hover:border-white/20 hover:shadow-glow md:ml-10">
                <div className="absolute -left-[2.95rem] top-7 hidden h-4 w-4 rounded-full border-2 border-space-900 bg-nebula-purple shadow-glow md:block" />
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-nebula-purple/20 to-nebula-blue/20 text-nebula-cyan">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-nebula-cyan/20 bg-nebula-cyan/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-nebula-cyan">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mb-3 text-sm font-medium text-nebula-blue">{item.subtitle}</p>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
