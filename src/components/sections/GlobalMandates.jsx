import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import ProductionCaseStudyCarousel from './ProductionCaseStudyCarousel';

const GlobalMandates = () => {
    const ACCENT = '#99A0F9';

    return (
        <section className="relative border-t border-white/5 bg-[#0c0e1a] pb-14 text-white md:pb-18 pt-18 md:pt-24" id="compliance">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.08)_0%,transparent_55%)]" />

            <div className="relative z-10 mx-auto max-w-[105rem] px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-14 max-w-4xl space-y-5 text-center md:mb-16"
                >
                    <div className="inline-flex items-center justify-center gap-3 rounded-full border border-[#99A0F9]/20 bg-[#99A0F9]/10 px-6 py-2.5 shadow-[0_0_22px_rgba(153,160,249,0.10)]">
                        <Shield className="h-4 w-4" style={{ color: ACCENT }} />
                        <span className="text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                            Compliance
                        </span>
                    </div>

                    <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                        Navigate Global Mandates with <span style={{ color: ACCENT }}>Absolute Accountability</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-[16px] font-medium leading-relaxed text-white/50">
                        The unified operating system to enforce active compliance and generate audit-ready evidence across your
                        hybrid estate.
                    </p>
                </motion.div>

                <ProductionCaseStudyCarousel showTierOneIntro />
            </div>
        </section>
    );
};

export default GlobalMandates;
