import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpeg';

const Footer = () => (
  <footer className="border-t border-white/5 bg-charcoal/80">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <img src={logoImage} alt="Company logo" className="h-10 w-10 rounded-full border border-white/10 object-cover" loading="lazy" decoding="async" />
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">&nbsp;</p>
          <p className="text-lg font-semibold text-white">Client Align Solutions</p>
          <p className="text-sm text-slate-400">Scalable customer operations built with intention.</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm text-slate-300 md:text-right">
        <Link to="/services" className="hover:text-accent">Services</Link>
        <Link to="/consulting" className="hover:text-accent">Consulting</Link>
        <Link to="/industries" className="hover:text-accent">Industries</Link>
        <Link to="/about" className="hover:text-accent">About</Link>
        <Link to="/contact" className="hover:text-accent">Contact</Link>
        <p className="text-xs text-slate-500">Built for U.S.-aligned teams · Privacy-first</p>
      </div>
    </div>
  </footer>
);

export default Footer;
