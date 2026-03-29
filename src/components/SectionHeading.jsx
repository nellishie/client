const SectionHeading = ({ eyebrow, title, copy, align = 'left' }) => (
  <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : ''}`}>
    {eyebrow && <span className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</span>}
    <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    {copy && <p className="max-w-2xl text-base text-slate-300">{copy}</p>}
  </div>
);

export default SectionHeading;
