import React, { useState } from 'react';
import { Rocket, X, Check, Copy, ExternalLink, Terminal, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DeploymentModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const cliCommand = "npx vercel";

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171411]/90 backdrop-blur-md font-mono text-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="spatial-card w-full max-w-2xl rounded-3xl border border-[#E87532]/40 p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(232,117,50,0.2)]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl text-[#A9A097] hover:text-white bg-[#211C18] border border-white/10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#211C18] border border-[#E87532]/40 text-[#E87532]">
              <Rocket className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#BAAD9A] uppercase tracking-widest block">SIH 1-CLICK DEPLOYMENT GUIDE</span>
              <h3 className="text-2xl font-black text-[#F3EEE7]">Deploy to Vercel</h3>
            </div>
          </div>

          <p className="text-xs text-[#A9A097] leading-relaxed">
            Pre-configured with <code className="text-[#BAAD9A]">vercel.json</code> and Three.js Vite bundle optimization.
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#171411] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#F3EEE7]">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#E87532]" />
                  Option 1: Deploy via Vercel CLI (Recommended)
                </span>
                <span className="spatial-badge text-[9px]">Fastest</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#211C18] border border-white/10 text-[#BAAD9A]">
                <code>{cliCommand}</code>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171411] border border-white/10 text-[#F3EEE7]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#171411] border border-white/10 space-y-2">
              <span className="font-bold text-[#F3EEE7] block">Option 2: Import GitHub Repository to Vercel</span>
              <p className="text-xs text-[#A9A097]">
                1. Push code to GitHub repository.<br />
                2. Select repo on <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-[#BAAD9A] hover:underline">vercel.com/new</a>.<br />
                3. Vercel auto-detects Vite and builds instantly.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] text-[#A9A097]">Includes WebGL asset caching & SPA rewrites</span>
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[#171411] bg-[#E87532] hover:bg-[#955D31] hover:text-white transition-all shadow-[0_0_20px_rgba(232,117,50,0.3)]"
            >
              Open Vercel Dashboard <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
