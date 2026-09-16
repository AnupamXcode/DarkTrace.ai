import React, { useState, useEffect } from 'react';
import { Terminal, ShieldAlert, CheckCircle, AlertOctagon, RefreshCw, Download, ShieldCheck, Search, Hash } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Scanner({ isLightMode, targetQuery, onResetTarget }) {
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
    <section id="scanner" className="py-28 relative theme-section-bg">
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
            <h2 className="text-3xl sm:text-5xl font-black theme-text-primary font-mono tracking-tight">
              THREAT INVESTIGATION
            </h2>
          </div>
          <p className="text-xs sm:text-sm theme-text-muted font-mono max-w-md">
            Query dark web handles, Bitcoin wallets, PGP keys, or domain indicators.
          </p>
        </motion.div>

        {/* Large Workspace Card */}
        <div className="spatial-card p-6 sm:p-10 rounded-3xl space-y-8 font-mono">
          
          {/* Search Bar Container */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#E87532] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="[ handle / wallet / PGP / domain ]"
                className={`w-full pl-11 pr-4 py-4 text-xs rounded-2xl border transition-colors ${
                  isLightMode ? 'bg-stone-50 text-stone-900 border-stone-300 focus:border-orange-500' : 'bg-[#171411] text-[#F3EEE7] border-white/10 focus:border-[#E87532]'
                }`}
              />
            </div>
            <button
              onClick={() => runScan(inputQuery)}
              disabled={isScanning || !inputQuery.trim()}
              className="px-8 py-4 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 shrink-0"
            >
              {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldAlert className="w-4 h-4" />}
              {isScanning ? 'RUNNING INVESTIGATION...' : 'INVESTIGATE'}
            </button>
          </div>

          {/* Vertical Progress Line State */}
          {isScanning && (
            <div className={`p-6 rounded-2xl border relative overflow-hidden space-y-4 ${
              isLightMode ? 'bg-stone-50 border-orange-300' : 'bg-[#171411] border-[#E87532]/40'
            }`}>
              <div className="animate-copper-scanline" />
              
              <div className="flex items-center justify-between text-xs theme-text-muted">
                <span>INVESTIGATION IN PROGRESS: {inputQuery}</span>
                <span className="text-[#E87532] font-bold">{scanProgress}% COMPLETE</span>
              </div>
              
              <div className={`w-full h-2 rounded-full overflow-hidden border ${
                isLightMode ? 'bg-stone-200 border-stone-300' : 'bg-[#211C18] border-white/5'
              }`}>
                <div
                  className="h-full bg-gradient-to-r from-orange-600 to-amber-600 transition-all duration-300"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>

              <div className="text-xs theme-text-primary">
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
                
                <div className={`p-6 rounded-2xl border flex items-center gap-5 ${
                  isLightMode ? 'bg-orange-50/60 border-orange-200' : 'bg-[#171411] border-[#E87532]/30'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-orange-600/10 border-2 border-orange-500 flex items-center justify-center font-bold text-[#E87532] text-xl shadow-md">
                    {scanResults.confidence}%
                  </div>
                  <div>
                    <span className="text-[10px] theme-text-muted uppercase tracking-wider block font-bold">Investigative Score</span>
                    <div className="text-sm font-bold theme-text-primary">{scanResults.riskLevel}</div>
                    <p className="text-xs theme-text-muted">4 Evidence Artifacts</p>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-[#171411] border-white/10'
                }`}>
                  <span className="text-[10px] theme-text-muted uppercase">Target Entity</span>
                  <div className="text-sm font-bold text-[#E87532] truncate">{scanResults.target}</div>
                  <span className="text-[11px] theme-text-muted">Timestamp: {scanResults.timestamp}</span>
                </div>

                <div className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-[#171411] border-white/10'
                }`}>
                  <span className="text-[10px] theme-text-muted uppercase">Correlated Signals</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {scanResults.exposedFields.map((field, idx) => (
                      <span key={idx} className={`px-2 py-0.5 rounded text-[10px] border ${
                        isLightMode ? 'bg-white border-stone-300 text-stone-800' : 'bg-[#211C18] border-white/10 text-[#F3EEE7]'
                      }`}>
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Leaks List */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider theme-text-muted flex items-center justify-between border-b theme-border pb-3">
                  <span>Correlated Intelligence Artifacts ({scanResults.breaches.length})</span>
                  <button onClick={() => alert('Exporting Investigation PDF Brief...')} className="text-[#E87532] hover:underline flex items-center gap-1 font-bold">
                    Export Report <Download className="w-3.5 h-3.5" />
                  </button>
                </div>

                {scanResults.breaches.map((b, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                      isLightMode ? 'bg-stone-50 border-stone-200 hover:border-orange-400' : 'bg-[#171411] border-white/10 hover:border-[#E87532]/40'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-orange-500/10 text-orange-600 border border-orange-500/30">
                          {b.severity}
                        </span>
                        <h4 className="text-sm font-bold theme-text-primary">{b.name}</h4>
                        <span className="text-xs theme-text-muted">• {b.date}</span>
                      </div>
                      <p className="text-xs theme-text-muted">{b.details}</p>
                    </div>

                    <button
                      onClick={() => alert(`Triggering evidence mitigation for ${b.name}`)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all shrink-0 ${
                        isLightMode ? 'bg-white border-stone-300 text-orange-600 hover:bg-orange-50' : 'bg-[#211C18] border-white/10 text-[#BAAD9A] hover:border-[#E87532] hover:text-[#E87532]'
                      }`}
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
