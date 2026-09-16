import React, { useState, useEffect } from 'react';
import { ShieldAlert, Terminal, Rocket, Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header({ isLightMode, onToggleTheme, onOpenScanner, onOpenDeployModal }) {
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
        ? isLightMode 
          ? 'border-b border-orange-500/20 bg-white/90 backdrop-blur-xl shadow-md py-3' 
          : 'border-b border-[#955D31]/25 bg-[#171411]/90 backdrop-blur-xl shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isLightMode 
                ? 'bg-orange-100 border border-orange-300 text-orange-600 shadow-sm' 
                : 'bg-[#211C18] border border-[#955D31]/40 text-[#E87532] shadow-[0_0_15px_rgba(232,117,50,0.2)]'
            }`}>
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-mono font-black text-lg tracking-tight ${isLightMode ? 'text-stone-900' : 'text-[#F3EEE7]'}`}>
                  DARK<span className="text-gradient-orange">TRACE</span>
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
                className={`text-xs font-mono transition-colors duration-200 uppercase tracking-wider font-medium ${
                  isLightMode ? 'text-stone-600 hover:text-orange-600' : 'text-[#A9A097] hover:text-[#E87532]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Sun / Moon Theme Toggle */}
            <button
              onClick={onToggleTheme}
              title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              className={`p-2.5 rounded-xl transition-all border font-mono text-xs flex items-center gap-2 ${
                isLightMode 
                  ? 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100' 
                  : 'bg-[#211C18] border-white/10 text-[#BAAD9A] hover:text-white'
              }`}
            >
              {isLightMode ? (
                <>
                  <Moon className="w-4 h-4 text-orange-600" />
                  <span className="text-[11px] font-bold">DARK</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-bold">LIGHT</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenScanner}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all shadow-lg ${
                isLightMode
                  ? 'text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-orange-500/20'
                  : 'text-[#171411] bg-gradient-to-r from-[#E87532] via-[#FF6A00] to-[#955D31] hover:brightness-110 shadow-[0_0_20px_rgba(232,117,50,0.3)]'
              }`}
            >
              <Terminal className="w-4 h-4" />
              Launch Platform
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl border text-xs font-mono ${
                isLightMode ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-[#211C18] text-[#BAAD9A] border-white/10'
              }`}
            >
              {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border ${
                isLightMode ? 'bg-stone-100 text-stone-700 border-stone-300' : 'text-[#A9A097] hover:text-white bg-[#211C18] border-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`xl:hidden border-b px-4 pt-4 pb-6 space-y-3 font-mono text-xs ${
          isLightMode ? 'bg-white border-orange-200' : 'bg-[#211C18] border-[#955D31]/30'
        }`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl ${
                isLightMode ? 'text-stone-800 hover:text-orange-600 hover:bg-stone-100' : 'text-[#F3EEE7] hover:text-[#E87532] hover:bg-[#171411]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenScanner(); }}
              className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600"
            >
              Launch Platform
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
