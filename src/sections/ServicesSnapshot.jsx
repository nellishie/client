import { Link } from 'react-router-dom';
import { Headphones, PhoneCall, ClipboardList, Layers } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';

const services = [
  {
    title: 'Inbound Support',
    copy: 'Responsive, brand-aligned care across voice, chat, and email with QA baked in.',
    icon: Headphones,
  },
  {
    title: 'Outbound Programs',
    copy: 'Retention, outreach, and revenue-support motions with compliant scripts and coaching.',
    icon: PhoneCall,
  },
  {
    title: 'Back Office Ops',
    copy: 'Ticket triage, content moderation, and data enrichment with SLA-focused workflows.',
    icon: ClipboardList,
  },
  {
    title: 'Omnichannel CX',
    copy: 'Unified orchestration so customers move seamlessly between channels without friction.',
    icon: Layers,
  },
];

const ServicesSnapshot = () => (
  <section className="flex flex-col gap-10">
    <SectionHeading
      eyebrow="Core Services"
      title="Built for volume, tuned for quality"
      copy="Full-stack support programs that combine disciplined operations with advisory oversight so every channel performs."
    />
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, idx) => {
        const Icon = service.icon;
        return (
          <div key={service.title} className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-card hover-card animate-fade-up" style={{ animationDelay: `${0.05 * idx}s` }}>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">On-demand</span>
            </div>
            <p className="text-sm text-slate-300">{service.copy}</p>
          </div>
        );
      })}
    </div>
    <div>
      <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent hover:text-accent">
        View full services →
      </Link>
    </div>
  </section>
);

export default ServicesSnapshot;
