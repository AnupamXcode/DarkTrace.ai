import React, { useState, useEffect } from 'react';
import { Terminal, ShieldAlert, CheckCircle, AlertOctagon, RefreshCw, Download, ShieldCheck, Search, Hash } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const investigationSteps = [
    '01  COLLECTION (TOR Onion & Telegram Scrapers)',
    '02  ENTITY EXTRACTION (Parsing Stealer Logs & Cookies)',
    '03  CORRELATION (Multi-Graph Persona & Wallet Linkage)',
    '04  BEHAVIOURAL ANALYSIS (Stylometrics & Timezones)',
    '05  EVIDENCE FUSION (Generating Attribution Brief)'
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
      setCurrentStage(investigationSteps[Math.min(step - 1, investigationSteps.length - 1)]);

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
    const domainName = isDomain ? query : query.split('@')[1] || 'domain.com';

    setScanResults({
      target: query,
      timestamp: new Date().toLocaleTimeString() + ' UTC',
      confidence: 87,
      riskLevel: 'ATTRIBUTION HYPOTHESIS HIGH',
      totalBreaches: 4,
      exposedFields: ['Passwords (Bcrypt)', 'RedLine Session Cookies', 'Bitcoin Wallet Trace', 'PGP Fingerprint'],
      breaches: [
        {
          name: 'Telegram Stealer Dump #4912',
          date: '14 Hours Ago',
          source: 'RedLine Stealer Botnet',
          severity: 'HIGH',
          details: `Stolen credentials & hijacked browser cookies detected for admin@${domainName}. Linked to threat actor DARKWOLF23.`,
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
    <section id="scanner" className="py-28 relative bg-[#171411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="spatial-badge mb-3 inline-flex">
              <Terminal className="w-3.5 h-3.5 text-[#E87532]" />
              INVESTIGATOR WORKSPACE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F3EEE7] font-mono tracking-tight">
              THREAT INVESTIGATION
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A9A097] font-mono max-w-md">
            Query dark web handles, Bitcoin wallets, PGP keys, or domain indicators.
          </p>
        </motion.div>

        {/* Large Workspace Card */}
        <div className="spatial-card p-6 sm:p-10 rounded-3xl border border-[#955D31]/40 space-y-8 font-mono">
          
          {/* Search Bar Container */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#E87532] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="[ handle / wallet / PGP / domain ]"
                className="w-full pl-11 pr-4 py-4 bg-[#171411] text-[#F3EEE7] text-xs rounded-2xl border border-white/10 focus:outline-none focus:border-[#E87532] transition-colors"
              />
            </div>
            <button
              onClick={() => runScan(inputQuery)}
              disabled={isScanning || !inputQuery.trim()}
              className="px-8 py-4 rounded-2xl font-bold text-xs text-[#171411] bg-[#E87532] hover:bg-[#955D31] hover:text-[#F3EEE7] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(232,117,50,0.3)] shrink-0"
            >
              {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldAlert className="w-4 h-4" />}
              {isScanning ? 'RUNNING INVESTIGATION...' : 'INVESTIGATE'}
            </button>
          </div>

          {/* Vertical Progress Line State */}
          {isScanning && (
            <div className="p-6 rounded-2xl bg-[#171411] border border-[#E87532]/40 relative overflow-hidden space-y-4">
              <div className="animate-copper-scanline" />
              
              <div className="flex items-center justify-between text-xs text-[#BAAD9A]">
                <span>INVESTIGATION IN PROGRESS: {inputQuery}</span>
                <span>{scanProgress}% COMPLETE</span>
              </div>
              
              <div className="w-full h-2 rounded-full bg-[#211C18] overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[#955D31] to-[#E87532] transition-all duration-300"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>

              <div className="text-xs text-[#F3EEE7]">
                <span>&gt; {currentStage}</span>
              </div>
            </div>
          )}

          {/* Results Panel */}
          {scanResults && !isScanning && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="p-6 rounded-2xl bg-[#171411] border border-[#E87532]/30 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-[#211C18] border-2 border-[#E87532] flex items-center justify-center font-bold text-[#E87532] text-xl shadow-[0_0_20px_rgba(232,117,50,0.3)]">
                    {scanResults.confidence}%
                  </div>
                  <div>
                    <span className="text-[10px] text-[#BAAD9A] uppercase tracking-wider block font-bold">Investigative Score</span>
                    <div className="text-sm font-bold text-[#F3EEE7]">{scanResults.riskLevel}</div>
                    <p className="text-xs text-[#A9A097]">4 Evidence Artifacts</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#171411] border border-white/10 flex flex-col justify-between">
                  <span className="text-[10px] text-[#A9A097] uppercase">Target Entity</span>
                  <div className="text-sm font-bold text-[#BAAD9A] truncate">{scanResults.target}</div>
                  <span className="text-[11px] text-[#A9A097]">Timestamp: {scanResults.timestamp}</span>
                </div>

                <div className="p-6 rounded-2xl bg-[#171411] border border-white/10 flex flex-col justify-between">
                  <span className="text-[10px] text-[#A9A097] uppercase">Correlated Signals</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {scanResults.exposedFields.map((field, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-[#211C18] border border-white/10 text-[#F3EEE7]">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Leaks List */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#A9A097] flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Correlated Intelligence Artifacts ({scanResults.breaches.length})</span>
                  <button onClick={() => alert('Exporting Investigation PDF Brief...')} className="text-[#BAAD9A] hover:underline flex items-center gap-1">
                    Export Report <Download className="w-3.5 h-3.5" />
                  </button>
                </div>

                {scanResults.breaches.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#171411] border border-white/10 hover:border-[#E87532]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#211C18] text-[#E87532] border border-[#E87532]/40">
                          {b.severity}
                        </span>
                        <h4 className="text-sm font-bold text-white">{b.name}</h4>
                        <span className="text-xs text-[#A9A097]">• {b.date}</span>
                      </div>
                      <p className="text-xs text-[#A9A097]">{b.details}</p>
                    </div>

                    <button
                      onClick={() => alert(`Triggering evidence mitigation for ${b.name}`)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-[#BAAD9A] bg-[#211C18] border border-white/10 hover:border-[#E87532] hover:text-[#E87532] transition-all shrink-0"
                    >
                      Mitigate Signal
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
