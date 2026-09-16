import React, { useState, useEffect } from 'react';
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
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

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
    <div className={`min-h-screen transition-colors duration-300 ${
      isLightMode 
        ? 'bg-[#FAF8F5] text-[#1C1917] selection:bg-[#EA580C] selection:text-white' 
        : 'bg-[#171411] text-[#F3EEE7] selection:bg-[#E87532] selection:text-[#171411]'
    }`}>
      
      {/* Navigation Header */}
      <Header
        isLightMode={isLightMode}
        onToggleTheme={toggleTheme}
        onOpenScanner={handleOpenScanner}
        onOpenDeployModal={() => setDeployModalOpen(true)}
      />

      {/* Main Narrative Content Sections */}
      <main>
        <Hero isLightMode={isLightMode} onStartScan={handleStartScan} />
        <ProblemSection isLightMode={isLightMode} />
        <AttributionWorkflow isLightMode={isLightMode} />
        <IntelligenceEngine isLightMode={isLightMode} />
        <ActorProfile isLightMode={isLightMode} />
        <TimelineSection isLightMode={isLightMode} />
        <Scanner isLightMode={isLightMode} targetQuery={activeQuery} onResetTarget={() => setActiveQuery('')} />
        <LiveFeed isLightMode={isLightMode} />
        <Metrics isLightMode={isLightMode} />
        <Features isLightMode={isLightMode} />
        <TechArchitecture isLightMode={isLightMode} />
        <FinalCTA
          isLightMode={isLightMode}
          onOpenDeployModal={() => setDeployModalOpen(true)}
          onOpenScanner={handleOpenScanner}
        />
      </main>

      {/* Footer */}
      <Footer isLightMode={isLightMode} onOpenDeployModal={() => setDeployModalOpen(true)} />

      {/* Deployment Helper Modal */}
      <DeploymentModal
        isLightMode={isLightMode}
        isOpen={deployModalOpen}
        onClose={() => setDeployModalOpen(false)}
      />

    </div>
  );
}
