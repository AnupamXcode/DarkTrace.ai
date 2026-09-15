import React, { useState } from 'react';
import { Rocket, X, Check, Copy, ExternalLink, Terminal, Shield, FileArchive, Code } from 'lucide-react';


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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-2xl rounded-3xl border border-purple-500/30 p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(168,85,247,0.15)]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-purple-400">
            <Rocket className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">1-Click Vercel Deployment</span>
            <h3 className="text-2xl font-black text-white font-mono">Deploy to Vercel</h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          This UI is pre-configured with <code className="text-cyan-300 font-mono">vercel.json</code> and optimized Vite build scripts for instant deployment on Vercel's global Edge Network.
        </p>

        {/* Method Tabs / Cards */}
        <div className="space-y-4">
          
          {/* Method 1: Vercel CLI */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-200">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                Option 1: Deploy via Vercel CLI (Recommended)
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-purple-950 text-purple-300 border border-purple-500/30">Fastest</span>
            </div>

            <p className="text-xs text-slate-400">
              Run this command inside the project root folder <code className="text-slate-200">d:\Projects\SIH Dark web</code> in your terminal:
            </p>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm text-cyan-300">
              <code>{cliCommand}</code>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Method 2: GitHub Repository Connect */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-200">
              <span className="flex items-center gap-2">
                <Code className="w-4 h-4 text-slate-300" />
                Option 2: Import Git Repository to Vercel
              </span>
            </div>
            <p className="text-xs text-slate-400">
              1. Push this folder to your GitHub repo.<br />
              2. Go to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">vercel.com/new</a> and select your repository.<br />
              3. Vercel automatically detects Vite & builds instantly!
            </p>
          </div>

        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] font-mono text-slate-500">Includes SPA rewrites & asset caching</span>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            Open Vercel Dashboard
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
