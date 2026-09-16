import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import AttributionWorkflow from './components/AttributionWorkflow';
import IntelligenceEngine from './components/IntelligenceEngine';
import ActorProfile from './components/ActorProfile';
import TimelineSection from './components/TimelineSection';
import Scanner from './components/Scanner';
import LiveFeed from './components/LiveFeed';
import Metrics from './components/Metrics';
import Features from './components/Features';
import TechArchitecture from './components/TechArchitecture';
import FinalCTA from './components/FinalCTA';
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
    <div className="min-h-screen bg-[#171411] text-[#F3EEE7] selection:bg-[#E87532] selection:text-[#171411]">
      
      {/* Navigation Header */}
      <Header
        onOpenScanner={handleOpenScanner}
        onOpenDeployModal={() => setDeployModalOpen(true)}
      />

      {/* Main Narrative Content Sections */}
      <main>
        <Hero onStartScan={handleStartScan} />
        <ProblemSection />
        <AttributionWorkflow />
        <IntelligenceEngine />
        <ActorProfile />
        <TimelineSection />
        <Scanner targetQuery={activeQuery} onResetTarget={() => setActiveQuery('')} />
        <LiveFeed />
        <Metrics />
        <Features />
        <TechArchitecture />
        <FinalCTA
          onOpenDeployModal={() => setDeployModalOpen(true)}
          onOpenScanner={handleOpenScanner}
        />
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
