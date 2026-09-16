import React from 'react';
import { X, Network, ShieldCheck, Copy, ArrowUpRight, CheckCircle2, FileText, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpatialDetailPanel({ entity, onClose }) {
  if (!entity) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171411]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="spatial-card w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(149,93,49,0.3)] font-mono text-xs"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl text-[#A9A097] hover:text-white bg-[#211C18] border border-white/10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Spatial Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="spatial-badge text-[9px]">{entity.type || 'ENTITY'}</span>
              <span className="text-[#E87532] font-bold">Investigative Confidence: 87%</span>
            </div>
            <h3 className="text-2xl font-black text-[#F3EEE7]">
              {entity.label || entity.codename || 'DARKWOLF23'}
            </h3>
            <p className="text-[#A9A097] font-sans text-xs">
              {entity.details || 'Correlated dark web entity connected across 4 forum personas, 3 BTC wallet addresses, and 2 PGP key signatures.'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#171411] border border-white/5 text-center">
            <div>
              <span className="text-[10px] text-[#A9A097] block uppercase">Relationships</span>
              <span className="text-base font-bold text-[#F3EEE7]">14 Edges</span>
            </div>
            <div>
              <span className="text-[10px] text-[#A9A097] block uppercase">Last Observed</span>
              <span className="text-base font-bold text-[#BAAD9A]">14m ago</span>
            </div>
            <div>
              <span className="text-[10px] text-[#A9A097] block uppercase">Evidence Count</span>
              <span className="text-base font-bold text-[#E87532]">42 Artifacts</span>
            </div>
          </div>

          {/* Evidence Checklist */}
          <div className="space-y-2">
            <span className="text-[10px] text-[#A9A097] uppercase tracking-wider block font-bold">Key Correlated Signals</span>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-[#211C18] border border-white/5 flex items-center justify-between">
                <span className="text-[#F3EEE7]">BreachForums Root Admin Persona</span>
                <span className="text-[#E87532]">High Match</span>
              </div>
              <div className="p-3 rounded-xl bg-[#211C18] border border-white/5 flex items-center justify-between">
                <span className="text-[#F3EEE7]">BTC Wallet: 1F1tA1p...3vJ ($1.15M)</span>
                <span className="text-[#BAAD9A]">Verified Edge</span>
              </div>
              <div className="p-3 rounded-xl bg-[#211C18] border border-white/5 flex items-center justify-between">
                <span className="text-[#F3EEE7]">PGP Signature: 0x9F02A489</span>
                <span className="text-[#BAAD9A]">PGP Match</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-[10px] text-[#A9A097]">Attribution Hypothesis #87-2025</span>
            <button
              onClick={() => { alert('Exporting spatial evidence report...'); onClose(); }}
              className="px-5 py-2.5 rounded-xl font-bold text-[#171411] bg-[#E87532] hover:bg-[#955D31] hover:text-[#F3EEE7] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(232,117,50,0.3)]"
            >
              Export Evidence Brief <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
