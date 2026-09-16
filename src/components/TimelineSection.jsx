import React from 'react';
import { Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TimelineSection({ isLightMode }) {
  const timelineEvents = [
    {
      year: '2024',
      title: 'Alias Discovered',
      subtitle: 'XSS.is Forum Registration',
      description: 'First observed dark web thread selling zero-day Linux VPN RCE payloads under handle "ShadowKernel".'
    },
    {
      year: '2025',
      title: 'Marketplace Activity',
      subtitle: 'BreachForums SQL Dump',
      description: 'Listing corporate database leak containing 3.4M Bcrypt hashes. Requested 2.5 BTC payment.'
    },
    {
      year: '2025',
      title: 'PGP Key Reused',
      subtitle: 'Signature Correlation',
      description: 'PGP Key 0x9F02A489 verified across Pastebin dump and Telegram channel @DarkLogs_VIP.'
    },
    {
      year: '2026',
      title: 'New Alias Detected',
      subtitle: 'Telegram Stealer Feed',
      description: 'Automated RedLine stealer log distribution bot connected to primary BTC wallet 1F1tA1p...3vJ.'
    },
    {
      year: '2026',
      title: 'Infrastructure Correlation',
      subtitle: 'Attribution Hypothesis',
      description: 'DARKTRACE engine correlates all signals into actor DARKWOLF23 with 87% confidence.'
    }
  ];

  return (
    <section className="py-28 relative theme-section-bg border-t theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="spatial-badge mb-3 inline-flex">
              <Clock className="w-3.5 h-3.5 text-[#E87532]" />
              TEMPORAL ATTRIBUTION TIMELINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black theme-text-primary font-mono tracking-tight">
              Chronological Footprint Evolution
            </h2>
          </div>
          <p className="text-xs sm:text-sm theme-text-muted font-mono max-w-md">
            Progressive evidence accumulation over a 24-month investigation window.
          </p>
        </motion.div>

        {/* Horizontal Scroll / Grid Timeline Container */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {timelineEvents.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="spatial-card p-6 rounded-3xl space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-2xl font-black text-[#E87532]">
                    {evt.year}
                  </span>
                  <span className="text-[10px] theme-text-muted font-bold">
                    STEP 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold font-mono theme-text-primary">
                  {evt.title}
                </h3>
                <span className="text-[11px] font-mono text-orange-600 font-bold block">
                  {evt.subtitle}
                </span>
                <p className="text-xs theme-text-muted leading-relaxed pt-1">
                  {evt.description}
                </p>
              </div>

              <div className="pt-4 border-t theme-border text-[10px] font-mono theme-text-muted flex items-center justify-between">
                <span>Signal Verified</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#E87532]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
