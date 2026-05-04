import React, { useEffect } from 'react';
import Capabilities from '../components/sections/Capabilities';
import PlatformShowcase from '../components/sections/PlatformShowcase';
import ComparisonTable from '../components/sections/ComparisonTable';
import DataMarketplace from '../components/sections/DataMarketplace';
import Interoperability from '../components/sections/Interoperability';
import TrustSignals from '../components/sections/TrustSignals';
import DemoForm from '../components/sections/DemoForm';

const TorroOneData = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="pt-20">
      {/* 
          Since the user wants these specific sections, 
          we'll lead with the core capabilities and showcase.
      */}
      
      <Capabilities />
      <PlatformShowcase />
      <DataMarketplace />
      <Interoperability />
      <ComparisonTable />
      <TrustSignals />
      
      {/* Footer conversion */}
      <DemoForm />
    </div>
  );
};

export default TorroOneData;
