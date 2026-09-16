import React, { useState } from 'react';
import { Terminal, ArrowRight, Sparkles, Compass, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeGraphScene from './ThreeGraphScene';
import SpatialDetailPanel from './SpatialDetailPanel';

export default function Hero({ onStartScan }) {
  const [selectedSpatialNode, setSelectedSpatialNode] = useState(null);

  const handleExploreClick = () => {
    const el = document.getElementById('scanner');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWorkflowClick = () => {
    const el = document.getElementById('workflow');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen pt-4 pb-16 overflow-hidden bg-[#171411] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="spatial-badge">
            <Sparkles className="w-3.5 h-3.5 text-[#E87532]" />
            AI-ASSISTED DARK WEB INTELLIGENCE
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#A9A097]">
            SIH BENCHMARK • 1.4M INDEXED NODES
          </span>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Narrative */}
          <div className="lg:col-span-5 space-y-8">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-[#F3EEE7] tracking-tight leading-[1.05] font-mono"
            >
              CONNECT THE <br />
              FOOTPRINTS. <br />
              <span className="text-[#E87532] underline decoration-[#955D31]/50 underline-offset-8">
                REVEAL THE NETWORK.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#A9A097] leading-relaxed font-sans max-w-lg"
            >
              DARKTRACE correlates fragmented dark-web identities, infrastructure, behaviour and digital evidence into explainable threat-actor attribution hypotheses.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 font-mono text-xs"
            >
              <button
                onClick={handleExploreClick}
                className="px-7 py-4 rounded-2xl font-bold text-[#171411] bg-[#E87532] hover:bg-[#955D31] hover:text-[#F3EEE7] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(232,117,50,0.3)]"
              >
                <span>EXPLORE INTELLIGENCE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWorkflowClick}
                className="px-7 py-4 rounded-2xl font-bold text-[#F3EEE7] bg-[#211C18] border border-white/10 hover:border-[#E87532]/40 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#BAAD9A]" />
                <span>VIEW HOW IT WORKS</span>
              </button>
            </motion.div>

            {/* Drag Cue Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-white/5 flex items-center gap-3 font-mono text-xs text-[#BAAD9A]"
            >
              <Compass className="w-4 h-4 text-[#E87532] animate-spin" />
              <span>DRAG TO EXPLORE 3D GRAPH • ORBIT SPHERES</span>
            </motion.div>

          </div>

          {/* Right Column: Three.js 3D Graph Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <ThreeGraphScene onSelectNode={(node) => setSelectedSpatialNode(node)} />
          </motion.div>

        </div>

      </div>

      {/* Spatial Detail Panel Floating Overlay */}
      <SpatialDetailPanel
        entity={selectedSpatialNode}
        onClose={() => setSelectedSpatialNode(null)}
      />
    </section>
  );
}
