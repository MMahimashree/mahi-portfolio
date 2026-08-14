import { useState } from 'react';
import { skills, achievements } from '@/data/portfolio';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function Skills() {
  return (
    <Section id="skills" glow>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Technical Stack"
            title={<>Tools I've Worked With</>}
            subtitle="A constellation of technologies I have explored through building, learning and experimentation."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.categories.map((category, i) => (
              <Reveal key={category.name} delay={i * 80}>
                <div className="h-full rounded-2xl glass p-6 transition-all duration-500 hover:border-white/20 hover:shadow-glow">
                  <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-nebula-cyan">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-nebula-purple/40 hover:text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12" id="achievements">
          <SectionHeading eyebrow="Achievements" title={<>Moments That Moved Me Forward</>} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <AchievementCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function AchievementCard({ item }: { item: typeof achievements[number] }) {
  const [imgError, setImgError] = useState(false);
  const showImage = item.image && !imgError;

  return (
    <div className="group h-full overflow-hidden rounded-2xl glass transition-all duration-500 hover:border-white/20 hover:shadow-glow hover:-translate-y-1">
      {/* Badge photo or gradient header */}
      {showImage ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]">
          <img
            src={item.image}
            alt={item.title}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900/80 via-transparent to-transparent" />
          <span className="absolute bottom-2 left-3 font-display text-xl font-bold text-gradient">
            {item.stat}
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-between p-6 pb-0">
          <span className="font-display text-xl font-bold text-gradient">{item.stat}</span>
          <item.icon className="h-5 w-5 text-nebula-cyan transition-transform group-hover:scale-110" />
        </div>
      )}
      <div className={`p-6 ${showImage ? 'pt-4' : ''}`}>
        <h3 className="mb-1 font-display text-base font-bold text-white">{item.title}</h3>
        {item.org && <p className="mb-3 text-xs text-nebula-blue">{item.org}</p>}
        <p className="text-sm leading-relaxed text-slate-400">{item.detail}</p>
      </div>
    </div>
  );
}
