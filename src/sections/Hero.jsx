import { Link } from 'react-router-dom';
import { ShieldCheck, Workflow, BarChart3, Gauge } from 'lucide-react';

const heroImage = '/images/WhatsApp%20Image%202026-03-24%20at%205.43.31%20PM.jpeg';

const Hero = () => (
  <section className="relative overflow-hidden rounded-3xl border border-white/5 p-10 shadow-card hero-bg font-grift">
    <div className="absolute inset-0 bg-[#0A0F1A]/75" aria-hidden />
    <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-20" aria-hidden />
    <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <ShieldCheck size={14} />
          U.S.-aligned delivery
        </span>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Scalable Customer Operations. Strategic Growth.
        </h1>
        <p className="max-w-2xl text-lg text-slate-200">
          We design, build, and optimize contact center programs that deliver reliability, efficiency, and measurable performance without overexposing your operations.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-accentDark">
            Book a Consultation
          </Link>
          <Link to="/services" className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">
            Explore Services
          </Link>
        </div>
        <div className="grid max-w-2xl grid-cols-2 gap-4 text-sm text-slate-300 md:grid-cols-3">
          {[{
            label: 'Contact center efficiency gains',
            value: '18-32%'
          }, {
            label: 'Average speed to deploy',
            value: '<30 days'
          }, {
            label: 'Coverage',
            value: '24/7 omnichannel'
          }].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/5 bg-white/5 p-4 hover-card animate-fade-up">
              <p className="text-xl font-semibold text-accent">{item.value}</p>
              <p className="text-xs text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col gap-4 rounded-2xl border border-accent/30 bg-white/5 p-0 pb-6 hover-card animate-fade-up" style={{ animationDelay: '0.05s' }}>
        <div className="relative overflow-hidden rounded-t-2xl">
          <img src={heroImage} alt="Team collaborating on customer operations" className="h-64 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101C] via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-semibold text-slate-100">
            <ShieldCheck size={14} className="text-accent" />
            Trusted contact center delivery
          </div>
        </div>
        <div className="px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Trusted by global teams</p>
              <p className="text-2xl font-semibold text-white">Operational clarity on day one</p>
            </div>
            <img src="/logo.jpeg" alt="Company logo" className="h-12 w-12 rounded-full border border-white/10 object-cover" />
          </div>
          <div className="mt-4 grid gap-3 text-sm text-slate-200">
            {[{ icon: <Workflow size={16} className="text-accent" />, text: 'U.S.-based leadership with nearshore and offshore execution' }, { icon: <ShieldCheck size={16} className="text-accent" />, text: 'Playbooks that are complex with flexibility' }, { icon: <Gauge size={16} className="text-accent" />, text: 'Performance and culture backed by over 51 years of experience' }, { icon: <BarChart3 size={16} className="text-accent" />, text: 'Data visibility that translates into decisive action' }].map((line) => (
              <div key={line.text} className="flex items-start gap-2">
                {line.icon}
                <p>{line.text}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
