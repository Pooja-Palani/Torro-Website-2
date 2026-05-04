import React from 'react';
import Hero from '../components/sections/Hero';
import Capabilities from '../components/sections/Capabilities';
import PlatformShowcase from '../components/sections/PlatformShowcase';
import ComparisonTable from '../components/sections/ComparisonTable';
import DataMarketplace from '../components/sections/DataMarketplace';
import Interoperability from '../components/sections/Interoperability';
import TrustSignals from '../components/sections/TrustSignals';
import IntelligenceHub from '../components/sections/IntelligenceHub';
import SolutionsForTeam from '../components/sections/SolutionsForTeam';
import Compliance from '../components/sections/Compliance';
import CaseStudies from '../components/sections/CaseStudies';
import DemoForm from '../components/sections/DemoForm';

function HomePage() {
  return (
    <>
      {/* Core Narrative */}
      <Hero />

      {/* Moved to TorroOneData page
      <div className="bg-gray-50/50">
        <Capabilities />
      </div>

      <PlatformShowcase />

      <div className="bg-gray-50/50">
        <ComparisonTable />
      </div>

      <DataMarketplace />
      <Interoperability />

      <TrustSignals />
      */}

      <PlatformShowcase />

      <SolutionsForTeam />
      <Compliance />

      {/* Conversion */}
      <IntelligenceHub />
      <DemoForm />
    </>
  );
}

export default HomePage;
