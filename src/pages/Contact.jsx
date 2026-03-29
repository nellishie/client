import SectionHeading from '../components/SectionHeading.jsx';
import LeadForm from '../components/LeadForm.jsx';
import useAnalytics from '../hooks/useAnalytics.js';

const Contact = () => {
  useAnalytics('Contact');

  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-4">
        <SectionHeading
          eyebrow="Contact"
          title="Start the conversation"
          copy="Share your objectives, target metrics, and constraints. We will reply within one business day with a focused path forward." />
        <div className="rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200 shadow-card">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">What to expect</p>
          <ul className="mt-3 flex flex-col gap-2">
            {['Brief discovery to align on scope and timeline', 'Suggested operating model and staffing approach', 'Next steps for consulting or managed services'].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <LeadForm />
    </div>
  );
};

export default Contact;
