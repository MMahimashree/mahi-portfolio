import { ArrowUpRight } from 'lucide-react';
import { contact } from '@/data/portfolio';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function Contact() {
  return (
    <Section id="contact" glow>
      <div className="flex flex-col gap-14">
        <SectionHeading eyebrow="Contact" title={contact.heading} subtitle={contact.text} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contact.cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 100}>
              <a
                href={card.href}
                target={card.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl glass p-6 transition-all duration-500 hover:border-nebula-cyan/30 hover:bg-nebula-cyan/5 hover:shadow-glow-cyan hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-nebula-cyan">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-nebula-cyan" />
                </div>
                <div className="mt-auto">
                  <p className="mb-1 text-xs uppercase tracking-[0.16em] text-slate-500">{card.label}</p>
                  <p className="break-all text-sm font-medium text-white">{card.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
