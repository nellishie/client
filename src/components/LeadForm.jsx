import { useState } from 'react';

const LeadForm = ({ title = 'Start the Conversation', compact = false }) => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('submitted');
  };

  return (
    <div className="w-full rounded-2xl border border-white/5 bg-card/80 p-6 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">Response in 1 business day</span>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm text-slate-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-slate-300">Name</span>
            <input required name="name" type="text" placeholder="Your name" className="rounded-xl border border-white/10 bg-charcoal px-3 py-2 text-white outline-none transition focus:border-accent" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-slate-300">Email</span>
            <input required name="email" type="email" placeholder="you@company.com" className="rounded-xl border border-white/10 bg-charcoal px-3 py-2 text-white outline-none transition focus:border-accent" />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-slate-300">Company</span>
          <input name="company" type="text" placeholder="Company name" className="rounded-xl border border-white/10 bg-charcoal px-3 py-2 text-white outline-none transition focus:border-accent" />
        </label>
        {!compact && (
          <label className="flex flex-col gap-2">
            <span className="text-slate-300">What do you need?</span>
            <textarea name="message" rows="3" placeholder="Briefly describe your customer operations goals" className="rounded-xl border border-white/10 bg-charcoal px-3 py-2 text-white outline-none transition focus:border-accent" />
          </label>
        )}
        <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-accentDark">
          Book a Consultation
        </button>
        {status === 'submitted' && <p className="text-xs text-accent">Thanks — we’ll reach out shortly.</p>}
      </form>
    </div>
  );
};

export default LeadForm;
