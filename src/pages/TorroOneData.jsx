import React, { useEffect } from 'react';
import IndustrialGovernanceMandates from '../components/sections/IndustrialGovernanceMandates';
import TorroOneDataPlatformStack from '../components/sections/TorroOneDataPlatformStack';
import PlatformShowcase from '../components/sections/PlatformShowcase';
import ComparisonTable from '../components/sections/ComparisonTable';
import DataMarketplace from '../components/sections/DataMarketplace';
import Interoperability from '../components/sections/Interoperability';
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
      <IndustrialGovernanceMandates />
      <TorroOneDataPlatformStack />
      <PlatformShowcase />
      <DataMarketplace />
      <Interoperability />
      <ComparisonTable />
      
      {/* Footer conversion */}
      <DemoForm />
    </div>
  );
};

export default TorroOneData;
