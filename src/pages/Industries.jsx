import SectionHeading from '../components/SectionHeading.jsx';
import useAnalytics from '../hooks/useAnalytics.js';

const industries = [
  {
    title: 'Technology & SaaS',
    description: 'Access to over 50 categories and 1000 vendors.',
  },
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
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div className="space-y-6 text-sm text-slate-300">
          <SectionHeading
              eyebrow="Industries"
              title="Versatile, control and industry awareness"
              copy="Programs are configured for your regulatory, security, and brand requirements. We stay high-level and discreet while aligning to your metrics."
            />
          <p>
            We support brands where customer conversations tie directly to risk, revenue, or long-term relationships—from financial institutions to digital marketplaces.
          </p>
          <p>
            Instead of rigid vertical playbooks, we bring patterns that adapt to your stack, policies, and customer expectations.
          </p>
          <ul className="space-y-2 text-slate-200">
            <li>• Regulated and highly audited environments</li>
            <li>• High-volume, loyalty-sensitive programs</li>
            <li>• Multi-sided platforms with competing needs</li>
          </ul>
        </div>
        <div className="space-y-6">
          {industries.map((item, idx) => (
            <div
              key={item.title}
              className="relative border-l border-accent/30 pl-4 animate-fade-up"
              style={{ animationDelay: `${0.05 * idx}s` }}
            >
              <span className="absolute -left-1.5 top-1 h-2 w-2 rounded-full bg-accent" />
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                {idx === 0 && 'Heavily regulated'}
                {idx === 1 && 'Revenue-sensitive'}
                {idx === 2 && 'Care-driven'}
                {idx === 3 && 'Digital-first'}
                {idx === 4 && 'Platform & marketplace'}
                {idx === 5 && 'Operator-to-operator'}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
