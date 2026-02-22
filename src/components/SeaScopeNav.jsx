import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: "Overview", path: "/seascope" },
  { label: "Evidence", path: "/seascope/evidence" },
  { label: "Safety Case", path: "/seascope/safety-case" },
  { label: "Data Flow", path: "/seascope/data-flow" },
  { label: "Regulatory", path: "/seascope/regulatory" },
  { label: "Safety", path: "/seascope/safety" },
  { label: "Pilot", path: "/seascope/pilot" },
  { label: "Eval v2", path: "/seascope/eval" },
];

export function SeaScopeNav() {
  const location = useLocation();

  return (
    <>
      {/* Confidential Badge */}
      <div className="fixed top-4 right-4 z-40 bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-red-500/50">
        CONFIDENTIAL — Shared under NDA
      </div>

      {/* Sticky Sub-Navigation */}
      <nav className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <Link to="/seascope" className="text-teal-400 font-bold text-sm tracking-wide hover:text-teal-300 transition-colors flex-shrink-0">
              SeaScope CDS
            </Link>
            <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide ml-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-400/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
