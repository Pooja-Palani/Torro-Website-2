import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const Compliance = () => {
    const ACCENT = '#99A0F9';
    const [activeCaseStudy, setActiveCaseStudy] = React.useState(0);

    const caseStudies = [
        {
            industryTag: 'BFSI',
            metaTag: 'Production Case Study',
            title: 'Largest Indian Private Bank Framework: Full Production Data Governance at Tier‑1 Scale',
            subTitle: 'Leading Indian Private Sector Bank',
            body:
                'A leading Indian private sector bank with ₹18 lakh crore in assets deployed Torro AI across their hybrid estate — covering 47 data centers, 3 cloud providers, and 2,300+ data systems. Within 3.5 weeks, 100% sensitive data visibility was achieved, automated DPDP compliance reporting was live, and the bank’s audit committee received its first-ever real-time compliance posture dashboard.',
            ctaHref: '/case-studies',
            ctaText: 'Read the Full Case Study',
            kpis: [
                { value: '2.3 Million+', label: 'Data Assets Discovered' },
                { value: '100%', label: 'Compliance Coverage' },
                { value: '3.5 Weeks', label: 'Deployment Time' },
                { value: '94%', label: 'Manual Effort Reduction' },
                { value: '72% Lower TCO', label: 'Cost vs Legacy Alternative' },
                { value: 'Eliminated', label: 'DPDP Risk Score' },
            ],
            details: {
                heading: 'Executive Summary',
                summary:
                    'Real-world validation at Tier‑1 scale: full-estate discovery, automated compliance evidence, and executive-ready posture visibility in weeks — not quarters.',
                pillars: [
                    {
                        title: 'Full‑Estate Discovery at Tier‑1 Scale',
                        text:
                            'Achieved complete sensitive data visibility across a large hybrid estate spanning dozens of data centers, multiple clouds, and thousands of systems.',
                    },
                    {
                        title: 'Audit‑Ready Evidence, Always On',
                        text:
                            'Automated DPDP reporting and evidence generation, moving compliance from periodic reporting to continuous posture awareness.',
                    },
                    {
                        title: 'Executive‑Ready Posture Visibility',
                        text:
                            'Delivered a real-time compliance posture dashboard for audit committees and leadership to act faster with confidence.',
                    },
                    {
                        title: 'Weeks to Value',
                        text:
                            'Delivered production outcomes in 3.5 weeks, compressing multi-quarter programs into a measurable, controlled rollout.',
                    },
                ],
                impact:
                    'Torro enabled rapid hybrid-estate visibility, automated evidence generation, and leadership-grade compliance posture — delivering outcomes in weeks with reduced manual effort and lower TCO.',
            },
        },
        {
            industryTag: 'Telecom',
            metaTag: 'AI & Data Transformation',
            title: "Strategic AI & Data Transformation for a Telecom in Hong Kong",
            subTitle: 'Telecom Company — Hong Kong',
            body:
                'Torro spearheaded a comprehensive, multi-layered data and artificial intelligence transformation for a Telecom company in Hong Kong. By bridging the gap between legacy infrastructure and cutting-edge generative AI, Torro delivered measurable financial impact, fortified data security, and dramatically enhanced engineering productivity.',
            ctaHref: '/case-studies',
            ctaText: 'Explore the Case Study',
            kpis: [
                { value: 'Edge LLM Gateway', label: 'Differential Privacy at the Edge' },
                { value: 'US$1M', label: 'Direct Cost Savings' },
                { value: '3,000', label: 'Legacy SAS Programs Modernized' },
                { value: '400B', label: 'Parameter Model CI/CD Pipeline' },
                { value: 'GBA Lakehouse', label: 'Regional Modernization Program' },
                { value: 'PIPL Ready', label: 'Cross‑Border Compliance' },
            ],
            details: {
                heading: 'Executive Summary',
                summary:
                    "Torro has recently spearheaded a comprehensive, multi-layered data and artificial intelligence transformation for a Telecom company in Hong Kong. By bridging the gap between legacy infrastructure and cutting-edge generative AI, Torro has delivered measurable financial impact, fortified data security, and dramatically enhanced engineering productivity.",
                pillars: [
                    {
                        title: 'Secure Edge AI for Next‑Generation Privacy',
                        text:
                            'Implemented an Edge AI LLM Gateway with differential privacy protocols, ensuring sensitive enterprise data is processed securely at the edge while preserving analytical power.',
                    },
                    {
                        title: 'Legacy Modernization and US$1M Value Creation',
                        text:
                            'Engineered a SAS‑to‑Lakehouse transformation agent to modernize 3,000 legacy SAS programs, generating US$1M in direct cost savings and establishing an AI‑ready data model with quality guardrails and lineage.',
                    },
                    {
                        title: 'Hyper‑Scale AI Deployment & Workforce Uplift',
                        text:
                            'Established CI/CD for a 400B parameter model on dual NVIDIA DGX Spark infrastructure, integrating an agentic coding copilot to uplift engineering productivity and accelerate delivery.',
                    },
                    {
                        title: 'Greater Bay Area Modernization & PIPL Compliance',
                        text:
                            'Executed a Lakehouse transformation across the China Greater Bay Area, modernizing legacy Teradata and SAS environments into a compliant architecture engineered to meet China’s PIPL requirements.',
                    },
                ],
                impact:
                    'Through this initiative, Torro enabled the client to securely harness generative AI, modernize legacy architectures with exceptional ROI, ensure strict cross‑border regulatory compliance, and future‑proof its engineering workforce for the AI era.',
            },
        },
    ];

    const active = caseStudies[activeCaseStudy];
    const isTelecomCase = active.industryTag === 'Telecom';

    return (
        <section className="bg-[#0c0e1a] text-white relative border-t border-white/5 pt-18 md:pt-24 pb-14 md:pb-18" id="compliance">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.08)_0%,transparent_55%)] pointer-events-none" />

            <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[105rem]">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-14 md:mb-16 space-y-5"
                >
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#99A0F9]/10 border border-[#99A0F9]/20 shadow-[0_0_22px_rgba(153,160,249,0.10)]">
                        <Shield className="w-4 h-4" style={{ color: ACCENT }} />
                        <span className="text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                            Compliance
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                        Navigate Global Mandates with <span style={{ color: ACCENT }}>Absolute Accountability</span>
                    </h1>
                    
                    <p className="text-[16px] text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
                        The unified operating system to enforce active compliance and generate audit-ready evidence across your hybrid estate.
                    </p>
                </motion.div>

                {/* Tier-1 Proof Section */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: '-120px' }}
                    className="mb-12 md:mb-14"
                >
                    <div className="text-center mb-10 space-y-4">
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/35">
                            In Production
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                            Proven at <span style={{ color: ACCENT }}>Tier‑1 Scale</span>
                        </h2>
                    </div>

                    <div className="mx-auto max-w-[88rem]">
                        <div className="group relative bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-3xl overflow-hidden shadow-[0_18px_60px_-28px_rgba(0,0,0,0.75)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(153,160,249,0.10)_0%,transparent_55%)] opacity-60 pointer-events-none" />

                            <div className="relative z-10 p-8 md:p-10">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span
                                            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider border"
                                            style={{
                                                backgroundColor: 'rgba(153,160,249,0.12)',
                                                borderColor: 'rgba(153,160,249,0.25)',
                                                color: 'rgba(153,160,249,0.95)',
                                            }}
                                        >
                                            {active.industryTag}
                                        </span>
                                        <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/35">
                                            {active.metaTag}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="hidden sm:flex items-center gap-2 mr-1">
                                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                                                Case Study
                                            </span>
                                            <span
                                                className="text-[10px] font-black uppercase tracking-[0.25em]"
                                                style={{ color: 'rgba(153,160,249,0.9)' }}
                                            >
                                                {activeCaseStudy + 1}/{caseStudies.length}
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveCaseStudy((i) => {
                                                    return (i - 1 + caseStudies.length) % caseStudies.length;
                                                })
                                            }
                                            className="w-11 h-11 rounded-full border border-white/12 bg-white/7 hover:bg-white/12 hover:border-white/20 transition-colors flex items-center justify-center shadow-[0_10px_26px_-18px_rgba(0,0,0,0.8)]"
                                            aria-label="Previous case study"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-white/70" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveCaseStudy((i) => {
                                                    return (i + 1) % caseStudies.length;
                                                })
                                            }
                                            className="w-11 h-11 rounded-full border border-white/12 bg-white/7 hover:bg-white/12 hover:border-white/20 transition-colors flex items-center justify-center shadow-[0_10px_26px_-18px_rgba(0,0,0,0.8)]"
                                            aria-label="Next case study"
                                        >
                                            <ChevronRight className="w-5 h-5 text-white/70" />
                                        </button>
                                    </div>
                                </div>

                                <h3 className="text-[22px] md:text-[26px] font-black tracking-tight text-white mb-2">
                                    {active.title}
                                </h3>
                                <p className="mx-0 text-left text-[13px] text-white/45 font-medium mb-4">
                                    {active.subTitle}
                                </p>
                                <p className="mx-0 text-left text-[14px] md:text-[15px] text-white/55 leading-relaxed font-medium max-w-4xl">
                                    {active.body}
                                </p>

                                <div className="mt-8 flex flex-wrap items-center gap-3">
                                    <a
                                        href={isTelecomCase ? '/case-studies/telecom-hk' : active.ctaHref}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[12px] font-black text-black uppercase tracking-[0.22em] transition-colors"
                                        style={{
                                            backgroundColor: ACCENT,
                                            boxShadow: isTelecomCase ? '0 10px 30px rgba(153,160,249,0.25)' : undefined,
                                        }}
                                    >
                                        {active.ctaText}
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                    <span className="text-[11px] font-semibold text-white/35 tracking-wide">
                                        Use arrows to view the next case study
                                    </span>
                                </div>

                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {active.kpis.map((kpi) => (
                                        <div
                                            key={kpi.label}
                                            className="rounded-2xl bg-white/5 border border-white/5 p-4 md:p-5"
                                        >
                                            <div className="text-[18px] md:text-[20px] font-black tracking-tight text-white">
                                                {kpi.value}
                                            </div>
                                            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35 mt-1">
                                                {kpi.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Details are on dedicated case study pages */}

            </div>
        </section>
    );
};

export default Compliance;
