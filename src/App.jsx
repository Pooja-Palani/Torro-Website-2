import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Capabilities from './components/sections/Capabilities';
import PlatformShowcase from './components/sections/PlatformShowcase';
import Interoperability from './components/sections/Interoperability';

import ComparisonTable from './components/sections/ComparisonTable';
import TrustSignals from './components/sections/TrustSignals';
import IntelligenceHub from './components/sections/IntelligenceHub';
import DataMarketplace from './components/sections/DataMarketplace';
import DemoForm from './components/sections/DemoForm';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">

      <Header />

      <main className="flex flex-col">
        {/* Core Narrative */}
        <Hero />

        {/* Foundation & Architecture */}
        <div className="bg-gray-50/50">
          <Capabilities />
        </div>

        <PlatformShowcase />

        <div className="bg-gray-50/50">
          <ComparisonTable />
        </div>

        {/* Data Access & Culture */}
        <DataMarketplace />
        <Interoperability />

        {/* Business Value & Validation */}
        <TrustSignals />
        <IntelligenceHub />

        {/* Conversion */}
        <DemoForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
