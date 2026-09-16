import React from 'react';
import { ShieldAlert, Rocket, Terminal, Heart } from 'lucide-react';

export default function Footer({ onOpenDeployModal }) {
  return (
    <footer className="py-16 bg-[#080501] border-t border-[rgba(255,106,0,0.15)] font-mono text-xs text-[#9A948C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#FF6A00]" />
              <span className="font-black text-lg text-white">
                DARK<span className="text-[#FF6A00]">TRACE</span>
              </span>
              <span className="editorial-badge text-[9px]">SIH-2025 PROTOTYPE</span>
            </div>
            <p className="text-xs text-[#9A948C] leading-relaxed max-w-sm font-sans">
              AI-assisted dark-web threat actor attribution platform engineered for rapid artifact correlation, stylometric persona linking, and evidence fusion.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">System Navigation</span>
            <ul className="space-y-2">
              <li><a href="#workflow" className="hover:text-[#FF9D4D] transition-colors">Attribution Pipeline</a></li>
              <li><a href="#knowledge-graph" className="hover:text-[#FF9D4D] transition-colors">Interactive Graph</a></li>
              <li><a href="#actor-profile" className="hover:text-[#FF9D4D] transition-colors">Threat Actor Dossier</a></li>
              <li><a href="#scanner" className="hover:text-[#FF9D4D] transition-colors">Scanner Audit Engine</a></li>
              <li><a href="#metrics" className="hover:text-[#FF9D4D] transition-colors">Radar Risk Analytics</a></li>
            </ul>
          </div>

          {/* Col 3: Deployment & Status */}
          <div className="space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">Deployment & Status</span>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>TOR Nodes Indexed</span>
              </div>
              <button
                onClick={onOpenDeployModal}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#F5F5F0] bg-[#120A04] border border-white/10 hover:border-[#FF6A00]/40 transition-all"
              >
                <Rocket className="w-3.5 h-3.5 text-[#FF9D4D]" />
                Vercel Deploy Helper
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <span>© 2025 DARKTRACE.AI • SIH Hackathon Evaluation Build</span>
          <span className="text-[#9A948C] flex items-center gap-1">
            Built with React 19, Vite & Framer Motion
          </span>
        </div>

      </div>
    </footer>
  );
}
