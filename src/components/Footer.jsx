import React from 'react';
import { ShieldAlert, Terminal, CheckCircle2 } from 'lucide-react';


export default function Footer({ onOpenDeployModal }) {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-mono font-bold">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono font-bold text-white text-base">
                SHADOW<span className="text-cyan-400">INTEL</span>
              </div>
              <p className="text-xs text-slate-500 font-mono">Dark Web Intelligence & Threat Prevention Platform</p>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <a href="#scanner" className="hover:text-cyan-400 transition-colors">Scanner</a>
            <a href="#live-feed" className="hover:text-cyan-400 transition-colors">Live Feed</a>
            <a href="#metrics" className="hover:text-cyan-400 transition-colors">Metrics</a>
            <button onClick={onOpenDeployModal} className="text-purple-400 hover:text-purple-300 font-bold transition-colors">
              Deploy to Vercel
            </button>
          </div>

          {/* Right Status */}
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Vercel Edge Ready</span>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} ShadowIntel Security. Built for SIH Dark Web Intelligence.</p>
          <p className="flex items-center gap-1">
            Optimized for <span className="text-white font-bold">Vercel Deployment</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
