import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    Share2,
    ShieldCheck,
    Cloud,
    Shield,
    Database,
    Cog,
    UsersRound,
    FileText,
    Eye,
    Plug,
    Search,
    Layers,
    Box,
} from 'lucide-react';

const strategicOutcomes = [
    { Icon: Brain, title: 'AI Readiness & Analytics Acceleration' },
    { Icon: Share2, title: 'Decision Hub for Data Decisions' },
    { Icon: ShieldCheck, title: 'Data Governance & Privacy Protection' },
    { Icon: Cloud, title: 'Hybrid Cloud & On-Prem Management' },
];

const modules = [
    {
        title: 'Governance & Policy',
        Icon: ShieldCheck,
        bullets: [
            'Business & Regulatory Planning',
            'Policy & Controls Implementation',
            'Data Co-Location & Segregation',
        ],
    },
    {
        title: 'Data Management',
        Icon: Database,
        bullets: ['Data Privacy & Protection', 'Metadata Management & Cataloguing'],
    },
    {
        title: 'Automation & Integration',
        Icon: Cog,
        bullets: [
            'Business Process Automation',
            'Service & Infra Integration',
            'Logging & Audit Integration',
        ],
    },
    {
        title: 'Collaboration & Secure Analytics',
        Icon: UsersRound,
        bullets: ['Virtual Teams & Collaboration', 'Secure Analytics (PII + privBox)'],
    },
];

const foundationPillars = [
    { label: 'Governance', Icon: Shield },
    { label: 'Compliance', Icon: FileText },
    { label: 'Automation', Icon: Cog },
    { label: 'Observability', Icon: Eye },
    { label: 'Integration', Icon: Plug },
];

const analyticsLayerCards = [
    { title: 'Data Warehouses', Icon: Search },
    { title: 'Data Lakes', Icon: Layers },
    { title: 'Data Marts', Icon: Box },
    { title: 'Databases', Icon: Database },
];

const connectorHorizontal =
    'pointer-events-none absolute left-[6%] right-[6%] hidden h-[2px] bg-gradient-to-r from-transparent from-[8%] via-[#99A0F9]/60 via-50% to-transparent to-[92%] sm:block';
const connectorVertical =
    'w-[2px] rounded-full bg-gradient-to-b from-[#99A0F9]/70 via-[#99A0F9]/85 to-[#99A0F9]/70 shadow-[0_0_6px_rgba(153,160,249,0.35)]';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const TorroOneDataPlatformStack = () => {
    return (
        <section
            id="onedata-architecture"
            className="light-section-bg relative overflow-hidden border-b border-slate-200/60 py-14 md:py-20"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(153,160,249,0.16)_0%,transparent_50%),radial-gradient(circle_at_85%_30%,rgba(153,160,249,0.1)_0%,transparent_45%)]" />

            <div className="relative z-10 mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-10">
                <motion.div {...fadeUp()} className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
                    <div className="glass-badge relative z-10 mb-5 inline-flex items-center justify-center gap-3 px-6 py-2.5">
                        <div className="relative z-10 h-2.5 w-2.5 animate-pulse rounded-full bg-[#99A0F9] shadow-[0_0_12px_rgba(153,160,249,0.45)]" />
                        <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.35em] text-[#7b82e8]">
                            Platform Architecture
                        </span>
                    </div>
                    <h2 className="!text-center text-2xl font-black tracking-tight !text-slate-900 sm:text-3xl md:text-4xl">
                        Integrated Analytics <span className="text-[#6b72d6]">Experience</span>
                    </h2>
                    <p className="!mx-auto mt-3 !text-center text-sm font-semibold text-slate-500 sm:text-base">
                        <span className="font-bold text-[#7b82e8]">Curate</span>
                        <span className="text-slate-300"> · </span>
                        <span className="font-bold text-[#7b82e8]">Integrate</span>
                        <span className="text-slate-300"> · </span>
                        <span className="font-bold text-[#7b82e8]">Analyze</span>
                    </p>
                </motion.div>

                <motion.div
                    {...fadeUp(0.08)}
                    className="relative mx-auto max-w-[88rem]"
                >
                    <div className="glass-lavender-shell relative overflow-hidden rounded-3xl">
                        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#99A0F9]/35 to-transparent" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(153,160,249,0.12)_0%,transparent_55%)]" />

                        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                            {/* Strategic outcomes — floating lavender pods */}
                            <div className="relative mb-8">
                                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                    {strategicOutcomes.map((row, i) => {
                                        const Icon = row.Icon;
                                        return (
                                            <motion.div
                                                key={row.title}
                                                {...fadeUp(0.1 + i * 0.04)}
                                                className="glass-pill-lavender glass-card-lift group relative z-10 flex max-w-full items-center gap-3 rounded-2xl px-4 py-3 sm:max-w-[calc(50%-0.5rem)] lg:max-w-[calc(25%-0.75rem)] lg:flex-1 lg:basis-0"
                                            >
                                                <div className="glass-icon-lavender-sm relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                                    <Icon className="relative z-10 h-5 w-5 text-[#6b72d6]" strokeWidth={2} />
                                                </div>
                                                <span className="relative z-10 text-left text-xs font-bold leading-snug text-slate-800 sm:text-[13px]">
                                                    {row.title}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                                <div className={`${connectorHorizontal} bottom-0 translate-y-4`} />
                            </div>

                            {/* Connector + platform hub */}
                            <div className="relative mb-8 flex w-full flex-col items-center">
                                <div className={`mb-3 h-10 ${connectorVertical}`} />
                                <div className="glass-pill-lavender relative z-10 flex w-full max-w-4xl items-center justify-center gap-4 rounded-2xl px-10 py-4 shadow-[0_12px_40px_rgba(153,160,249,0.18)] sm:gap-5 sm:px-14 sm:py-5 md:max-w-5xl">
                                    <img
                                        src="/torro_png_logo.png"
                                        alt="Torro"
                                        className="h-10 w-auto shrink-0 object-contain sm:h-11 md:h-12"
                                    />
                                    <span className="text-center text-lg font-black tracking-tight text-slate-900 sm:text-xl md:text-2xl">
                                        Torro OneData Platform
                                    </span>
                                </div>
                                <div className={`mt-3 h-10 ${connectorVertical}`} />
                            </div>

                            {/* Analytics layer — connected pods */}
                            <div className="relative mb-10">
                                <div className={`${connectorHorizontal} top-1/2 -translate-y-1/2`} />
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                                    {analyticsLayerCards.map((c, i) => {
                                        const Icon = c.Icon;
                                        return (
                                            <motion.div
                                                key={c.title}
                                                {...fadeUp(0.15 + i * 0.04)}
                                                className="glass-pill-lavender glass-card-lift group/pill relative z-10 flex flex-col items-center gap-2.5 rounded-2xl px-3 py-5 text-center sm:py-6"
                                            >
                                                <div className="glass-icon-lavender-sm relative z-10 flex h-12 w-12 items-center justify-center rounded-xl">
                                                    <Icon className="relative z-10 h-6 w-6 text-[#6b72d6]" strokeWidth={1.5} />
                                                </div>
                                                <p className="relative z-10 text-[11px] font-black leading-tight text-slate-900 sm:text-xs">
                                                    {c.title}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Module pods — white interior panel like case study grid */}
                            <div className="mb-8 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
                                <div className="grid gap-0 sm:grid-cols-2">
                                    {modules.map((mod, i) => {
                                        const Icon = mod.Icon;
                                        const isLeft = i % 2 === 0;
                                        const isTop = i < 2;
                                        return (
                                            <div
                                                key={mod.title}
                                                className={`box-copy p-6 md:p-7 ${
                                                    !isTop ? 'border-t border-slate-100 sm:border-t-0' : ''
                                                } ${!isLeft ? 'sm:border-l sm:border-slate-100' : ''} ${
                                                    isTop ? 'sm:border-b sm:border-slate-100' : ''
                                                }`}
                                            >
                                                <div className="mb-4 flex items-center gap-3">
                                                    <div className="glass-icon-lavender-sm flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                                                        <Icon className="h-5 w-5 text-[#6b72d6]" strokeWidth={2} />
                                                    </div>
                                                    <h3 className="!text-left text-sm font-black leading-tight text-slate-900 sm:text-base md:text-lg">
                                                        {mod.title}
                                                    </h3>
                                                </div>
                                                <ul className="space-y-2">
                                                    {mod.bullets.map((b) => (
                                                        <li
                                                            key={b}
                                                            className="flex gap-2.5 text-left text-xs font-medium leading-relaxed text-slate-600 sm:text-[13px]"
                                                        >
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#99A0F9]" />
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Foundation pillars */}
                            <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
                                {foundationPillars.map((p, i) => {
                                    const Icon = p.Icon;
                                    return (
                                        <motion.div
                                            key={p.label}
                                            {...fadeUp(0.2 + i * 0.03)}
                                            className="glass-pill-lavender glass-card-lift flex min-w-[88px] flex-1 basis-[28%] flex-col items-center gap-2 rounded-2xl px-3 py-3 sm:min-w-[100px] sm:basis-0 sm:py-4"
                                        >
                                            <div className="glass-icon-lavender-sm flex h-9 w-9 items-center justify-center rounded-lg">
                                                <Icon className="h-4 w-4 text-[#6b72d6]" strokeWidth={2} />
                                            </div>
                                            <span className="text-center text-[9px] font-black uppercase tracking-wide text-slate-700 sm:text-[10px]">
                                                {p.label}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Unified footer strip */}
                            <div className="glass-pill-lavender rounded-2xl px-5 py-4 text-center sm:py-5">
                                <p className="text-base font-black text-[#6b72d6] sm:text-lg md:text-xl">
                                    Unified Data Management
                                </p>
                                <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500 sm:text-sm">
                                    Metadata <span className="text-slate-300">·</span> Intelligence{' '}
                                    <span className="text-slate-300">·</span> Lifecycle{' '}
                                    <span className="text-slate-300">·</span> Governance{' '}
                                    <span className="text-slate-300">·</span> Security
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TorroOneDataPlatformStack;
