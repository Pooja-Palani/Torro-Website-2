import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    ArrowRight,
    Database,
    Zap,
    Globe,
    Search,
    Cpu,
    TrendingUp,
    Layout,
} from 'lucide-react';

/* ─── Single slide: 3-column layout (matches production design) ─── */

const CaseStudySlide = ({ study, theme = 'dark' }) => {
    const light = theme === 'light';

    return (
        <motion.div
            key={study.id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
        >
            <div className="mb-10">
                <div className="mb-3 flex items-center gap-2">
                    <div className="h-7 w-2.5 rounded-full bg-[#F26969]" />
                    <div className="h-7 w-2.5 rounded-full bg-[#4b55b2]" />
                    <p className="ml-2 text-[14px] font-black uppercase tracking-[0.35em] text-[#F4B952]">
                        Case Study {study.id}
                    </p>
                </div>
                <h3 className={`text-[28px] font-black leading-[1.15] tracking-tight md:text-[34px] ${light ? 'text-slate-900' : 'text-white'}`}>
                    {study.title}
                </h3>
            </div>

            <div className={`grid gap-0 overflow-hidden rounded-2xl border lg:grid-cols-3 ${light ? 'border-white/80 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]' : 'border-white/[0.08]'}`}>
                {/* Column 1 */}
                <div className={`relative flex flex-col lg:border-r ${light ? 'border-slate-200/80 bg-white' : 'border-white/[0.06] bg-white/[0.04]'}`}>
                    <div className={`relative z-10 flex-1 border-b p-7 ${light ? 'border-slate-100' : 'border-white/[0.06]'}`}>
                        <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 rounded-br-3xl bg-gradient-to-br from-[#99A0F9]/10 to-transparent" />
                        <h4 className={`relative z-10 mb-3 text-[15px] font-black tracking-tight ${light ? 'text-slate-900' : 'text-white'}`}>
                            Problem Statement
                        </h4>
                        <p className={`relative z-10 text-left text-[14px] font-medium leading-[1.75] ${light ? 'text-slate-500' : 'text-white/55'}`}>
                            {study.problem}
                        </p>
                    </div>
                    <div className="relative z-10 p-7">
                        <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-tl-3xl bg-gradient-to-tl from-[#F4B952]/5 to-transparent" />
                        <h4 className={`relative z-10 mb-4 text-[15px] font-black tracking-tight ${light ? 'text-slate-900' : 'text-white'}`}>
                            Technology Ecosystem
                        </h4>
                        <div className="relative z-10 flex flex-wrap gap-2">
                            {study.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className={`relative z-10 cursor-default rounded-full px-3.5 py-1.5 text-[12px] font-bold text-slate-600 transition-all duration-400 ${
                                        light
                                            ? 'glass-pill-lavender'
                                            : 'border border-white/[0.10] bg-white/[0.06] text-white/65 hover:border-[#99A0F9]/25 hover:bg-[#99A0F9]/10 hover:text-[#99A0F9]'
                                    }`}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className={`relative flex flex-col overflow-hidden lg:border-r ${light ? 'border-slate-200/80 bg-white' : 'border-white/[0.06] bg-white/[0.03]'}`}>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)]" />
                    <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#99A0F9]/30 to-transparent" />

                    <div className="relative z-10 flex flex-1 flex-col p-7">
                        <h4 className={`mb-8 text-center text-[16px] font-black tracking-tight ${light ? 'text-slate-900' : 'text-white'}`}>
                            {study.architectureTitle}
                        </h4>

                        <div className="flex flex-1 flex-col items-center">
                            <div className="h-2 w-2 rounded-full bg-[#99A0F9]/40 shadow-[0_0_8px_rgba(153,160,249,0.3)]" />
                            <div className={`h-5 w-px bg-gradient-to-b from-[#99A0F9]/30 ${light ? 'to-slate-200' : 'to-white/10'}`} />

                            <div className="my-1 flex w-full items-stretch gap-3">
                                {study.archPillars.map((pillar, i) => (
                                    <div
                                        key={i}
                                        className={`group/pill relative z-10 flex flex-1 flex-col items-center gap-2.5 overflow-hidden rounded-xl p-4 text-center transition-all duration-400 ${
                                            light
                                                ? 'glass-pill-lavender'
                                                : 'border border-white/[0.10] bg-gradient-to-b from-white/[0.08] to-white/[0.03] hover:border-[#99A0F9]/30'
                                        }`}
                                    >
                                        {!light && (
                                            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-[#99A0F9]/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover/pill:opacity-100" />
                                        )}
                                        <div
                                            className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-all duration-400 ${
                                                light
                                                    ? 'glass-icon-lavender-sm'
                                                    : 'border border-white/[0.12] bg-gradient-to-br from-white/[0.12] to-white/[0.04] shadow-[0_4px_16px_rgba(0,0,0,0.3)] group-hover/pill:border-[#99A0F9]/30'
                                            }`}
                                        >
                                            <pillar.icon className={`h-5 w-5 transition-colors duration-400 ${light ? 'text-[#6b72d6] group-hover/pill:text-slate-700' : 'text-white/70 group-hover/pill:text-[#99A0F9]'}`} />
                                        </div>
                                        <p className={`relative z-10 text-[13px] font-black leading-tight tracking-tight ${light ? 'text-slate-900' : 'text-white'}`}>
                                            {pillar.title}
                                        </p>
                                        <p className={`relative z-10 text-[11px] font-medium leading-snug ${light ? 'text-slate-500' : 'text-white/40'}`}>
                                            {pillar.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className={`h-5 w-px bg-gradient-to-b ${light ? 'from-slate-200' : 'from-white/10'} to-[#F4B952]/30`} />
                            <div className="h-2 w-2 rounded-full bg-[#F4B952]/40 shadow-[0_0_8px_rgba(244,185,82,0.3)]" />
                        </div>

                        <p className="mt-5 text-center text-[14px] font-bold tracking-wide text-[#F4B952] drop-shadow-[0_0_10px_rgba(244,185,82,0.25)]">
                            {study.archFootnote}
                        </p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className={`relative flex flex-col ${light ? 'bg-white' : 'bg-white/[0.04]'}`}>
                    <div className={`relative z-10 border-b p-7 ${light ? 'border-slate-100' : 'border-white/[0.06]'}`}>
                        <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-bl from-[#99A0F9]/8 to-transparent" />
                        <h4 className={`relative z-10 mb-5 text-[15px] font-black tracking-tight ${light ? 'text-slate-900' : 'text-white'}`}>Impact Metrics</h4>
                        <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-5">
                            {study.metrics.map((m, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="mb-1.5 text-[26px] font-black leading-none tracking-tight text-[#99A0F9]">
                                        {m.value}
                                    </span>
                                    <span className={`text-[11px] font-bold uppercase leading-tight tracking-tight ${light ? 'text-slate-500' : 'text-white/40'}`}>
                                        {m.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 flex-1 p-7">
                        <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-28 rounded-tr-3xl bg-gradient-to-tr from-[#F26969]/5 to-transparent" />
                        <h4 className={`relative z-10 mb-4 text-[15px] font-black tracking-tight ${light ? 'text-slate-900' : 'text-white'}`}>Value Drivers</h4>
                        <div className="relative z-10 space-y-4">
                            {study.valueDrivers.map((vd, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#99A0F9]/20 bg-gradient-to-br from-[#99A0F9]/20 to-[#99A0F9]/5">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-[#99A0F9]" />
                                    </div>
                                    <p className={`text-left text-[13px] font-medium leading-relaxed ${light ? 'text-slate-500' : 'text-white/55'}`}>{vd}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <a
                    href={study.ctaHref}
                    className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#99A0F9] to-[#8088f0] px-7 py-3.5 text-[13px] font-black uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(153,160,249,0.25)] transition-all duration-300 hover:from-[#b0b6ff] hover:to-[#99A0F9] hover:shadow-[0_15px_40px_rgba(153,160,249,0.35)] active:scale-95"
                >
                    Explore Case Study
                    <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </motion.div>
    );
};

export const productionCaseStudies = [
    {
        id: 1,
        title: 'Transforming Data Governance for a leading Private Bank in India',
        problem:
            'The client needed to govern a complex, heterogeneous data ecosystem spanning multiple legacy systems. Critical challenges included eliminating PII security blind spots and replacing slow, manual compliance workflows with automated, scalable governance.',
        architectureTitle: 'Accelerated Governance Architecture',
        archPillars: [
            { icon: Shield, title: 'Auto-PII Detection & Masking', desc: 'AI-powered discovery across platforms' },
            { icon: Zap, title: 'Advanced Workflow Approvals', desc: 'Automated routing and policy tagging' },
            { icon: Database, title: 'End-to-End Data Lineage', desc: 'Visual traceability and impact analysis' },
        ],
        archFootnote: 'Deployed across hybrid Azure + AWS estate in under 4 weeks',
        metrics: [
            { value: '60 / 70', label: 'RFP capabilities deployed and active' },
            { value: '100%', label: 'Privacy & Incident Reporting coverage' },
            { value: '16 of 30', label: 'Bank policies achieved out-of-the-box' },
            { value: '10+', label: 'Observability dashboards launched' },
        ],
        valueDrivers: [
            'Open architecture highly adaptable to complex banking processes.',
            'Deep Data Governance and Cloud SME expertise accelerating deployment.',
            'Scalable, future-ready foundation built for continuous innovation.',
        ],
        tech: ['Azure Blob Storage', 'Azure Pipelines', 'Starburst', 'Power BI', 'Oracle', 'AWS'],
        ctaHref: '/case-studies/bank-india',
    },
    {
        id: 2,
        title: 'Data Governance Platform for ESG Entity of a Large Tier-1 Bank',
        problem:
            'The bank required a centralized backbone to govern a complex ESG data ecosystem. They faced severe bottlenecks in tracking analytics utilization and costs, with sluggish regulatory approval cycles bound by HKMA mandates.',
        architectureTitle: 'ESG Analytics Pod Ecosystem',
        archPillars: [
            { icon: Globe, title: 'WESGaaS Deployment', desc: 'Wholesale ESG as a Service for distribution' },
            { icon: Layout, title: 'Automated Data Workbenches', desc: 'Single-request spin-up for Data Scientists' },
            { icon: Search, title: 'Natural Language Modelling', desc: 'Mapping analytics to UN Sustainability goals' },
        ],
        archFootnote: 'Fully integrated with GCP (GKE, BigQuery, DataProc, GCS)',
        metrics: [
            { value: '93%', label: 'Overall workflow efficiency gain' },
            { value: '45 → 3 Days', label: 'Regulatory approval time reduction' },
            { value: '1', label: 'Unified, centralized ESG distribution hub' },
            { value: 'HKMA', label: 'Strict compliance adherence achieved' },
        ],
        valueDrivers: [
            'Strict adherence to HKMA cloud and privacy regulations.',
            'Built-in visual dashboards for transparent project cost tracking.',
            'Self-serve workbench provisioning for ML engineers.',
        ],
        tech: ['GCP (GKE, BigQuery)', 'DataProc', 'GCS', 'Pycharm', 'Looker Studio', 'Google Earth API', 'GLIEF', 'EPC'],
        ctaHref: '/case-studies/esg-bank',
    },
    {
        id: 3,
        title: 'Strategic AI & Data Transformation for a leading Telecom Company in HK',
        problem:
            "The telecom operator had massive stranded value trapped in complex legacy infrastructure (SAS, Teradata). They needed to operationalize GenAI across the Greater Bay Area while adhering to China's stringent PIPL privacy laws.",
        architectureTitle: 'Edge AI & Modernization Architecture',
        archPillars: [
            { icon: TrendingUp, title: 'Legacy Transformation Agent', desc: 'Proprietary tool bridging SAS to Lakehouse' },
            { icon: Shield, title: 'Edge AI LLM Gateway', desc: 'Decentralized architecture with differential privacy' },
            { icon: Cpu, title: 'Distributed Agentic Copilot', desc: 'CI/CD integrated coding assistant for engineers' },
        ],
        archFootnote: 'Running on Dual NVIDIA DGX Spark infrastructure at scale',
        metrics: [
            { value: 'US$1M', label: 'Direct cost savings from modernization' },
            { value: '400B', label: 'Parameter AI model on hyper-scale infra' },
            { value: '3,000+', label: 'Legacy SAS programs automated' },
            { value: 'PIPL', label: 'Regional compliance integrated' },
        ],
        valueDrivers: [
            'Zero-compromise data processing via advanced differential privacy protocols.',
            'Automated migration tooling accelerating time-to-value.',
            'Comprehensive regional compliance (PIPL) at the architectural layer.',
        ],
        tech: ['Edge AI LLM Gateway', 'Generative AI', 'Dual NVIDIA DGX Spark', 'Teradata', 'SAS', 'Data Lakehouse'],
        ctaHref: '/case-studies/telecom-hk',
    },
];

/**
 * 3-slide case study carousel (Problem / Architecture / Metrics layout).
 * Pass theme="light" on Home; default dark for standalone Compliance page.
 */
const ProductionCaseStudyCarousel = ({ showTierOneIntro = true, theme = 'dark' }) => {
    const [activeCaseStudy, setActiveCaseStudy] = React.useState(0);
    const caseStudies = productionCaseStudies;
    const light = theme === 'light';

    const goNext = () => setActiveCaseStudy((i) => (i + 1) % caseStudies.length);
    const goPrev = () => setActiveCaseStudy((i) => (i - 1 + caseStudies.length) % caseStudies.length);

    return (
        <>
            {showTierOneIntro && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-14 max-w-4xl space-y-5 text-center md:mb-16"
                >
                    <div className={`inline-flex items-center justify-center gap-3 px-6 py-2.5 ${light ? 'glass-badge' : 'rounded-full border border-[#99A0F9]/20 bg-[#99A0F9]/10 shadow-[0_0_22px_rgba(153,160,249,0.10)]'}`}>
                        <div className="relative z-10 h-2.5 w-2.5 animate-pulse rounded-full bg-[#99A0F9] shadow-[0_0_12px_rgba(153,160,249,0.6)]" />
                        <span className="relative z-10 text-[13px] font-black uppercase tracking-[0.4em] text-[#99A0F9]">In Production</span>
                    </div>

                    <h2 className={`text-4xl font-black leading-[1.1] tracking-tight lg:text-5xl lg:leading-[1.1] ${light ? '!text-slate-900' : 'text-white'}`}>
                        Proven at <span className="text-[#99A0F9]">Tier‑1 Scale</span>
                    </h2>

                    <p className={`mx-auto max-w-2xl text-[18px] font-medium leading-relaxed ${light ? 'text-slate-500' : 'text-white/50'}`}>
                        Real-world validation from Tier-1 Financial Institutions and Telecom leaders who can&apos;t afford
                        surprises.
                    </p>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-120px' }}
            >
                <div className="mx-auto max-w-[88rem]">
                    <div
                        className={`relative overflow-hidden rounded-3xl ${
                            light
                                ? 'glass-lavender-shell'
                                : 'border border-white/[0.07] bg-gradient-to-br from-[#13162d]/90 via-[#0e1125]/90 to-[#0a0d1a]/90 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl'
                        }`}
                    >
                        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#99A0F9]/20 to-transparent" />
                        {!light && (
                            <>
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F26969]/10 to-transparent" />
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(153,160,249,0.06)_0%,transparent_50%)]" />
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(244,185,82,0.03)_0%,transparent_50%)]" />
                            </>
                        )}

                        <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {caseStudies.map((_, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setActiveCaseStudy(i)}
                                            className={`rounded-full transition-all duration-300 ${
                                                i === activeCaseStudy
                                                    ? 'h-3 w-9 bg-gradient-to-r from-[#99A0F9] to-[#7b82e8] shadow-[0_0_14px_rgba(153,160,249,0.5)]'
                                                    : light
                                                      ? 'h-3 w-3 bg-slate-200 hover:bg-slate-300'
                                                      : 'h-3 w-3 bg-white/15 hover:bg-white/30'
                                            }`}
                                            aria-label={`Go to case study ${i + 1}`}
                                        />
                                    ))}
                                    <span className={`ml-3 text-[12px] font-black uppercase tracking-[0.25em] ${light ? 'text-slate-400' : 'text-white/30'}`}>
                                        {activeCaseStudy + 1} / {caseStudies.length}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-400 ${
                                            light
                                                ? 'glass-nav-lavender'
                                                : 'border border-white/[0.10] bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.10]'
                                        }`}
                                        aria-label="Previous case study"
                                    >
                                        <ChevronLeft className={`h-5 w-5 ${light ? 'text-[#6b72d6]' : 'text-white/60'}`} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-400 ${
                                            light
                                                ? 'glass-nav-lavender'
                                                : 'border border-white/[0.10] bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.10]'
                                        }`}
                                        aria-label="Next case study"
                                    >
                                        <ChevronRight className={`h-5 w-5 ${light ? 'text-[#6b72d6]' : 'text-white/60'}`} />
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <CaseStudySlide key={activeCaseStudy} study={caseStudies[activeCaseStudy]} theme={theme} />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProductionCaseStudyCarousel;
