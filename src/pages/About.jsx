import SectionHeading from '../components/SectionHeading.jsx';
import useAnalytics from '../hooks/useAnalytics.js';

const About = () => {
  useAnalytics('About');

  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Leadership"
        title="Guided by experienced, hands-on operators"
        copy="Client Align Solutions is led by executives who blend deep BPO experience, operational discipline, and an entrepreneurial mindset to help you design, launch, and scale programs with confidence."
      />

      {/* Leadership hierarchy */}
      <section className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {/* Christine */}
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal/70 p-6 shadow-card">
            <div className="flex flex-1 flex-col items-center gap-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Chief Executive Officer</p>
              <div className="h-56 w-full overflow-hidden rounded-2xl shadow-card">
                <img
                  src="/images/6.jpeg"
                  alt="Portrait of Christine Duvall, Chief Executive Officer"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-1 text-xl font-semibold text-white">Christine Duvall</h3>
              <p className="mt-3 text-sm text-slate-300">
                Christine has been part of the call center and BPO industry since 2009, building her career around sales leadership, client services, and
                strategic consulting within customer experience operations. She has partnered with organizations to design, launch, and optimize contact
                center programs, guiding clients from early discovery and solution design through implementation and full production.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                She is known for her ability to understand each client&apos;s business goals and translate them into practical, results-driven strategies.
                Christine believes strong partnerships are built on trust, transparency, and consistent delivery, helping organizations navigate complex
                operational decisions with clarity and confidence.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                With an entrepreneurial mindset and a hands-on approach, she focuses on building meaningful client relationships while strengthening
                customer engagement, improving operational efficiency, and supporting sustainable growth.
              </p>
            </div>
          </article>

          {/* Tinashe */}
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal/70 p-6 shadow-card">
            <div className="flex flex-1 flex-col items-center gap-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Chief Operating Officer</p>
              <div className="h-56 w-full overflow-hidden rounded-2xl shadow-card">
                <img
                  src="/images/7.jpeg"
                  alt="Portrait of Tinashe Mapfumo, Chief Operating Officer"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-1 text-xl font-semibold text-white">Tinashe Mapfumo</h3>
              <p className="mt-3 text-sm text-slate-300">
                Tinashe is a technology and BPO operations professional specializing in dialer systems, operational tools, and AI-driven solutions. He
                excels at aligning people, technology, and purpose to optimize operations and deliver measurable results across strategy, implementation,
                and ongoing performance.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Known for his practical and collaborative leadership style, Tinashe values trust, integrity, and outcomes. He leverages AI and
                operational insights to solve challenges efficiently while building scalable, sustainable solutions.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                With an entrepreneurial mindset, he drives growth, innovation, and meaningful impact for teams and clients, ensuring that strategy and
                execution stay tightly connected.
              </p>
            </div>
          </article>

          {/* Team of consultants */}
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal/60 p-6 shadow-card">
            <div className="flex flex-1 flex-col items-center gap-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Consulting Team</p>
              <div className="h-56 w-full overflow-hidden rounded-2xl shadow-card">
                <img
                  src="/images/8.jpeg"
                  alt="Our trusted team of consultants"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-1 text-lg font-semibold text-white">And our trusted team</h3>
              <p className="mt-3 text-sm text-slate-300">
                And our trusted team of 20 consultants who are seasoned industry professionals, bringing frontline experience across customer experience,
                operations, and technology.
              </p>
              <div className="mt-4 w-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal/70 shadow-card">
                <img
                  src="/images/logos.jpeg"
                  alt="Client Align Solutions logo"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
