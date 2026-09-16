import React from 'react';
import { Lock, Eye, Zap, ShieldCheck, Terminal, Network, Key } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features({ isLightMode }) {
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
    <section id="features" className="py-28 relative theme-section-bg border-t theme-border font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="spatial-badge">
            <Lock className="w-3.5 h-3.5 text-[#E87532]" />
            ENTERPRISE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black theme-text-primary tracking-tight">
            Built for Modern Cyber Defense
          </h2>
          <p className="text-xs sm:text-sm theme-text-muted">
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
                className="spatial-card p-8 rounded-3xl space-y-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors ${
                      isLightMode ? 'bg-orange-50 border-orange-200 text-orange-600' : 'bg-[#211C18] border-[#955D31]/30 text-[#E87532]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="spatial-badge text-[9px]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold theme-text-primary mb-2 group-hover:text-[#E87532] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs theme-text-muted leading-relaxed font-sans">
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
