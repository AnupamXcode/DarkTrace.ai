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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080501]/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="editorial-card w-full max-w-2xl rounded-3xl border border-[#FF6A00]/40 p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(255,106,0,0.2)] font-mono"
        >
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl text-[#9A948C] hover:text-white bg-[#120A04] border border-white/10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#1A1008] border border-[#FF6A00]/40 text-[#FF6A00]">
              <Rocket className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#FF9D4D] uppercase tracking-widest block">SIH 1-CLICK DEPLOYMENT GUIDE</span>
              <h3 className="text-2xl font-black text-white">Deploy to Vercel</h3>
            </div>
          </div>

          <p className="text-xs text-[#9A948C] leading-relaxed">
            Pre-configured with <code className="text-[#FF9D4D]">vercel.json</code> and Vite build optimization for instant global edge deployment.
          </p>

          {/* Method Cards */}
          <div className="space-y-4">
            
            {/* CLI Method */}
            <div className="p-4 rounded-2xl bg-[#080501] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#F5F5F0]">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF6A00]" />
                  Option 1: Deploy via Vercel CLI (Recommended)
                </span>
                <span className="editorial-badge text-[9px]">Fastest</span>
              </div>

              <p className="text-xs text-[#9A948C]">
                Run inside project directory <code className="text-white">d:\Projects\SIH Dark web</code> in terminal:
              </p>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#120A04] border border-white/10 text-xs text-[#FF9D4D]">
                <code>{cliCommand}</code>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-[#1A1008] border border-white/10 hover:border-[#FF6A00]/40 text-[#F5F5F0] transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Git Method */}
            <div className="p-4 rounded-2xl bg-[#080501] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#F5F5F0]">
                <span className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#9A948C]" />
                  Option 2: Import GitHub Repository to Vercel
                </span>
              </div>
              <p className="text-xs text-[#9A948C]">
                1. Push code to GitHub repository.<br />
                2. Go to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-[#FF9D4D] hover:underline">vercel.com/new</a> and select your repository.<br />
                3. Vercel auto-detects Vite and deploys instantly.
              </p>
            </div>

          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] text-[#9A948C]">Includes SPA rewrites & asset caching</span>
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#080501] bg-[#FF6A00] hover:bg-[#FF9D4D] transition-all shadow-[0_0_20px_rgba(255,106,0,0.3)]"
            >
              Open Vercel Dashboard
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
