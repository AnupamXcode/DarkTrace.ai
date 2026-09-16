import React, { useState } from 'react';
import { UserCheck, ShieldAlert, Key, Globe, DollarSign, Terminal, Download, ArrowUpRight, CheckCircle2, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ActorProfile() {
  const [copiedWallet, setCopiedWallet] = useState(false);

  const actorData = {
    codename: 'Phant0m_R00t',
    threatGroup: 'APT-319 / DarkVault Syndicate',
    confidenceScore: 94.2,
    status: 'ACTIVE ATTRIBUTION',
    primaryLanguage: 'Russian / English (Bilingual Stylometrics)',
    firstSeen: 'October 2022',
    lastActive: '14 Minutes Ago (XSS.is)',
    financialTrace: '1F1tA1p2uA58...3vJ (18.4 BTC / ~$1,150,000 USD)',
    knownAliases: [
      { forum: 'BreachForums v2', handle: 'Phant0m_Admin', rank: 'Root Broker' },
      { forum: 'XSS.is Cyber Forum', handle: 'ShadowKernel', rank: 'Vulnerability Seller' },
      { forum: 'Telegram VIP Channel', handle: '@Phant0m_Logs', rank: 'Stealer Feed Admin' },
      { forum: 'Exploit.in', handle: 'P_Root_99', rank: 'Exploit Developer' },
    ],
    linkedInfrastructure: [
      { type: 'TOR Exit Node', value: '185.220.101.5 (Germany)' },
      { type: 'C2 Command Server', value: '104.28.19.4:8443' },
      { type: 'Malware Family', value: 'RedLine / Lumma Stealer v4.2' },
      { type: 'PGP Fingerprint', value: '0x9F02A489-B12D-4C90' },
    ],
    primaryThreats: [
      'Zero-Day Linux VPN RCE Exploits',
      'Enterprise SSO Session Cookie Hijacking',
      'Corporate Financial Database SQL Leaks'
    ]
  };

  const handleCopyWallet = () => {
    navigator.clipboard.writeText('1F1tA1p2uA58eK2L1n4M9vJ');
    setCopiedWallet(true);
    setTimeout(() => setCopiedWallet(false), 2000);
  };

  return (
    <section id="actor-profile" className="py-24 relative bg-[#0C0702] border-t border-[rgba(255,106,0,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="editorial-badge mb-3 inline-flex">
              <UserCheck className="w-3.5 h-3.5 text-[#FF6A00]" />
              ATTRIBUTED THREAT DOSSIER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F0] tracking-tight font-mono">
              Actor Profile: {actorData.codename}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#9A948C]">Attribution Confidence:</span>
            <span className="px-3 py-1 rounded-full bg-[#1A1008] border border-[#FF6A00]/40 text-[#FF9D4D] font-mono text-xs font-bold">
              {actorData.confidenceScore}% VERIFIED
            </span>
          </div>
        </motion.div>

        {/* Dossier Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-card p-6 sm:p-10 rounded-3xl border border-[rgba(255,106,0,0.3)] space-y-8"
        >
          {/* Top Key Specs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-white/10 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[#9A948C] uppercase tracking-wider text-[10px]">Threat Group</span>
              <div className="text-[#F5F5F0] font-bold text-sm">{actorData.threatGroup}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[#9A948C] uppercase tracking-wider text-[10px]">Primary Language / Geo</span>
              <div className="text-[#F5F5F0] font-bold text-sm">{actorData.primaryLanguage}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[#9A948C] uppercase tracking-wider text-[10px]">First Seen / Last Active</span>
              <div className="text-[#F5F5F0] font-bold text-sm">{actorData.lastActive}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[#9A948C] uppercase tracking-wider text-[10px]">Financial Wallet</span>
              <div className="text-[#FF9D4D] font-bold text-sm flex items-center justify-between">
                <span className="truncate">{actorData.financialTrace}</span>
                <button onClick={handleCopyWallet} className="ml-2 hover:text-white">
                  {copiedWallet ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 6-cols: Cross-Forum Alias Matrix */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF9D4D] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FF6A00]" /> Known Forum Handles & Persona Cross-Map
              </h4>

              <div className="space-y-3 font-mono text-xs">
                {actorData.knownAliases.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#080501] border border-white/5 hover:border-[rgba(255,106,0,0.3)] transition-colors flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[#9A948C] text-[10px] uppercase block">{item.forum}</span>
                      <span className="text-white font-bold">{item.handle}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#1A1008] border border-white/10 text-[#FF9D4D] text-[10px]">
                      {item.rank}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6-cols: Linked Infrastructure & Attack Vectors */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF9D4D] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FF6A00]" /> Linked Infrastructure & Key Signatures
              </h4>

              <div className="space-y-3 font-mono text-xs">
                {actorData.linkedInfrastructure.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#080501] border border-white/5 hover:border-[rgba(255,106,0,0.3)] transition-colors flex items-center justify-between"
                  >
                    <span className="text-[#9A948C] text-[11px]">{item.type}</span>
                    <span className="text-[#F5F5F0] font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Primary Threat Vectors Tag List */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-[#9A948C] uppercase tracking-wider block mb-2">Key Threat Operations</span>
                <div className="flex flex-wrap gap-2">
                  {actorData.primaryThreats.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-xl text-[11px] font-mono bg-[#1A1008] border border-[#FF6A00]/20 text-[#F5F5F0]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Dossier Footer Action Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[#9A948C]">SIH Benchmark Dossier #APT-319-2025</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => alert('Generating PDF Intelligence Report for APT-319...')}
                className="px-5 py-2.5 rounded-xl font-bold bg-[#120A04] border border-white/10 hover:border-[#FF6A00]/40 text-[#F5F5F0] transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#FF6A00]" /> Export Dossier PDF
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
