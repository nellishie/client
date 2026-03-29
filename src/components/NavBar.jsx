import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/consulting', label: 'Consulting' },
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.jpeg" alt="Company logo" className="h-10 w-10 rounded-full border border-white/10 object-cover" />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">&nbsp;</p>
            <p className="text-lg font-semibold text-white">Client Align Solutions</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-100 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-slate-200'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-charcoal shadow-card transition hover:-translate-y-0.5 hover:bg-accentDark"
          >
            Book a Consultation
          </Link>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-charcoal shadow-card transition hover:-translate-y-0.5 hover:bg-accentDark"
            onClick={() => setOpen(false)}
          >
            Book
          </Link>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-white transition hover:border-accent hover:text-accent"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-xl border border-white/5 bg-charcoal/80 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent hover:text-accent ${isActive ? 'border-accent text-accent' : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
