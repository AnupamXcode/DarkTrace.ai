import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause, AlertTriangle, ShieldAlert, Eye, Terminal, Filter, X, ExternalLink, Hash, Globe, Server } from 'lucide-react';

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

  // Live simulation: add new incident every 12 seconds if playing
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
    <section id="live-feed" className="py-16 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              Real-time Event Stream
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Live Threat Intelligence Stream
            </h2>
          </div>

          {/* Controls: Play/Pause & Filters */}
          <div className="flex flex-wrap items-center gap-3">
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                isPlaying
                  ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-950/80 text-amber-400 border-amber-500/30'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? 'Live Stream Active' : 'Stream Paused'}
            </button>

            {/* Severity Filter Pills */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
              {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'].map(sev => (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(sev)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    selectedSeverity === sev
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Incidents Stream Feed Container */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden divide-y divide-slate-800/80">
          {filteredIncidents.length === 0 ? (
            <div className="p-8 text-center text-slate-500 font-mono text-sm">
              No incidents matching filter criteria.
            </div>
          ) : (
            filteredIncidents.map((inc) => (
              <div
                key={inc.id}
                onClick={() => setSelectedIncident(inc)}
                className="p-5 hover:bg-slate-900/60 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl border mt-0.5 ${
                    inc.severity === 'CRITICAL' ? 'bg-rose-950/80 border-rose-500/30 text-rose-400' :
                    inc.severity === 'HIGH' ? 'bg-amber-950/80 border-amber-500/30 text-amber-400' :
                    'bg-cyan-950/80 border-cyan-500/30 text-cyan-400'
                  }`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-slate-500">{inc.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                        inc.severity === 'CRITICAL' ? 'bg-rose-950 text-rose-400 border border-rose-600/40' :
                        inc.severity === 'HIGH' ? 'bg-amber-950 text-amber-400 border border-amber-600/40' :
                        'bg-cyan-950 text-cyan-400 border border-cyan-600/40'
                      }`}>
                        {inc.severity}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-700">
                        {inc.category}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">• {inc.timestamp}</span>
                    </div>

                    <h3 className="mt-1 text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                      {inc.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 line-clamp-1">{inc.details}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="text-xs font-mono text-slate-500 hidden lg:inline">{inc.source}</span>
                  <button className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-slate-700 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all">
                    Inspect IOCs
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* INCIDENT DETAIL MODAL */}
        {selectedIncident && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel w-full max-w-2xl rounded-3xl border border-cyan-500/30 p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(0,240,255,0.15)]">
              
              <button
                onClick={() => setSelectedIncident(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-cyan-400">{selectedIncident.id}</span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold font-mono bg-rose-950 text-rose-400 border border-rose-600/40">
                    {selectedIncident.severity}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white font-mono">{selectedIncident.title}</h3>
                <p className="text-xs font-mono text-slate-400">Source: <span className="text-cyan-300">{selectedIncident.source}</span></p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-300 leading-relaxed">
                {selectedIncident.details}
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Hash className="w-3.5 h-3.5 text-cyan-400" /> Indicators of Compromise (IOCs)
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 font-mono text-xs text-cyan-300 border border-slate-800 space-y-1">
                  {selectedIncident.iocs.map((ioc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-slate-600">&gt;</span>
                      <span>{ioc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedIncident(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => { alert('Mitigation action triggered!'); setSelectedIncident(null); }}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300"
                >
                  Trigger Takedown Request
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
