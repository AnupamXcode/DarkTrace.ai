import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpatialDetailPanel({ isLightMode, entity, onClose }) {
  if (!entity) return null;

  return (
    <AnimatePresence>
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md ${
        isLightMode ? 'bg-stone-900/40' : 'bg-[#171411]/85'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="spatial-card w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl font-mono text-xs"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-6 right-6 p-2 rounded-xl border ${
              isLightMode ? 'bg-stone-100 border-stone-300 text-stone-700' : 'bg-[#211C18] border-white/10 text-[#A9A097]'
            }`}
          >
            <X className="w-4 h-4" />
          </button>

          {/* Spatial Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="spatial-badge text-[9px]">{entity.type || 'ENTITY'}</span>
              <span className="text-[#E87532] font-bold">Investigative Confidence: 87%</span>
            </div>
            <h3 className="text-2xl font-black theme-text-primary">
              {entity.label || entity.codename || 'DARKWOLF23'}
            </h3>
            <p className="theme-text-muted font-sans text-xs">
              {entity.details || 'Correlated dark web entity connected across 4 forum personas, 3 BTC wallet addresses, and 2 PGP key signatures.'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-3 gap-3 p-4 rounded-2xl border text-center ${
            isLightMode ? 'bg-stone-50 border-stone-200' : 'bg-[#171411] border-white/5'
          }`}>
            <div>
              <span className="text-[10px] theme-text-muted block uppercase">Relationships</span>
              <span className="text-base font-bold theme-text-primary">14 Edges</span>
            </div>
            <div>
              <span className="text-[10px] theme-text-muted block uppercase">Last Observed</span>
              <span className="text-base font-bold text-[#E87532]">14m ago</span>
            </div>
            <div>
              <span className="text-[10px] theme-text-muted block uppercase">Evidence Count</span>
              <span className="text-base font-bold text-orange-600">42 Artifacts</span>
            </div>
          </div>

          {/* Evidence Checklist */}
          <div className="space-y-2">
            <span className="text-[10px] theme-text-muted uppercase tracking-wider block font-bold">Key Correlated Signals</span>
            <div className="space-y-2">
              <div className={`p-3 rounded-xl border flex items-center justify-between ${
                isLightMode ? 'bg-white border-stone-200 text-stone-900' : 'bg-[#211C18] border-white/5 text-[#F3EEE7]'
              }`}>
                <span>BreachForums Root Admin Persona</span>
                <span className="text-[#E87532] font-bold">High Match</span>
              </div>
              <div className={`p-3 rounded-xl border flex items-center justify-between ${
                isLightMode ? 'bg-white border-stone-200 text-stone-900' : 'bg-[#211C18] border-white/5 text-[#F3EEE7]'
              }`}>
                <span>BTC Wallet: 1F1tA1p...3vJ ($1.15M)</span>
                <span className="text-orange-600 font-bold">Verified Edge</span>
              </div>
              <div className={`p-3 rounded-xl border flex items-center justify-between ${
                isLightMode ? 'bg-white border-stone-200 text-stone-900' : 'bg-[#211C18] border-white/5 text-[#F3EEE7]'
              }`}>
                <span>PGP Signature: 0x9F02A489</span>
                <span className="text-amber-600 font-bold">PGP Match</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t theme-border">
            <span className="text-[10px] theme-text-muted">Attribution Hypothesis #87-2025</span>
            <button
              onClick={() => { alert('Exporting spatial evidence report...'); onClose(); }}
              className="px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
            >
              Export Evidence Brief <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
