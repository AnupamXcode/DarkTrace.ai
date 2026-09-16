import React from 'react';
import { BarChart3, Shield, Cpu, Flame, PieChart, Activity, CheckCircle, AlertTriangle, Layers, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Metrics() {
  const threatVectors = [
    { name: 'RedLine / Vidar / Lumma Stealer Logs', percentage: 48, count: '6.8M Logs', color: 'from-[#FF6A00] to-[#FF9D4D]' },
    { name: 'TOR Forum Credential & SQL Dumps', percentage: 26, count: '3.6M Leaks', color: 'from-[#FF9D4D] to-amber-500' },
    { name: 'Telegram VIP Cyber Channels', percentage: 16, count: '2.2M Records', color: 'from-orange-500 to-amber-600' },
    { name: 'Pastebin & Github Gists', percentage: 10, count: '1.4M Pastes', color: 'from-[#E07A5F] to-orange-700' },
  ];

  return (
    <section id="metrics" className="py-24 relative bg-[#080501]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="editorial-badge">
            <Radio className="w-3.5 h-3.5 text-[#FF6A00] animate-pulse" />
            GLOBAL THREAT RADAR ANALYTICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F0] tracking-tight font-mono">
            Exposure Metrics & Attack Vectors
          </h2>
          <p className="text-xs sm:text-sm text-[#9A948C] font-mono">
            [SIH PROTOTYPE RADAR] Real-time dark web node tracking across active sensors.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Attack Vector Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 editorial-card p-6 sm:p-10 rounded-3xl border border-[rgba(255,106,0,0.25)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8 font-mono text-xs">
                <div className="flex items-center gap-2 font-bold text-[#F5F5F0]">
                  <PieChart className="w-4 h-4 text-[#FF6A00]" />
                  Primary Dark Web Ingestion Vectors
                </div>
                <span className="text-[#9A948C]">SIH Prototype Data</span>
              </div>

              <div className="space-y-6">
                {threatVectors.map((vector, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#F5F5F0] font-semibold">{vector.name}</span>
                      <span className="text-[#9A948C]">{vector.count} ({vector.percentage}%)</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#0C0702] p-0.5 border border-white/5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${vector.color} transition-all duration-500`}
                        style={{ width: `${vector.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#9A948C]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                TOR Crawler Sensors Active
              </span>
              <span className="text-[#FF9D4D] cursor-pointer hover:underline">View Vector Matrix →</span>
            </div>
          </motion.div>

          {/* Right Column: Visual Threat Radar SVG (Orange Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 editorial-card p-6 sm:p-10 rounded-3xl border border-[rgba(255,106,0,0.25)] flex flex-col items-center justify-center relative overflow-hidden text-center"
          >
            
            <div className="text-xs font-mono text-[#9A948C] uppercase tracking-widest mb-6">
              Real-time Sensor Radar (Orange Band)
            </div>

            {/* Radar Canvas Container */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              
              {/* Concentric Circles */}
              <div className="absolute inset-0 rounded-full border border-[rgba(255,106,0,0.2)]" />
              <div className="absolute inset-8 rounded-full border border-[rgba(255,106,0,0.3)]" />
              <div className="absolute inset-16 rounded-full border border-[rgba(255,106,0,0.4)]" />
              <div className="absolute inset-24 rounded-full border border-[rgba(255,106,0,0.5)]" />

              {/* Crosshair Lines */}
              <div className="absolute w-full h-[1px] bg-[rgba(255,106,0,0.2)]" />
              <div className="absolute h-full w-[1px] bg-[rgba(255,106,0,0.2)]" />

              {/* Radar Sweep Line */}
              <div className="absolute inset-0 rounded-full animate-radar origin-center bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,106,0,0.45)_360deg)] pointer-events-none" />

              {/* Threat Blips */}
              <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-[#FF6A00] animate-ping shadow-[0_0_10px_#FF6A00]" />
              <div className="absolute bottom-16 right-20 w-2.5 h-2.5 rounded-full bg-[#FF9D4D] shadow-[0_0_8px_#FF9D4D]" />
              <div className="absolute top-24 right-14 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />

              {/* Center Core */}
              <div className="w-12 h-12 rounded-full bg-[#0C0702] border border-[#FF6A00] flex items-center justify-center font-mono font-bold text-[#FF6A00] text-[10px] shadow-[0_0_15px_#FF6A00]">
                DARKTRACE
              </div>
            </div>

            <div className="mt-6 font-mono text-xs text-[#F5F5F0]">
              <span className="text-[#FF6A00] font-bold">12 Active Signals</span> Intercepted (SIH Prototype)
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
