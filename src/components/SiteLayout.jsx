import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

/**
 * SeaScope site layout — top nav + footer.
 * Used on every public page. Dark mode is the brand mode.
 */
export default function SiteLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink-900 text-ink-50 antialiased">
      {/* ───── Nav ───── */}
      <nav className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-900/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-medium tracking-tight">
            SeaScope<span className="accent-sea">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-ink-50/80 transition hover:text-sea-300">
                Products
                <span className="text-xs">▾</span>
              </button>
              {productsMenuOpen && (
                <div className="absolute -left-4 top-full w-72 pt-2">
                  <div className="rounded-xl border border-ink-700 bg-ink-800/95 p-2 shadow-xl backdrop-blur">
                    <Link
                      to="/cargo-solutions"
                      className="block rounded-lg px-4 py-3 transition hover:bg-ink-700/50"
                    >
                      <div className="text-sm font-medium text-ink-50">SeaScope Cargo Solutions</div>
                      <div className="mt-0.5 text-xs text-ink-50/60">For fleet operators</div>
                    </Link>
                    <Link
                      to="/seascope-cds"
                      className="block rounded-lg px-4 py-3 transition hover:bg-ink-700/50"
                    >
                      <div className="text-sm font-medium text-ink-50">SeaScope CDS</div>
                      <div className="mt-0.5 text-xs text-ink-50/60">For physicians · $29.99/mo</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-sm text-ink-50/80 transition hover:text-sea-300">
              Pricing
            </Link>
            <Link to="/evidence" className="text-sm text-ink-50/80 transition hover:text-sea-300">
              Evidence
            </Link>
            <Link to="/about" className="text-sm text-ink-50/80 transition hover:text-sea-300">
              About
            </Link>
            <Link to="/blog" className="text-sm text-ink-50/80 transition hover:text-sea-300">
              Blog
            </Link>
          </div>

          {/* Right CTAs */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://app.seascope.tech"
              className="text-sm text-ink-50/80 transition hover:text-sea-300"
            >
              Sign in
            </a>
            <a
              href="https://buy.stripe.com/5kQ00i6YjgeH7Zt9lN2ZO00"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-ink-50 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-ink-700/60 bg-ink-900 md:hidden">
            <div className="space-y-1 px-6 py-4">
              <div className="border-b border-ink-700/40 pb-3">
                <div className="eyebrow mb-2">Products</div>
                <Link to="/cargo-solutions" className="block py-2 text-ink-50/90">
                  SeaScope Cargo Solutions
                </Link>
                <Link to="/seascope-cds" className="block py-2 text-ink-50/90">
                  SeaScope CDS · $29.99/mo
                </Link>
              </div>
              <Link to="/pricing" className="block py-3 text-ink-50/90">Pricing</Link>
              <Link to="/evidence" className="block py-3 text-ink-50/90">Evidence</Link>
              <Link to="/about" className="block py-3 text-ink-50/90">About</Link>
              <Link to="/blog" className="block py-3 text-ink-50/90">Blog</Link>
              <a href="https://app.seascope.tech" className="block py-3 text-ink-50/90">Sign in</a>
              <a
                href="https://buy.stripe.com/5kQ00i6YjgeH7Zt9lN2ZO00"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-3 w-full"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ───── Page content ───── */}
      <main>{children}</main>

      {/* ───── Footer ───── */}
      <footer className="border-t border-ink-700/60 bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="font-display text-xl font-medium">
                SeaScope<span className="accent-sea">.</span>
              </div>
              <p className="mt-4 max-w-xs font-display text-sm italic text-ink-50/70">
                Clinical care for places medicine wasn't built for.
              </p>
            </div>

            {/* Products */}
            <div>
              <div className="eyebrow mb-4">Products</div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/seascope-cds" className="text-ink-50/70 transition hover:text-sea-300">
                    SeaScope CDS
                  </Link>
                </li>
                <li>
                  <Link to="/cargo-solutions" className="text-ink-50/70 transition hover:text-sea-300">
                    Cargo Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-ink-50/70 transition hover:text-sea-300">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/evidence" className="text-ink-50/70 transition hover:text-sea-300">
                    Evidence
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="eyebrow mb-4">Company</div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-ink-50/70 transition hover:text-sea-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-ink-50/70 transition hover:text-sea-300">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-ink-50/70 transition hover:text-sea-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@seascope.tech" className="text-ink-50/70 transition hover:text-sea-300">
                    hello@seascope.tech
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="eyebrow mb-4">Legal</div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#privacy" className="text-ink-50/70 transition hover:text-sea-300">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-ink-50/70 transition hover:text-sea-300">
                    Terms
                  </a>
                </li>
                <li>
                  <Link to="/evidence#regulatory" className="text-ink-50/70 transition hover:text-sea-300">
                    Security & HIPAA
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="hairline-top mt-12 flex flex-col gap-4 pt-6 text-xs text-ink-50/50 md:flex-row md:items-center md:justify-between">
            <div className="uppercase tracking-eyebrow">
              REMOTE AID MEDICAL, CORP. · Delaware C-Corp · Miami, FL
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
