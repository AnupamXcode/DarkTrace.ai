import React from 'react';
import { Lock, Eye, Zap, ShieldCheck, Terminal, Network, Key } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const featureList = [
    {
      icon: Eye,
      title: 'TOR & I2P Hidden Service Crawling',
      description: 'Continuous automated scraping across onion marketplaces, closed telegram groups, and encrypted forums.',
      badge: 'Real-Time'
    },
    {
      icon: Key,
      title: 'Stealer Log Credential Extraction',
      description: 'Instant parsing of RedLine, Vidar, Lumma, and Raccoon malware logs for exposed passwords and cookies.',
      badge: 'Malware Engine'
    },
    {
      icon: ShieldCheck,
      title: 'Automated DMCA & Takedown Requests',
      description: 'One-click takedown workflow submitting automated legal notifications to paste sites and hosting providers.',
      badge: 'Automated'
    },
    {
      icon: Network,
      title: 'SSO & Session Token Protection',
      description: 'Detect hijacked active browser cookies before attackers bypass Multi-Factor Authentication (MFA).',
      badge: 'MFA Defense'
    },
    {
      icon: Terminal,
      title: 'Developer REST API & Webhooks',
      description: 'Seamless integration into SIEM, SOAR, Jira, and Slack with webhooks fired on high-severity leaks.',
      badge: 'Developer SDK'
    },
    {
      icon: Zap,
      title: 'Vercel One-Click Deployment',
      description: 'Deployable on Vercel with zero server management, fast edge distribution, and instant SSL.',
      badge: 'Vercel Native'
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-[#0C0702] border-t border-[rgba(255,106,0,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="editorial-badge">
            <Lock className="w-3.5 h-3.5 text-[#FF6A00]" />
            ENTERPRISE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F0] tracking-tight font-mono">
            Built for Modern Cyber Defense
          </h2>
          <p className="text-xs sm:text-sm text-[#9A948C] font-mono">
            Complete dark web threat intelligence tailored for security operations & enterprise risk teams.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="editorial-card p-8 rounded-3xl space-y-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1A1008] border border-[rgba(255,106,0,0.3)] flex items-center justify-center text-[#FF6A00] group-hover:border-[#FF6A00] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="editorial-badge text-[9px]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-mono text-white mb-2 group-hover:text-[#FF9D4D] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#9A948C] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
