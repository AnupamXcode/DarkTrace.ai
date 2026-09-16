import React from 'react';
import { ShieldAlert, EyeOff, Lock, Layers, Cpu, Terminal, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemStatement() {
  const frictionPoints = [
    {
      number: '01',
      title: 'TOR & I2P Onion Anonymity',
      description: 'Threat actors hide behind multi-hop onion routing, rendering traditional IP tracking and network geofencing useless.'
    },
    {
      number: '02',
      title: 'Fragmented Multi-Alias Personas',
      description: 'The same cybercriminal uses different handles across XSS.is, BreachForums, Telegram, and Pastebin to mask their identity.'
    },
    {
      number: '03',
      title: 'High-Volume Stealer Log Dumps',
      description: 'Millions of raw RedLine, Vidar, and Lumma stealer logs flood illegal channels daily, overpowering manual SOC analysis.'
    },
    {
      number: '04',
      title: 'Orphaned Financial & PGP Signals',
      description: 'Bitcoin transactions, PGP keys, and session cookies exist in siloes without graph neural network correlation.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-[rgba(255,106,0,0.12)] bg-[#0A0602]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end"
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="editorial-badge">
              <ShieldAlert className="w-3.5 h-3.5 text-[#FF6A00]" />
              THE ATTRIBUTION CRISIS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F0] tracking-tight leading-none font-mono">
              Why Traditional Cyber Defense Fails on the Dark Web.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#9A948C] leading-relaxed">
              Cyber threat actors operate under total onion network anonymity. Without graph correlation and automated linguistic persona linking, defenders only see isolated breach alerts—never the real threat actor behind them.
            </p>
          </div>
        </motion.div>

        {/* Asymmetric 4-Grid Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frictionPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="editorial-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-black text-[#FF6A00] opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#1A1008] border border-white/5 flex items-center justify-center text-[#9A948C] group-hover:border-[#FF6A00]/40 group-hover:text-[#FF6A00] transition-colors">
                    <ArrowDownRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-mono text-[#F5F5F0] mb-2 group-hover:text-[#FF9D4D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9A948C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-[#9A948C] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                Unresolved Threat Vector
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
