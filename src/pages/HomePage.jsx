import React from 'react';
import Hero from '../components/sections/Hero';
import Capabilities from '../components/sections/Capabilities';
import PlatformShowcase from '../components/sections/PlatformShowcase';
import IntelligenceHub from '../components/sections/IntelligenceHub';
import SolutionsForTeam from '../components/sections/SolutionsForTeam';
import GlobalMandates from '../components/sections/GlobalMandates';
import DemoForm from '../components/sections/DemoForm';

function HomePage() {
  return (
    <>
      {/* Core Narrative */}
      <Hero />

      <div className="bg-gray-50/50">
        <Capabilities 
          title="Enterprise Data At Scale" 
          subtitle="Comprehensive Data Governance, Privacy Compliance and Secure Analytics for Modern Enterprises"
        />
      </div>

      <PlatformShowcase />

      <SolutionsForTeam />

      <GlobalMandates />

      {/* Conversion */}
      <IntelligenceHub />
      <DemoForm />
    </>
  );
}

export default HomePage;
