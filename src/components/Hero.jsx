import React, { useState } from 'react';
import { Terminal, ShieldAlert, Network, ArrowRight, Search, Sparkles, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import KnowledgeGraphCanvas from './KnowledgeGraphCanvas';

export default function Hero({ onStartScan }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onStartScan(query);
    }
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-[#080501]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="editorial-badge">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
            SIH-2025 AI THREAT ATTRIBUTION SYSTEM
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#9A948C]">
            PROTOTYPE BENCHMARK: 1.4M INDEXED ENTITIES
          </span>
        </motion.div>

        {/* Hero Grid: Left Editorial Narrative / Right Knowledge Graph Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Fast Audit Input */}
          <div className="lg:col-span-6 space-y-8">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-[#F5F5F0] tracking-tight leading-[1.05] font-mono"
            >
              Attributing <br />
              <span className="text-[#FF6A00] underline decoration-[rgba(255,106,0,0.4)] underline-offset-8">
                the Unseen.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9A948C] leading-relaxed max-w-xl font-sans"
            >
              Unmasking dark web threat actors through multi-modal graph AI, stealer log session extraction, and cross-platform identity correlation across TOR hidden services.
            </motion.p>

            {/* Fast Audit Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg"
            >
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#FF6A00] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter target domain or threat alias..."
                  className="w-full pl-11 pr-4 py-3.5 bg-[#120A04] text-[#F5F5F0] font-mono text-xs rounded-2xl border border-[rgba(255,106,0,0.25)] focus:outline-none focus:border-[#FF6A00] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl font-mono font-bold text-xs text-[#080501] bg-[#FF6A00] hover:bg-[#FF9D4D] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,106,0,0.3)] shrink-0"
              >
                <span>Correlate Target</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>

            {/* Micro Stats Bar (Honest Benchmark Labels) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 font-mono"
            >
              <div>
                <span className="text-[10px] text-[#9A948C] uppercase block">Indexed Nodes</span>
                <span className="text-sm font-bold text-[#F5F5F0]">1,450,210</span>
              </div>
              <div>
                <span className="text-[10px] text-[#9A948C] uppercase block">Graph Density</span>
                <span className="text-sm font-bold text-[#FF9D4D]">94.2% Link Score</span>
              </div>
              <div>
                <span className="text-[10px] text-[#9A948C] uppercase block">Benchmark Mode</span>
                <span className="text-sm font-bold text-[#FF6A00]">SIH DEMO MATRIX</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Threat Graph Canvas Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            id="knowledge-graph"
            className="lg:col-span-6"
          >
            <KnowledgeGraphCanvas onSelectNode={(node) => onStartScan(node.label)} />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
