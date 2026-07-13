import React from 'react';
import Hero from '../components/sections/Hero';
import PlatformShowcase from '../components/sections/PlatformShowcase';
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

      {/* Page 4 — Production case studies */}
      <GlobalMandates />

      {/* Final — Evaluate Institutional Readiness */}
      <DemoForm
        title="Evaluate"
        titleAccent="Institutional Readiness"
      />
    </>
  );
}

export default HomePage;
