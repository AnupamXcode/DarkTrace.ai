import React, { useState } from 'react';
import { ShieldAlert, Terminal, Activity, Rocket, Menu, X, ExternalLink, Flame } from 'lucide-react';

export default function Header({ onOpenScanner, onOpenDeployModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Scanner', href: '#scanner' },
    { label: 'Live Intelligence Feed', href: '#live-feed' },
    { label: 'Risk Analytics', href: '#metrics' },
    { label: 'Capabilities', href: '#features' },
  ];

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 shadow-[0_0_8px_#10b981]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white font-mono">
                  SHADOW<span className="text-cyan-400">INTEL</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider font-semibold rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 uppercase">
                  v2.4 Live
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Dark Web Monitor Active
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDeployModal}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
            >
              <Rocket className="w-3.5 h-3.5 text-purple-400" />
              Deploy to Vercel
            </button>
            <button
              onClick={onOpenScanner}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-200"
            >
              <Terminal className="w-4 h-4" />
              Run Deep Leak Scan
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenScanner(); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-slate-950 bg-cyan-400"
            >
              <Terminal className="w-4 h-4" />
              Run Deep Leak Scan
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDeployModal(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700"
            >
              <Rocket className="w-4 h-4 text-purple-400" />
              Deploy to Vercel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
