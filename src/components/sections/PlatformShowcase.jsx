import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, ShoppingBag, GitBranch, BadgeCheck, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Illustration Components ─── */

const PrivacyViz = () => (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6 relative z-10">
        {/* Shield with concentric rings — all sized to stay within container */}
        <div className="relative flex items-center justify-center w-32 h-32">
            <motion.div className="absolute w-32 h-32 rounded-full border border-[#8c9eff]/10" animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.2, 0.5] }} transition={{ repeat: Infinity, duration: 3 }} />
            <motion.div className="absolute w-24 h-24 rounded-full border border-[#8c9eff]/20" animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.3, 0.6] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.3 }} />
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e2343] to-[#0f1225] border border-[#8c9eff]/40 shadow-[0_0_25px_rgba(140,158,255,0.25)] flex items-center justify-center relative z-10">
                <ShieldCheck className="w-7 h-7 text-[#a5b4fc]" />
            </div>
        </div>

        {/* Compliance badges — inline row, no negative offsets */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
            {[
                { label: 'GDPR', color: 'bg-green-500', delay: 0 },
                { label: 'HIPAA', color: 'bg-blue-500', delay: 0.3 },
                { label: 'SOC2', color: 'bg-violet-500', delay: 0.6 },
                { label: 'DPDP', color: 'bg-amber-500', delay: 0.9 },
            ].map(b => (
                <motion.div
                    key={b.label}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: b.delay }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${b.color}/10 border border-white/10`}
                >
                    <div className={`w-1.5 h-1.5 rounded-full ${b.color} animate-pulse`} />
                    <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">{b.label}</span>
                </motion.div>
            ))}
        </div>

        {/* Status pill */}
        <div className="bg-[#151930] border border-[#8c9eff]/30 px-6 py-2.5 rounded-full text-[11px] font-bold text-[#e0e7ff] tracking-[0.18em] uppercase relative overflow-hidden">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full" animate={{ x: ['-200%', '200%'] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }} />
            <span className="relative z-10">Enforcing 14 Active Policies...</span>
        </div>
    </div>
);

const MarketplaceViz = () => {
    const assets = [
        { name: 'Customer 360', type: 'Dataset', tag: 'GDPR', color: 'text-blue-400 border-blue-500/30' },
        { name: 'Churn Model v3', type: 'ML Model', tag: 'PII-Free', color: 'text-violet-400 border-violet-500/30' },
        { name: 'Revenue Signals', type: 'API Feed', tag: 'Approved', color: 'text-emerald-400 border-emerald-500/30' },
        { name: 'Risk Scorecard', type: 'Report', tag: 'SOC2', color: 'text-amber-400 border-amber-500/30' },
    ];
    return (
        <div className="flex flex-col w-full h-full gap-3 justify-center relative z-10 px-2">
            <div className="grid grid-cols-2 gap-3">
                {assets.map((a, i) => (
                    <motion.div key={a.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
                        className={`p-4 rounded-2xl bg-[#0f1225] border ${a.color.split(' ')[1]} flex flex-col gap-2`}>
                        <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-black uppercase tracking-widest ${a.color.split(' ')[0]}`}>{a.type}</span>
                            <span className="text-[8px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10 uppercase tracking-wider font-bold">{a.tag}</span>
                        </div>
                        <p className="text-[13px] font-bold text-white leading-tight">{a.name}</p>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${60 + i * 10}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 1 }} className={`h-full ${a.color.split(' ')[0].replace('text-', 'bg-')}`} />
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151930] border border-white/5 mt-1">
                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">4 Assets certified & published to Marketplace</span>
            </div>
        </div>
    );
};

const LineageViz = () => {
    const nodes = [
        { id: 'pg', label: 'PostgreSQL', sub: 'Source DB', x: '10%', y: '30%', dot: 'bg-blue-500' },
        { id: 's3', label: 'S3 Lake', sub: 'Raw Store', x: '10%', y: '70%', dot: 'bg-sky-500' },
        { id: 'spark', label: 'Spark ETL', sub: 'Transform', x: '45%', y: '50%', dot: 'bg-orange-400' },
        { id: 'dw', label: 'Snowflake', sub: 'Analytics DW', x: '80%', y: '30%', dot: 'bg-teal-400' },
        { id: 'bi', label: 'BI Layer', sub: 'Delivery', x: '80%', y: '70%', dot: 'bg-violet-400' },
    ];
    const lines = [['10%', '30%', '45%', '50%'], ['10%', '70%', '45%', '50%'], ['45%', '50%', '80%', '30%'], ['45%', '50%', '80%', '70%']];

    return (
        <div className="relative w-full h-full z-10">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {lines.map(([x1, y1, x2, y2], i) => (
                    <React.Fragment key={i}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1e2343" strokeWidth="2" />
                        <motion.circle r="4" fill="#8c9eff"
                            initial={{ cx: x1, cy: y1 }}
                            animate={{ cx: [x1, x2], cy: [y1, y2] }}
                            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: 'linear' }}
                        />
                    </React.Fragment>
                ))}
            </svg>
            {nodes.map((n, i) => (
                <motion.div key={n.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10"
                    style={{ left: n.x, top: n.y }}>
                    <div className="px-3 py-2 rounded-xl bg-[#0f1225] border border-[#1e2343] text-center shadow-lg">
                        <div className="flex items-center gap-1.5 justify-center mb-0.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${n.dot}`} />
                            <span className="text-[10px] font-black text-white leading-none">{n.label}</span>
                        </div>
                        <p className="text-[8px] text-white/30 uppercase tracking-widest font-bold">{n.sub}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const DataQualityViz = () => {
    const checks = [
        { name: 'Schema Validation', score: 100, color: 'bg-emerald-500', status: 'PASS' },
        { name: 'Null Rate Check', score: 98, color: 'bg-emerald-400', status: 'PASS' },
        { name: 'Format Consistency', score: 94, color: 'bg-blue-500', status: 'WARN' },
        { name: 'Referential Integrity', score: 87, color: 'bg-amber-400', status: 'WARN' },
    ];
    return (
        <div className="flex flex-col gap-4 w-full h-full justify-center relative z-10 px-4">
            <div className="flex items-center justify-between mb-1">
                <div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Overall DQ Score</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[36px] font-black text-white tracking-tighter leading-none">95.2</span>
                        <span className="text-[16px] font-black text-emerald-400">%</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-[9px] font-black text-white/50 uppercase">Monitoring Live</span>
                    </motion.div>
                </div>
            </div>
            <div className="space-y-3">
                {checks.map((c, i) => (
                    <motion.div key={c.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-bold text-white/70 truncate">{c.name}</span>
                                <span className={`text-[8px] font-black uppercase tracking-widest ml-2 ${c.status === 'PASS' ? 'text-emerald-400' : 'text-amber-400'}`}>{c.status}</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: `${c.score}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: 'circOut' }}
                                    className={`h-full ${c.color} rounded-full`} />
                            </div>
                        </div>
                        <span className="text-[11px] font-black text-white/50 shrink-0 w-8 text-right">{c.score}%</span>
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
        <div className="flex flex-col gap-5 w-full h-full justify-center relative z-10 px-2">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Query Volume — 12h</p>
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8c9eff]" />
                        <span className="text-[8px] font-bold text-[#8c9eff] uppercase">Real-time</span>
                    </motion.div>
                </div>
                <div className="flex items-end gap-[3px] h-16">
                    {bars.map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.7, delay: i * 0.04, ease: 'circOut' }}
                            className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? 'bg-[#8c9eff] shadow-[0_0_10px_rgba(140,158,255,0.5)]' : 'bg-[#1e2343]'}`}
                        />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {kpis.map((k, i) => (
                    <motion.div key={k.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                        className="p-3 rounded-xl bg-[#0f1225] border border-[#1e2343] flex flex-col gap-1">
                        <p className="text-[8px] font-black text-white/30 uppercase tracking-tighter">{k.label}</p>
                        <p className="text-[17px] font-black text-white tracking-tight leading-none">{k.val}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

/* ─── Main Component ─── */

const PlatformShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef(null);
    const NUM_TABS = 5;

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scrollableDistance = rect.height - viewportHeight;
            const scrolledDistance = -rect.top;

            if (scrolledDistance >= 0 && scrolledDistance <= scrollableDistance) {
                const progress = scrolledDistance / scrollableDistance;
                const idx = Math.min(Math.floor(progress * NUM_TABS), NUM_TABS - 1);
                setActiveTab(idx);
            } else if (scrolledDistance < 0) {
                setActiveTab(0);
            } else if (scrolledDistance > scrollableDistance) {
                setActiveTab(NUM_TABS - 1);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTabClick = (idx) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const scrollableDistance = rect.height - window.innerHeight;
        const targetScroll = absoluteTop + scrollableDistance * (idx / (NUM_TABS - 1));
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    const features = [
        {
            id: 0,
            icon: ShieldCheck,
            label: "Data Protection & Privacy",
            title: "Compliance by Architecture",
            desc: "GDPR, HIPAA, DPDP, and SOC2 compliance is embedded directly into the data layer — not bolted on. Automated PII detection, consent tracking, and policy enforcement run at runtime with zero overhead.",
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
            metrics: ["4.2M Queries/Day", "28ms Avg Latency", "$1.4M Savings", "privBox Engine", "SOC2 Audit Trail"],
            viz: <AnalyticsViz />
        }
    ];

    return (
        <section ref={sectionRef} className="bg-[#0c0e1a] text-white relative border-t border-white/5 h-[500vh]" id="showcase">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-10">
                <div className="container relative z-10 mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
                        <span className="text-[12px] font-bold text-[#8c9eff] uppercase tracking-[0.3em] drop-shadow-[0_0_15px_rgba(140,158,255,0.3)]">
                            Platform Intelligence
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                            See Everything. <br /><span className="text-slate-500">Protect Everything.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:items-center">

                        {/* Left: Navigation */}
                        <div className="w-full lg:w-[280px] flex flex-col gap-2 shrink-0">
                            {features.map((feature, idx) => (
                                <button
                                    key={feature.id}
                                    onClick={() => handleTabClick(idx)}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 relative border ${activeTab === idx
                                        ? 'bg-gradient-to-r from-[#1e2343] to-[#151930] border-[#8c9eff]/40 shadow-[0_0_20px_rgba(140,158,255,0.1)]'
                                        : 'bg-[#0f1225] border-transparent hover:border-[#1e2343] hover:bg-[#151930]'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${activeTab === idx
                                        ? 'bg-gradient-to-br from-[#8c9eff] to-blue-500 text-white shadow-[0_0_15px_rgba(140,158,255,0.4)] scale-110'
                                        : 'bg-[#1e2343] border border-white/5 text-slate-400'}`}
                                    >
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div className={`text-[14px] font-bold tracking-tight transition-colors leading-tight ${activeTab === idx ? 'text-white' : 'text-slate-400'}`}>
                                        {feature.label}
                                    </div>
                                    {activeTab === idx && (
                                        <motion.div layoutId="active-pill" className="absolute right-3 w-1.5 h-1.5 rounded-full bg-[#8c9eff]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Right: Dashboard panel */}
                        <div className="flex-1 w-full relative">
                            <div className="p-8 flex flex-col bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343] shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-[2rem]">
                                {/* Header */}
                                <div className="mb-5 h-[88px] shrink-0">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <h3 className="text-[26px] font-bold text-white mb-2 tracking-tight text-center">{features[activeTab].title}</h3>
                                            <p className="text-slate-400 text-[14px] leading-relaxed text-center line-clamp-2">{features[activeTab].desc}</p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Illustration */}
                                <div className="bg-[#05060f] rounded-2xl border border-[#1e2343]/50 overflow-hidden relative h-[260px] shrink-0 w-full">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, scale: 0.97 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 p-6"
                                        >
                                            {features[activeTab].viz}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Footer Metrics */}
                                <div className="flex w-full justify-between items-start mt-6 pt-6 border-t border-[#1e2343] gap-2">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex w-full justify-between"
                                        >
                                            {features[activeTab].metrics.map((m, i) => (
                                                <div key={i} className="flex flex-col shrink-0 text-left">
                                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 whitespace-nowrap">Metric {i + 1}</div>
                                                    <div className="text-[15px] font-bold text-white tracking-tight whitespace-nowrap">{m}</div>
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
