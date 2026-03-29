import SectionHeading from '../components/SectionHeading.jsx';
import useAnalytics from '../hooks/useAnalytics.js';

const principles = [
  {
    title: 'Trusted partner',
    copy: 'We protect your brand voice, your customers, and your data. Every engagement is designed with discretion and discipline.',
  },
  {
    title: 'Experience-led',
    copy: 'Leaders with program ownership experience across BPO and in-house teams. We know what it takes to move metrics, not just slide decks.',
  },
  {
    title: 'Results obsessed',
    copy: 'Targets guide our work: efficiency, quality, CSAT/NPS, and cost. We tune programs to achieve balanced results, not single metrics.',
  },
];

const About = () => {
  useAnalytics('About');

  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="About"
        title="A focused team delivering clarity and outcomes"
        copy="Client Align Solutions is built by operators who have run high-volume programs. We mix strategic guidance with hands-on execution to keep your customer operations resilient."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {principles.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/5 bg-charcoal/70 p-5 shadow-card">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{item.title}</p>
            <p className="mt-2 text-sm text-slate-300">{item.copy}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-[1fr_0.6fr] items-center">
        <div className="rounded-2xl border border-accent/30 bg-white/5 p-6 shadow-card">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Leadership tone</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Calm, decisive, transparent</h3>
          <p className="mt-3 text-sm text-slate-300">We communicate with clarity, own outcomes, and provide visibility without overwhelming your team. Expect crisp readouts, clear next steps, and accountable delivery.</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-charcoal/70 shadow-card">
            <img src="/images/logos.jpeg" alt="Client Align Solutions logo collage" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
