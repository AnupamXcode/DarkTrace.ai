import React, { useState, useEffect } from 'react';
import { ShieldAlert, Terminal, Rocket, Menu, X, Network } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header({ onOpenScanner, onOpenDeployModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Platform', href: '#hero' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Actor Dossier', href: '#actor-profile' },
    { label: 'Investigate', href: '#scanner' },
    { label: 'Research', href: '#architecture' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'border-b border-[#955D31]/25 bg-[#171411]/90 backdrop-blur-xl shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#211C18] border border-[#955D31]/40 flex items-center justify-center text-[#E87532] shadow-[0_0_15px_rgba(232,117,50,0.2)]">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-black text-lg tracking-tight text-[#F3EEE7]">
                  DARK<span className="text-[#E87532]">TRACE</span>
                </span>
                <span className="spatial-badge text-[9px] py-0.5">
                  PROTOTYPE v2.4
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-mono text-[#A9A097] hover:text-[#E87532] transition-colors duration-200 uppercase tracking-wider font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenScanner}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-[#171411] bg-[#E87532] hover:bg-[#955D31] hover:text-[#F3EEE7] transition-all shadow-[0_0_20px_rgba(232,117,50,0.3)]"
            >
              <Terminal className="w-4 h-4" />
              Launch Platform
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#A9A097] hover:text-white bg-[#211C18] border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#211C18] border-b border-[#955D31]/30 px-4 pt-4 pb-6 space-y-3 font-mono text-xs">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-[#F3EEE7] hover:text-[#E87532] hover:bg-[#171411]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenScanner(); }}
              className="w-full py-3 rounded-xl font-bold text-[#171411] bg-[#E87532]"
            >
              Launch Platform
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
