import React from 'react';
import ProductionCaseStudyCarousel from './ProductionCaseStudyCarousel';

const GlobalMandates = () => {
    return (
        <section className="light-section-bg relative py-10 text-slate-900 sm:py-12 md:py-14" id="case-studies">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.08)_0%,transparent_55%)]" />

            <div className="relative z-10 mx-auto max-w-[105rem] px-4 sm:px-6 md:px-12">
                <ProductionCaseStudyCarousel showTierOneIntro theme="light" />
            </div>
        </section>
    );
};

export default GlobalMandates;
