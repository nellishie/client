import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import useAnalytics from '../hooks/useAnalytics.js';
import { Headphones, PhoneCall, ClipboardList, PanelsTopLeft } from 'lucide-react';

const services = [
  {
    title: 'Inbound Call Center Support',
    outcomes: ['Rapid response coverage across voice, email, and chat', 'Brand-right resolutions that protect CSAT and NPS', 'QA frameworks with calibrated scoring and coaching'],
    icon: Headphones,
  },
  {
    title: 'Outbound Call Center Services',
    outcomes: ['Compliance-first outreach for retention and revenue support', 'Sequenced call and message flows that respect your brand tone', 'Outcome tracking and conversion reporting you can trust'],
    icon: PhoneCall,
  },
  {
    title: 'Back-Office Operations',
    outcomes: ['Case routing, content moderation, and billing support with SLA discipline', 'Knowledge management and macros that reduce rework', 'Data hygiene and enrichment to keep systems reliable'],
    icon: ClipboardList,
  },
  {
    title: 'Omnichannel Customer Support',
    outcomes: ['Unified orchestration so customers move channels without friction', 'Staffing models optimized for concurrency and handle time', 'Continuity of context between bots, live agents, and specialists'],
    icon: PanelsTopLeft,
  },
];

const Services = () => {
  useAnalytics('Services');

  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Services"
        title="Execution you can scale without compromising quality"
        copy="Operational rigor plus advisory oversight. We design every program to hit efficiency, experience, and compliance targets simultaneously."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="flex h-full flex-col rounded-2xl border border-white/5 bg-white/5 p-6 shadow-card hover-card animate-fade-up" style={{ animationDelay: `${0.05 * idx}s` }}>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">Onshore + Nearshore</span>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-slate-300">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 text-sm text-accent">Outcome-focused engagement</div>
            </div>
          );
        })}
      </div>
      <div className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Next step</p>
        <h3 className="mt-2 text-xl font-semibold text-white">Share your scope and target metrics</h3>
        <p className="mt-3 text-sm text-slate-300">Send a short brief and we’ll reply within one business day with suggested staffing models and a rollout path.</p>
        <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-200">
          {['Channels and hours of coverage', 'Volume profile and target SLAs', 'Quality or efficiency priorities'].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-charcoal shadow-card transition hover:-translate-y-0.5 hover:bg-accentDark"
        >
          Go to Contact
        </Link>
      </div>
    </div>
  );
};

export default Services;
