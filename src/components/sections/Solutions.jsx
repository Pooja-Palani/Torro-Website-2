import React, { useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ShieldAlert, Terminal, BarChart4, CheckCircle2, AlertTriangle, Lock, GitCommit, Database, Package, Star } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   PREVIEW 1 — CISO / Audit Office
   Full-bleed compliance posture dashboard
───────────────────────────────────────────────────────────── */
const CISOPreview = () => {
    const alerts = [
        { type: 'BREACH BLOCKED', time: '09:41:22', dot: 'bg-red-500', text: 'text-red-600', bg: 'bg-red-50' },
        { type: 'AUDIT LOG SEALED', time: '09:41:45', dot: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50' },
        { type: 'DPDP REPORT READY', time: '09:42:10', dot: 'bg-blue-500', text: 'text-blue-700', bg: 'bg-blue-50' },
    ];
    return (
        <div className="flex flex-col w-full h-full">
            {/* Top: score + status */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mb-0.5">Compliance Score</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[38px] font-black text-slate-900 tracking-tighter leading-none">99.8</span>
                        <span className="text-[16px] font-black text-emerald-500">%</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100">
                        <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-[9px] font-black text-emerald-700 uppercase tracking-wider">All Systems Secure</span>
                    </div>
                    <div className="flex gap-1.5">
                        {[{ l: 'GDPR', c: 'bg-green-100 text-green-700' }, { l: 'HIPAA', c: 'bg-blue-100 text-blue-700' }, { l: 'SOC2', c: 'bg-violet-100 text-violet-700' }].map(b => (
                            <span key={b.l} className={`text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${b.c}`}>{b.l}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Progress bars */}
            <div className="flex flex-col gap-2 py-3 border-b border-slate-100">
                {[
                    { label: 'Data Residency', val: 100, color: 'bg-emerald-500', tc: 'text-emerald-600' },
                    { label: 'PII Coverage', val: 98, color: 'bg-blue-500', tc: 'text-blue-600' },
                    { label: 'Consent Tracking', val: 95, color: 'bg-violet-500', tc: 'text-violet-600' },
                ].map((r, i) => (
                    <div key={r.label} className="flex items-center gap-3">
                        <span className="text-[9px] font-bold text-slate-500 w-28 shrink-0 text-left">{r.label}</span>
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${r.val}%` }} transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: 'circOut' }}
                                className={`h-full rounded-full ${r.color}`} />
                        </div>
                        <span className={`text-[9px] font-black w-8 text-right ${r.tc}`}>{r.val}%</span>
                    </div>
                ))}
            </div>

            {/* Live event log */}
            <div className="flex flex-col gap-1.5 pt-2 flex-1 overflow-hidden">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Live Event Stream</p>
                {alerts.map((a, i) => (
                    <motion.div key={a.type} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl ${a.bg}`}>
                        <div className="flex items-center gap-2">
                            <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }} className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                            <span className={`text-[9px] font-black uppercase tracking-wide ${a.text}`}>{a.type}</span>
                        </div>
                        <span className="text-[8px] font-mono text-slate-400">{a.time}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────────────────────────
   PREVIEW 2 — Data Engineering Teams
   Vertical pipeline monitor — fills full height
───────────────────────────────────────────────────────────── */
const EngineerPreview = () => {
    const stages = [
        { step: '01', name: 'Ingest', tool: 'S3 + Postgres', metric: '3.2M rows/min', status: 'ACTIVE', dotColor: 'bg-orange-500', barColor: 'bg-orange-400', bar: 88, lineColor: 'bg-orange-200' },
        { step: '02', name: 'PII Scan', tool: 'Torro Shield', metric: '0 violations', status: 'CLEAN', dotColor: 'bg-violet-500', barColor: 'bg-violet-500', bar: 100, lineColor: 'bg-violet-200' },
        { step: '03', name: 'Transform', tool: 'dbt Cloud', metric: '1.2TB processed', status: 'RUNNING', dotColor: 'bg-blue-500', barColor: 'bg-blue-500', bar: 74, lineColor: 'bg-blue-200' },
        { step: '04', name: 'Deliver', tool: 'Snowflake', metric: '99.9% SLA', status: 'READY', dotColor: 'bg-emerald-500', barColor: 'bg-emerald-500', bar: 100, lineColor: 'bg-emerald-200' },
    ];

    return (
        <div className="flex flex-col w-full h-full">
            {/* Header bar — dark terminal style */}
            <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-900 mb-3">
                <div className="flex items-center gap-2">
                    <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.9, repeat: Infinity }} className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-black text-emerald-400 font-mono uppercase tracking-wider">Pipeline Live</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-slate-500">main ✓ committed</span>
                    <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[9px] font-mono text-slate-400">09:41:22</motion.span>
                </div>
            </div>

            {/* Pipeline stages */}
            <div className="flex flex-col gap-2 flex-1">
                {stages.map((s, i) => (
                    <motion.div key={s.step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100">
                            {/* Step number */}
                            <span className="text-[9px] font-black text-slate-300 font-mono w-4 shrink-0">{s.step}</span>
                            {/* Dot */}
                            <div className={`w-2 h-2 rounded-full shrink-0 ${s.dotColor}`} />
                            {/* Name + tool */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[11px] font-black text-slate-900">{s.name}</span>
                                    <span className={`text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-widest ${
                                        s.status === 'CLEAN' || s.status === 'READY' ? 'bg-emerald-100 text-emerald-700' :
                                        s.status === 'ACTIVE' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                                    }`}>{s.status}</span>
                                </div>
                                {/* Progress bar */}
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: `${s.bar}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: 'circOut' }}
                                            className={`h-full rounded-full ${s.barColor}`} />
                                    </div>
                                    <span className="text-[8px] font-bold text-slate-400 shrink-0 w-16 text-right truncate">{s.metric}</span>
                                </div>
                            </div>
                        </div>
                        {/* Connector line */}
                        {i < stages.length - 1 && (
                            <div className="flex items-center justify-start ml-[28px] relative h-1.5">
                                <div className={`w-px h-full ${s.lineColor} mx-auto`} style={{ marginLeft: '7px' }} />
                                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                                    className={`absolute w-1 h-1 rounded-full ${s.dotColor} shadow-sm`} style={{ left: '7px', top: '0' }} />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex gap-2 pt-2 mt-2 border-t border-slate-100">
                {[{ l: '0 PII leaks', c: 'text-emerald-600 bg-emerald-50' }, { l: '1.2TB/hr', c: 'text-blue-600 bg-blue-50' }, { l: '100% lineage', c: 'text-violet-600 bg-violet-50' }].map(m => (
                    <div key={m.l} className={`flex-1 text-center text-[8px] font-black px-2 py-1.5 rounded-lg uppercase tracking-wider ${m.c}`}>{m.l}</div>
                ))}
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────────────────────────
   PREVIEW 3 — Business Decision Makers
   Marketplace browse with animated quality bars
───────────────────────────────────────────────────────────── */
const LeaderPreview = () => {
    const assets = [
        { name: 'Customer 360', type: 'Dataset', quality: 98, tag: 'Approved', tagColor: 'bg-emerald-100 text-emerald-700', barColor: 'bg-emerald-500' },
        { name: 'Revenue Signals', type: 'API Feed', quality: 95, tag: 'Approved', tagColor: 'bg-blue-100 text-blue-700', barColor: 'bg-blue-500' },
        { name: 'Churn Predictor v3', type: 'ML Model', quality: 91, tag: 'Pending', tagColor: 'bg-amber-100 text-amber-700', barColor: 'bg-amber-400' },
    ];
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mb-0.5">Data Marketplace</p>
                    <p className="text-[15px] font-black text-slate-900 leading-none">312 Certified Assets</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600">
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="text-[8px] font-black text-white uppercase tracking-wider">Browse Live</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-2 py-2 overflow-hidden">
                {assets.map((a, i) => (
                    <motion.div key={a.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <p className="text-[11px] font-black text-slate-900 leading-none">{a.name}</p>
                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">{a.type}</p>
                            </div>
                            <span className={`text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${a.tagColor}`}>{a.tag}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: `${a.quality}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 0.9, ease: 'circOut' }}
                                    className={`h-full rounded-full ${a.barColor}`} />
                            </div>
                            <span className="text-[8px] font-black text-slate-500 shrink-0">DQ {a.quality}%</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-blue-600">
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">One-Click Access Request →</span>
                </div>
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────────────────────────
   SOLUTION CARD — same Pristine Industrial pattern as Capabilities
───────────────────────────────────────────────────────────── */
const SolutionCard = ({ index, tag, title, description, features, preview }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 20, stiffness: 120 });
    const springY = useSpring(mouseY, { damping: 20, stiffness: 120 });

    const spotlightBg = useTransform(
        [springX, springY],
        ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(59,130,246,0.06), transparent 70%)`
    );

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const displayIndex = (index + 1).toString().padStart(2, '0');

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
            className="relative flex flex-col bg-white border border-slate-200/60 rounded-[2.5rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_72px_rgba(15,23,42,0.10)] transition-all duration-700 hover:-translate-y-2 overflow-hidden group h-[660px] p-10 cursor-default text-center"
        >
            {/* Cursor spotlight */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: spotlightBg }}
            />

            {/* Arrow */}
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400">
                <ArrowUpRight className="w-5 h-5 text-blue-500/40" />
            </div>

            {/* Number */}
            <div className="text-[72px] font-black text-slate-100 group-hover:text-blue-500/20 tracking-[-0.08em] leading-none mb-6 transition-colors duration-500 select-none">
                {displayIndex}
            </div>

            {/* Tag */}
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c9eff] mb-3">{tag}</div>

            {/* Title */}
            <h3 className="text-[26px] font-black text-slate-900 tracking-[-0.03em] leading-[1.1] mb-8 min-h-[5rem] flex items-start">
                {title}
            </h3>

            {/* Content area — description OR hover preview */}
            <div className="relative flex-1 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {!isHovered ? (
                        <motion.div
                            key="desc"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0 flex flex-col items-center gap-4 text-center"
                        >
                            <p className="text-slate-500 text-[16px] leading-[1.8] font-medium">{description}</p>
                            <ul className="flex flex-col gap-2 mt-2 items-center w-full">
                                {features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[13px] font-semibold text-slate-600 justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0, y: 16, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -16, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {preview}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom shimmer */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent group-hover:w-full transition-all duration-700 rounded-b-full" />
        </motion.div>
    );
};

/* ─────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────── */
const Solutions = () => {
    const solutions = [
        {
            tag: 'CISO / Audit Office',
            title: 'Defensible by Design',
            description: 'Complete audit trails, real-time breach detection, and automated DPDP and RBI compliance reporting. When the regulator calls, you answer with confidence — not a spreadsheet.',
            features: [
                'Real-time compliance posture dashboard',
                'Automated incident response workflows',
                'Immutable, regulator-ready audit exports',
                'Personal data breach notification automation',
            ],
            preview: <CISOPreview />
        },
        {
            tag: 'Data Engineering Teams',
            title: 'Governance Without Friction',
            description: 'Zero-friction data pipelines with built-in classification, masking, and lineage tracking. Integrates natively into your CI/CD and data orchestration layer — governance as code.',
            features: [
                'Native dbt, Airflow, and Spark integrations',
                'Automated PII masking in data pipelines',
                'Column-level lineage across all transformations',
                'Policy-as-code with Git-based versioning',
            ],
            preview: <EngineerPreview />
        },
        {
            tag: 'Business Decision Makers',
            title: 'Data in Minutes, Not Months',
            description: 'Self-service data access in minutes — with governance guardrails built in. Browse the data marketplace, request access, get approval, and start analyzing — all in one governed workflow.',
            features: [
                'Self-service data marketplace catalog',
                'One-click governed access requests',
                'Business-friendly data quality scores',
                'Automated data contract enforcement',
            ],
            preview: <LeaderPreview />
        }
    ];

    return (
        <section className="py-48 bg-[#f8fafc] relative overflow-hidden" id="solutions">
            <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-[95rem]">
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-8 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#8c9eff]/5 border border-[#8c9eff]/15 shadow-sm mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8c9eff] animate-pulse shadow-[0_0_12px_rgba(140,158,255,0.6)]" />
                        <span className="text-[12px] font-black text-[#8c9eff] uppercase tracking-[0.4em]">
                            Solutions For Team
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
                        Enterprise-Grade <span className="text-slate-500">Platform Solutions.</span>
                    </h2>

                    <p className="text-slate-500 text-[20px] leading-relaxed max-w-3xl font-medium">
                        Torro speaks the language of CISOs, data engineers, and business leaders — simultaneously.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {solutions.map((sol, i) => (
                        <SolutionCard key={i} index={i} {...sol} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
