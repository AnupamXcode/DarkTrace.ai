import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause, AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveFeed({ isLightMode }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedSeverity, setSelectedSeverity] = useState('ALL');
  const [selectedIncident, setSelectedIncident] = useState(null);

  const initialIncidents = [
    {
      id: '02:41:18',
      title: 'Alias correlation detected',
      category: 'Marketplace',
      severity: 'HIGH',
      source: 'XSS.is Forum',
      timestamp: '02:41:18',
      details: 'Handle "ShadowKernel" linked to primary wallet 1F1tA1p...3vJ via shared PGP key fingerprint.',
      iocs: ['PGP: 0x9F02A489', 'Wallet: 1F1tA1p...3vJ', 'Alias: ShadowKernel']
    },
    {
      id: '02:39:42',
      title: 'Identifier reused',
      category: 'PGP',
      severity: 'MEDIUM',
      source: 'Pastebin Dump #901',
      timestamp: '02:39:42',
      details: 'Public paste containing encrypted credentials signed with PGP Key 0x9F02A489.',
      iocs: ['PGP: 0x9F02A489', 'Paste ID: 901', 'Lines: 1,400']
    },
    {
      id: '02:37:12',
      title: 'New relationship observed',
      category: 'Infrastructure',
      severity: 'HIGH',
      source: 'TOR Exit Relay Agent',
      timestamp: '02:37:12',
      details: 'TOR Exit IP 185.220.101.5 connected to RedLine Stealer C2 Host 104.28.19.4:8443.',
      iocs: ['IP: 185.220.101.5', 'C2: 104.28.19.4', 'Protocol: HTTPS']
    },
    {
      id: '02:31:05',
      title: 'Ransomware Wallet Transaction',
      category: 'Blockchain',
      severity: 'HIGH',
      source: 'BTC Ledger Scanner',
      timestamp: '02:31:05',
      details: 'Incoming 2.5 BTC payment processed into target wallet 1F1tA1p...3vJ.',
      iocs: ['Tx: 4a9f8b1c...', 'Amount: 2.5 BTC', 'Status: 6 Confirmations']
    }
  ];

  const [incidents, setIncidents] = useState(initialIncidents);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
      const categories = ['Marketplace', 'PGP', 'Infrastructure', 'Blockchain'];
      const severities = ['HIGH', 'MEDIUM'];
      const randomCat = categories[Math.floor(Math.random() * categories.length)];
      const randomSev = severities[Math.floor(Math.random() * severities.length)];

      const newInc = {
        id: timeStr,
        title: `${randomCat} signal correlated`,
        category: randomCat,
        severity: randomSev,
        source: 'Automated Dark Web Scraper',
        timestamp: timeStr,
        details: `Fresh evidence correlation intercepted on dark web node #${Math.floor(Math.random() * 40)}.`,
        iocs: [`Node: #${Math.floor(Math.random() * 40)}`, `Confidence: 87%`, `Status: Verified Edge`]
      };

      setIncidents(prev => [newInc, ...prev.slice(0, 9)]);
    }, 12000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const filteredIncidents = incidents.filter(inc => {
    if (selectedSeverity === 'ALL') return true;
    return inc.severity === selectedSeverity;
  });

  return (
    <section id="live-feed" className="py-28 relative theme-section-bg border-y theme-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-mono">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="spatial-badge mb-2 inline-flex">
              <Activity className="w-3.5 h-3.5 text-[#E87532] animate-pulse" />
              NARROW EDITORIAL STREAM
            </span>
            <h2 className="text-2xl sm:text-4xl font-black theme-text-primary tracking-tight">
              LIVE INTELLIGENCE
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border ${
                isLightMode ? 'bg-white text-stone-800 border-stone-300' : 'bg-[#211C18] text-[#BAAD9A] border-white/10'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-orange-600" /> : <Play className="w-3.5 h-3.5 text-orange-600" />}
              {isPlaying ? 'Live' : 'Paused'}
            </button>
          </div>
        </div>

        {/* Editorial Narrow Feed */}
        <div className="spatial-card rounded-3xl border theme-border overflow-hidden divide-y divide-white/5 text-xs">
          {filteredIncidents.map((inc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedIncident(inc)}
              className={`p-5 transition-colors cursor-pointer flex items-center justify-between gap-4 group ${
                isLightMode ? 'hover:bg-stone-100' : 'hover:bg-[#2A241F]/80'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="theme-text-muted text-[11px] shrink-0 font-bold">{inc.timestamp}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                  isLightMode ? 'bg-stone-100 border-stone-300 text-stone-800' : 'bg-[#211C18] border-white/10 text-[#BAAD9A]'
                }`}>
                  {inc.category}
                </span>
                <span className="theme-text-primary font-bold group-hover:text-[#E87532] transition-colors truncate">
                  {inc.title}
                </span>
              </div>

              <span className="px-2 py-0.5 rounded text-[10px] font-bold shrink-0 bg-orange-500/10 text-orange-600 border border-orange-500/30">
                {inc.severity}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Incident Detail Overlay */}
        <AnimatePresence>
          {selectedIncident && (
            <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md ${
              isLightMode ? 'bg-stone-900/40' : 'bg-[#171411]/90'
            }`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="spatial-card w-full max-w-lg rounded-3xl border border-[#E87532]/40 p-6 space-y-4 relative shadow-2xl text-xs font-mono"
              >
                <button
                  onClick={() => setSelectedIncident(null)}
                  className={`absolute top-5 right-5 p-2 rounded-xl border ${
                    isLightMode ? 'bg-stone-100 border-stone-300 text-stone-700' : 'bg-[#211C18] border-white/10 text-[#A9A097]'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#E87532] font-bold">{selectedIncident.timestamp} • {selectedIncident.category}</span>
                  <h3 className="text-lg font-bold theme-text-primary">{selectedIncident.title}</h3>
                  <span className="theme-text-muted text-[11px]">Source: {selectedIncident.source}</span>
                </div>

                <div className={`p-4 rounded-2xl border theme-text-primary leading-relaxed ${
                  isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-[#171411] border-white/10'
                }`}>
                  {selectedIncident.details}
                </div>

                <div className={`p-3 rounded-xl border theme-text-muted space-y-1 ${
                  isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-[#171411] border-white/10'
                }`}>
                  {selectedIncident.iocs.map((ioc, idx) => (
                    <div key={idx}>&gt; {ioc}</div>
                  ))}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setSelectedIncident(null)}
                    className="px-5 py-2 rounded-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 text-white"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
