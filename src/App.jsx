import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Scanner from './components/Scanner';
import LiveFeed from './components/LiveFeed';
import Metrics from './components/Metrics';
import Features from './components/Features';
import DeploymentModal from './components/DeploymentModal';
import Footer from './components/Footer';

export default function App() {
  const [activeQuery, setActiveQuery] = useState('');
  const [deployModalOpen, setDeployModalOpen] = useState(false);

  const handleStartScan = (query) => {
    setActiveQuery(query);
    const scannerEl = document.getElementById('scanner');
    if (scannerEl) {
      scannerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenScanner = () => {
    const scannerEl = document.getElementById('scanner');
    if (scannerEl) {
      scannerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <Header
        onOpenScanner={handleOpenScanner}
        onOpenDeployModal={() => setDeployModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onStartScan={handleStartScan} />
        <Scanner targetQuery={activeQuery} onResetTarget={() => setActiveQuery('')} />
        <LiveFeed />
        <Metrics />
        <Features />
      </main>

      {/* Footer */}
      <Footer onOpenDeployModal={() => setDeployModalOpen(true)} />

      {/* Deployment Helper Modal */}
      <DeploymentModal
        isOpen={deployModalOpen}
        onClose={() => setDeployModalOpen(false)}
      />

    </div>
  );
}
