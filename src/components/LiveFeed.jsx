import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause, AlertTriangle, ShieldAlert, Eye, Terminal, Filter, X, ExternalLink, Hash, Globe, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveFeed() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedSeverity, setSelectedSeverity] = useState('ALL');
  const [selectedIncident, setSelectedIncident] = useState(null);

  const initialIncidents = [
    {
      id: 'INC-901',
      title: 'RedLine Stealer Dump - Corporate Auth Cookies',
      category: 'STEALER LOG',
      severity: 'CRITICAL',
      source: 'Telegram Channel @DarkLogs_VIP',
      timestamp: '2 mins ago',
      details: 'Over 1,400 session cookies extracted from browser stealer malware targeting enterprise webmail and cloud portals.',
      iocs: ['IP: 185.220.101.5', 'Hash: 4a9f8b1c0e2d3f4a', 'Target: AWS Console / Google Workspace']
    },
    {
      id: 'INC-902',
      title: 'Ransomware Post: Breach of Global Logistics Corp',
      category: 'RANSOMWARE',
      severity: 'CRITICAL',
      source: 'LockBit 3.0 Onion Blog',
      timestamp: '7 mins ago',
      details: 'Attacker demands 25 BTC payment. Proof of breach includes corporate financial spreadsheets and passport scans.',
      iocs: ['Onion: lockbitapt2...onion', 'Data Size: 88 GB', 'Encrypted Systems: 120+']
    },
    {
      id: 'INC-903',
      title: 'Zero-Day RCE Exploit Sold on XSS Forum',
      category: 'EXPLOIT',
      severity: 'HIGH',
      source: 'XSS.is Forum',
      timestamp: '15 mins ago',
      details: 'Seller "ShadowKernel" offering unpatched remote code execution vulnerability in popular Linux VPN appliance.',
      iocs: ['Price: $45,000 USD', 'Target OS: Linux / OpenVPN', 'PoC Video Attached']
    },
    {
      id: 'INC-904',
      title: 'CombList 2025: 450M Credentials Leaked',
      category: 'DATABASE',
      severity: 'HIGH',
      source: 'BreachForums v2',
      timestamp: '28 mins ago',
      details: 'Massive plain text combo list containing emails and hashed passwords compiled from historic stealer logs.',
      iocs: ['Total Rows: 450,210,000', 'File Format: TXT / CSV', 'Mirror: AnonFiles']
    },
    {
      id: 'INC-905',
      title: 'Exposed Elasticsearch Cluster with PII',
      category: 'MISCONFIG',
      severity: 'MEDIUM',
      source: 'Shodan Crawl Agent #14',
      timestamp: '42 mins ago',
      details: 'Unauthenticated database exposed on port 9200 containing customer order logs.',
      iocs: ['Port: 9200', 'Host: 104.28.19.4', 'Records: 3.2M']
    }
  ];

  const [incidents, setIncidents] = useState(initialIncidents);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const idNum = Math.floor(Math.random() * 900) + 100;
      const categories = ['STEALER LOG', 'RANSOMWARE', 'EXPLOIT', 'DATABASE'];
      const severities = ['CRITICAL', 'HIGH', 'MEDIUM'];
      const randomCat = categories[Math.floor(Math.random() * categories.length)];
      const randomSev = severities[Math.floor(Math.random() * severities.length)];

      const newInc = {
        id: `INC-${idNum}`,
        title: `Live Dark Web Detection #${idNum}: ${randomCat} Alert`,
        category: randomCat,
        severity: randomSev,
        source: 'Automated Dark Web Crawler',
        timestamp: 'Just now',
        details: `Fresh intelligence intercepted on TOR hidden service node #${Math.floor(Math.random() * 40)}.`,
        iocs: [`Node ID: node-${idNum}`, `Entropy Score: 9.4/10`, `Status: Unverified Alert`]
      };

      setIncidents(prev => [newInc, ...prev.slice(0, 11)]);
    }, 12000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const filteredIncidents = incidents.filter(inc => {
    if (selectedSeverity === 'ALL') return true;
    return inc.severity === selectedSeverity;
  });

  return (
    <section id="live-feed" className="py-24 relative bg-[#0C0702] border-y border-[rgba(255,106,0,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <span className="editorial-badge mb-2 inline-flex">
              <Activity className="w-3.5 h-3.5 text-[#FF6A00] animate-pulse" />
              REAL-TIME EVIDENCE STREAM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F0] tracking-tight font-mono">
              Live Threat Intelligence Stream
            </h2>
          </div>

          {/* Controls: Play/Pause & Severity Filters */}
          <div className="flex flex-wrap items-center gap-3">
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                isPlaying
                  ? 'bg-[#1A1008] text-[#FF6A00] border-[#FF6A00]/40'
                  : 'bg-[#120A04] text-[#9A948C] border-white/10'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? 'Live Stream Active' : 'Stream Paused'}
            </button>

            {/* Severity Filter Pills */}
            <div className="flex items-center p-1 rounded-xl bg-[#120A04] border border-white/10 text-xs font-mono">
              {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'].map(sev => (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(sev)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    selectedSeverity === sev
                      ? 'bg-[#1A1008] text-[#FF9D4D] font-bold border border-[#FF6A00]/30'
                      : 'text-[#9A948C] hover:text-[#F5F5F0]'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Incidents Stream Feed Container */}
        <div className="editorial-card rounded-3xl border border-[rgba(255,106,0,0.2)] overflow-hidden divide-y divide-white/5 font-mono">
          {filteredIncidents.length === 0 ? (
            <div className="p-8 text-center text-[#9A948C] text-xs">
              No incidents matching filter criteria.
            </div>
          ) : (
            filteredIncidents.map((inc) => (
              <motion.div
                key={inc.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setSelectedIncident(inc)}
                className="p-5 hover:bg-[#1A1008]/80 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl border mt-0.5 ${
                    inc.severity === 'CRITICAL' ? 'bg-[#1A1008] border-[#FF6A00]/40 text-[#FF6A00]' :
                    'bg-[#120A04] border-[#FF9D4D]/30 text-[#FF9D4D]'
                  }`}>
                    <AlertTriangle className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="font-bold text-[#9A948C]">{inc.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        inc.severity === 'CRITICAL' ? 'bg-[#1A1008] text-[#FF6A00] border border-[#FF6A00]/40' :
                        'bg-[#120A04] text-[#FF9D4D] border border-[#FF9D4D]/30'
                      }`}>
                        {inc.severity}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#120A04] text-[#9A948C] border border-white/10">
                        {inc.category}
                      </span>
                      <span className="text-[#9A948C]">• {inc.timestamp}</span>
                    </div>

                    <h3 className="mt-1 text-sm sm:text-base font-bold text-white group-hover:text-[#FF9D4D] transition-colors">
                      {inc.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#9A948C] line-clamp-1">{inc.details}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="text-xs text-[#9A948C] hidden lg:inline">{inc.source}</span>
                  <button className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#F5F5F0] bg-[#120A04] border border-white/10 group-hover:border-[#FF6A00]/40 group-hover:text-[#FF9D4D] transition-all">
                    Inspect IOCs
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* INCIDENT DETAIL MODAL */}
        <AnimatePresence>
          {selectedIncident && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080501]/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="editorial-card w-full max-w-2xl rounded-3xl border border-[#FF6A00]/40 p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(255,106,0,0.2)] font-mono"
              >
                
                <button
                  onClick={() => setSelectedIncident(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl text-[#9A948C] hover:text-white bg-[#120A04] border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#FF6A00]">{selectedIncident.id}</span>
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#1A1008] text-[#FF6A00] border border-[#FF6A00]/40">
                      {selectedIncident.severity}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">{selectedIncident.title}</h3>
                  <p className="text-xs text-[#9A948C]">Source: <span className="text-[#FF9D4D]">{selectedIncident.source}</span></p>
                </div>

                <div className="p-4 rounded-2xl bg-[#080501] border border-white/10 text-xs text-[#F5F5F0] leading-relaxed">
                  {selectedIncident.details}
                </div>

                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#9A948C] flex items-center gap-1">
                    <Hash className="w-3.5 h-3.5 text-[#FF6A00]" /> Indicators of Compromise (IOCs)
                  </div>
                  <div className="p-4 rounded-2xl bg-[#080501] text-xs text-[#FF9D4D] border border-white/10 space-y-1">
                    {selectedIncident.iocs.map((ioc, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-[#9A948C]">&gt;</span>
                        <span>{ioc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => setSelectedIncident(null)}
                    className="px-5 py-2.5 rounded-xl text-xs text-[#9A948C] hover:text-white bg-[#120A04] border border-white/10"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => { alert('Automated Takedown Request Submitted!'); setSelectedIncident(null); }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#080501] bg-[#FF6A00] hover:bg-[#FF9D4D]"
                  >
                    Trigger Takedown Request
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
