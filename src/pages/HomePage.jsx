import React from 'react';
import Hero from '../components/sections/Hero';
import PlatformShowcase from '../components/sections/PlatformShowcase';
import IntelligenceHub from '../components/sections/IntelligenceHub';
import SolutionsForTeam from '../components/sections/SolutionsForTeam';
import GlobalMandates from '../components/sections/GlobalMandates';
import DemoForm from '../components/sections/DemoForm';

function HomePage() {
  return (
    <>
      {/* Page 1 — Command Data Leadership */}
      <Hero />

      {/* Page 2 — Built for Every Institutional Stakeholder */}
      <SolutionsForTeam />

      {/* Page 3 — See Everything and Protect Everything */}
      <PlatformShowcase />

      {/* Page 4 — Navigate Global Mandates With Absolute Accountability */}
      <GlobalMandates />

      {/* Page 5 — Intelligence for Executives at Scale */}
      <IntelligenceHub />

      {/* Final — Evaluate Institutional Readiness */}
      <DemoForm
        title="Evaluate"
        titleAccent="Institutional Readiness"
      />
    </>
  );
}

export default HomePage;
