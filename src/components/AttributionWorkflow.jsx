import React, { useState } from 'react';
import { Database, Search, Network, Cpu, ShieldCheck, Terminal, ArrowRight, Zap, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AttributionWorkflow({ isLightMode }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stage: '01',
      title: 'COLLECT',
      subtitle: 'Multi-Modal Dark Net Ingestion',
      icon: Database,
      details: 'Automated crawlers continuously scrape TOR onion marketplaces, closed Telegram channels, pastebins, and I2P hidden services.',
      artifacts: ['TOR Hidden Services (.onion)', 'Telegram Channels @DarkLogs', 'Pastebin & GitHub Gists', 'Shodan Exposed Clusters'],
      metric: '1.4M Entities Crawled'
    },
    {
      stage: '02',
      title: 'EXTRACT',
      subtitle: 'Stealer Log & Artifact Parsing',
      icon: Search,
      details: 'Malware log processing engines automatically parse RedLine, Vidar, Lumma, and Raccoon malware dumps into structured JSON schemas.',
      artifacts: ['Active SSO Session Cookies', 'Browser User-Agent Tokens', 'Plaintext & Bcrypt Credentials', 'Host System Metadata & IPs'],
      metric: '12,400 Logs / Min'
    },
    {
      stage: '03',
      title: 'CORRELATE',
      subtitle: 'Graph Neural Entity Linkage',
      icon: Network,
      details: 'Constructs multi-relational knowledge graphs connecting isolated PGP key fingerprints, Bitcoin wallet addresses, and forum registration timestamps.',
      artifacts: ['PGP Signature Fingerprints', 'Blockchain BTC Transaction Edge', 'Cross-Forum Handle Aliases', 'Cookie-to-Identity Mapping'],
      metric: '87% Link Confidence'
    },
    {
      stage: '04',
      title: 'ANALYZE',
      subtitle: 'Stylometric & Persona AI Matching',
      icon: Cpu,
      details: 'Natural Language Processing algorithms evaluate dark web forum posts for unique linguistic habits, slang, timezone activity, and signature patterns.',
      artifacts: ['Linguistic Fingerprint Vector', 'Activity Timezone Heatmap', 'Exploit Sale Terminology', 'Malware Signature Hashing'],
      metric: 'LLM Stylometrics Active'
    },
    {
      stage: '05',
      title: 'ATTRIBUTE',
      subtitle: 'Threat Actor Dossier Generation',
      icon: ShieldCheck,
      details: 'Synthesizes correlated evidence into a unified high-confidence Threat Actor Dossier with real-world infrastructure and identity attribution.',
      artifacts: ['Actor ID: DARKWOLF23', 'Primary Alias Timeline', 'Financial BTC Holding Map', 'Known Target Verticals'],
      metric: 'Attribution Verified'
    },
    {
      stage: '06',
      title: 'INVESTIGATE',
      subtitle: 'Automated Takedowns & SIEM Integration',
      icon: Terminal,
      details: 'Provides security operations teams with 1-click legal takedown requests, automated DMCA notices, and instant SIEM/SOAR webhooks.',
      artifacts: ['1-Click Paste Takedown', 'SOAR Webhook Payload', 'Executive Defense Brief PDF', 'API Token Revocation'],
      metric: 'Real-Time Mitigation'
    }
  ];

  return (
    <section id="workflow" className="py-28 relative theme-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="spatial-badge">
            <Zap className="w-3.5 h-3.5 text-[#E87532]" />
            CINEMATIC ATTRIBUTION PIPELINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black theme-text-primary font-mono tracking-tight">
            DARKTRACE WORKFLOW
          </h2>
          <p className="text-xs sm:text-sm theme-text-muted font-mono">
            Six-stage sequential pipeline transforming raw dark web chatter into explainable attribution hypotheses.
          </p>
        </motion.div>

        {/* 6 Stage Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? isLightMode
                      ? 'bg-orange-50 border-orange-500 text-stone-900 shadow-lg shadow-orange-500/10'
                      : 'bg-[#2A241F] border-[#E87532] text-white shadow-[0_0_25px_rgba(232,117,50,0.25)]'
                    : isLightMode
                      ? 'bg-white border-stone-200 text-stone-600 hover:border-orange-300'
                      : 'bg-[#211C18]/60 border-white/5 text-[#A9A097] hover:border-[#955D31]/40 hover:text-[#F3EEE7]'
                }`}
              >
                <div className="flex items-center justify-between mb-4 font-mono">
                  <span className={`text-xs font-bold ${isActive ? 'text-[#E87532]' : 'theme-text-muted'}`}>
                    {step.stage}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-orange-600' : 'theme-text-muted'}`} />
                </div>
                <div className="font-mono text-xs font-black tracking-wider">
                  {step.title}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeFlowIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-orange-600"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="spatial-card p-6 sm:p-10 rounded-3xl border theme-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 font-mono">
                <span className="spatial-badge text-[9px]">
                  STAGE {steps[activeStep].stage} OF 06
                </span>
                <span className="text-xs text-[#E87532] font-bold">
                  {steps[activeStep].metric}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-mono theme-text-primary">
                {steps[activeStep].subtitle}
              </h3>

              <p className="text-xs sm:text-sm theme-text-muted leading-relaxed">
                {steps[activeStep].details}
              </p>

              <div className="flex items-center gap-4 pt-2 font-mono text-xs">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className={`px-4 py-2 rounded-xl font-bold border transition-colors ${
                    isLightMode ? 'bg-stone-100 border-stone-300 text-stone-800 hover:bg-stone-200' : 'bg-[#211C18] border-white/10 text-[#F3EEE7] hover:border-[#955D31]/40'
                  }`}
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-5 py-2 rounded-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 text-white transition-colors flex items-center gap-2 shadow-lg shadow-orange-500/20"
                >
                  Next Stage <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Stage Checklist */}
            <div className={`p-6 rounded-2xl border space-y-4 font-mono text-xs ${
              isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-[#171411] border-white/5'
            }`}>
              <div className={`text-[10px] font-bold uppercase tracking-wider flex items-center justify-between border-b pb-3 ${
                isLightMode ? 'text-stone-700 border-stone-200' : 'text-[#BAAD9A] border-white/10'
              }`}>
                <span>Stage Indicators</span>
                <Hash className="w-4 h-4 text-[#E87532]" />
              </div>

              <div className="space-y-3">
                {steps[activeStep].artifacts.map((art, idx) => (
                  <div key={idx} className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isLightMode ? 'bg-white border-stone-200 text-stone-800' : 'bg-[#211C18] border-white/5 text-[#F3EEE7]'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-[#E87532]" />
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
