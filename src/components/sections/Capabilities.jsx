import React, { useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Shield, Activity, Database, Cloud, Cpu, BarChart2, CheckCircle2, Lock, Zap } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   PREVIEW 1 — Privacy & Compliance Command Center
   Clean white with green/blue accents, policy checklist, seal
───────────────────────────────────────────────────────────── */
const CompliancePreview = () => (
    <div className="flex flex-col gap-4 w-full h-full p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden relative">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8c9eff] mb-0.5">Compliance Engine</p>
                <p className="text-[18px] font-black text-slate-900 tracking-tight leading-none">Privacy Passport</p>
            </div>
            <div className="relative w-12 h-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg border-2 border-white">
                    <Shield className="w-6 h-6 text-white" />
                </div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-3px] rounded-full border border-dashed border-amber-400/40"
                />
            </div>
        </div>

        {/* Policy list */}
        <div className="flex flex-col gap-3 flex-1">
            {[
                { label: 'GDPR – Right to be Forgotten', pct: 100 },
                { label: 'HIPAA Data Encapsulation', pct: 98 },
                { label: 'SOC2 Type II Encryption', pct: 100 },
                { label: 'ISO 27001 Audit Trail', pct: 95 },
            ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3 group/row">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-slate-700 leading-none mb-1.5 truncate">{item.label}</p>
                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.pct}%` }}
                                transition={{ duration: 1.2, delay: i * 0.15, ease: "circOut" }}
                                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                            />
                        </div>
                    </div>
                    <span className="text-[9px] font-black text-emerald-600 ml-1">{item.pct}%</span>
                </div>
            ))}
        </div>

        {/* Live status */}
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
            <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-500"
            />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Audit Sync: LIVE</span>
            <span className="ml-auto text-[9px] font-mono text-slate-400">0.4ms</span>
        </div>
    </div>
);

const LineagePreview = () => {
    const stages = [
        { label: 'Source Layer', nodes: [{ name: 'PostgreSQL v14', tag: 'Primary DB', color: 'bg-blue-50 border-blue-200 text-blue-700' }, { name: 'S3 Data Lake', tag: 'Object Store', color: 'bg-sky-50 border-sky-200 text-sky-700' }] },
        { label: 'Transform Layer', nodes: [{ name: 'Apache Spark', tag: 'ETL Engine', color: 'bg-orange-50 border-orange-200 text-orange-700' }, { name: 'dbt Cloud', tag: 'SQL Models', color: 'bg-violet-50 border-violet-200 text-violet-700' }] },
        { label: 'Delivery Layer', nodes: [{ name: 'Snowflake DW', tag: 'Analytics', color: 'bg-teal-50 border-teal-200 text-teal-700' }, { name: 'Tableau CX', tag: 'Reporting', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' }] },
    ];

    return (
        <div className="flex flex-col w-full h-full bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8c9eff] mb-0.5">Data Lineage</p>
                    <p className="text-[17px] font-black text-slate-900 tracking-tight leading-none">Live Pipeline Graph</p>
                </div>
                <div className="flex items-center gap-2">
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-[9px] font-black text-[#8c9eff] uppercase tracking-wider">Active</span>
                </div>
            </div>

            {/* Pipeline columns */}
            <div className="flex-1 flex items-stretch gap-0 px-4 py-4 relative">
                {stages.map((stage, si) => (
                    <React.Fragment key={stage.label}>
                        <div className="flex flex-col gap-2 flex-1">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest text-center mb-1">{stage.label}</p>
                            <div className="flex flex-col gap-2">
                                {stage.nodes.map((node, ni) => (
                                    <motion.div
                                        key={node.name}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: si * 0.15 + ni * 0.1 }}
                                        className={`px-2.5 py-2 rounded-xl border ${node.color} text-center`}
                                    >
                                        <p className="text-[10px] font-black leading-none mb-0.5">{node.name}</p>
                                        <p className="text-[8px] font-bold opacity-60 uppercase tracking-tighter">{node.tag}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        {si < stages.length - 1 && (
                            <div className="flex flex-col items-center justify-center w-8 gap-3 shrink-0">
                                {[0, 1].map(i => (
                                    <div key={i} className="relative w-full h-px bg-slate-200 overflow-visible">
                                        <motion.div
                                            animate={{ left: ['-20%', '120%'] }}
                                            transition={{ duration: 1.6, delay: i * 0.8, repeat: Infinity, ease: 'linear' }}
                                            className="absolute top-[-3px] w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_6px_#6366f1]"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Throughput ticker */}
            <div className="mx-4 mb-4 flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-950 border border-white/5">
                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <div className="flex gap-4 overflow-hidden">
                    {[{ k: 'Throughput', v: '1.2 TB/hr' }, { k: 'Drift', v: '±0.04%' }, { k: 'Lag', v: '12 ms' }].map(m => (
                        <div key={m.k} className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[8px] font-bold text-white/30 uppercase">{m.k}</span>
                            <span className="text-[10px] font-black text-emerald-400 font-mono">{m.v}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AnalyticsPreview = () => {
    const bars = [62, 88, 45, 95, 70, 55, 83, 40, 76, 91, 58, 78];
    const metrics = [
        { label: 'Secure Queries', val: '4.2M', trend: '+12%', up: true },
        { label: 'Avg. Response', val: '28ms', trend: '-8%', up: false },
        { label: 'Active privBoxes', val: '312', trend: '+24%', up: true },
    ];

    return (
        <div className="flex flex-col w-full h-full bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
            {/* Dark header */}
            <div className="bg-slate-950 px-5 py-4 flex items-center justify-between">
                <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8c9eff] mb-1">Secure Analytics</p>
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-[24px] font-black text-white tracking-tighter leading-none">99.9</span>
                        <span className="text-[13px] font-black text-emerald-400">% Uptime</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/20 border border-blue-500/30">
                        <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-[8px] font-black text-blue-300 uppercase tracking-widest">privBox Active</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500">Tier: ELITE-V</span>
                </div>
            </div>

            {/* Query timeline bars */}
            <div className="px-5 pt-4 pb-1">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Query Volume — 12h</p>
                    <span className="text-[9px] font-mono text-slate-400">Live</span>
                </div>
                <div className="flex items-end gap-[3px] h-14">
                    {bars.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.8, delay: i * 0.04, ease: 'circOut' }}
                            className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? 'bg-blue-500' : 'bg-slate-200'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Metric grid */}
            <div className="grid grid-cols-3 gap-2 px-5 pb-5 pt-3">
                {metrics.map((m, i) => (
                    <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-1"
                    >
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter leading-none">{m.label}</p>
                        <p className="text-[16px] font-black text-slate-900 tracking-tight leading-none">{m.val}</p>
                        <span className={`text-[8px] font-black ${m.up ? 'text-emerald-500' : 'text-blue-500'}`}>{m.trend}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};



/* ─────────────────────────────────────────────────────────────
   CAPABILITY CARD — with proper hooks (no hooks-in-JSX)
───────────────────────────────────────────────────────────── */

const CapabilityCard = ({ index, title, description }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 20, stiffness: 120 });
    const springY = useSpring(mouseY, { damping: 20, stiffness: 120 });

    // ✅ useTransform called at hook level — NOT inside render/JSX
    const spotlightBg = useTransform(
        [springX, springY],
        ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(59,130,246,0.07), transparent 70%)`
    );

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const displayIndex = (index + 1).toString().padStart(2, '0');
    const previews = [<CompliancePreview key="p1" />, <LineagePreview key="p2" />, <AnalyticsPreview key="p3" />];

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="relative flex flex-col bg-white border border-slate-200/60 rounded-[2.5rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_72px_rgba(15,23,42,0.10)] transition-all duration-700 hover:-translate-y-2 overflow-hidden group min-h-[560px] p-10 cursor-default"
        >
            {/* Cursor-tracking spotlight — uses properly hoisted transform */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: spotlightBg }}
            />

            {/* Arrow */}
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400">
                <ArrowUpRight className="w-5 h-5 text-blue-500/40" />
            </div>

            {/* Number */}
            <div className="text-[72px] font-black text-slate-100 group-hover:text-blue-500/20 tracking-[-0.08em] leading-none mb-8 transition-colors duration-500 select-none">
                {displayIndex}
            </div>

            {/* Title */}
            <h3 className="text-[28px] font-black text-slate-900 tracking-[-0.03em] leading-[1.1] mb-8 min-h-[6.5rem] flex items-start">
                {title}
            </h3>

            {/* Content area — description or preview */}
            <div className="relative flex-1 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {!isHovered ? (
                        <motion.p
                            key="desc"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="text-slate-500 text-[16px] leading-[1.8] font-medium absolute inset-0"
                        >
                            {description}
                        </motion.p>
                    ) : (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0, y: 16, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -16, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 340, damping: 28 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {previews[index]}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom shimmer line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent group-hover:w-full transition-all duration-700 rounded-b-full" />
        </motion.div>
    );
};

/* ─────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────── */
const Capabilities = () => {
    const capabilities = [
        {
            title: "Enterprise-Grade Data Privacy & Compliance by Design",
            description: "Our platform embeds data privacy, security, and regulatory compliance directly into its architecture. With GDPR, HIPAA, SOX, and global standards support, compliance is not an add-on — it's the foundation."
        },
        {
            title: "Seamless Data Discovery and Data Lineage",
            description: "GenAI-powered hyperbolic search to identify structured and unstructured data across multi-cloud estates. It tracks the entire data journey from creation to usage within a unified metadata store."
        },
        {
            title: "Secure Analytics and Business Intelligence",
            description: "The privBox is the foundational Secure Analytics Container within Torro's architecture that bridges the gap between raw data storage and secure consumption tied to a documented use case."
        }
    ];

    return (
        <section className="py-48 bg-[#f8fafc] relative overflow-hidden" id="product">
            <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-[95rem]">
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-8 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#8c9eff]/5 border border-[#8c9eff]/15 shadow-sm mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8c9eff] animate-pulse shadow-[0_0_12px_rgba(140,158,255,0.6)]" />
                        <span className="text-[12px] font-black text-[#8c9eff] uppercase tracking-[0.4em]">
                            Core Architecture
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
                        Industrial-Grade <br /><span className="text-slate-500">Data Governance.</span>
                    </h2>

                    <p className="text-slate-500 text-[20px] leading-relaxed max-w-3xl font-medium">
                        Comprehensive Data Governance, Privacy Compliance and Secure Analytics for Modern Enterprises
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {capabilities.map((cap, i) => (
                        <CapabilityCard key={i} index={i} {...cap} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
