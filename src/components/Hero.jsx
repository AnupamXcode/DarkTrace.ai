import React, { useState } from 'react';
import { Search, ShieldAlert, Cpu, Lock, AlertTriangle, Eye, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function Hero({ onStartScan }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onStartScan(query.trim());
    }
  };

  const threatTickerItems = [
    { tag: 'CRITICAL', text: 'Stolen Stealer Logs (RedLine) detected targeting corporate SSO domains' },
    { tag: 'RANSOMWARE', text: 'LockBit 3.0 claim published: 42.5 GB database dump leaked' },
    { tag: 'EXPLOIT', text: 'Zero-day RCE PoC circulating on Telegram VIP channels' },
    { tag: 'TOR MARKET', text: 'BlackByte database listing 1.2M hashed passwords for sale' },
  ];

  const quickStats = [
    { label: 'Indexed Breach Records', value: '14.8 Billion+', icon: Lock, change: '+124k today' },
    { label: 'Active Dark Web Crawlers', value: '3,420 Nodes', icon: Cpu, change: '100% Uptime' },
    { label: 'Stealer Logs Analyzed', value: '850M Logs', icon: Eye, change: 'Real-time' },
    { label: 'Average Detection Time', value: '< 45 Seconds', icon: Zap, change: 'Ultra-fast' },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-24">
      
      {/* Background Decorative Grids & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,240,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Marquee Ticker */}
      <div className="w-full bg-slate-950/80 border-y border-slate-800/80 py-2.5 overflow-hidden mb-12 backdrop-blur-md">
        <div className="animate-marquee flex gap-12 items-center text-xs font-mono whitespace-nowrap">
          {[...threatTickerItems, ...threatTickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                item.tag === 'CRITICAL' ? 'bg-rose-950 text-rose-400 border border-rose-600/40' :
                item.tag === 'RANSOMWARE' ? 'bg-amber-950 text-amber-400 border border-amber-600/40' :
                'bg-cyan-950 text-cyan-400 border border-cyan-600/40'
              }`}>
                {item.tag}
              </span>
              <span className="text-slate-300">{item.text}</span>
              <span className="text-slate-700">|</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            AI-POWERED DARK WEB & THREAT INTELLIGENCE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Expose Dark Web Breaches <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent text-glow-cyan">
              Before They Expose You
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Continuous automated dark web monitoring across TOR hidden services, Telegram breach channels, paste sites, and stealer log repositories.
          </p>

          {/* Quick Domain / Email Input Scanner Form */}
          <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
            <div className="glass-panel p-2 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.12)] flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter email (e.g. CEO@company.com) or domain..."
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-950/70 text-slate-100 placeholder-slate-500 text-sm font-mono rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-slate-800"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md transition-all flex items-center justify-center gap-2 font-mono whitespace-nowrap"
              >
                Instant Scan
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Dark Web Check</span>
              <span>•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero Logs Kept</span>
              <span>•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Vercel Ready</span>
            </div>
          </form>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800/80 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/50 text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-black text-white font-mono tracking-tight">{stat.value}</div>
                  <div className="mt-1 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span>{stat.change}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
