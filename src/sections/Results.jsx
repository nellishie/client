import SectionHeading from '../components/SectionHeading.jsx';
import { TrendingUp } from 'lucide-react';

const results = [
  {
    metric: '28% efficiency lift',
    context: 'Reduced handle time and rework via streamlined scripts and QA loops.',
  },
  {
    metric: '40% faster ramp',
    context: 'Modular playbooks and coaching cadences decreased time-to-proficiency.',
  },
  {
    metric: 'NPS +12',
    context: 'Omnichannel coverage with quality gates increased customer advocacy.',
  },
];

const Results = () => (
  <section className="flex flex-col gap-10">
    <SectionHeading
      eyebrow="Proof"
      title="Measured outcomes, no sensitive data"
      copy="We deliver efficiency and quality in parallel. Engagements are structured around measurable targets and transparent governance."
    />
    <div className="grid gap-6 md:grid-cols-3">
      {results.map((item, idx) => (
        <div key={item.metric} className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-card hover-card animate-fade-up" style={{ animationDelay: `${0.05 * idx}s` }}>
          <div className="flex items-center gap-2 text-accent">
            <TrendingUp size={18} />
            <p className="text-2xl font-semibold">{item.metric}</p>
          </div>
          <p className="mt-2 text-sm text-slate-300">{item.context}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Case study ready
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Results;
