import LeadForm from '../components/LeadForm.jsx';
import useAnalytics from '../hooks/useAnalytics.js';

const Contact = () => {
  useAnalytics('Contact');

  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200 shadow-card">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Company details</p>
          <dl className="mt-4 space-y-3">
            <div className="flex flex-col">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Company phone</dt>
              <dd className="text-sm text-white">Add phone number here</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Company address</dt>
              <dd className="text-sm text-white">Add company address here</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Company email</dt>
              <dd className="text-sm text-white">contact@clientalignsolutions.com</dd>
            </div>
          </dl>
        </div>
      </div>
      <LeadForm />
    </div>
  );
};

export default Contact;
