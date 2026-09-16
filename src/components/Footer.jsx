import React from 'react';
import { ShieldAlert, Rocket } from 'lucide-react';

export default function Footer({ onOpenDeployModal }) {
  return (
    <footer className="py-16 bg-[#171411] border-t border-[#955D31]/20 font-mono text-xs text-[#A9A097]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#E87532]" />
              <span className="font-black text-lg text-[#F3EEE7]">
                DARK<span className="text-[#E87532]">TRACE</span>
              </span>
              <span className="spatial-badge text-[9px]">SIH-2025</span>
            </div>
            <p className="text-xs text-[#A9A097] leading-relaxed max-w-sm font-sans">
              Cinematic dark-web threat actor attribution platform engineered for rapid artifact correlation, stylometric persona linking, and explainable evidence fusion.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-[#F3EEE7] font-bold text-xs uppercase tracking-wider block">Navigation</span>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#E87532] transition-colors">Platform</a></li>
              <li><a href="#intelligence" className="hover:text-[#E87532] transition-colors">Intelligence Engine</a></li>
              <li><a href="#workflow" className="hover:text-[#E87532] transition-colors">Attribution Workflow</a></li>
              <li><a href="#actor-profile" className="hover:text-[#E87532] transition-colors">Actor Profile</a></li>
              <li><a href="#scanner" className="hover:text-[#E87532] transition-colors">Threat Investigation</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#F3EEE7] font-bold text-xs uppercase tracking-wider block">System Status</span>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#BAAD9A]">
                <span className="w-2 h-2 rounded-full bg-[#E87532] animate-ping" />
                <span>3D Graph Engine Active</span>
              </div>
              <button
                onClick={onOpenDeployModal}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#F3EEE7] bg-[#211C18] border border-white/10 hover:border-[#E87532]/40 transition-all"
              >
                <Rocket className="w-3.5 h-3.5 text-[#BAAD9A]" />
                Vercel Deploy Helper
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <span>© 2025 DARKTRACE.AI • DepthForge 3D Design System</span>
          <span className="text-[#A9A097]">
            Built with React 19, Three.js & Framer Motion
          </span>
        </div>

      </div>
    </footer>
  );
}
