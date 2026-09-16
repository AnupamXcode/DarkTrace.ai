import React from 'react';
import { ShieldAlert, Rocket } from 'lucide-react';

export default function Footer({ isLightMode, onOpenDeployModal }) {
  return (
    <footer className="py-16 theme-section-bg border-t theme-border font-mono text-xs theme-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#E87532]" />
              <span className="font-black text-lg theme-text-primary">
                DARK<span className="text-gradient-orange">TRACE</span>
              </span>
              <span className="spatial-badge text-[9px]">SIH-2025</span>
            </div>
            <p className="text-xs theme-text-muted leading-relaxed max-w-sm font-sans">
              Cinematic dark-web threat actor attribution platform engineered for rapid artifact correlation, stylometric persona linking, and explainable evidence fusion.
            </p>
          </div>

          <div className="space-y-3">
            <span className="theme-text-primary font-bold text-xs uppercase tracking-wider block">Navigation</span>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#E87532] transition-colors">Platform</a></li>
              <li><a href="#intelligence" className="hover:text-[#E87532] transition-colors">Intelligence Engine</a></li>
              <li><a href="#workflow" className="hover:text-[#E87532] transition-colors">Attribution Workflow</a></li>
              <li><a href="#actor-profile" className="hover:text-[#E87532] transition-colors">Actor Profile</a></li>
              <li><a href="#scanner" className="hover:text-[#E87532] transition-colors">Threat Investigation</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="theme-text-primary font-bold text-xs uppercase tracking-wider block">System Status</span>
            <div className="space-y-3">
              <div className="flex items-center gap-2 theme-text-muted">
                <span className="w-2 h-2 rounded-full bg-[#E87532] animate-ping" />
                <span>3D Graph Engine Active</span>
              </div>
              <button
                onClick={onOpenDeployModal}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                  isLightMode ? 'bg-stone-100 border-stone-300 text-stone-900 hover:bg-stone-200' : 'bg-[#211C18] border-white/10 text-[#F3EEE7] hover:border-[#E87532]/40'
                }`}
              >
                <Rocket className="w-3.5 h-3.5 text-[#E87532]" />
                Vercel Deploy Helper
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t theme-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <span>© 2025 DARKTRACE.AI • DepthForge 3D Design System</span>
          <span className="theme-text-muted">
            Built with React 19, Three.js & Framer Motion
          </span>
        </div>

      </div>
    </footer>
  );
}
