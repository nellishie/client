import SectionHeading from '../components/SectionHeading.jsx';
import { Handshake, ActivitySquare, ShieldCheck, Eye } from 'lucide-react';

const differentiators = [
  {
    title: 'Operator + Advisor',
    description: 'We run programs and architect them, so execution and strategy stay aligned.',
    icon: Handshake,
  },
  {
    title: 'Performance Discipline',
    description: 'WFM, QA, and coaching loops that keep efficiency, CSAT, and cost in balance.',
    icon: ActivitySquare,
  },
  {
    title: 'U.S.-based Leadership',
    description: 'Stateside program owners with nearshore/offshore delivery for scale and cost efficiency.',
    icon: ShieldCheck,
  },
  {
    title: 'Secure & Discreet',
    description: 'Credible results without overexposing internal operations or client details.',
    icon: Eye,
  },
];

const Differentiators = () => (
  <section className="flex flex-col gap-10">
    <SectionHeading
      eyebrow="Why Us"
      title="Built to protect brand and performance"
      copy="Enterprise-grade controls with approachable partnerships. We keep your customer promise intact while scaling volume and quality."
      align="center"
    />
    <div className="grid gap-6 md:grid-cols-2">
      {differentiators.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="rounded-2xl border border-accent/20 bg-charcoal/70 p-6 shadow-card hover-card animate-fade-up" style={{ animationDelay: `${0.05 * idx}s` }}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon size={18} />
              </span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Differentiators;
