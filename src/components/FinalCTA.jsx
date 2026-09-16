import React from 'react';
import { Rocket, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA({ onOpenDeployModal, onOpenScanner }) {
  return (
    <section className="py-32 relative bg-[#171411] border-t border-[#955D31]/30 overflow-hidden text-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,117,50,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="spatial-badge">
            <Sparkles className="w-3.5 h-3.5 text-[#E87532]" />
            SIH-2025 INVESTIGATIVE PLATFORM
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#F3EEE7] font-mono tracking-tight leading-tight">
            DON'T CHASE IDENTITIES. <br />
            <span className="text-[#E87532] underline decoration-[#955D31]/50 underline-offset-8">
              CONNECT THE EVIDENCE.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A9A097] max-w-2xl mx-auto font-sans leading-relaxed">
            DARKTRACE turns fragmented dark-web digital footprints into explainable, structured investigative intelligence hypotheses.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs"
        >
          <button
            onClick={onOpenScanner}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-[#171411] bg-[#E87532] hover:bg-[#955D31] hover:text-[#F3EEE7] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(232,117,50,0.4)]"
          >
            <span>EXPLORE DARKTRACE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onOpenDeployModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-[#F3EEE7] bg-[#211C18] border border-white/10 hover:border-[#E87532]/40 transition-all flex items-center justify-center gap-2"
          >
            <Rocket className="w-4 h-4 text-[#BAAD9A]" />
            <span>DEPLOY TO VERCEL</span>
          </button>
        </motion.div>

        {/* Benchmark Disclaimer */}
        <div className="pt-8 border-t border-white/5 text-[11px] font-mono text-[#A9A097]">
          <span>SIH Benchmark Demo • Synthetic Dataset: 1.4M Indexed Entities</span>
        </div>

      </div>
    </section>
  );
}
