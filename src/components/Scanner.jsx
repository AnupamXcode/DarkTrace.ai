import React, { useState, useEffect } from 'react';
import { Terminal, ShieldAlert, CheckCircle, AlertOctagon, Eye, RefreshCw, Lock, FileText, Download, ShieldCheck, ArrowUpRight, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Scanner({ targetQuery, onResetTarget }) {
  const [inputQuery, setInputQuery] = useState(targetQuery || '');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState('');
  const [scanResults, setScanResults] = useState(null);

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
    'Generating Threat Severity & Actor Correlation Report...'
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
          generateResults(query);
        }, 600);
      }
    }, 700);
  };

  const generateResults = (query) => {
    const isDomain = query.includes('.') && !query.includes('@');
    const domainName = isDomain ? query : query.split('@')[1] || 'target-entity.com';

    setScanResults({
      target: query,
      timestamp: new Date().toLocaleTimeString() + ' UTC',
      riskScore: 84,
      riskLevel: 'HIGH THREAT ATTRIBUTION',
      totalBreaches: 4,
      exposedFields: ['Passwords (Bcrypt)', 'RedLine Session Cookies', 'Bitcoin Wallet Trace', 'PGP Fingerprint'],
      breaches: [
        {
          name: 'Telegram Stealer Dump #4912',
          date: '14 Hours Ago',
          source: 'RedLine Stealer Botnet',
          severity: 'CRITICAL',
          details: `Stolen credentials & hijacked browser cookies detected for admin@${domainName}. Linked to threat actor Phant0m_R00t.`,
          exposed: ['Email', 'Plaintext Credential', 'IP History', 'Active Cookie Token']
        },
        {
          name: 'Breached Database: Corp-Finance-2025',
          date: '3 Days Ago',
          source: 'XSS Cyber Forum',
          severity: 'HIGH',
          details: 'Extracted SQL dump containing 3.4M hashed credentials & employee PII offered for 2.5 BTC.',
          exposed: ['Email', 'Bcrypt Hash', 'Phone Number', 'Internal IP']
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
    <section id="scanner" className="py-24 relative bg-[#080501]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="editorial-badge mb-3 inline-flex">
              <Terminal className="w-3.5 h-3.5 text-[#FF6A00]" />
              ATTRIBUTION SCANNER ENGINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F0] tracking-tight font-mono">
              Deep Target Vulnerability Audit
            </h2>
          </div>
          <p className="text-[#9A948C] text-xs sm:text-sm font-mono max-w-md">
            Query TOR onion marketplaces, stealer log dumps, and forum personas in real-time.
          </p>
        </motion.div>

        {/* Scanner Panel */}
        <div className="editorial-card p-6 sm:p-10 rounded-3xl border border-[rgba(255,106,0,0.25)] relative overflow-hidden space-y-8">
          
          {/* Search Form Input */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Terminal className="w-4 h-4 text-[#FF6A00] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Enter domain (e.g. AcmeCorp.com) or target email..."
                className="w-full pl-11 pr-4 py-4 bg-[#0C0702] text-[#F5F5F0] font-mono text-xs rounded-2xl border border-white/10 focus:outline-none focus:border-[#FF6A00] transition-colors"
              />
            </div>
            <button
              onClick={() => runScan(inputQuery)}
              disabled={isScanning || !inputQuery.trim()}
              className="px-8 py-4 rounded-2xl font-bold font-mono text-xs text-[#080501] bg-[#FF6A00] hover:bg-[#FF9D4D] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,106,0,0.3)] shrink-0"
            >
              {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldAlert className="w-4 h-4" />}
              {isScanning ? 'Querying Onion Nodes...' : 'Start Audit'}
            </button>
          </div>

          {/* SCANNING STATE ANIMATION */}
          {isScanning && (
            <div className="p-6 rounded-2xl bg-[#0C0702] border border-[#FF6A00]/40 relative overflow-hidden space-y-4">
              <div className="animate-scanline" />
              
              <div className="flex items-center justify-between text-xs font-mono text-[#FF9D4D]">
                <span>AUDIT IN PROGRESS: {inputQuery}</span>
                <span>{scanProgress}% COMPLETE</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-[#120A04] overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FF9D4D] transition-all duration-300 shadow-[0_0_12px_#FF6A00]"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-[#F5F5F0]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] animate-ping" />
                <span>{currentStage}</span>
              </div>
            </div>
          )}

          {/* SCAN RESULTS PANEL */}
          {scanResults && !isScanning && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Header Overview Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Risk Gauge Card */}
                <div className="p-6 rounded-2xl bg-[#0C0702] border border-[#FF6A00]/30 flex items-center gap-5">
                  <div className="relative w-16 h-16 rounded-full bg-[#1A1008] border-2 border-[#FF6A00] flex items-center justify-center font-mono font-black text-[#FF6A00] text-xl shadow-[0_0_20px_rgba(255,106,0,0.3)]">
                    {scanResults.riskScore}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#FF9D4D] uppercase tracking-wider block font-bold">Severity Rating</span>
                    <div className="text-base font-black text-white font-mono">{scanResults.riskLevel}</div>
                    <p className="text-xs text-[#9A948C] font-mono">4 Connected Leaks</p>
                  </div>
                </div>

                {/* Target Info */}
                <div className="p-6 rounded-2xl bg-[#0C0702] border border-white/10 flex flex-col justify-between font-mono">
                  <span className="text-[10px] text-[#9A948C] uppercase tracking-wider block">Target Entity</span>
                  <div className="text-sm font-bold text-[#FF9D4D] truncate">{scanResults.target}</div>
                  <span className="text-[11px] text-[#9A948C]">Timestamp: {scanResults.timestamp}</span>
                </div>

                {/* Exposed Fields */}
                <div className="p-6 rounded-2xl bg-[#0C0702] border border-white/10 flex flex-col justify-between font-mono">
                  <span className="text-[10px] text-[#9A948C] uppercase tracking-wider block">Compromised Artifact Types</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {scanResults.exposedFields.map((field, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-[#120A04] border border-white/10 text-[#F5F5F0]">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Detailed Leaks List */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9A948C] flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Detected Dark Web Leaks & Persona Matches ({scanResults.breaches.length})</span>
                  <button onClick={() => alert('Generating Executive PDF Intelligence Report...')} className="text-[#FF9D4D] hover:underline flex items-center gap-1">
                    Download Full PDF Report <Download className="w-3.5 h-3.5" />
                  </button>
                </div>

                {scanResults.breaches.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0C0702] border border-white/10 hover:border-[#FF6A00]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                          b.severity === 'CRITICAL' ? 'bg-[#1A1008] text-[#FF6A00] border border-[#FF6A00]/40' :
                          'bg-[#120A04] text-[#FF9D4D] border border-[#FF9D4D]/30'
                        }`}>
                          {b.severity}
                        </span>
                        <h4 className="text-sm font-bold text-white">{b.name}</h4>
                        <span className="text-xs text-[#9A948C]">• {b.date}</span>
                      </div>
                      <p className="text-xs text-[#9A948C]">{b.details}</p>
                      <div className="text-[11px] text-[#9A948C]">
                        Source Vector: <span className="text-[#FF9D4D]">{b.source}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => alert(`Triggering mitigation protocol for ${b.name}`)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-[#FF9D4D] bg-[#1A1008] border border-[#FF6A00]/30 hover:bg-[#FF6A00] hover:text-[#080501] transition-all flex items-center gap-1.5 shrink-0"
                    >
                      <span>Mitigate</span> <ShieldCheck className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
