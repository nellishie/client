import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm.jsx';

const CTA = () => (
  <section className="grid gap-8 rounded-3xl border border-white/5 bg-gradient-to-r from-[#0E2438] via-[#0B1828] to-[#0A101C] p-8 shadow-card lg:grid-cols-2">
    <div className="flex flex-col gap-4">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Let’s plan your next move</p>
      <h3 className="text-3xl font-semibold text-white">Build a resilient, performance-driven customer operation.</h3>
      <p className="text-base text-slate-300">Tell us your target metrics and constraints. We’ll respond with a focused plan and recommended next steps.</p>
      <div className="flex gap-3">
        <Link to="/consulting" className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent hover:text-accent">
          View consulting approach
        </Link>
      </div>
    </div>
    <LeadForm compact title="Book a Consultation" />
  </section>
);

export default CTA;
