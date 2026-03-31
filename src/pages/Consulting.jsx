import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import useAnalytics from '../hooks/useAnalytics.js';
import { Workflow, Gauge, Rocket, Compass } from 'lucide-react';

const consulting = [
  {
    title: 'Process Optimization',
    details: ['Implementation, Handoffs, and continued support', 'Streamlining SOPs and processes to reduce variance', 'Advanced tools for visibility without adding friction'],
    icon: Workflow,
  },
  {
    title: 'Workforce Management Strategy',
    details: ['Forecasting tuned to your seasonality and specifications', 'Scheduling KPI metrics that balance cost and ROI', 'Real-time analytics for Work Force Management'],
    icon: Gauge,
  },
  {
    title: 'Performance Improvement',
    details: ['Innovative,interactive coaching and QA Tools', 'Playbooks and analytics for core control', 'Balanced scorecards tying quality, efficiency, and cost'],
    icon: Rocket,
  },
  {
    title: 'Contact Center Setup & Scaling',
    details: ['Site strategy, hiring profiles, and leadership selection', 'Tech stack guidance for routing, QA, WFM, and reporting', 'Pilot design with fast iteration to reach steady state'],
    icon: Compass,
  },
];

const Consulting = () => {
  useAnalytics('Consulting');

  return (
    <div className="flex flex-col gap-12">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="flex h-full flex-col justify-between gap-6">
          <SectionHeading
              eyebrow="Consulting"
              title="Strategic guidance from consultants who build and run programs"
              copy="Advisory embedded with operators. We help make decisions, sharpen performance, and make sure every change is executable on the floor."
            />
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-card">
            <video
              src="/images/5.mp4"
              className="h-64 w-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {consulting.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-charcoal/70 p-6 shadow-card hover-card animate-fade-up"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-start">
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

export default Consulting;
