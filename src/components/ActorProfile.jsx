import React, { useState } from 'react';
import { UserCheck, Globe, Terminal, Download, CheckCircle2, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ActorProfile({ isLightMode }) {
  const [copiedWallet, setCopiedWallet] = useState(false);

  const actorData = {
    codename: 'DARKWOLF23',
    threatGroup: 'APT-319 / DarkVault Syndicate',
    confidenceScore: 87,
    status: 'ATTRIBUTION HYPOTHESIS VERIFIED',
    primaryLanguage: 'Russian / English (Bilingual Stylometrics)',
    firstSeen: 'October 2024',
    lastActive: '14 Minutes Ago (XSS.is)',
    financialTrace: '1F1tA1p2uA58...3vJ (18.4 BTC / ~$1,150,000 USD)',
    stats: [
      { label: 'CONNECTED ALIASES', count: '04 ALIASES' },
      { label: 'BITCOIN WALLETS', count: '03 WALLETS' },
      { label: 'PGP KEYS', count: '02 PGP KEYS' },
      { label: 'MARKETPLACES', count: '07 MARKETPLACES' },
      { label: 'DARK WEB FORUMS', count: '06 FORUMS' },
    ],
    knownAliases: [
      { forum: 'BreachForums v2', handle: 'DARKWOLF23', rank: 'Root Admin' },
      { forum: 'XSS.is Cyber Forum', handle: 'ShadowKernel', rank: 'Vulnerability Seller' },
      { forum: 'Telegram VIP Channel', handle: '@Phant0m_Logs', rank: 'Stealer Feed Admin' },
      { forum: 'Exploit.in', handle: 'x_DarkWolf', rank: 'Exploit Developer' },
    ],
    linkedInfrastructure: [
      { type: 'TOR Exit Node', value: '185.220.101.5 (Germany)' },
      { type: 'C2 Command Server', value: '104.28.19.4:8443' },
      { type: 'Malware Family', value: 'RedLine / Lumma Stealer v4.2' },
      { type: 'PGP Fingerprint', value: '0x9F02A489-B12D-4C90' },
    ]
  };

  const handleCopyWallet = () => {
    navigator.clipboard.writeText('1F1tA1p2uA58eK2L1n4M9vJ');
    setCopiedWallet(true);
    setTimeout(() => setCopiedWallet(false), 2000);
  };

  return (
    <section id="actor-profile" className="py-28 relative theme-section-bg border-t theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
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
              <UserCheck className="w-3.5 h-3.5 text-[#E87532]" />
              DARKTRACE ACTOR PROFILE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black theme-text-primary font-mono tracking-tight">
              TARGET: {actorData.codename}
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="theme-text-muted">Attribution Hypothesis:</span>
            <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#E87532] font-bold">
              {actorData.confidenceScore}% INVESTIGATIVE CONFIDENCE
            </span>
          </div>
        </motion.div>

        {/* 5-Count Connected Entity Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
          {actorData.stats.map((st, i) => (
            <div key={i} className="spatial-card p-4 rounded-2xl text-center space-y-1">
              <span className="text-[10px] theme-text-muted uppercase block">{st.label}</span>
              <span className="text-sm font-bold theme-text-primary">{st.count}</span>
            </div>
          ))}
        </div>

        {/* Dossier Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="spatial-card p-6 sm:p-10 rounded-3xl space-y-8"
        >
          {/* Top Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b theme-border font-mono text-xs">
            <div>
              <span className="theme-text-muted uppercase text-[10px] block">Threat Syndicate</span>
              <div className="theme-text-primary font-bold text-sm">{actorData.threatGroup}</div>
            </div>
            <div>
              <span className="theme-text-muted uppercase text-[10px] block">Language & Stylometrics</span>
              <div className="theme-text-primary font-bold text-sm">{actorData.primaryLanguage}</div>
            </div>
            <div>
              <span className="theme-text-muted uppercase text-[10px] block">First Seen / Last Active</span>
              <div className="theme-text-primary font-bold text-sm">{actorData.lastActive}</div>
            </div>
            <div>
              <span className="theme-text-muted uppercase text-[10px] block">Primary Bitcoin Wallet</span>
              <div className="text-[#E87532] font-bold text-sm flex items-center justify-between">
                <span className="truncate">{actorData.financialTrace}</span>
                <button onClick={handleCopyWallet} className="ml-2 hover:opacity-80">
                  {copiedWallet ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Grid Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono text-xs">
            
            {/* Forum Aliases */}
            <div className="lg:col-span-6 space-y-3">
              <span className="theme-text-primary font-bold uppercase tracking-wider block">Connected Forum Aliases</span>
              {actorData.knownAliases.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border flex items-center justify-between ${
                  isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-[#171411] border-white/5'
                }`}>
                  <div>
                    <span className="theme-text-muted text-[10px] uppercase block">{item.forum}</span>
                    <span className="theme-text-primary font-bold">{item.handle}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded border text-[10px] font-bold text-[#E87532] bg-orange-500/10 border-orange-500/30">
                    {item.rank}
                  </span>
                </div>
              ))}
            </div>

            {/* Infrastructure Nodes */}
            <div className="lg:col-span-6 space-y-3">
              <span className="theme-text-primary font-bold uppercase tracking-wider block">Linked Technical Infrastructure</span>
              {actorData.linkedInfrastructure.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border flex items-center justify-between ${
                  isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-[#171411] border-white/5'
                }`}>
                  <span className="theme-text-muted text-[11px]">{item.type}</span>
                  <span className="theme-text-primary font-bold">{item.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Action Bar */}
          <div className="pt-6 border-t theme-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <span className="theme-text-muted">Attribution Brief #DARKWOLF23-2025</span>
            <button
              onClick={() => alert('Exporting DARKWOLF23 Dossier PDF...')}
              className={`px-5 py-2.5 rounded-xl font-bold border transition-all flex items-center gap-2 ${
                isLightMode ? 'bg-stone-100 border-stone-300 text-stone-900 hover:bg-stone-200' : 'bg-[#211C18] border-white/10 text-[#F3EEE7] hover:border-[#E87532]/40'
              }`}
            >
              <Download className="w-4 h-4 text-[#E87532]" /> Export Dossier PDF
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
