import React from 'react';
import { BarChart3, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Metrics() {
  const metricsData = [
    { value: '1.2M+', label: 'OBSERVATIONS INDEXED', sub: 'Multi-modal dark net chatter' },
    { value: '24K', label: 'IDENTIFIERS EXTRACTED', sub: 'Wallets, handles & PGP keys' },
    { value: '8.4K', label: 'RELATIONSHIPS MAPPED', sub: 'Multi-relational graph edges' },
    { value: '87%', label: 'TOP HYPOTHESIS SCORE', sub: 'Investigative confidence rating' }
  ];

  return (
    <section id="metrics" className="py-28 relative bg-[#171411]">
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
          <h2 className="text-3xl sm:text-5xl font-black text-[#F3EEE7] font-mono tracking-tight">
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
              className="spatial-card p-8 rounded-3xl space-y-4 font-mono text-center flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-6xl font-black text-[#F3EEE7] block leading-none">
                  {m.value}
                </span>
                <span className="text-xs font-bold text-[#E87532] uppercase tracking-wider block mt-4">
                  {m.label}
                </span>
                <p className="text-xs text-[#A9A097] mt-1 font-sans">
                  {m.sub}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[10px] text-[#BAAD9A] uppercase tracking-widest">
                SIH Synthetic Benchmark
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
