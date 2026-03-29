import SectionHeading from '../components/SectionHeading.jsx';
import useAnalytics from '../hooks/useAnalytics.js';

const industries = [
  {
    title: 'Financial Services',
    description: 'Secure, compliant workflows for card support, lending, and fintech CX with strong QA and audit trails.',
  },
  {
    title: 'E-commerce',
    description: 'Revenue-sensitive support across returns, replacements, and loyalty with conversion-focused playbooks.',
  },
  {
    title: 'Healthcare (general)',
    description: 'Patient-friendly communication, scheduling, and benefits support with privacy-first handling.',
  },
  {
    title: 'Technology & SaaS',
    description: 'Tiered support, onboarding assistance, and incident coordination tuned to SLAs and uptime targets.',
  },
  {
    title: 'Marketplaces',
    description: 'Balanced buyer/seller support, trust & safety coverage, and quality controls at scale.',
  },
  {
    title: 'Other BPOs',
    description: 'Advisory and optimization for operators seeking better utilization, QA, and reporting discipline.',
  },
];

const Industries = () => {
  useAnalytics('Industries');

  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Industries"
        title="Versatile delivery, industry-aware controls"
        copy="Programs are configured for your regulatory, security, and brand requirements. We stay high-level and discreet while aligning to your metrics."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {industries.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-card">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
