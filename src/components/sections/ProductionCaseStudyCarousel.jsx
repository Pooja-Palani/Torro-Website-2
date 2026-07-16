import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="mb-5 md:mb-6">
                <div className="mb-2 flex items-center gap-2">
                    <div className="h-5 w-2 rounded-full bg-[#F26969] md:h-6 md:w-2.5" />
                    <div className="h-5 w-2 rounded-full bg-[#4b55b2] md:h-6 md:w-2.5" />
                    <p className="ml-1.5 text-[11px] font-black uppercase tracking-[0.28em] text-[#F4B952] md:text-[13px] md:tracking-[0.35em]">
                        Case Study {study.id}
                    </p>
                </div>
                <h3 className={`text-[22px] font-black leading-[1.15] tracking-tight sm:text-[26px] md:text-[30px] ${light ? 'text-slate-900' : 'text-white'}`}>
                    {study.title}
                </h3>
            </div>

            <div className={`grid gap-0 overflow-hidden rounded-2xl border lg:grid-cols-3 ${light ? 'border-white/80 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]' : 'border-white/[0.08]'}`}>
                {/* Column 1 */}
                <div className={`relative flex flex-col lg:border-r ${light ? 'border-slate-200/80 bg-white' : 'border-white/[0.06] bg-white/[0.04]'}`}>
                    <div className={`relative z-10 flex-1 border-b p-4 sm:p-5 ${light ? 'border-slate-100' : 'border-white/[0.06]'}`}>
                        <div className="pointer-events-none absolute top-0 left-0 h-12 w-12 rounded-br-3xl bg-gradient-to-br from-[#99A0F9]/10 to-transparent" />
                        <h4 className={`relative z-10 mb-2 text-[13px] font-black tracking-tight sm:text-[14px] ${light ? 'text-slate-900' : 'text-white'}`}>
                            Problem Statement
                        </h4>
                        <p className={`relative z-10 line-clamp-4 text-left text-[13px] font-medium leading-relaxed sm:line-clamp-5 sm:text-[13.5px] ${light ? 'text-slate-500' : 'text-white/55'}`}>
                            {study.problem}
                        </p>
                    </div>
                    <div className="relative z-10 p-4 sm:p-5">
                        <div className="pointer-events-none absolute right-0 bottom-0 h-16 w-16 rounded-tl-3xl bg-gradient-to-tl from-[#F4B952]/5 to-transparent" />
                        <h4 className={`relative z-10 mb-2.5 text-[13px] font-black tracking-tight sm:text-[14px] ${light ? 'text-slate-900' : 'text-white'}`}>
                            Technology Ecosystem
                        </h4>
                        <div className="relative z-10 flex flex-wrap gap-1.5">
                            {study.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className={`relative z-10 cursor-default rounded-full px-2.5 py-1 text-[11px] font-bold text-slate-600 transition-all duration-400 ${
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
                    <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#99A0F9]/30 to-transparent" />

                    <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
                        <h4 className={`mb-4 text-center text-[13px] font-black tracking-tight sm:mb-5 sm:text-[14px] ${light ? 'text-slate-900' : 'text-white'}`}>
                            {study.architectureTitle}
                        </h4>

                        <div className="flex flex-1 flex-col items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#99A0F9]/40 shadow-[0_0_8px_rgba(153,160,249,0.3)]" />
                            <div className={`h-3 w-px bg-gradient-to-b from-[#99A0F9]/30 ${light ? 'to-slate-200' : 'to-white/10'}`} />

                            <div className="my-0.5 flex w-full flex-col items-stretch gap-2 sm:flex-row sm:gap-2.5">
                                {study.archPillars.map((pillar, i) => (
                                    <div
                                        key={i}
                                        className={`group/pill relative z-10 flex flex-1 flex-col items-center gap-1.5 overflow-hidden rounded-xl p-2.5 text-center transition-all duration-400 sm:gap-2 sm:p-3 ${
                                            light
                                                ? 'glass-pill-lavender'
                                                : 'border border-white/[0.10] bg-gradient-to-b from-white/[0.08] to-white/[0.03] hover:border-[#99A0F9]/30'
                                        }`}
                                    >
                                        {!light && (
                                            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-[#99A0F9]/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover/pill:opacity-100" />
                                        )}
                                        <div
                                            className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-lg shadow-sm transition-all duration-400 sm:h-9 sm:w-9 sm:rounded-xl ${
                                                light
                                                    ? 'glass-icon-lavender-sm'
                                                    : 'border border-white/[0.12] bg-gradient-to-br from-white/[0.12] to-white/[0.04] shadow-[0_4px_16px_rgba(0,0,0,0.3)] group-hover/pill:border-[#99A0F9]/30'
                                            }`}
                                        >
                                            <pillar.icon className={`h-4 w-4 transition-colors duration-400 ${light ? 'text-[#6b72d6] group-hover/pill:text-slate-700' : 'text-white/70 group-hover/pill:text-[#99A0F9]'}`} />
                                        </div>
                                        <p className={`relative z-10 text-[11px] font-black leading-tight tracking-tight sm:text-[12px] ${light ? 'text-slate-900' : 'text-white'}`}>
                                            {pillar.title}
                                        </p>
                                        <p className={`relative z-10 text-[10px] font-medium leading-snug sm:text-[11px] ${light ? 'text-slate-500' : 'text-white/40'}`}>
                                            {pillar.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className={`h-3 w-px bg-gradient-to-b ${light ? 'from-slate-200' : 'from-white/10'} to-[#F4B952]/30`} />
                            <div className="h-1.5 w-1.5 rounded-full bg-[#F4B952]/40 shadow-[0_0_8px_rgba(244,185,82,0.3)]" />
                        </div>

                        <p className="mt-3 text-center text-[12px] font-bold tracking-wide text-[#F4B952] drop-shadow-[0_0_10px_rgba(244,185,82,0.25)] sm:mt-4 sm:text-[13px]">
                            {study.archFootnote}
                        </p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className={`relative flex flex-col ${light ? 'bg-white' : 'bg-white/[0.04]'}`}>
                    <div className={`relative z-10 border-b p-4 sm:p-5 ${light ? 'border-slate-100' : 'border-white/[0.06]'}`}>
                        <div className="pointer-events-none absolute top-0 right-0 h-14 w-14 rounded-bl-3xl bg-gradient-to-bl from-[#99A0F9]/8 to-transparent" />
                        <h4 className={`relative z-10 mb-3 text-[13px] font-black tracking-tight sm:text-[14px] ${light ? 'text-slate-900' : 'text-white'}`}>Impact Metrics</h4>
                        <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-5 sm:gap-y-3.5">
                            {study.metrics.map((m, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="mb-1 text-[20px] font-black leading-none tracking-tight text-[#99A0F9] sm:text-[22px]">
                                        {m.value}
                                    </span>
                                    <span className={`text-[10px] font-bold uppercase leading-tight tracking-tight sm:text-[11px] ${light ? 'text-slate-500' : 'text-white/40'}`}>
                                        {m.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 flex-1 p-4 sm:p-5">
                        <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 rounded-tr-3xl bg-gradient-to-tr from-[#F26969]/5 to-transparent" />
                        <h4 className={`relative z-10 mb-2.5 text-[13px] font-black tracking-tight sm:text-[14px] ${light ? 'text-slate-900' : 'text-white'}`}>Value Drivers</h4>
                        <div className="relative z-10 space-y-2.5">
                            {study.valueDrivers.map((vd, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#99A0F9]/20 bg-gradient-to-br from-[#99A0F9]/20 to-[#99A0F9]/5">
                                        <CheckCircle2 className="h-3 w-3 text-[#99A0F9]" />
                                    </div>
                                    <p className={`text-left text-[12px] font-medium leading-snug sm:text-[13px] ${light ? 'text-slate-500' : 'text-white/55'}`}>{vd}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 md:mt-6">
                <Link
                    to={study.ctaHref}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#99A0F9] to-[#8088f0] px-5 py-3 text-[12px] font-black uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(153,160,249,0.25)] transition-all duration-300 hover:from-[#b0b6ff] hover:to-[#99A0F9] hover:shadow-[0_15px_40px_rgba(153,160,249,0.35)] active:scale-95 sm:gap-2.5 sm:px-6 sm:text-[13px]"
                >
                    Explore Case Study
                    <ArrowRight className="h-4 w-4" />
                </Link>
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
                    className="mb-10 flex flex-col items-center text-center sm:mb-12"
                >
                    <div
                        className={`relative z-10 mb-6 inline-flex items-center justify-center gap-3 px-6 py-2.5 ${
                            light
                                ? 'glass-badge'
                                : 'rounded-full border border-[#99A0F9]/20 bg-[#99A0F9]/10 shadow-[0_0_22px_rgba(153,160,249,0.10)]'
                        }`}
                    >
                        <div className="relative z-10 h-2.5 w-2.5 animate-pulse rounded-full bg-[#99A0F9] shadow-[0_0_12px_rgba(153,160,249,0.45)]" />
                        <span
                            className={`relative z-10 text-[12px] font-black uppercase tracking-[0.4em] ${
                                light ? 'text-[#7b82e8]' : 'text-[#99A0F9]'
                            }`}
                        >
                            In Production
                        </span>
                    </div>

                    <h2
                        className={`!mb-5 !text-center !text-4xl !font-black !leading-[1.1] !tracking-tight md:!text-5xl ${
                            light ? '!text-slate-900' : '!text-white'
                        }`}
                    >
                        <span className={light ? 'text-slate-900' : 'text-white'}>Proven at</span>{' '}
                        <span className={light ? 'text-[#6b72d6]' : 'text-[#99A0F9]'}>Tier‑1 Scale</span>
                    </h2>

                    <p
                        className={`!mx-auto max-w-3xl !text-center text-[16px] font-medium md:text-lg ${
                            light ? '!text-slate-600' : 'text-white/50'
                        }`}
                    >
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

                        <div className="relative z-10 p-4 sm:p-6 md:p-8">
                            <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                    {caseStudies.map((_, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setActiveCaseStudy(i)}
                                            className={`rounded-full transition-all duration-300 ${
                                                i === activeCaseStudy
                                                    ? 'h-2.5 w-7 bg-gradient-to-r from-[#99A0F9] to-[#7b82e8] shadow-[0_0_14px_rgba(153,160,249,0.5)] sm:h-3 sm:w-9'
                                                    : light
                                                      ? 'h-2.5 w-2.5 bg-slate-200 hover:bg-slate-300 sm:h-3 sm:w-3'
                                                      : 'h-2.5 w-2.5 bg-white/15 hover:bg-white/30 sm:h-3 sm:w-3'
                                            }`}
                                            aria-label={`Go to case study ${i + 1}`}
                                        />
                                    ))}
                                    <span className={`ml-2 text-[11px] font-black uppercase tracking-[0.25em] sm:ml-3 sm:text-[12px] ${light ? 'text-slate-400' : 'text-white/30'}`}>
                                        {activeCaseStudy + 1} / {caseStudies.length}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-400 sm:h-10 sm:w-10 ${
                                            light
                                                ? 'glass-nav-lavender'
                                                : 'border border-white/[0.10] bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.10]'
                                        }`}
                                        aria-label="Previous case study"
                                    >
                                        <ChevronLeft className={`h-4 w-4 sm:h-5 sm:w-5 ${light ? 'text-[#6b72d6]' : 'text-white/60'}`} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-400 sm:h-10 sm:w-10 ${
                                            light
                                                ? 'glass-nav-lavender'
                                                : 'border border-white/[0.10] bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.10]'
                                        }`}
                                        aria-label="Next case study"
                                    >
                                        <ChevronRight className={`h-4 w-4 sm:h-5 sm:w-5 ${light ? 'text-[#6b72d6]' : 'text-white/60'}`} />
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
