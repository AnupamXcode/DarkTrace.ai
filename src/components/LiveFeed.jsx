import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause, AlertTriangle, X, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveFeed() {
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
    <section id="live-feed" className="py-28 relative bg-[#171411] border-y border-[#955D31]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-mono">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="spatial-badge mb-2 inline-flex">
              <Activity className="w-3.5 h-3.5 text-[#E87532] animate-pulse" />
              NARROW EDITORIAL STREAM
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#F3EEE7] tracking-tight">
              LIVE INTELLIGENCE
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#211C18] text-[#BAAD9A] border border-white/10"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? 'Live' : 'Paused'}
            </button>
          </div>
        </div>

        {/* Editorial Narrow Feed */}
        <div className="spatial-card rounded-3xl border border-[#955D31]/30 overflow-hidden divide-y divide-white/5 text-xs">
          {filteredIncidents.map((inc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedIncident(inc)}
              className="p-5 hover:bg-[#2A241F]/80 transition-colors cursor-pointer flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#A9A097] text-[11px] shrink-0 font-bold">{inc.timestamp}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#211C18] text-[#BAAD9A] border border-white/10">
                  {inc.category}
                </span>
                <span className="text-[#F3EEE7] font-bold group-hover:text-[#E87532] transition-colors truncate">
                  {inc.title}
                </span>
              </div>

              <span className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                inc.severity === 'HIGH' ? 'bg-[#211C18] text-[#E87532] border border-[#E87532]/40' :
                'bg-[#211C18] text-[#BAAD9A] border border-white/10'
              }`}>
                {inc.severity}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Incident Detail Overlay */}
        <AnimatePresence>
          {selectedIncident && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171411]/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="spatial-card w-full max-w-lg rounded-3xl border border-[#E87532]/40 p-6 space-y-4 relative shadow-[0_0_50px_rgba(232,117,50,0.2)] text-xs font-mono"
              >
                <button
                  onClick={() => setSelectedIncident(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl text-[#A9A097] hover:text-white bg-[#211C18] border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#E87532] font-bold">{selectedIncident.timestamp} • {selectedIncident.category}</span>
                  <h3 className="text-lg font-bold text-white">{selectedIncident.title}</h3>
                  <span className="text-[#A9A097] text-[11px]">Source: {selectedIncident.source}</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#171411] border border-white/10 text-[#F3EEE7] leading-relaxed">
                  {selectedIncident.details}
                </div>

                <div className="p-3 rounded-xl bg-[#171411] text-[#BAAD9A] border border-white/10 space-y-1">
                  {selectedIncident.iocs.map((ioc, idx) => (
                    <div key={idx}>&gt; {ioc}</div>
                  ))}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setSelectedIncident(null)}
                    className="px-5 py-2 rounded-xl font-bold bg-[#E87532] text-[#171411]"
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
