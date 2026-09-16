import React from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechArchitecture({ isLightMode }) {
  const stackItems = [
    { tech: 'PYTHON', role: 'AI / ML / NLP / DATA PROCESSING' },
    { tech: 'FASTAPI', role: 'BACKEND / REST APIs' },
    { tech: 'NEO4J', role: 'MULTI-RELATIONAL KNOWLEDGE GRAPH' },
    { tech: 'POSTGRESQL', role: 'STRUCTURED INTELLIGENCE DATA' },
    { tech: 'REACT 19', role: 'INVESTIGATOR INTERFACE & SPA' },
    { tech: 'THREE.JS', role: '3D GRAPH & SPATIAL VISUALIZATION' },
  ];

  return (
    <section id="architecture" className="py-28 relative theme-section-bg border-t theme-border font-mono">
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
            <Code className="w-3.5 h-3.5 text-[#E87532]" />
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black theme-text-primary tracking-tight">
            TECHNOLOGY STACK
          </h2>
          <p className="text-xs sm:text-sm theme-text-muted">
            Clean architectural foundation powering dark web crawling, graph neural inference, and 3D spatial visualization.
          </p>
        </motion.div>

        {/* Technical Typography Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          {stackItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="spatial-card p-6 rounded-3xl space-y-3 transition-colors"
            >
              <div className="flex items-center justify-between text-[#E87532] font-bold">
                <span className="text-lg font-black">{item.tech}</span>
                <span className="text-[10px] theme-text-muted">0{idx + 1}</span>
              </div>
              <p className="theme-text-muted font-bold tracking-wider">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
