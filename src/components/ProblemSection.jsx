import React from 'react';
import { ShieldAlert, Layers, ArrowDown, Network, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemSection({ isLightMode }) {
  const floatingCards = [
    { label: 'ALIASES', detail: 'Cross-Forum Handles', pos: 'translate-y-0' },
    { label: 'PGP KEYS', detail: 'Signature Hashes', pos: 'translate-y-4' },
    { label: 'WALLETS', detail: 'BTC Transaction Graph', pos: '-translate-y-2' },
    { label: 'MARKETPLACES', detail: 'Onion Vendor Feeds', pos: 'translate-y-6' },
    { label: 'FORUMS', detail: 'Post Stylometrics', pos: '-translate-y-4' },
    { label: 'INFRASTRUCTURE', detail: 'TOR Exit Relay IPs', pos: 'translate-y-2' },
    { label: 'TIMESTAMPS', detail: 'Activity Timezones', pos: '-translate-y-6' },
    { label: 'BEHAVIOUR', detail: 'Exploit Pricing Patterns', pos: 'translate-y-4' }
  ];

  return (
    <section className="py-28 relative theme-section-bg border-t theme-border">
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
            <ShieldAlert className="w-3.5 h-3.5 text-[#E87532]" />
            THE ATTRIBUTION PARADOX
          </span>
          <h2 className="text-3xl sm:text-5xl font-black theme-text-primary tracking-tight font-mono leading-tight">
            THE DARK WEB HIDES IDENTITIES. <br />
            <span className="text-gradient-orange underline decoration-orange-500/40 underline-offset-8">
              THEIR FOOTPRINTS REMAIN.
            </span>
          </h2>
          <p className="text-sm sm:text-base theme-text-muted leading-relaxed">
            Fragmented evidence exists across onion markets, forums, stealer logs, and blockchain ledgers. DARKTRACE fuses these isolated signals into a unified attribution hypothesis.
          </p>
        </motion.div>

        {/* Floating Spatial Evidence Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {floatingCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`spatial-card p-6 rounded-3xl space-y-4 flex flex-col justify-between ${card.pos}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#E87532]">
                  0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E87532]" />
              </div>

              <div>
                <h3 className="text-base font-black font-mono theme-text-primary">
                  {card.label}
                </h3>
                <p className="text-xs theme-text-muted font-mono mt-1">
                  {card.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Signal Connection Flow Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="spatial-card p-8 rounded-3xl border theme-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left font-mono"
        >
          <div className="space-y-1">
            <span className="text-[10px] theme-text-muted uppercase">Signal Fusion Sequence</span>
            <div className="text-sm font-bold theme-text-primary flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="theme-text-muted">Fragmented Signals</span>
              <span className="text-[#E87532]">→</span>
              <span className="theme-text-primary">Connected Evidence</span>
              <span className="text-[#E87532]">→</span>
              <span className="text-white bg-gradient-to-r from-orange-600 to-amber-600 px-3 py-1 rounded-full border border-orange-400/40">Attribution Hypothesis</span>
            </div>
          </div>

          <div className="px-5 py-2.5 rounded-2xl theme-card-bg border theme-border text-xs text-[#E87532] font-bold shrink-0">
            87% Investigative Confidence
          </div>
        </motion.div>

      </div>
    </section>
  );
}
