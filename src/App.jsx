import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import AttributionWorkflow from './components/AttributionWorkflow';
import ActorProfile from './components/ActorProfile';
import Scanner from './components/Scanner';
import LiveFeed from './components/LiveFeed';
import Metrics from './components/Metrics';
import Features from './components/Features';
import TechArchitecture from './components/TechArchitecture';
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
    <div className="min-h-screen bg-[#080501] text-[#F5F5F0] selection:bg-[#FF6A00] selection:text-[#080501]">
      
      {/* Navigation Header */}
      <Header
        onOpenScanner={handleOpenScanner}
        onOpenDeployModal={() => setDeployModalOpen(true)}
      />

      {/* Main Narrative Content Sections */}
      <main>
        <Hero onStartScan={handleStartScan} />
        <ProblemStatement />
        <AttributionWorkflow />
        <ActorProfile />
        <Scanner targetQuery={activeQuery} onResetTarget={() => setActiveQuery('')} />
        <LiveFeed />
        <Metrics />
        <Features />
        <TechArchitecture />
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
