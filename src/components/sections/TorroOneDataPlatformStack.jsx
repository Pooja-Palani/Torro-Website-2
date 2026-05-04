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

/**
 * Single compact “one viewport” architecture diagram — tight spacing, no long scroll.
 */
const TorroOneDataPlatformStack = () => {
    return (
        <section
            id="onedata-architecture"
            className="relative border-b border-slate-200/80 bg-gradient-to-b from-[#fafbff] to-[#eef0f8] py-8 md:py-10"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(153,160,249,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(153,160,249,0.07) 1px, transparent 1px)
          `,
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-3xl border border-white/90 bg-white/95 shadow-[0_16px_50px_-24px_rgba(15,23,42,0.12)]"
                >
                    {/* Header strip — large & bold */}
                    <div className="border-b border-slate-100 bg-gradient-to-r from-white to-[#f7f8ff] px-6 py-5 text-center sm:px-10 sm:py-7">
                        <h2 className="text-xl font-black tracking-tight text-[#99A0F9] sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-tight">
                            Integrated Analytics Experience
                        </h2>
                        <p className="mt-2 text-sm font-semibold text-slate-500 sm:text-base md:text-lg">
                            <span className="font-bold text-[#99A0F9]">Curate</span>
                            <span className="text-slate-300"> | </span>
                            <span className="font-bold text-[#99A0F9]">Integrate</span>
                            <span className="text-slate-300"> | </span>
                            <span className="font-bold text-[#99A0F9]">Analyze</span>
                        </p>
                    </div>

                    <div className="space-y-5 p-5 sm:space-y-6 sm:p-7 md:p-9 lg:p-10">
                        {/* Strategic outcomes — 2×2 */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
                            {strategicOutcomes.map((row) => {
                                const Icon = row.Icon;
                                return (
                                    <div
                                        key={row.title}
                                        className="flex items-center gap-3 rounded-xl border border-slate-100/90 bg-slate-50/90 px-4 py-3 md:gap-4 md:px-5 md:py-3.5"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#99A0F9]/12 text-[#5b6396] md:h-11 md:w-11">
                                            <Icon className="h-5 w-5 md:h-[22px] md:w-[22px]" strokeWidth={2} />
                                        </div>
                                        <span className="text-left text-xs font-bold leading-snug text-slate-800 sm:text-sm md:text-[15px]">
                                            {row.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Platform banner — prominent */}
                        <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#99A0F9]/25 bg-gradient-to-r from-white via-[#f3f4ff] to-[#e8ebfb] px-6 py-4 shadow-md sm:gap-4 sm:py-5 md:py-6">
                            <div className="flex gap-1">
                                <span className="h-9 w-2 rounded-full bg-[#F26969] shadow-sm sm:h-10 sm:w-2.5" />
                                <span className="h-9 w-2 rounded-full bg-[#99A0F9] shadow-sm sm:h-10 sm:w-2.5" />
                            </div>
                            <span className="text-center text-xl font-black tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-[2.125rem]">
                                Torro OneData Platform
                            </span>
                        </div>

                        {/* Analytics layer */}
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-5">
                            {analyticsLayerCards.map((c) => {
                                const Icon = c.Icon;
                                return (
                                    <div
                                        key={c.title}
                                        className="flex flex-col items-center rounded-xl border border-slate-100 bg-white px-2 py-4 shadow-sm sm:py-5"
                                    >
                                        <Icon className="h-7 w-7 text-[#99A0F9] sm:h-8 sm:w-8 md:h-9 md:w-9" strokeWidth={1.5} />
                                        <p className="mt-2 text-center text-[11px] font-bold leading-tight text-slate-800 sm:text-xs md:text-sm">
                                            {c.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Four modules — 2×2 */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                            {modules.map((mod) => {
                                const Icon = mod.Icon;
                                return (
                                    <div
                                        key={mod.title}
                                        className="rounded-xl border border-slate-100 bg-white/95 p-4 shadow-sm sm:p-5 md:p-6"
                                    >
                                        <div className="mb-3 flex items-center gap-3 border-b border-slate-100 pb-3 md:gap-3.5 md:pb-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#99A0F9]/10 text-[#99A0F9] md:h-11 md:w-11">
                                                <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                                            </div>
                                            <h3 className="text-sm font-black leading-tight text-slate-900 sm:text-base md:text-lg">
                                                {mod.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-2 md:space-y-2.5">
                                            {mod.bullets.map((b) => (
                                                <li
                                                    key={b}
                                                    className="flex gap-2.5 text-xs font-medium leading-relaxed text-slate-600 sm:text-[13px] md:text-sm"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#99A0F9]/65" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Foundation */}
                        <div className="flex flex-wrap justify-center gap-2 rounded-xl border border-slate-100 bg-slate-50/95 px-4 py-4 sm:gap-3 md:py-5">
                            {foundationPillars.map((p) => {
                                const Icon = p.Icon;
                                return (
                                    <div
                                        key={p.label}
                                        className="flex min-w-[72px] flex-1 basis-[30%] flex-col items-center gap-1.5 px-2 py-2 sm:min-w-[88px] sm:basis-0 md:gap-2"
                                    >
                                        <Icon className="h-5 w-5 text-[#99A0F9] md:h-6 md:w-6" strokeWidth={2} />
                                        <span className="text-center text-[10px] font-black uppercase tracking-wide text-slate-700 sm:text-[11px]">
                                            {p.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Unified footer */}
                        <div className="rounded-xl bg-[#99A0F9]/[0.1] px-4 py-4 text-center sm:py-5 md:px-6">
                            <p className="text-base font-black text-[#99A0F9] sm:text-lg md:text-xl">
                                Unified Data Management
                            </p>
                            <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500 sm:text-sm md:text-base">
                                Metadata <span className="text-slate-300">|</span> Intelligence{' '}
                                <span className="text-slate-300">|</span> Lifecycle <span className="text-slate-300">|</span>{' '}
                                Governance <span className="text-slate-300">|</span> Security
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TorroOneDataPlatformStack;
