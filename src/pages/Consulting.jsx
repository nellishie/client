import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import useAnalytics from '../hooks/useAnalytics.js';
import { Workflow, Gauge, Rocket, Compass } from 'lucide-react';

const consulting = [
  {
    title: 'Process Optimization',
    details: ['Map journeys, failure points, and handoffs', 'Standardize SOPs and macros to reduce variance', 'Instrument for visibility without adding friction'],
    icon: Workflow,
  },
  {
    title: 'Workforce Management Strategy',
    details: ['Forecasting tuned to your seasonality and concurrency', 'Scheduling and shrinkage models that balance cost and coverage', 'Real-time management playbooks for intraday control'],
    icon: Gauge,
  },
  {
    title: 'Performance Improvement',
    details: ['Coaching and QA loops that improve AHT and first-contact resolution', 'Playbooks for escalation control and deflection', 'Balanced scorecards tying quality, efficiency, and cost'],
    icon: Rocket,
  },
  {
    title: 'Contact Centre Setup & Scaling',
    details: ['Site strategy, hiring profiles, and leadership selection', 'Tech stack guidance for routing, QA, WFM, and reporting', 'Pilot design with fast iteration to reach steady state'],
    icon: Compass,
  },
];

const Consulting = () => {
  useAnalytics('Consulting');

  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Consulting"
        title="Strategic guidance from operators who build and run programs"
        copy="Advisory embedded with operators. We de-risk decisions, sharpen performance, and make sure every change is executable on the floor." />
      <div className="grid gap-6 md:grid-cols-2">
        {consulting.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-charcoal/70 p-6 shadow-card hover-card animate-fade-up" style={{ animationDelay: `${0.05 * idx}s` }}>
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
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-accent/30 bg-white/5 p-6 shadow-card">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Engagement cadence</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Diagnostics → Roadmap → Guided execution</h3>
          <p className="mt-3 text-sm text-slate-300">Short, focused consulting cycles with tangible operational artifacts: staffing plans, QA rubrics, SOPs, and reporting frameworks ready to deploy.</p>
          <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-200 md:grid-cols-3">
            {[{ label: 'Discovery + assessment', value: '2 weeks' }, { label: 'Roadmap delivery', value: '10-14 days' }, { label: 'Guided execution', value: '4-8 weeks' }].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/5 bg-charcoal/70 p-3">
                <p className="text-xl font-semibold text-accent">{item.value}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-card">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Book time</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Want a consulting slot?</h3>
          <p className="mt-3 text-sm text-slate-300">Send your objectives and constraints. We will respond with available windows and a short agenda tailored to your outcomes.</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-200">
            {['Primary goal (efficiency, CX, cost, or scale)', 'Current stack and team size', 'Desired timeline and decision makers'].map((item) => (
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
    </div>
  );
};

export default Consulting;
