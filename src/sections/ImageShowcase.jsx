const images = [
  '/images/WhatsApp%20Image%202026-03-24%20at%205.43.31%20PM.jpeg',
  '/images/WhatsApp%20Image%202026-03-24%20at%205.43.32%20PM%20(1).jpeg',
  '/images/WhatsApp%20Image%202026-03-24%20at%205.43.32%20PM%20(2).jpeg',
  '/images/WhatsApp%20Image%202026-03-24%20at%205.43.32%20PM.jpeg',
];

const ImageShowcase = () => (
  <section className="flex flex-col gap-6">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">In the field</p>
        <h3 className="text-2xl font-semibold text-white">Built with hands-on operators</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">Moments from recent programs—team alignment, playbook reviews, and command-center setups. We stay close to the floor to keep strategy and execution in sync.</p>
      </div>
      <div className="hidden md:block rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">Contact centre snapshots</div>
    </div>
    <div className="grid gap-4 md:grid-cols-4">
      {images.map((src, idx) => (
        <div key={src} className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-card hover-card animate-fade-up" style={{ animationDelay: `${0.05 * idx}s` }}>
          <img src={src} alt="Team at work" className="h-56 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/60 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 rounded-full bg-charcoal/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-100">On-site</div>
        </div>
      ))}
    </div>
  </section>
);

export default ImageShowcase;
