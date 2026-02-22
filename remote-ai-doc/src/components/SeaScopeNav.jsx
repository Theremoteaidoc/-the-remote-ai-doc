import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Ship, Home, Shield, Users, FileCheck, Activity, Building, Target, ArrowLeft } from 'lucide-react';

export function SeaScopeNav() {
  const location = useLocation();

  const navItems = [
    { path: '/seascope', icon: Home, label: 'Overview' },
    { path: '/seascope/safety', icon: Shield, label: 'Safety' },
    { path: '/seascope/pilot', icon: Users, label: 'Pilot' },
    { path: '/seascope/evidence', icon: FileCheck, label: 'Evidence' },
    { path: '/seascope/safety-case', icon: Shield, label: 'Safety Case' },
    { path: '/seascope/data-flow', icon: Activity, label: 'Data Flow' },
    { path: '/seascope/regulatory', icon: Building, label: 'Regulatory' },
    { path: '/seascope/eval', icon: Target, label: 'Evaluation' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/seascope" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
              <Ship className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">SeaScope</span>
              <span className="text-xs text-teal-400 ml-2">CDS</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Back to main site */}
          <Link
            to="/"
            className="flex items-center space-x-2 px-4 py-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Exit SeaScope</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-500/20 text-teal-300'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}