import React, { useState, useEffect } from 'react';
import { Terminal, ShieldAlert, CheckCircle, AlertOctagon, Eye, RefreshCw, Lock, FileText, Download, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Scanner({ targetQuery, onResetTarget }) {
  const [inputQuery, setInputQuery] = useState(targetQuery || '');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState('');
  const [scanResults, setScanResults] = useState(null);

  // Auto start scan if targetQuery changes
  useEffect(() => {
    if (targetQuery) {
      setInputQuery(targetQuery);
      runScan(targetQuery);
    }
  }, [targetQuery]);

  const stages = [
    'Connecting to TOR Onion Nodes & Hidden Services...',
    'Indexing Dark Web Forums (BreachForums, XSS, Exploit.in)...',
    'Querying Stealer Log Repositories (RedLine, Vidar, Lumma)...',
    'Cross-referencing Compromised SSO & Session Cookies...',
    'Generating Threat Severity & Remediation Report...'
  ];

  const runScan = (queryToScan) => {
    const query = queryToScan || inputQuery;
    if (!query.trim()) return;

    setIsScanning(true);
    setScanProgress(0);
    setScanResults(null);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progressPercent = Math.min(step * 20, 100);
      setScanProgress(progressPercent);
      setCurrentStage(stages[Math.min(step - 1, stages.length - 1)]);

      if (step >= 5) {
        clearInterval(interval);
        setTimeout(() => {
          setIsScanning(false);
          // Generate deterministic mock scan results based on query
          generateResults(query);
        }, 600);
      }
    }, 700);
  };

  const generateResults = (query) => {
    const isDomain = query.includes('.') && !query.includes('@');
    const domainName = isDomain ? query : query.split('@')[1] || 'domain.com';

    setScanResults({
      target: query,
      timestamp: new Date().toLocaleTimeString() + ' UTC',
      riskScore: 78,
      riskLevel: 'HIGH THREAT',
      totalBreaches: 4,
      exposedFields: ['Passwords (NTLM/Bcrypt)', 'Stealer Logs', 'Session Cookies', 'IP History'],
      breaches: [
        {
          name: 'Telegram Stealer Dump #4912',
          date: '14 Hours Ago',
          source: 'RedLine Stealer Botnet',
          severity: 'CRITICAL',
          details: `Stolen credentials found for admin@${domainName}. Browser session cookies active.`,
          exposed: ['Email', 'Plaintext Password', 'IP Address', 'Browser User-Agent']
        },
        {
          name: 'Breached Database: Corp-Finance-2025',
          date: '3 Days Ago',
          source: 'XSS Cyber Forum',
          severity: 'HIGH',
          details: 'Extracted SQL dump containing hashed credentials & employee PII.',
          exposed: ['Email', 'Bcrypt Password Hash', 'Phone Number']
        },
        {
          name: 'ComboList Pastebin Leak',
          date: '12 Days Ago',
          source: 'Pastebin Dump',
          severity: 'MEDIUM',
          details: 'Credential stuffing pair published in public paste.',
          exposed: ['Email', 'Cleartext Credential']
        }
      ]
    });
  };

  return (
    <section id="scanner" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4" />
              Live Dark Web Intelligence Scanner
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Deep Target Vulnerability Audit
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Query dark web forums, stealer log dumps, and TOR onion marketplaces in real-time.
          </p>
        </div>

        {/* Scanner Panel */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
          
          {/* Top Form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Terminal className="w-5 h-5 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Enter domain (e.g. AcmeCorp.com) or target email..."
                className="w-full pl-12 pr-4 py-4 bg-slate-950/90 text-slate-100 font-mono text-sm rounded-2xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
            </div>
            <button
              onClick={() => runScan(inputQuery)}
              disabled={isScanning || !inputQuery.trim()}
              className="px-8 py-4 rounded-2xl font-bold font-mono text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldAlert className="w-4 h-4" />}
              {isScanning ? 'Scanning Onion Nodes...' : 'Start Audit'}
            </button>
          </div>

          {/* SCANNING STATE ANIMATION */}
          {isScanning && (
            <div className="mt-8 p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 relative overflow-hidden">
              <div className="animate-scanline" />
              
              <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-2">
                <span>AUDIT IN PROGRESS: {inputQuery}</span>
                <span>{scanProgress}% COMPLETE</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden mb-4 border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-300 shadow-[0_0_12px_#00f0ff]"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>

              <div className="flex items-center gap-3 text-sm font-mono text-slate-300">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                <span>{currentStage}</span>
              </div>
            </div>
          )}

          {/* SCAN RESULTS PANEL */}
          {scanResults && !isScanning && (
            <div className="mt-8 space-y-6 animate-in fade-in duration-300">
              
              {/* Header Overview Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Risk Gauge Card */}
                <div className="p-5 rounded-2xl bg-slate-950/90 border border-rose-500/30 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full bg-rose-950/80 border-2 border-rose-500 flex items-center justify-center font-mono font-black text-rose-400 text-xl shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                    {scanResults.riskScore}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest font-bold">Severity Score</span>
                    <div className="text-lg font-black text-rose-300 font-mono">{scanResults.riskLevel}</div>
                    <p className="text-xs text-slate-400">4 Leaks Detected</p>
                  </div>
                </div>

                {/* Target Information */}
                <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Target Audited</span>
                  <div className="text-sm font-bold text-cyan-300 font-mono truncate">{scanResults.target}</div>
                  <span className="text-[11px] text-slate-500 font-mono">Last Scanned: {scanResults.timestamp}</span>
                </div>

                {/* Compromised Artifacts Summary */}
                <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Exposed Data Types</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {scanResults.exposedFields.map((field, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700 text-slate-300">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Detailed Leaks List */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Detected Dark Web Leaks ({scanResults.breaches.length})</span>
                  <span className="text-cyan-400 cursor-pointer flex items-center gap-1 hover:underline">
                    Download Full PDF Report <Download className="w-3.5 h-3.5" />
                  </span>
                </div>

                {scanResults.breaches.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                          b.severity === 'CRITICAL' ? 'bg-rose-950 text-rose-400 border border-rose-600/40' :
                          'bg-amber-950 text-amber-400 border border-amber-600/40'
                        }`}>
                          {b.severity}
                        </span>
                        <h4 className="text-sm font-bold text-white font-mono">{b.name}</h4>
                        <span className="text-xs text-slate-500 font-mono">• {b.date}</span>
                      </div>
                      <p className="text-xs text-slate-400">{b.details}</p>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-[11px] font-mono text-slate-500">Source: <span className="text-cyan-400">{b.source}</span></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-900/60 flex items-center gap-1">
                        Remediate <ShieldCheck className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
