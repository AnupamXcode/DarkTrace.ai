import React from 'react';
import { Cpu, Layers, Database, ShieldCheck, Code, Network, Terminal, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechArchitecture() {
  const techStack = [
    {
      icon: Network,
      title: 'Graph Neural Networks (GNN)',
      description: 'Resolves cross-domain identities into a unified knowledge graph connecting PGP keys, wallet IDs, and stealer logs.'
    },
    {
      icon: Cpu,
      title: 'Transformer Stylometric AI',
      description: 'Natural Language Processing models analyze sentence structure, slang, and timezone frequency to match forum handles.'
    },
    {
      icon: Database,
      title: 'High-Throughput Vector DB',
      description: 'Embeds dark web forum posts into multi-dimensional vector space for semantic threat search and leak clustering.'
    },
    {
      icon: Terminal,
      title: 'TOR & Telegram Crawler Fleet',
      description: 'Asynchronous scrapers navigating onion hidden services, paste dumps, and private Telegram channels 24/7.'
    }
  ];

  return (
    <section id="architecture" className="py-24 relative bg-[#080501] border-t border-[rgba(255,106,0,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end"
        >
          <div className="lg:col-span-8 space-y-4">
            <span className="editorial-badge">
              <Code className="w-3.5 h-3.5 text-[#FF6A00]" />
              SYSTEM ARCHITECTURE & SIH ALIGNMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F0] tracking-tight font-mono">
              Engineered for Scalable Cyber Attribution.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#9A948C] leading-relaxed font-mono">
              [SIH-2025 DEMO SPECIFICATION]<br />
              Combining Graph Analytics, Generative Summarization, and Dark Net Node Indexing.
            </p>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="editorial-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1A1008] border border-[rgba(255,106,0,0.3)] flex items-center justify-center text-[#FF6A00] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-mono text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-xs text-[#9A948C] leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-[#FF9D4D]">
                  SIH Core Engine Module #0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
