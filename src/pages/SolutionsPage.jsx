import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const solutions = [
    {
        id: "unified-discovery",
        title: "Unified Discovery & Metadata Foundation",
        text: "Torro provides a single authoritative layer that automatically catalogs data assets across multi-vendor estates, creating a unified data asset catalog.",
        businessValue: "Eliminates the visibility gap by providing a central business glossary and standardized data definitions across the enterprise.",
        capabilities: [
            "Automated Asset Discovery",
            "PII and Sensitivity Detection",
            "Central Business Glossary",
            "Metadata Synchronization"
        ],
        gradient: "from-indigo-400 to-indigo-600"
    },
    {
        id: "end-to-end-data",
        title: "End-to-End Data Lineage",
        text: "AssetViz provides a graph-based visualization engine that maps the lifecycle of data across systems, pipelines, and analytical applications.",
        businessValue: "Provides full traceability to answer who accessed what, when, and why, supporting regulatory accountability.",
        capabilities: [
            "Graph-based lineage visualization",
            "Cell-level lineage tracking",
            "Technical lineage synchronization",
            "Impact analysis"
        ],
        gradient: "from-amber-400 to-amber-600"
    },
    {
        id: "continuous-data-quality",
        title: "Continuous Data Quality & Trust",
        text: "Torro embeds quality monitoring directly into data pipelines using sensors and validation rules that evaluate data integrity continuously.",
        businessValue: "Ensures confidence before consumption and reduces the risk of incorrect data impacting analytics or AI models.",
        capabilities: [
            "Configurable quality sensors",
            "Real-time quality monitoring",
            "DQ dashboards",
            "Trust signals for consumers"
        ],
        gradient: "from-blue-400 to-blue-600"
    },
    {
        id: "automated-entitlements",
        title: "Automated Entitlements & Protection",
        text: "Torro converts governance policies into system-enforced controls using RBAC and ABAC access models.",
        businessValue: "Prevents toxic access and ghost accounts while enforcing privacy and regulatory compliance.",
        capabilities: [
            "RBAC + ABAC Enforcement",
            "Time-bound Permissions",
            "Dynamic PII Masking",
            "Consent-based Filtering"
        ],
        gradient: "from-emerald-400 to-emerald-600"
    },
    {
        id: "data-marketplace",
        title: "Data Marketplace & PrivBox",
        text: "A governed self-service data marketplace allowing teams to discover, request, and analyze enterprise datasets.",
        businessValue: "Accelerates innovation by reducing data access latency from months to minutes.",
        capabilities: [
            "Self-service Asset Discovery",
            "Policy-driven Access Workflows",
            "PrivBox Secure Analytics Containers",
            "Governed Data Checkout"
        ],
        gradient: "from-purple-400 to-purple-600"
    }
];

const SolutionCard = ({ index, title, text, businessValue, capabilities, gradient }) => (
    <div className="relative flex flex-col bg-[#0f0b1e] border border-white/10 rounded-[2.5rem] shadow-none hover:shadow-[0_0_30px_rgba(153,160,249,0.15)] transition-all duration-700 hover:-translate-y-2 overflow-hidden p-10 h-full group">

        {/* Subtle background glow effect on hover */}
        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px] rounded-full pointer-events-none`} />

        {/* Numerical Indicator */}
        <div className="text-[64px] font-black text-slate-100/5 group-hover:text-indigo-400/20 tracking-[-0.08em] leading-none mb-6 transition-colors duration-500 select-none">
            {(index + 1).toString().padStart(2, '0')}
        </div>

        <h3 className="text-[26px] font-black text-white tracking-[-0.03em] leading-[1.15] mb-5">
            {title}
        </h3>

        <p className="text-slate-400 text-[16px] leading-[1.7] font-medium mb-8">
            {text}
        </p>

        <div className="mb-8 flex-grow">
            <h4 className="text-[11px] font-bold text-[#F4B952] uppercase tracking-[0.1em] mb-3">Business Value</h4>
            <p className="text-[14px] font-medium text-slate-300 leading-relaxed bg-[#16122b] p-4 rounded-2xl border border-white/5">
                {businessValue}
            </p>
        </div>

        <div className="space-y-4 pt-8 border-t border-white/5">
            <h4 className="text-[11px] font-bold text-[#99A0F9] uppercase tracking-[0.1em] mb-4">Key Capabilities</h4>
            {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-[#16122b] border border-white/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-[#99A0F9]/40 transition-colors duration-300">
                        <Check className="w-3 h-3 text-slate-500 group-hover/item:text-[#99A0F9] transition-colors duration-300" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] font-medium text-slate-400 leading-snug group-hover/item:text-white transition-colors duration-300">{cap}</span>
                </div>
            ))}
        </div>
    </div>
);

const SolutionsPage = () => {
    return (
        <div className="min-h-screen bg-[#05040a] text-slate-200 selection:bg-indigo-100 selection:text-indigo-800">
            <Header />

            <main className="flex flex-col pt-32 pb-0">
                {/* Page Hero */}
                <section className="container mx-auto px-6 max-w-5xl mb-24 relative">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#99A0F9]/10 rounded-full blur-[120px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center max-w-3xl mx-auto relative z-10"
                    >
                        <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#99A0F9]/5 border border-[#99A0F9]/15 shadow-sm mb-6">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#99A0F9] animate-pulse shadow-[0_0_12px_rgba(153,160,249,0.6)]" />
                            <span className="text-[12px] font-black text-[#99A0F9] uppercase tracking-[0.4em]">
                                Our Solutions
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-8 leading-[1.1]">
                            The Unified Data Operating System for <span className="text-[#99A0F9]">Absolute Control.</span>
                        </h1>

                        <p className="text-[18px] text-slate-400 mb-10 leading-relaxed max-w-2xl font-medium">
                            From Discovery to Quality, Enforcing Trust Across Your Hybrid Estate. Torro OneData connects discovery, lineage, data quality, access control, and governed data sharing into a single operating layer.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-8 py-3.5 rounded-full bg-[#F4B952] text-black font-bold text-[15px] transition-all hover:scale-105 active:scale-95 whitespace-nowrap z-20 shadow-[0_0_20px_rgba(244,185,82,0.2)]">
                                Book a Demo
                            </button>
                            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-[14px] hover:bg-white/10 transition-all whitespace-nowrap active:scale-95 z-20">
                                Explore the Platform
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Core Solutions Grid */}
                <section className="container relative z-10 mx-auto px-6 max-w-[95rem] pb-32">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((item, index) => (
                            <motion.div
                                key={index}
                                id={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <SolutionCard index={index} {...item} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="border-t border-white/5 py-32 bg-gradient-to-b from-transparent to-[#0a0715]">
                    <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Ready to Bring <span className="text-[#99A0F9]">Absolute Control</span><br /> to Your Data Estate?
                        </h2>
                        <p className="text-[18px] text-slate-400 font-medium mb-10 max-w-2xl mx-auto">
                            Evaluate your institutional readiness and discover how Torro accelerates trusted data access across the organization.
                        </p>
                        <button className="px-10 py-4 rounded-full bg-[#F4B952] text-black font-bold text-[16px] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(244,185,82,0.3)]">
                            Request an Enterprise Demo
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SolutionsPage;
