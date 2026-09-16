import React, { useState } from 'react';
import { Network, Database, Cpu, ShieldCheck, Search, ChevronRight, Terminal, ArrowRight, Zap, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AttributionWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stage: '01',
      title: 'Collect',
      subtitle: 'Multi-Modal Dark Net Ingestion',
      icon: Database,
      details: 'Automated crawlers continuously scrape TOR onion marketplaces, closed Telegram channels, pastebins, and I2P hidden services.',
      artifacts: ['TOR Hidden Services (.onion)', 'Telegram Channels @DarkLogs', 'Pastebin & GitHub Gists', 'Shodan Exposed Clusters'],
      metric: '1.4M Entities Crawled'
    },
    {
      stage: '02',
      title: 'Extract',
      subtitle: 'Stealer Log & Artifact Parsing',
      icon: Search,
      details: 'Malware log processing engines automatically parse RedLine, Vidar, Lumma, and Raccoon malware dumps into structured JSON schemas.',
      artifacts: ['Active SSO Session Cookies', 'Browser User-Agent Tokens', 'Plaintext & Bcrypt Credentials', 'Host System Metadata & IPs'],
      metric: '12,400 Logs / Min'
    },
    {
      stage: '03',
      title: 'Correlate',
      subtitle: 'Graph Neural Entity Linkage',
      icon: Network,
      details: 'Constructs multi-relational knowledge graphs connecting isolated PGP key fingerprints, Bitcoin wallet addresses, and forum registration timestamps.',
      artifacts: ['PGP Signature Fingerprints', 'Blockchain BTC Transaction Edge', 'Cross-Forum Handle Aliases', 'Cookie-to-Identity Mapping'],
      metric: '94.2% Link Confidence'
    },
    {
      stage: '04',
      title: 'Analyze',
      subtitle: 'Stylometric & Persona AI Matching',
      icon: Cpu,
      details: 'Natural Language Processing algorithms evaluate dark web forum posts for unique linguistic habits, slang, timezone activity, and signature patterns.',
      artifacts: ['Linguistic Fingerprint Vector', 'Activity Timezone Heatmap', 'Exploit Sale Terminology', 'Malware Signature Hashing'],
      metric: 'LLM Stylometrics Active'
    },
    {
      stage: '05',
      title: 'Attribute',
      subtitle: 'Threat Actor Dossier Generation',
      icon: ShieldCheck,
      details: 'Synthesizes correlated evidence into a unified high-confidence Threat Actor Dossier with real-world infrastructure and identity attribution.',
      artifacts: ['Actor ID: APT-319 (Phant0m)', 'Primary Alias Timeline', 'Financial BTC Holding Map', 'Known Target Verticals'],
      metric: 'Attribution Verified'
    },
    {
      stage: '06',
      title: 'Investigate',
      subtitle: 'Automated Takedowns & SIEM Integration',
      icon: Terminal,
      details: 'Provides security operations teams with 1-click legal takedown requests, automated DMCA notices, and instant SIEM/SOAR webhooks.',
      artifacts: ['1-Click Paste Takedown', 'SOAR Webhook Payload', 'Executive Defense Brief PDF', 'API Token Revocation'],
      metric: 'Real-Time Mitigation'
    }
  ];

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-[#080501]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="editorial-badge">
            <Zap className="w-3.5 h-3.5 text-[#FF6A00]" />
            THE ATTRIBUTION PIPELINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F0] tracking-tight font-mono">
            From Raw Dark Web Dumps to Unmasked Threat Actors.
          </h2>
          <p className="text-sm sm:text-base text-[#9A948C] leading-relaxed">
            DARKTRACE uses a 6-stage intelligence pipeline to transform fragmented onion chatter into actionable, high-confidence actor profiles.
          </p>
        </motion.div>

        {/* 6-Step Horizontally Scrollable / Interactive Tab Header */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1A1008] border-[#FF6A00] text-white shadow-[0_0_25px_rgba(255,106,0,0.2)]'
                    : 'bg-[#120A04]/60 border-white/5 text-[#9A948C] hover:border-[rgba(255,106,0,0.3)] hover:text-[#F5F5F0]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#FF6A00]' : 'text-[#9A948C]'}`}>
                    {step.stage}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF9D4D]' : 'text-[#9A948C]'}`} />
                </div>
                <div className="font-mono text-sm font-bold tracking-tight">
                  {step.title}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FF9D4D]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="editorial-card p-6 sm:p-10 rounded-3xl border border-[rgba(255,106,0,0.3)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Narrative & Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="editorial-badge">
                  STAGE {steps[activeStep].stage} / 06
                </span>
                <span className="text-xs font-mono text-[#FF9D4D]">
                  {steps[activeStep].metric}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-mono text-white">
                {steps[activeStep].subtitle}
              </h3>

              <p className="text-sm sm:text-base text-[#9A948C] leading-relaxed">
                {steps[activeStep].details}
              </p>

              {/* Action Stepper Control */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#120A04] border border-white/10 hover:border-[#FF6A00]/40 text-[#F5F5F0] transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-[#FF6A00] hover:bg-[#FF9D4D] text-[#080501] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,106,0,0.3)]"
                >
                  Next Stage <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Extracted Artifact Checklist */}
            <div className="lg:col-span-5 bg-[#0C0702] p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF9D4D] flex items-center justify-between border-b border-white/10 pb-3">
                <span>Stage Outputs & Indicators</span>
                <Hash className="w-4 h-4 text-[#FF6A00]" />
              </div>

              <div className="space-y-3 font-mono text-xs">
                {steps[activeStep].artifacts.map((art, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[#F5F5F0] bg-[#120A04] p-3 rounded-xl border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                    <span>{art}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
