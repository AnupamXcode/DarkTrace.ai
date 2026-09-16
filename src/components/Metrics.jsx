import React from 'react';
import { Radio } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Metrics({ isLightMode }) {
  const metricsData = [
    { value: '1.2M+', label: 'OBSERVATIONS INDEXED', sub: 'Multi-modal dark net chatter' },
    { value: '24K', label: 'IDENTIFIERS EXTRACTED', sub: 'Wallets, handles & PGP keys' },
    { value: '8.4K', label: 'RELATIONSHIPS MAPPED', sub: 'Multi-relational graph edges' },
    { value: '87%', label: 'TOP HYPOTHESIS SCORE', sub: 'Investigative confidence rating' }
  ];

  return (
    <section id="metrics" className="py-28 relative theme-section-bg font-mono">
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
            <Radio className="w-3.5 h-3.5 text-[#E87532] animate-pulse" />
            INVESTIGATIVE BENCHMARK MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-black theme-text-primary tracking-tight">
            INTELLIGENCE SCALE
          </h2>
        </motion.div>

        {/* Large Typography 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="spatial-card p-8 rounded-3xl space-y-4 text-center flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-6xl font-black theme-text-primary block leading-none">
                  {m.value}
                </span>
                <span className="text-xs font-bold text-[#E87532] uppercase tracking-wider block mt-4">
                  {m.label}
                </span>
                <p className="text-xs theme-text-muted mt-1 font-sans">
                  {m.sub}
                </p>
              </div>

              <div className="pt-4 border-t theme-border text-[10px] theme-text-muted uppercase tracking-widest">
                SIH Synthetic Benchmark
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
