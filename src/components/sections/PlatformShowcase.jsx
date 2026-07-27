import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, ShoppingBag, GitBranch, BadgeCheck, BarChart3, Search, ShoppingCart, ChevronRight, ArrowUpRight, ArrowDownRight, FileCode2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Illustration Components ─── */

const PrivacyViz = () => {
    const globalPolicies = [
        { label: 'GDPR', color: 'bg-emerald-400' },
        { label: 'HIPAA', color: 'bg-sky-400' },
        { label: 'SOX', color: 'bg-violet-400' },
        { label: 'DPDP', color: 'bg-amber-400' },
        { label: 'CCPA', color: 'bg-rose-400' },
        { label: 'PIPL', color: 'bg-red-400' },
    ];
    const bfsiPolicies = [
        { label: 'RBI', color: 'bg-indigo-400' },
        { label: 'PCI-DSS', color: 'bg-orange-400' },
        { label: 'HKMA', color: 'bg-teal-400' },
        { label: 'MAS TRM', color: 'bg-cyan-400' },
        { label: 'Basel III', color: 'bg-yellow-400' },
        { label: 'GLBA', color: 'bg-lime-400' },
        { label: 'FFIEC', color: 'bg-pink-400' },
    ];

    const PolicyChip = ({ p }) => (
        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#151930] px-2 py-1">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${p.color}`} />
            <span className="text-[10px] font-bold uppercase tracking-wide text-white/80">{p.label}</span>
        </span>
    );

    return (
        <div className="relative z-10 flex h-full w-full flex-col justify-between gap-3 px-1">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#99A0F9]/40 bg-gradient-to-br from-[#1e2343] to-[#0f1225] shadow-[0_0_18px_rgba(140,158,255,0.25)]">
                    <ShieldCheck className="h-6 w-6 text-[#a5b4fc]" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">Active Policy Engine</p>
                    <p className="text-xl font-black tracking-tight text-white">
                        14 <span className="text-sm font-bold text-[#99A0F9]">Policies Enforced</span>
                    </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-black uppercase text-emerald-400">Live</span>
                </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3">
                <div className="flex flex-col rounded-xl border border-[#1e2343] bg-[#0a0d18] p-3">
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#99A0F9]">Global & Privacy</p>
                    <div className="flex flex-wrap gap-1.5">
                        {globalPolicies.map((p) => <PolicyChip key={p.label} p={p} />)}
                    </div>
                </div>
                <div className="flex flex-col rounded-xl border border-[#1e2343] bg-[#0a0d18] p-3">
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#F4B952]">BFSI & Financial</p>
                    <div className="flex flex-wrap gap-1.5">
                        {bfsiPolicies.map((p) => <PolicyChip key={p.label} p={p} />)}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-[#99A0F9]/20 bg-[#0f1225] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Masking · Consent · Zero-trust</span>
                <span className="text-[11px] font-black text-[#99A0F9]">100% Coverage</span>
            </div>
        </div>
    );
};

/* Brand marks for marketplace cards */
const ExcelLogo = ({ className = 'h-3.5 w-3.5' }) => (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
        <rect x="4" y="2" width="18" height="28" rx="2" fill="#185C37" />
        <path fill="#21A366" d="M22 8V2l8 8h-6a2 2 0 0 1-2-2z" />
        <rect x="2" y="9" width="16" height="14" rx="1.5" fill="#107C41" />
        <path fill="#fff" d="M6.2 20.2 9.1 16l-2.8-4.2h2.2l1.7 2.9c.1.2.2.4.3.6h.05c.1-.2.2-.4.3-.6l1.7-2.9h2.1L12.1 16l2.9 4.2h-2.2l-1.8-3c-.1-.2-.2-.4-.3-.6h-.05c-.1.2-.2.4-.3.6l-1.8 3H6.2z" />
    </svg>
);

const AzureLogo = ({ className = 'h-3.5 w-3.5' }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path
            fill="#0078D4"
            d="M13.05 4.24 6.56 19.9h4.6l6.54-15.66h-4.65zm.34 0L19.3 19.9h-4.58l-2.88-6.85 1.55-3.71z"
        />
    </svg>
);

const SqlLogo = ({ className = 'h-3.5 w-3.5' }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <rect width="24" height="24" rx="5" fill="#CC2927" />
        <text x="12" y="15.5" textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="700" fontFamily="Geist, ui-sans-serif, system-ui, sans-serif" letterSpacing="-0.3">SQL</text>
    </svg>
);

const MarketplaceViz = () => {
    const assets = [
        {
            Logo: ExcelLogo,
            accent: '#21A366',
            glow: 'rgba(33,163,102,0.35)',
            tags: [
                { label: 'XLSX', tone: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300' },
                { label: 'SCRIPT', tone: 'border-amber-400/30 bg-amber-400/10 text-amber-300' },
            ],
            name: 'banking_customers_data4.xlsx',
            fields: [
                ['Database', 'Manual Upload'],
                ['Publish ID', '9'],
            ],
            owner: 'charlie@torro.ai',
            stats: [
                { Icon: ArrowUpRight, value: '24', color: 'text-[#99A0F9]' },
                { Icon: ArrowDownRight, value: '8', color: 'text-amber-400' },
                { Icon: FileCode2, value: '3', color: 'text-rose-400' },
            ],
            active: true,
        },
        {
            Logo: AzureLogo,
            accent: '#0078D4',
            glow: 'rgba(0,120,212,0.35)',
            tags: [
                { label: 'TABLE', tone: 'border-[#99A0F9]/30 bg-[#99A0F9]/10 text-[#99A0F9]' },
                { label: 'SOURCE', tone: 'border-amber-400/30 bg-amber-400/10 text-amber-300' },
            ],
            name: 'crm_customer',
            fields: [
                ['Database', 'Azure Synapse'],
                ['Publish ID', '8'],
            ],
            owner: 'charlie@torro.ai',
            stats: [
                { Icon: ArrowUpRight, value: '112', color: 'text-[#99A0F9]' },
                { Icon: ArrowDownRight, value: '41', color: 'text-amber-400' },
                { Icon: FileCode2, value: '9', color: 'text-rose-400' },
            ],
            active: false,
        },
        {
            Logo: SqlLogo,
            accent: '#CC2927',
            glow: 'rgba(204,41,39,0.32)',
            tags: [
                { label: 'SCRIPT', tone: 'border-[#99A0F9]/30 bg-[#99A0F9]/10 text-[#99A0F9]' },
                { label: 'SQL', tone: 'border-rose-400/30 bg-rose-400/10 text-rose-300' },
            ],
            name: 'kyc_watchlist.sql',
            fields: [
                ['Database', 'SQL Server'],
                ['Publish ID', '7'],
            ],
            owner: 'ava@torro.ai',
            stats: [
                { Icon: ArrowUpRight, value: '56', color: 'text-[#99A0F9]' },
                { Icon: ArrowDownRight, value: '17', color: 'text-amber-400' },
                { Icon: FileCode2, value: '5', color: 'text-rose-400' },
            ],
            active: false,
        },
    ];

    return (
        <div className="relative z-10 flex h-full w-full flex-col justify-center gap-3 px-0.5">
            <div className="relative flex shrink-0 items-center gap-2.5 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#141833] via-[#0f1225] to-[#0c1020] px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_28px_-16px_rgba(153,160,249,0.45)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#99A0F9]/50 to-transparent" />
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#99A0F9]/25 bg-[#99A0F9]/10">
                    <Search className="h-3.5 w-3.5 text-[#99A0F9]" />
                </div>
                <span className="truncate text-[11px] font-medium tracking-tight text-white/40">
                    Search for tables, scripts, or datasets...
                </span>
                <div className="ml-auto flex shrink-0 items-center gap-1.5">
                    <span className="rounded-lg bg-gradient-to-r from-[#99A0F9] to-indigo-400 px-2.5 py-1 text-[8px] font-black tracking-wide text-white shadow-[0_0_16px_rgba(153,160,249,0.45)]">
                        All
                    </span>
                    <span className="hidden rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[8px] font-bold text-white/40 sm:inline">
                        Tables
                    </span>
                    <span className="ml-1 rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[8px] font-bold text-white/45">
                        491 <span className="text-[#99A0F9]">+4</span>
                    </span>
                </div>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-3 gap-2.5 sm:gap-3">
                {assets.map((asset, i) => {
                    const Logo = asset.Logo;
                    return (
                        <motion.div
                            key={asset.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-[#151a33] to-[#080a14] transition-transform duration-300 ${
                                asset.active
                                    ? 'border-[#99A0F9]/45 shadow-[0_12px_36px_-14px_rgba(153,160,249,0.45)]'
                                    : 'border-white/[0.07] shadow-[0_10px_28px_-18px_rgba(0,0,0,0.8)]'
                            }`}
                        >
                            <div
                                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                                style={{
                                    background: asset.active
                                        ? 'linear-gradient(90deg, transparent, rgba(153,160,249,0.7), transparent)'
                                        : `linear-gradient(90deg, transparent, ${asset.accent}66, transparent)`,
                                }}
                            />
                            <div
                                className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full blur-3xl"
                                style={{ background: asset.glow, opacity: asset.active ? 0.55 : 0.28 }}
                            />

                            <div className="relative flex min-h-0 flex-1 flex-col px-3 pt-3 pb-2.5 sm:px-3.5 sm:pt-3.5">
                                <div className="mb-3 flex items-start justify-between gap-1.5">
                                    <div className="flex min-w-0 items-center gap-2">
                                        <div
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0a0d18]/90"
                                            style={{ boxShadow: `0 0 20px ${asset.glow}` }}
                                        >
                                            <Logo className="h-5 w-5" />
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {asset.tags.map((tag) => (
                                                <span
                                                    key={tag.label}
                                                    className={`rounded-md border px-1.5 py-0.5 text-[7px] font-black uppercase tracking-wider ${tag.tone}`}
                                                >
                                                    {tag.label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex shrink-0 items-center gap-1">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#99A0F9]/30 bg-[#99A0F9]/10 text-[#99A0F9] shadow-[0_0_12px_rgba(153,160,249,0.25)]">
                                            <ChevronRight className="h-3 w-3" />
                                        </span>
                                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/35 transition-colors group-hover:border-[#99A0F9]/30 group-hover:text-[#99A0F9]">
                                            <ShoppingCart className="h-3 w-3" />
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-2.5 truncate text-left !text-[11px] !font-bold !leading-tight !tracking-tight !text-white sm:!text-[12px]">
                                    {asset.name}
                                </div>

                                <div className="space-y-1.5 text-left">
                                    {asset.fields.map(([label, value]) => (
                                        <div key={label} className="flex items-center justify-between gap-2 !text-[9px] !leading-none">
                                            <span className="font-semibold tracking-wide text-white/35">{label}</span>
                                            <span className={`truncate font-bold ${label === 'Publish ID' ? 'text-[#99A0F9]' : 'text-white/75'}`}>
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="flex items-center justify-between gap-2 !text-[9px] !leading-none">
                                        <span className="font-semibold tracking-wide text-white/35">Owner</span>
                                        <span className="truncate font-bold text-[#99A0F9]">{asset.owner}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-auto grid grid-cols-3 border-t border-white/[0.06] bg-gradient-to-b from-[#101428]/90 to-[#0a0d18]">
                                {asset.stats.map(({ Icon, value, color }, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center justify-center gap-1 py-2 text-[9px] font-bold text-white/55 ${
                                            idx < 2 ? 'border-r border-white/[0.06]' : ''
                                        }`}
                                    >
                                        <Icon className={`h-3 w-3 ${color}`} />
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const LineageViz = () => {
    const nodes = [
        // Source Layer (left)
        { id: 'pg', label: 'PostgreSQL', sub: 'Primary DB', x: '8%', y: '18%', dot: 'bg-indigo-400' },
        { id: 's3', label: 'S3 Data Lake', sub: 'Object Store', x: '8%', y: '45%', dot: 'bg-sky-500' },
        { id: 'kafka', label: 'Kafka', sub: 'Event Stream', x: '8%', y: '72%', dot: 'bg-emerald-400' },
        { id: 'mongo', label: 'MongoDB', sub: 'NoSQL Store', x: '8%', y: '92%', dot: 'bg-green-500' },
        // Ingestion Layer
        { id: 'nifi', label: 'NiFi', sub: 'Ingestion', x: '30%', y: '32%', dot: 'bg-amber-400' },
        { id: 'airflow', label: 'Airflow', sub: 'Orchestrator', x: '30%', y: '68%', dot: 'bg-rose-400' },
        // Transform Layer (center)
        { id: 'spark', label: 'Spark ETL', sub: 'Transform', x: '52%', y: '38%', dot: 'bg-orange-400' },
        { id: 'dbt', label: 'dbt Cloud', sub: 'SQL Models', x: '52%', y: '65%', dot: 'bg-violet-400' },
        // Delivery Layer (right)
        { id: 'snow', label: 'Snowflake', sub: 'Analytics DW', x: '76%', y: '22%', dot: 'bg-teal-400' },
        { id: 'redshift', label: 'Redshift', sub: 'Data Mart', x: '76%', y: '52%', dot: 'bg-cyan-400' },
        { id: 'bi', label: 'Tableau', sub: 'Reporting', x: '76%', y: '80%', dot: 'bg-pink-400' },
        // Consumers (far right)
        { id: 'api', label: 'API Gateway', sub: 'Delivery', x: '94%', y: '35%', dot: 'bg-yellow-400' },
        { id: 'ml', label: 'ML Pipeline', sub: 'AI/ML', x: '94%', y: '68%', dot: 'bg-fuchsia-400' },
    ];

    const lines = [
        // Sources → Ingestion
        ['8%', '18%', '30%', '32%'],
        ['8%', '45%', '30%', '32%'],
        ['8%', '45%', '30%', '68%'],
        ['8%', '72%', '30%', '68%'],
        ['8%', '92%', '30%', '68%'],
        // Ingestion → Transform
        ['30%', '32%', '52%', '38%'],
        ['30%', '68%', '52%', '65%'],
        ['30%', '32%', '52%', '65%'],
        // Transform → Delivery
        ['52%', '38%', '76%', '22%'],
        ['52%', '38%', '76%', '52%'],
        ['52%', '65%', '76%', '52%'],
        ['52%', '65%', '76%', '80%'],
        // Delivery → Consumers
        ['76%', '22%', '94%', '35%'],
        ['76%', '52%', '94%', '35%'],
        ['76%', '52%', '94%', '68%'],
        ['76%', '80%', '94%', '68%'],
    ];

    // Junction dots where lines converge
    const junctions = [
        { x: '30%', y: '32%' },
        { x: '30%', y: '68%' },
        { x: '52%', y: '38%' },
        { x: '52%', y: '65%' },
        { x: '76%', y: '52%' },
    ];

    return (
        <div className="relative w-full h-full z-10">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Connection lines */}
                {lines.map(([x1, y1, x2, y2], i) => (
                    <React.Fragment key={i}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1e2343" strokeWidth="1.5" />
                        {/* Animated data packet */}
                        <motion.circle r="3" fill="#99A0F9"
                            style={{ filter: 'drop-shadow(0 0 4px rgba(153,160,249,0.7))' }}
                            initial={{ cx: x1, cy: y1 }}
                            animate={{ cx: [x1, x2], cy: [y1, y2] }}
                            transition={{ duration: 1.8 + (i % 3) * 0.4, delay: i * 0.35, repeat: Infinity, ease: 'linear' }}
                        />
                        {/* Secondary slower packet on some lines */}
                        {i % 3 === 0 && (
                            <motion.circle r="2" fill="#F26969" opacity={0.7}
                                style={{ filter: 'drop-shadow(0 0 3px rgba(242,105,105,0.5))' }}
                                initial={{ cx: x1, cy: y1 }}
                                animate={{ cx: [x1, x2], cy: [y1, y2] }}
                                transition={{ duration: 2.8, delay: i * 0.35 + 1.2, repeat: Infinity, ease: 'linear' }}
                            />
                        )}
                    </React.Fragment>
                ))}
                {/* Glowing junction points */}
                {junctions.map((j, i) => (
                    <React.Fragment key={`jnc-${i}`}>
                        <motion.circle cx={j.x} cy={j.y} r="6" fill="transparent" stroke="#99A0F9" strokeWidth="1" opacity={0.3}
                            animate={{ r: [6, 10, 6], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                        />
                        <circle cx={j.x} cy={j.y} r="2.5" fill="#99A0F9" opacity={0.5} />
                    </React.Fragment>
                ))}
            </svg>
            {/* Node labels */}
            {nodes.map((n, i) => (
                <motion.div key={n.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10"
                    style={{ left: n.x, top: n.y }}>
                    <div className="rounded-lg border border-[#1e2343] bg-[#0f1225] px-2 py-1.5 text-center shadow-lg transition-colors hover:border-[#99A0F9]/30">
                        <div className="mb-0.5 flex items-center justify-center gap-1">
                            <motion.div className={`h-1.5 w-1.5 rounded-full ${n.dot}`}
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ duration: 1.5 + i * 0.2, repeat: Infinity }}
                            />
                            <span className="text-[9px] font-black leading-none text-white">{n.label}</span>
                        </div>
                        <p className="text-[7px] font-bold uppercase tracking-widest text-white/30">{n.sub}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};


const DataQualityViz = () => {
    const dimensions = [
        { name: 'Completeness', score: 98, color: 'bg-[#99A0F9]', gate: 'PASS' },
        { name: 'Accuracy', score: 96, color: 'bg-[#a5b4fc]', gate: 'PASS' },
        { name: 'Consistency', score: 94, color: 'bg-[#F4B952]', gate: 'WARN' },
        { name: 'Timeliness', score: 91, color: 'bg-[#F4B952]', gate: 'WARN' },
    ];

    return (
        <div className="relative z-10 flex h-full w-full flex-col justify-between gap-4 px-1">
            <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black leading-none tracking-tight text-white">95.2</span>
                    <span className="text-sm font-black text-[#99A0F9]">%</span>
                    <span className="ml-2 text-[11px] font-black uppercase tracking-[0.16em] text-white/35">DQ Index</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-black uppercase text-emerald-400">Gates Active</span>
                </div>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-3">
                {dimensions.map((d, i) => (
                    <motion.div
                        key={d.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="space-y-1.5"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-white/70">{d.name}</span>
                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-black uppercase ${d.gate === 'PASS' ? 'text-emerald-400' : 'text-amber-400'}`}>{d.gate}</span>
                                <span className="text-[12px] font-black text-white/60">{d.score}%</span>
                            </div>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${d.score}%` }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: 'circOut' }}
                                className={`h-full rounded-full ${d.color}`}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const AnalyticsViz = () => {
    const bars = [45, 62, 38, 80, 55, 70, 48, 92, 65, 78, 58, 88];
    const kpis = [{ label: 'Queries/Day', val: '4.2M' }, { label: 'Avg Latency', val: '28ms' }, { label: 'Cost Savings', val: '$1.4M' }];
    return (
        <div className="relative z-10 flex h-full w-full flex-col justify-center gap-5 px-2">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Query Volume — 12h</p>
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#99A0F9]" />
                        <span className="text-[8px] font-bold uppercase text-[#99A0F9]">Real-time</span>
                    </motion.div>
                </div>
                <div className="flex h-16 items-end gap-[3px]">
                    {bars.map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.7, delay: i * 0.04, ease: 'circOut' }}
                            className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? 'bg-[#99A0F9] shadow-[0_0_10px_rgba(140,158,255,0.5)]' : 'bg-[#1e2343]'}`}
                        />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {kpis.map((k, i) => (
                    <motion.div key={k.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex flex-col gap-1 rounded-xl border border-[#1e2343] bg-[#0f1225] p-3">
                        <p className="text-[8px] font-black uppercase tracking-tighter text-white/30">{k.label}</p>
                        <p className="text-[17px] font-black leading-none tracking-tight text-white">{k.val}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

/* ─── Main Component ─── */

const getHeaderOffset = () =>
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;

const PlatformShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isLgUp, setIsLgUp] = useState(false);
    const sectionRef = useRef(null);
    const NUM_TABS = 5;

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)');
        const sync = () => setIsLgUp(mq.matches);
        sync();
        mq.addEventListener('change', sync);
        return () => mq.removeEventListener('change', sync);
    }, []);

    useEffect(() => {
        if (!isLgUp) return undefined;

        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const stickyTop = getHeaderOffset();
            const stickyHeight = window.innerHeight - stickyTop;
            const scrollableDistance = Math.max(rect.height - stickyHeight, 1);
            const scrolledDistance = stickyTop - rect.top;

            if (scrolledDistance >= 0 && scrolledDistance <= scrollableDistance) {
                const progress = scrolledDistance / scrollableDistance;
                const idx = Math.min(Math.floor(progress * NUM_TABS), NUM_TABS - 1);
                setActiveTab(idx);
            } else if (scrolledDistance < 0) {
                setActiveTab(0);
            } else {
                setActiveTab(NUM_TABS - 1);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLgUp]);

    const handleTabClick = (idx) => {
        setActiveTab(idx);
        if (!isLgUp || !sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const stickyTop = getHeaderOffset();
        const stickyHeight = window.innerHeight - stickyTop;
        const absoluteTop = window.scrollY + rect.top;
        const scrollableDistance = Math.max(rect.height - stickyHeight, 1);
        const targetScroll = absoluteTop - stickyTop + scrollableDistance * (idx / (NUM_TABS - 1));
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    const features = [
        {
            id: 0,
            icon: ShieldCheck,
            label: "Data Protection & Privacy",
            title: "Compliance by Architecture",
            desc: "GDPR, HIPAA, DPDP, and SOX compliance is embedded directly into the data layer — not bolted on. Automated PII detection, consent tracking, and policy enforcement run at runtime with zero overhead.",
            metrics: ["GDPR / HIPAA", "Cell-Level Masking", "Consent Tracking", "Zero-Trust", "< 20ms Overhead"],
            viz: <PrivacyViz />
        },
        {
            id: 1,
            icon: ShoppingBag,
            label: "Data Marketplace",
            title: "Governed Asset Exchange",
            desc: "A certified, searchable catalogue of governed data assets — datasets, models, and API feeds — available for internal teams and external partners. Every asset is privacy-stamped and audit-ready before publication.",
            metrics: ["Certified Assets", "PII-Free Delivery", "Role Gating", "API + Dataset", "Approval Workflows"],
            viz: <MarketplaceViz />
        },
        {
            id: 2,
            icon: GitBranch,
            label: "Data Discovery & Lineage",
            title: "Full-Journey Visibility",
            desc: "AI-powered hyperbolic search maps every data asset across your multi-cloud estate. Track the complete data journey — from ingestion origin to analytical consumption — across schemas, pipelines, and transformations.",
            metrics: ["2.3M+ Assets", "End-to-End DAG", "Real-time AI", "Exabyte Scale", "Agentless"],
            viz: <LineageViz />
        },
        {
            id: 3,
            icon: BadgeCheck,
            label: "Data Quality",
            title: "Automated Quality Gates",
            desc: "Continuously score data across dimensions: completeness, consistency, accuracy, and timeliness. Block low-quality data from entering production pipelines using programmable quality gates and automated remediation.",
            metrics: ["4 DQ Dimensions", "Zero Bad Rows", "Rule-as-Code", "SLA Monitoring", "Auto-Remediation"],
            viz: <DataQualityViz />
        },
        {
            id: 4,
            icon: BarChart3,
            label: "Data Analytics",
            title: "Secure Intelligence Layer",
            desc: "privBox is Torro's foundational Secure Analytics Container — bridging raw storage to governed consumption. Run queries, build dashboards, and deploy models all within a documented, compliance-aware execution environment.",
            metrics: ["4.2M Queries/Day", "28ms Avg Latency", "$1.4M Savings", "privBox Engine", "SOX Audit Trail"],
            viz: <AnalyticsViz />
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-x-clip border-t border-white/5 bg-[#0c0e1a] text-white lg:h-[500vh]"
            id="showcase"
        >
            <div className="relative flex w-full flex-col justify-center overflow-x-clip py-12 sm:py-14 lg:sticky lg:top-[var(--header-height)] lg:h-[calc(100dvh-var(--header-height))] lg:overflow-hidden lg:py-5 xl:py-6">
                <div className="container relative z-10 mx-auto min-h-0 w-full px-4 sm:px-6">
                    <div className="mx-auto mb-6 max-w-4xl space-y-3 text-center md:mb-7 lg:mb-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#99A0F9] drop-shadow-[0_0_15px_rgba(140,158,255,0.3)] sm:text-[12px] sm:tracking-[0.3em]">
                            Platform Intelligence
                        </span>
                        <h2 className="!mb-0 !text-center !text-[1.75rem] !font-bold !tracking-tight !text-white sm:!text-3xl md:!text-4xl lg:!text-[2.5rem] xl:!text-5xl">
                            See Everything and <br className="hidden sm:block" />
                            <span className="text-[#99A0F9]">Protect Everything</span>
                        </h2>
                    </div>

                    <div className="flex min-h-0 flex-col gap-5 tablet:flex-row tablet:items-center tablet:gap-6 xl:gap-8">
                        {/* Mobile/tablet: horizontal snap tabs · Desktop: vertical rail */}
                        <div className="-mx-4 flex w-[calc(100%+2rem)] shrink-0 gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:thin] sm:-mx-0 sm:w-full sm:px-0 tablet:w-[220px] tablet:flex-col tablet:overflow-visible lg:w-[260px] xl:w-[280px]">
                            {features.map((feature, idx) => (
                                <button
                                    key={feature.id}
                                    type="button"
                                    onClick={() => handleTabClick(idx)}
                                    className={`relative flex min-w-[min(78vw,280px)] shrink-0 snap-start items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-all duration-300 sm:min-w-[240px] tablet:min-w-0 tablet:w-full tablet:px-3 tablet:py-2.5 lg:px-4 lg:py-2.5 xl:py-3.5 ${
                                        activeTab === idx
                                            ? 'border-[#99A0F9]/40 bg-gradient-to-r from-[#1e2343] to-[#151930] shadow-[0_0_20px_rgba(140,158,255,0.1)]'
                                            : 'border-transparent bg-[#0f1225] hover:border-[#1e2343] hover:bg-[#151930]'
                                    }`}
                                >
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 tablet:h-9 tablet:w-9 lg:h-10 lg:w-10 ${
                                            activeTab === idx
                                                ? 'scale-105 bg-gradient-to-br from-[#99A0F9] to-indigo-400 text-white shadow-[0_0_15px_rgba(140,158,255,0.4)] lg:scale-110'
                                                : 'border border-white/5 bg-[#1e2343] text-slate-400'
                                        }`}
                                    >
                                        <feature.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                                    </div>
                                    <div
                                        className={`text-[13px] font-bold leading-tight tracking-tight transition-colors lg:text-[14px] ${
                                            activeTab === idx ? 'text-white' : 'text-slate-400'
                                        }`}
                                    >
                                        {feature.label}
                                    </div>
                                    {activeTab === idx && (
                                        <motion.div layoutId="active-pill" className="absolute right-3 hidden h-1.5 w-1.5 rounded-full bg-[#99A0F9] tablet:block" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="relative min-w-0 flex-1">
                            <div className="flex flex-col rounded-[1.5rem] border border-[#1e2343] bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:rounded-[2rem] sm:p-6 md:p-8">
                                <div className="mb-3 min-h-[52px] shrink-0 sm:mb-4 sm:min-h-[60px] md:min-h-[72px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <h3 className="!mb-2 !text-center !text-[18px] !font-bold !tracking-tight !text-white sm:!text-[20px] md:!text-[26px]">
                                                {features[activeTab].title}
                                            </h3>
                                            <p className="!mx-auto line-clamp-3 max-w-2xl !text-center text-[12px] leading-relaxed text-slate-400 sm:line-clamp-2 sm:text-[13px] md:text-[14px]">
                                                {features[activeTab].desc}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded-2xl border border-[#1e2343]/50 bg-[#05060f] sm:h-[300px] md:h-[340px] lg:h-[min(320px,40dvh)] xl:h-[min(360px,44dvh)]">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, scale: 0.97 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 flex p-3 sm:p-4"
                                        >
                                            {features[activeTab].viz}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="mt-4 border-t border-[#1e2343] pt-4 sm:mt-5 sm:pt-5">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:justify-between lg:grid lg:grid-cols-3 xl:flex"
                                        >
                                            {features[activeTab].metrics.map((m, i) => (
                                                <div key={i} className="min-w-0 flex-col text-left md:flex md:min-w-[7rem]">
                                                    <div className="mb-1 text-[8px] font-bold uppercase tracking-widest text-slate-500 md:text-[9px]">
                                                        Metric {i + 1}
                                                    </div>
                                                    <div className="text-[12px] font-bold tracking-tight text-white sm:text-[13px] md:text-[15px]">{m}</div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformShowcase;
