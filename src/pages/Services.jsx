import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import useAnalytics from '../hooks/useAnalytics.js';
import { Headphones, PhoneCall, ClipboardList, PanelsTopLeft } from 'lucide-react';
import serviceImage1 from '../assets/1.jpeg';
import serviceImage2 from '../assets/2.jpeg';
import serviceImage3 from '../assets/3.jpeg';
import serviceImage4 from '../assets/4.jpeg';

const services = [
  {
    title: 'Inbound Call Center Support',
    outcomes: ['Rapid response coverage across voice, email, and chat', 'Brand-right resolutions that protect CSAT and NPS', 'QA frameworks with calibrated scoring and coaching'],
    icon: Headphones,
    background: serviceImage1,
  },
  {
    title: 'Outbound Call Center Services',
    outcomes: ['Compliance-first outreach for retention and revenue support', 'Smart prospecting and sales pipeline growth', 'Outcome tracking and conversion reporting you can trust'],
    icon: PhoneCall,
    background: serviceImage2,
  },
  {
    title: 'Back-Office Operations',
    outcomes: ['Case routing, content moderation, and billing support with SLA discipline', 'Knowledge management and macros that reduce rework', 'Data quality management and enrichment for reliable performance'],
    icon: ClipboardList,
    background: serviceImage3,
  },
  {
    title: 'Omnichannel Customer Support',
    outcomes: ['Unified orchestration so customers move channels without friction', 'AI-powered workforce optimization', 'Continuity of context between bots, live agents, and specialists'],
    icon: PanelsTopLeft,
    background: serviceImage4,
  },
];

const Services = () => {
  useAnalytics('Services');

  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Services"
        title="Scale without compromising quality"
        copy="Operational complexity plus advisory oversight. We design every program to hit efficiency, experience, and compliance targets simultaneously."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-0 shadow-card hover-card animate-fade-up"
              style={{
                animationDelay: `${0.05 * idx}s`,
                backgroundImage: `url(${service.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="h-full w-full bg-[#020617]/70 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">Onshore + Nearshore</span>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-white">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 text-sm text-accent">Outcome-focused engagement</div>
              </div>
            </div>
          );
        })}
      </div>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-charcoal shadow-card transition hover:-translate-y-0.5 hover:bg-accentDark"
          >
            Consult now
          </Link>
        </div>
    </div>
  );
};

export default Services;
