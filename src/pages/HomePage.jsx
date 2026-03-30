import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Capabilities from '../components/sections/Capabilities';
import PlatformShowcase from '../components/sections/PlatformShowcase';
import Interoperability from '../components/sections/Interoperability';

import Stakeholders from '../components/sections/Stakeholders';
import ComparisonTable from '../components/sections/ComparisonTable';
import DataMarketplace from '../components/sections/DataMarketplace';
import IntelligenceHub from '../components/sections/IntelligenceHub';
import DemoForm from '../components/sections/DemoForm';
import Footer from '../components/layout/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-800">

            <Header />

            <main className="flex flex-col">
                {/* Core Narrative */}
                <Hero />

                {/* Foundation & Architecture */}
                <div className="bg-slate-50">
                    <Capabilities />
                </div>

                <PlatformShowcase />
                <Interoperability />

                <Stakeholders />

                <div className="bg-slate-50">
                    <ComparisonTable />
                </div>

                {/* Business Value & Validation */}
                <IntelligenceHub />

                {/* Conversion */}
                <DemoForm />
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
