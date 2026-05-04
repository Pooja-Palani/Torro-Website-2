import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Database, Zap, Globe, Search, Cpu, TrendingUp, Layout } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   CASE STUDY SLIDE — Premium layout with visual depth
───────────────────────────────────────────────────────────── */

const CaseStudySlide = ({ study }) => {
    return (
        <motion.div
            key={study.id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
        >
            {/* Title — fully left-aligned, no indent */}
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-7 rounded-full bg-[#F26969]" />
                    <div className="w-2.5 h-7 rounded-full bg-[#4b55b2]" />
                    <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#F4B952] ml-2">
                        Case Study {study.id}
                    </p>
                </div>
                <h3 className="text-[28px] md:text-[34px] font-black text-white tracking-tight leading-[1.15]">
                    {study.title}
                </h3>
            </div>

            {/* Main Grid — all 3 columns aligned flush */}
            <div className="grid lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/[0.08]">

                {/* Column 1: Problem + Tech — single merged visual block */}
                <div className="bg-white/[0.04] border-r border-white/[0.06] flex flex-col">
                    {/* Problem */}
                    <div className="p-7 flex-1 border-b border-white/[0.06] relative">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#99A0F9]/10 to-transparent rounded-br-3xl pointer-events-none" />
                        <h4 className="text-[15px] font-black text-white mb-3 tracking-tight relative z-10">Problem Statement</h4>
                        <p className="text-[14px] text-white/55 leading-[1.75] font-medium relative z-10 text-left">
                            {study.problem}
                        </p>
                    </div>
                    {/* Tech Ecosystem */}
                    <div className="p-7 relative">
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#F4B952]/5 to-transparent rounded-tl-3xl pointer-events-none" />
                        <h4 className="text-[15px] font-black text-white mb-4 tracking-tight relative z-10">Technology Ecosystem</h4>
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {study.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-3.5 py-1.5 bg-white/[0.06] border border-white/[0.10] rounded-full text-[12px] font-bold text-white/65 hover:bg-[#99A0F9]/10 hover:text-[#99A0F9] hover:border-[#99A0F9]/25 transition-all duration-300 cursor-default"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 2: Architecture — hero visual center */}
                <div className="bg-white/[0.03] border-r border-white/[0.06] flex flex-col relative overflow-hidden">
                    {/* Gradient spotlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)] pointer-events-none" />
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#99A0F9]/30 to-transparent" />

                    <div className="p-7 flex flex-col flex-1 relative z-10">
                        <h4 className="text-[16px] font-black text-white mb-8 tracking-tight text-center">
                            {study.architectureTitle}
                        </h4>

                        {/* Vertical flow connector */}
                        <div className="flex flex-col items-center flex-1">
                            {/* Top dot */}
                            <div className="w-2 h-2 rounded-full bg-[#99A0F9]/40 shadow-[0_0_8px_rgba(153,160,249,0.3)]" />
                            <div className="w-px h-5 bg-gradient-to-b from-[#99A0F9]/30 to-white/10" />

                            {/* Architecture Pillars */}
                            <div className="flex items-stretch gap-3 w-full my-1">
                                {study.archPillars.map((pillar, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 relative bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/[0.10] rounded-xl p-4 text-center flex flex-col items-center gap-2.5 group/pill hover:border-[#99A0F9]/30 transition-all duration-300 overflow-hidden"
                                    >
                                        {/* Shimmer on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#99A0F9]/[0.06] to-transparent opacity-0 group-hover/pill:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] border border-white/[0.12] flex items-center justify-center group-hover/pill:border-[#99A0F9]/30 transition-all duration-300 relative z-10 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                                            <pillar.icon className="w-5 h-5 text-white/70 group-hover/pill:text-[#99A0F9] transition-colors" />
                                        </div>
                                        <p className="text-[13px] font-black text-white tracking-tight leading-tight relative z-10">
                                            {pillar.title}
                                        </p>
                                        <p className="text-[11px] text-white/40 leading-snug font-medium relative z-10">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom connector */}
                            <div className="w-px h-5 bg-gradient-to-b from-white/10 to-[#F4B952]/30" />
                            <div className="w-2 h-2 rounded-full bg-[#F4B952]/40 shadow-[0_0_8px_rgba(244,185,82,0.3)]" />
                        </div>

                        {/* Footnote — amber accent */}
                        <p className="text-[14px] text-[#F4B952] font-bold text-center tracking-wide mt-5 drop-shadow-[0_0_10px_rgba(244,185,82,0.25)]">
                            {study.archFootnote}
                        </p>
                    </div>
                </div>

                {/* Column 3: Metrics + Value Drivers */}
                <div className="bg-white/[0.04] flex flex-col">
                    {/* Metrics */}
                    <div className="p-7 border-b border-white/[0.06] relative">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#99A0F9]/8 to-transparent rounded-bl-3xl pointer-events-none" />
                        <h4 className="text-[15px] font-black text-white mb-5 tracking-tight relative z-10">Impact Metrics</h4>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-5 relative z-10">
                            {study.metrics.map((m, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-[26px] font-black text-[#99A0F9] leading-none mb-1.5 tracking-tight drop-shadow-[0_0_12px_rgba(153,160,249,0.25)]">
                                        {m.value}
                                    </span>
                                    <span className="text-[11px] font-bold text-white/40 uppercase tracking-tight leading-tight">
                                        {m.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Value Drivers */}
                    <div className="p-7 flex-1 relative">
                        <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-[#F26969]/5 to-transparent rounded-tr-3xl pointer-events-none" />
                        <h4 className="text-[15px] font-black text-white mb-4 tracking-tight relative z-10">Value Drivers</h4>
                        <div className="space-y-4 relative z-10">
                            {study.valueDrivers.map((vd, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#99A0F9]/20 to-[#99A0F9]/5 border border-[#99A0F9]/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(153,160,249,0.12)]">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#99A0F9]" />
                                    </div>
                                    <p className="text-[13px] text-white/55 font-medium leading-relaxed text-left">
                                        {vd}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
                <a
                    href={study.ctaHref}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#99A0F9] to-[#8088f0] text-[#0c0e1a] rounded-xl text-[13px] font-black uppercase tracking-[0.2em] hover:from-[#b0b6ff] hover:to-[#99A0F9] transition-all duration-300 shadow-[0_10px_30px_rgba(153,160,249,0.25)] active:scale-95 hover:shadow-[0_15px_40px_rgba(153,160,249,0.35)]"
                >
                    Explore Case Study
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </motion.div>
    );
};


/* ─────────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────────── */

const Compliance = () => {
    const [activeCaseStudy, setActiveCaseStudy] = React.useState(0);

    const caseStudies = [
        {
            id: 1,
            title: "Transforming Data Governance for a leading Private Bank in India",
            problem: "The client needed to govern a complex, heterogeneous data ecosystem spanning multiple legacy systems. Critical challenges included eliminating PII security blind spots and replacing slow, manual compliance workflows with automated, scalable governance.",
            architectureTitle: "Accelerated Governance Architecture",
            archPillars: [
                { icon: Shield, title: "Auto-PII Detection & Masking", desc: "AI-powered discovery across platforms" },
                { icon: Zap, title: "Advanced Workflow Approvals", desc: "Automated routing and policy tagging" },
                { icon: Database, title: "End-to-End Data Lineage", desc: "Visual traceability and impact analysis" },
            ],
            archFootnote: "Deployed across hybrid Azure + AWS estate in under 4 weeks",
            metrics: [
                { value: "60 / 70", label: "RFP capabilities deployed and active" },
                { value: "100%", label: "Privacy & Incident Reporting coverage" },
                { value: "16 of 30", label: "Bank policies achieved out-of-the-box" },
                { value: "10+", label: "Observability dashboards launched" },
            ],
            valueDrivers: [
                "Open architecture highly adaptable to complex banking processes.",
                "Deep Data Governance and Cloud SME expertise accelerating deployment.",
                "Scalable, future-ready foundation built for continuous innovation.",
            ],
            tech: ["Azure Blob Storage", "Azure Pipelines", "Starburst", "Power BI", "Oracle", "AWS"],
            ctaHref: "/case-studies/bank-india",
        },
        {
            id: 2,
            title: "Data Governance Platform for ESG Entity of a Large Tier-1 Bank",
            problem: "The bank required a centralized backbone to govern a complex ESG data ecosystem. They faced severe bottlenecks in tracking analytics utilization and costs, with sluggish regulatory approval cycles bound by HKMA mandates.",
            architectureTitle: "ESG Analytics Pod Ecosystem",
            archPillars: [
                { icon: Globe, title: "WESGaaS Deployment", desc: "Wholesale ESG as a Service for distribution" },
                { icon: Layout, title: "Automated Data Workbenches", desc: "Single-request spin-up for Data Scientists" },
                { icon: Search, title: "Natural Language Modelling", desc: "Mapping analytics to UN Sustainability goals" },
            ],
            archFootnote: "Fully integrated with GCP (GKE, BigQuery, DataProc, GCS)",
            metrics: [
                { value: "93%", label: "Overall workflow efficiency gain" },
                { value: "45 → 3 Days", label: "Regulatory approval time reduction" },
                { value: "1", label: "Unified, centralized ESG distribution hub" },
                { value: "HKMA", label: "Strict compliance adherence achieved" },
            ],
            valueDrivers: [
                "Strict adherence to HKMA cloud and privacy regulations.",
                "Built-in visual dashboards for transparent project cost tracking.",
                "Self-serve workbench provisioning for ML engineers.",
            ],
            tech: ["GCP (GKE, BigQuery)", "DataProc", "GCS", "Pycharm", "Looker Studio", "Google Earth API", "GLIEF", "EPC"],
            ctaHref: "/case-studies/esg-bank",
        },
        {
            id: 3,
            title: "Strategic AI & Data Transformation for a leading Telecom Company in HK",
            problem: "The telecom operator had massive stranded value trapped in complex legacy infrastructure (SAS, Teradata). They needed to operationalize GenAI across the Greater Bay Area while adhering to China's stringent PIPL privacy laws.",
            architectureTitle: "Edge AI & Modernization Architecture",
            archPillars: [
                { icon: TrendingUp, title: "Legacy Transformation Agent", desc: "Proprietary tool bridging SAS to Lakehouse" },
                { icon: Shield, title: "Edge AI LLM Gateway", desc: "Decentralized architecture with differential privacy" },
                { icon: Cpu, title: "Distributed Agentic Copilot", desc: "CI/CD integrated coding assistant for engineers" },
            ],
            archFootnote: "Running on Dual NVIDIA DGX Spark infrastructure at scale",
            metrics: [
                { value: "US$1M", label: "Direct cost savings from modernization" },
                { value: "400B", label: "Parameter AI model on hyper-scale infra" },
                { value: "3,000+", label: "Legacy SAS programs automated" },
                { value: "PIPL", label: "Regional compliance integrated" },
            ],
            valueDrivers: [
                "Zero-compromise data processing via advanced differential privacy protocols.",
                "Automated migration tooling accelerating time-to-value.",
                "Comprehensive regional compliance (PIPL) at the architectural layer.",
            ],
            tech: ["Edge AI LLM Gateway", "Generative AI", "Dual NVIDIA DGX Spark", "Teradata", "SAS", "Data Lakehouse"],
            ctaHref: "/case-studies/telecom-hk",
        },
    ];

    const goNext = () => setActiveCaseStudy((i) => (i + 1) % caseStudies.length);
    const goPrev = () => setActiveCaseStudy((i) => (i - 1 + caseStudies.length) % caseStudies.length);

    return (
        <section className="bg-[#0c0e1a] text-white relative border-t border-white/5 pt-18 md:pt-24 pb-14 md:pb-18" id="compliance">
            {/* Ambient glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.08)_0%,transparent_55%)] pointer-events-none" />
            <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#99A0F9]/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F26969]/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[105rem]">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-14 md:mb-16 space-y-5"
                >
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#99A0F9]/10 border border-[#99A0F9]/20 shadow-[0_0_22px_rgba(153,160,249,0.10)]">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#99A0F9] animate-pulse shadow-[0_0_12px_rgba(153,160,249,0.6)]" />
                        <span className="text-[13px] font-black uppercase tracking-[0.4em] text-[#99A0F9]">
                            In Production
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                        Proven at <span className="text-[#99A0F9]">Tier‑1 Scale</span>
                    </h2>

                    <p className="text-[18px] text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
                        Real-world validation from Tier-1 Financial Institutions and Telecom leaders who can't afford surprises.
                    </p>
                </motion.div>

                {/* Slide Container */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: '-120px' }}
                >
                    <div className="mx-auto max-w-[88rem]">
                        <div className="relative bg-gradient-to-br from-[#13162d]/90 via-[#0e1125]/90 to-[#0a0d1a]/90 backdrop-blur-2xl border border-white/[0.07] rounded-3xl overflow-hidden shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)]">
                            {/* Decorative edge glows */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#99A0F9]/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F26969]/10 to-transparent" />
                            <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-[#99A0F9]/15 via-transparent to-[#F26969]/10" />
                            <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#99A0F9]/10 to-transparent" />
                            {/* Inner ambient light */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(153,160,249,0.06)_0%,transparent_50%)] pointer-events-none" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(244,185,82,0.03)_0%,transparent_50%)] pointer-events-none" />

                            <div className="relative z-10 p-8 md:p-12">
                                {/* Navigation Bar */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        {caseStudies.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveCaseStudy(i)}
                                                className={`transition-all duration-300 rounded-full ${
                                                    i === activeCaseStudy
                                                        ? 'w-9 h-3 bg-gradient-to-r from-[#99A0F9] to-[#7b82e8] shadow-[0_0_14px_rgba(153,160,249,0.5)]'
                                                        : 'w-3 h-3 bg-white/15 hover:bg-white/30'
                                                }`}
                                                aria-label={`Go to case study ${i + 1}`}
                                            />
                                        ))}
                                        <span className="ml-3 text-[12px] font-black uppercase tracking-[0.25em] text-white/30">
                                            {activeCaseStudy + 1} / {caseStudies.length}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={goPrev}
                                            className="w-12 h-12 rounded-full border border-white/[0.10] bg-white/[0.04] hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300 flex items-center justify-center"
                                            aria-label="Previous case study"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-white/60" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={goNext}
                                            className="w-12 h-12 rounded-full border border-white/[0.10] bg-white/[0.04] hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300 flex items-center justify-center"
                                            aria-label="Next case study"
                                        >
                                            <ChevronRight className="w-5 h-5 text-white/60" />
                                        </button>
                                    </div>
                                </div>

                                {/* Active Slide */}
                                <AnimatePresence mode="wait">
                                    <CaseStudySlide
                                        key={activeCaseStudy}
                                        study={caseStudies[activeCaseStudy]}
                                    />
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Compliance;
