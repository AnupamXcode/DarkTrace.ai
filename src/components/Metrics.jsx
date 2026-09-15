import React, { useState } from 'react';
import { BarChart3, Shield, Cpu, Flame, PieChart, Activity, CheckCircle, AlertTriangle, Layers } from 'lucide-react';

export default function Metrics() {
  const [activeTab, setActiveTab] = useState('vectors');

  const threatVectors = [
    { name: 'Stealer Logs (RedLine / Vidar / Lumma)', percentage: 48, count: '6.8M Logs', color: 'from-rose-500 to-pink-500' },
    { name: 'TOR Forum Credential Dumps', percentage: 26, count: '3.6M Leaks', color: 'from-amber-500 to-orange-500' },
    { name: 'Telegram VIP Channels', percentage: 16, count: '2.2M Records', color: 'from-cyan-500 to-blue-500' },
    { name: 'Pastebin & Github Gists', percentage: 10, count: '1.4M Pastes', color: 'from-purple-500 to-indigo-500' },
  ];

  const categoryScores = [
    { category: 'Executive SSO Accounts', score: 88, status: 'HIGH RISK' },
    { category: 'Employee Email Exposure', score: 64, status: 'MODERATE' },
    { category: 'Source Code Leaks', score: 15, status: 'LOW RISK' },
    { category: 'API Keys & Secrets', score: 79, status: 'HIGH RISK' },
  ];

  return (
    <section id="metrics" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            GLOBAL THREAT RADAR ANALYTICS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Exposure Metrics & Attack Vectors
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Automated intelligence mapping across millions of dark web indicators.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Attack Vector Breakdown */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-mono">
                  <PieChart className="w-4 h-4 text-cyan-400" />
                  Primary Dark Web Leak Vectors
                </div>
                <span className="text-xs font-mono text-slate-500">Updated Hourly</span>
              </div>

              <div className="space-y-5">
                {threatVectors.map((vector, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-200 font-semibold">{vector.name}</span>
                      <span className="text-slate-400">{vector.count} ({vector.percentage}%)</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-950 p-0.5 border border-slate-800">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${vector.color} transition-all duration-500`}
                        style={{ width: `${vector.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Global TOR Sensors Active
              </span>
              <span className="text-cyan-400 cursor-pointer hover:underline">View Vector API Docs →</span>
            </div>
          </div>

          {/* Right Column: Visual Threat Radar SVG */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden text-center">
            
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
              Real-time Sensor Radar
            </div>

            {/* Radar Canvas Container */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              
              {/* Concentric Circles */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
              <div className="absolute inset-8 rounded-full border border-cyan-500/30" />
              <div className="absolute inset-16 rounded-full border border-cyan-500/40" />
              <div className="absolute inset-24 rounded-full border border-cyan-500/50" />

              {/* Crosshair Lines */}
              <div className="absolute w-full h-[1px] bg-cyan-500/20" />
              <div className="absolute h-full w-[1px] bg-cyan-500/20" />

              {/* Radar Sweep Line */}
              <div className="absolute inset-0 rounded-full animate-radar origin-center bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,240,255,0.45)_360deg)] pointer-events-none" />

              {/* Blips */}
              <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-rose-500 animate-ping shadow-[0_0_10px_#f43f5e]" />
              <div className="absolute bottom-16 right-20 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
              <div className="absolute top-24 right-14 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />

              {/* Center Core */}
              <div className="w-10 h-10 rounded-full bg-slate-950 border border-cyan-400 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs shadow-[0_0_15px_#00f0ff]">
                SHADOW
              </div>
            </div>

            <div className="mt-6 font-mono text-xs text-slate-300">
              <span className="text-rose-400 font-bold">12 Active Threat Signals</span> Detected in Last 60s
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
