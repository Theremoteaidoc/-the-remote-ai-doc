import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import SeaScopeCDS from './pages/SeaScopeCDS';
import CargoSolutions from './pages/CargoSolutions';
import Peme from './pages/Peme';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Press from './pages/Press';
import Evidence from './pages/Evidence';
import TrialStarted from './pages/TrialStarted';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';

// Existing pages preserved during migration
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Wellness from './pages/Wellness';

const wrap = (PageComponent) => (
  <SiteLayout>
    <PageComponent />
  </SiteLayout>
);

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        {/* New SeaScope family IA */}
        <Route path="/" element={wrap(Home)} />
        <Route path="/seascope-cds" element={wrap(SeaScopeCDS)} />
        <Route path="/cargo-solutions" element={wrap(CargoSolutions)} />
        <Route path="/peme" element={wrap(Peme)} />
        <Route path="/pricing" element={wrap(Pricing)} />
        <Route path="/evidence" element={wrap(Evidence)} />
        <Route path="/about" element={wrap(About)} />
        <Route path="/press" element={wrap(Press)} />
        <Route path="/privacy" element={wrap(Privacy)} />
        <Route path="/terms" element={wrap(Terms)} />
        <Route path="/security" element={wrap(Security)} />
        <Route path="/blog" element={wrap(Blog)} />
        <Route path="/blog/:slug" element={wrap(BlogPost)} />
        <Route path="/trial-started" element={wrap(TrialStarted)} />

        {/* Crew Wellness landing (published 2026-06-07 in Week 1 reframe) */}
        <Route path="/wellness" element={wrap(Wellness)} />

        {/* 301-style client-side redirects per IA migration table */}
        {/* AutoMed kill */}
        <Route path="/services" element={<Navigate to="/" replace />} />
        <Route path="/servicios" element={<Navigate to="/" replace />} />
        <Route path="/demo" element={<Navigate to="/seascope-cds" replace />} />

        {/* /seascope/* consolidation into /evidence anchors */}
        <Route path="/seascope" element={<Navigate to="/seascope-cds" replace />} />
        <Route path="/seascope/safety" element={<Navigate to="/evidence#safety" replace />} />
        <Route path="/seascope/safety-case" element={<Navigate to="/evidence#safety-case" replace />} />
        <Route path="/seascope/regulatory" element={<Navigate to="/evidence#regulatory" replace />} />
        <Route path="/seascope/evidence" element={<Navigate to="/evidence#validation" replace />} />
        <Route path="/seascope/eval-tracker" element={<Navigate to="/evidence#eval-tracker" replace />} />
        <Route path="/seascope/data-flow" element={<Navigate to="/evidence#data-flow" replace />} />
        <Route path="/seascope/pilot" element={<Navigate to="/cargo-solutions#pilot" replace />} />

        {/* Catch-all → home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HelmetProvider>
  );
}
