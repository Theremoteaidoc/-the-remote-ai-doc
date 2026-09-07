import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BookDemoModal from './BookDemoModal';
import Wordmark from './Wordmark';

const NAV = [
  { to: '/peme', label: 'PEME' },
  { to: '/seascope-cds', label: 'Telemedicine' },
  { to: '/wellness', label: 'Crew Wellness' },
  { to: '/evidence', label: 'Evidence & Security' },
  { to: '/about', label: 'Company' },
];

const FOOTER_PRODUCTS = [
  { to: '/peme', label: 'PEME Processing' },
  { to: '/seascope-cds', label: 'Telemedicine' },
  { to: '/wellness', label: 'Crew Wellness' },
];

const FOOTER_COMPANY = [
  { to: '/about', label: 'About' },
  { to: '/press', label: 'Press' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
];

const FOOTER_LEGAL = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/evidence#security', label: 'Security' },
];

/**
 * White nav and footer (clinical daylight). Legacy product pages keep a
 * dark main canvas until stages 2 to 4 replace them.
 */
export default function SiteLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMobileMenuOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo(0, 0);
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white text-ink-2 antialiased">
      <nav className="sticky top-0 z-50 h-20 border-b border-line bg-white">
        <div className="container-wide flex h-full items-center justify-between">
          <Link to="/" aria-label="SeaScope home">
            <Wordmark />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[15px] font-medium text-ink-2 transition-colors duration-150 ease-out hover:text-teal-strong"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="btn-primary text-sm"
            >
              Book a demo
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-ink lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-b border-line bg-white lg:hidden">
            <div className="container-wide space-y-1 py-4">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className="block py-3 text-ink-2">
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); setDemoOpen(true); }}
                className="btn-primary mt-3 w-full"
              >
                Book a demo
              </button>
            </div>
          </div>
        )}
      </nav>

      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="nav" />

      <main className={isHome ? undefined : 'bg-ink-900 text-ink-50'}>
        {children}
      </main>

      <footer className="border-t border-line bg-white py-16 lg:py-24">
        <div className="container-wide grid gap-12 md:grid-cols-4">
          <div>
            <Link to="/" aria-label="SeaScope home" className="inline-flex">
              <Wordmark markClassName="h-6" textClassName="text-xl" />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-ink-3">
              RemoteAid Medical Solutions, Corp.
              <br />
              Clinical services for fleet operators.
            </p>
          </div>
          <div>
            <p className="label-caps mb-6 text-xs">Products</p>
            <ul className="space-y-4">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-[15px] text-ink-2 transition-colors duration-150 hover:text-teal-strong">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-caps mb-6 text-xs">Company</p>
            <ul className="space-y-4">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-[15px] text-ink-2 transition-colors duration-150 hover:text-teal-strong">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:hello@seascope.tech" className="text-[15px] text-ink-2 transition-colors duration-150 hover:text-teal-strong">
                  hello@seascope.tech
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label-caps mb-6 text-xs">Legal</p>
            <ul className="space-y-4">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-[15px] text-ink-2 transition-colors duration-150 hover:text-teal-strong">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
