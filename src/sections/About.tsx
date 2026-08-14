import { about } from '@/data/portfolio';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <Section id="about" glow>
      <div className="flex flex-col gap-14">
        <SectionHeading eyebrow="About Me" title={<>About Me</>} />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Statement */}
          <Reveal>
            <div className="flex flex-col gap-4">
              {about.statement.map((line, i) => (
                <p
                  key={i}
                  className={`font-display text-2xl font-semibold leading-snug sm:text-3xl ${
                    i === about.statement.length - 1 ? 'text-gradient' : 'text-white'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Paragraphs */}
          <Reveal delay={150}>
            <div className="flex flex-col gap-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-400">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-500 hover:border-white/20 hover:shadow-glow hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-nebula-purple/20 to-nebula-blue/20 text-nebula-cyan transition-transform group-hover:scale-110">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
