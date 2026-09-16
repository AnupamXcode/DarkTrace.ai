import React, { useState } from 'react';
import { ShieldAlert, Terminal, Rocket, Menu, X, Network, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header({ onOpenScanner, onOpenDeployModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Attribution Pipeline', href: '#workflow' },
    { label: 'Interactive Graph', href: '#knowledge-graph' },
    { label: 'Actor Dossier', href: '#actor-profile' },
    { label: 'Scanner Engine', href: '#scanner' },
    { label: 'Live Stream', href: '#live-feed' },
    { label: 'Radar Analytics', href: '#metrics' },
    { label: 'Capabilities', href: '#features' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,106,0,0.15)] bg-[#080501]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#1A1008] border border-[rgba(255,106,0,0.4)] text-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-black text-lg tracking-tight text-[#F5F5F0]">
                  DARK<span className="text-[#FF6A00]">TRACE</span>
                </span>
                <span className="editorial-badge text-[9px] py-0.5">
                  SIH PROTOTYPE
                </span>
              </div>
              <p className="text-[10px] text-[#9A948C] font-mono flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-ping" />
                AI Threat Attribution Engine Active
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-mono text-[#9A948C] hover:text-[#FF9D4D] transition-colors duration-200 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDeployModal}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-[#F5F5F0] bg-[#120A04] hover:bg-[#1A1008] border border-white/10 hover:border-[#FF6A00]/40 transition-all duration-200"
            >
              <Rocket className="w-3.5 h-3.5 text-[#FF9D4D]" />
              Deploy to Vercel
            </button>
            <button
              onClick={onOpenScanner}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#080501] bg-[#FF6A00] hover:bg-[#FF9D4D] shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all duration-200"
            >
              <Terminal className="w-4 h-4" />
              Run Attribution Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#9A948C] hover:text-white bg-[#120A04] border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0C0702] border-b border-[rgba(255,106,0,0.2)] px-4 pt-4 pb-6 space-y-3 font-mono">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-xs font-medium text-[#F5F5F0] hover:text-[#FF9D4D] hover:bg-[#1A1008]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenScanner(); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-[#080501] bg-[#FF6A00]"
            >
              <Terminal className="w-4 h-4" />
              Run Attribution Audit
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDeployModal(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#F5F5F0] bg-[#120A04] border border-white/10"
            >
              <Rocket className="w-4 h-4 text-[#FF9D4D]" />
              Deploy to Vercel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
