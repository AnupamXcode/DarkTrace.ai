import React from 'react';
import { Cpu, ShieldCheck, BarChart2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IntelligenceEngine({ isLightMode }) {
  const dimensions = [
    { name: 'IDENTIFIERS', weight: 30, description: 'PGP Fingerprints, Handles, Crypto Wallets', color: 'bg-orange-600' },
    { name: 'INFRASTRUCTURE', weight: 25, description: 'TOR Exit Relays, C2 Beacons, Host IPs', color: 'bg-amber-600' },
    { name: 'BEHAVIOUR', weight: 20, description: 'Payload Signatures, Target Industry Vectors', color: 'bg-orange-700' },
    { name: 'STYLOMETRY', weight: 15, description: 'NLP Stylometric Vector, Slang & Syntax', color: 'bg-stone-500' },
    { name: 'TEMPORAL', weight: 10, description: 'Post Timestamps, Timezone Heatmap Gaps', color: 'bg-amber-800' },
  ];

  return (
    <section id="intelligence" className="py-28 relative theme-section-bg border-t theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="spatial-badge">
            <Cpu className="w-3.5 h-3.5 text-[#E87532]" />
            5-DIMENSIONAL FUSION MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-black theme-text-primary font-mono tracking-tight">
            THE INTELLIGENCE ENGINE
          </h2>
          <p className="text-xs sm:text-sm theme-text-muted font-mono">
            Weighted correlation of multi-modal evidence streams into an explainable investigative hypothesis.
          </p>
        </motion.div>

        {/* Engine Grid: Dimensions Left / Combined Confidence Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 7 cols: 5 Dimensions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 spatial-card p-6 sm:p-10 rounded-3xl space-y-6"
          >
            <div className="flex items-center justify-between border-b theme-border pb-4 font-mono text-xs">
              <span className="font-bold theme-text-primary">Evidence Vector Weighting</span>
              <span className="theme-text-muted">100% Total Matrix</span>
            </div>

            <div className="space-y-5">
              {dimensions.map((dim, idx) => (
                <div key={idx} className="space-y-2 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <span className="theme-text-primary font-bold">{dim.name}</span>
                    <span className="text-[#E87532] font-bold">{dim.weight}% Weight</span>
                  </div>
                  <div className={`w-full h-2.5 rounded-full p-0.5 border ${
                    isLightMode ? 'bg-stone-200 border-stone-300' : 'bg-[#211C18] border-white/5'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${dim.weight * 2.8}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className={`h-full rounded-full ${dim.color}`}
                    />
                  </div>
                  <p className="text-[11px] theme-text-muted">{dim.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 5 cols: Combined Confidence Gauge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 spatial-card p-8 sm:p-10 rounded-3xl border theme-border text-center flex flex-col items-center justify-center space-y-6 relative overflow-hidden"
          >
            <span className="text-xs font-mono theme-text-muted uppercase tracking-wider font-bold">
              INVESTIGATIVE CONFIDENCE SCORE
            </span>

            {/* Oversized Score Ring */}
            <div className={`relative w-44 h-44 rounded-full border-4 border-orange-500 flex flex-col items-center justify-center shadow-xl ${
              isLightMode ? 'bg-orange-50/80 shadow-orange-500/10' : 'bg-[#211C18] shadow-[0_0_40px_rgba(232,117,50,0.3)]'
            }`}>
              <span className="text-5xl font-black font-mono theme-text-primary">
                87<span className="text-2xl text-[#E87532]">%</span>
              </span>
              <span className="text-[10px] font-mono theme-text-muted uppercase tracking-widest mt-1">
                Hypothesis Score
              </span>
            </div>

            <div className={`p-4 rounded-2xl border text-xs font-mono space-y-1 ${
              isLightMode ? 'bg-stone-50 border-stone-200 text-stone-700' : 'bg-[#171411] border-white/10 text-[#A9A097]'
            }`}>
              <span className="text-[#E87532] font-bold block">Attribution Hypothesis #87-2025</span>
              <p className="text-[11px] leading-relaxed">
                High-confidence match requiring human investigator validation prior to law enforcement submission.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
