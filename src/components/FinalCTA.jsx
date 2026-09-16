import React from 'react';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA({ isLightMode, onOpenDeployModal, onOpenScanner }) {
  return (
    <section className="py-32 relative theme-section-bg border-t theme-border overflow-hidden text-center">
      
      {/* Background Glow */}
      <div className={`absolute inset-0 pointer-events-none ${
        isLightMode 
          ? 'bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.12)_0%,transparent_70%)]' 
          : 'bg-[radial-gradient(circle_at_center,rgba(232,117,50,0.15)_0%,transparent_70%)]'
      }`} />

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
          <h2 className="text-4xl sm:text-6xl font-black theme-text-primary font-mono tracking-tight leading-tight">
            DON'T CHASE IDENTITIES. <br />
            <span className="text-gradient-orange underline decoration-orange-500/50 underline-offset-8">
              CONNECT THE EVIDENCE.
            </span>
          </h2>
          <p className="text-base sm:text-lg theme-text-muted max-w-2xl mx-auto font-sans leading-relaxed">
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
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
          >
            <span>EXPLORE DARKTRACE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onOpenDeployModal}
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold border transition-all flex items-center justify-center gap-2 ${
              isLightMode ? 'bg-white border-stone-300 text-stone-900 hover:bg-stone-50' : 'bg-[#211C18] border-white/10 text-[#F3EEE7] hover:border-[#E87532]/40'
            }`}
          >
            <Rocket className="w-4 h-4 text-[#E87532]" />
            <span>DEPLOY TO VERCEL</span>
          </button>
        </motion.div>

        {/* Benchmark Disclaimer */}
        <div className="pt-8 border-t theme-border text-[11px] font-mono theme-text-muted">
          <span>SIH Benchmark Demo • Synthetic Dataset: 1.4M Indexed Entities</span>
        </div>

      </div>
    </section>
  );
}
