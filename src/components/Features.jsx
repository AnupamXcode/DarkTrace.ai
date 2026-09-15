import React from 'react';
import { Lock, Eye, Zap, ShieldCheck, Terminal, AlertTriangle, Key, Network } from 'lucide-react';

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
    <section id="features" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Lock className="w-3.5 h-3.5" />
            ENTERPRISE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Built for Modern Cyber Defense
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Complete dark web threat intelligence tailored for security operations & enterprise risk teams.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-mono mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
