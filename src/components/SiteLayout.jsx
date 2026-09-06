import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import BookDemoModal from './BookDemoModal';

const NAV = [
  { to: '/seascope-cds', label: 'Telemedicine' },
  { to: '/peme', label: 'PEME' },
  { to: '/wellness', label: 'Crew Wellness' },
  { to: '/evidence', label: 'Evidence & Security' },
];

const COMPANY = [
  { to: '/about', label: 'About' },
  { to: '/press', label: 'Press' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
];

/**
 * SeaScope site layout: top nav + footer.
 * Five destinations. Company is a dropdown covering About, Press, Pricing, Blog.
 */
export default function SiteLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close menus on navigation. Hash scroll is a DOM sync, not derived render state.
    setMobileMenuOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
    setCompanyMenuOpen(false);
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
    <div className="min-h-screen bg-ink-900 text-ink-50 antialiased">
      <nav className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-900/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-medium tracking-tight">
            SeaScope<span className="accent-sea">.</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-ink-50/80 transition hover:text-sea-300"
              >
                {item.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setCompanyMenuOpen(true)}
              onMouseLeave={() => setCompanyMenuOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm text-ink-50/80 transition hover:text-sea-300"
                aria-expanded={companyMenuOpen}
                aria-haspopup="true"
                onClick={() => setCompanyMenuOpen((open) => !open)}
              >
                Company
                <span className="text-xs">▾</span>
              </button>
              {companyMenuOpen && (
                <div className="absolute -left-4 top-full w-56 pt-2">
                  <div className="rounded-xl border border-ink-700 bg-ink-800/95 p-2 shadow-xl backdrop-blur">
                    {COMPANY.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-lg px-4 py-3 text-sm text-ink-50 transition hover:bg-ink-700/50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://app.seascope.tech/seascope-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-sea-500/40 px-3.5 py-2 text-sm font-medium text-sea-200 transition-colors hover:border-sea-400 hover:bg-sea-500/10 hover:text-sea-100"
            >
              Try Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://app.seascope.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-50/80 transition hover:text-sea-300"
            >
              Sign in
            </a>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="btn-primary text-sm"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-ink-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-ink-700/60 bg-ink-900 lg:hidden">
            <div className="space-y-1 px-6 py-4">
              <a
                href="https://app.seascope.tech/seascope-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 flex items-center justify-between rounded-md border border-sea-500/40 bg-sea-500/5 px-4 py-3 text-sm font-medium text-sea-200"
              >
                Try Demo · free, no signup
                <ArrowRight className="h-4 w-4" />
              </a>
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className="block py-3 text-ink-50/90">
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-ink-700/40 pt-3">
                <div className="eyebrow mb-2">Company</div>
                {COMPANY.map((item) => (
                  <Link key={item.to} to={item.to} className="block py-2 text-ink-50/90">
                    {item.label}
                  </Link>
                ))}
              </div>
              <a
                href="https://app.seascope.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-ink-50/90"
              >
                Sign in
              </a>
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); setDemoOpen(true); }}
                className="btn-primary mt-3 w-full"
              >
                Book a Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} source="nav" />

      <main>{children}</main>

      <footer className="border-t border-ink-700/60 bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="font-display text-xl font-medium">
                SeaScope<span className="accent-sea">.</span>
              </div>
              <p className="mt-4 max-w-xs font-display text-sm italic text-ink-50/70">
                Clinical care for places medicine wasn't built for.
              </p>
            </div>

            <div>
              <div className="eyebrow mb-4">Products</div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/seascope-cds" className="text-ink-50/70 transition hover:text-sea-300">
                    Telemedicine (CDS)
                  </Link>
                </li>
                <li>
                  <Link to="/peme" className="text-ink-50/70 transition hover:text-sea-300">
                    PEME
                  </Link>
                </li>
                <li>
                  <Link to="/wellness" className="text-ink-50/70 transition hover:text-sea-300">
                    Crew Wellness
                  </Link>
                </li>
                <li>
                  <Link to="/evidence" className="text-ink-50/70 transition hover:text-sea-300">
                    Evidence &amp; Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="eyebrow mb-4">Company</div>
              <ul className="space-y-3 text-sm">
                {COMPANY.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-ink-50/70 transition hover:text-sea-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="mailto:hello@seascope.tech" className="text-ink-50/70 transition hover:text-sea-300">
                    hello@seascope.tech
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="eyebrow mb-4">Legal</div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/privacy" className="text-ink-50/70 transition hover:text-sea-300">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-ink-50/70 transition hover:text-sea-300">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/evidence#security" className="text-ink-50/70 transition hover:text-sea-300">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hairline-top mt-12 flex flex-col gap-4 pt-6 text-xs text-ink-50/50 md:flex-row md:items-center md:justify-between">
            <div className="uppercase tracking-eyebrow">
              REMOTEAID MEDICAL SOLUTIONS · Delaware C-Corp · Miami, FL
            </div>
            <div className="flex items-center gap-4">
              <span>© 2026 RemoteAid Medical Solutions</span>
              <a href="https://app.seascope.tech" className="text-sea-300 hover:text-sea-500">
                app.seascope.tech →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
