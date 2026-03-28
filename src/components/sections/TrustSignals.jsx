import React, { useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Database, TrendingUp, Clock, BadgeCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';

/* ─── PREVIEW 1: Scale Visualization (HDFC) ─── */
const ScalePreview = () => (
    <div className="flex flex-col w-full h-full bg-slate-50 rounded-[2rem] border border-slate-100 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        <div className="flex items-center justify-between mb-4 relative z-10">
            <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#8c9eff] mb-0.5">Scale Vector</p>
                <p className="text-[17px] font-black text-slate-900 tracking-tight">Tier-1 Estate</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg transform rotate-3">
                <Database className="w-5 h-5 text-white" />
            </div>
        </div>

        <div className="space-y-4 relative z-10">
            <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-slate-500">Scan Throughput</span>
                    <span className="text-[10px] font-black text-blue-600 font-mono">14.2 PB/Day</span>
                </div>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1.5, ease: "circOut" }} className="h-full bg-blue-500" />
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 text-center">
                    <p className="text-[18px] font-black text-slate-900 leading-none mb-1">2.3M+</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Assets Found</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 text-center">
                    <p className="text-[18px] font-black text-emerald-600 leading-none mb-1">47</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Data Centers</p>
                </div>
            </div>
        </div>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2 relative z-10">
            <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono">Real-time Discovery Active</span>
        </div>
    </div>
);

/* ─── PREVIEW 2: Velocity Visualization (Deployment) ─── */
const VelocityPreview = () => (
    <div className="flex flex-col w-full h-full bg-slate-50 rounded-[2rem] border border-slate-100 p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
            <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#8c9eff] mb-0.5">Deployment Velocity</p>
                <p className="text-[17px] font-black text-slate-900 tracking-tight">3.5 Weeks to Prod</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg -rotate-3">
                <Clock className="w-5 h-5 text-white" />
            </div>
        </div>

        <div className="relative flex-1">
            <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 60">
                <path d="M0,50 Q50,45 80,20 T150,10 T200,5" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="6 4" />
                <motion.circle r="4" fill="#2563eb" initial={{ cx: 0, cy: 50 }} animate={{ cx: [0, 80, 150, 200], cy: [50, 20, 10, 5] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
            </svg>
            <div className="absolute top-0 right-0 p-3 bg-white rounded-xl border border-blue-100 shadow-sm">
                <p className="text-[20px] font-black text-blue-600 leading-none">94%</p>
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">Effort Reduction</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
             <div className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100/50 text-center">
                <span className="text-[10px] font-black text-blue-700">WEEK 1: Mapping</span>
             </div>
             <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-center shadow-md">
                <span className="text-[10px] font-black">WEEK 4: LIVE</span>
             </div>
        </div>
    </div>
);

/* ─── PREVIEW 3: Compliance Visualization (TCO) ─── */
const ComplianceVizPreview = () => (
    <div className="flex flex-col w-full h-full bg-slate-50 rounded-[2rem] border border-slate-100 p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-5">
            <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#8c9eff] mb-0.5">Economic Posture</p>
                <p className="text-[17px] font-black text-slate-900 tracking-tight">72% Lower TCO</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
            </div>
        </div>

        <div className="flex-1 flex flex-col gap-3">
             {[
                { l: 'Legacy System Cost', v: 100, c: 'bg-slate-200' },
                { l: 'Torro Deployment', v: 28, c: 'bg-blue-600' }
             ].map((item, i) => (
                <div key={item.l} className="space-y-1.5">
                    <div className="flex justify-between">
                        <span className="text-[9px] font-bold text-slate-500 uppercase leading-none">{item.l}</span>
                        <span className="text-[9px] font-black text-slate-900 leading-none">{i === 0 ? '$12M/yr' : '$3.4M/yr'}</span>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden border border-slate-100">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${item.v}%` }} transition={{ duration: 1.2, delay: i * 0.2 }} className={`h-full ${item.c}`} />
                    </div>
                </div>
             ))}
        </div>

        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <BadgeCheck className="w-4 h-4 text-white" />
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-900 leading-none mb-1">DPDP Risk Mitigated</p>
                <div className="flex items-center gap-1.5">
                    <div className="h-1 w-16 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2 }} className="h-full bg-blue-500" />
                    </div>
                    <span className="text-[9px] font-black text-blue-600 font-mono">100%</span>
                </div>
            </div>
        </div>
    </div>
);

const TrustCard = ({ index, tag, title, description, features, preview }) => {
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
            className="relative flex flex-col bg-white border border-slate-200/60 rounded-[2.5rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_72px_rgba(15,23,42,0.10)] transition-all duration-700 hover:-translate-y-2 overflow-hidden group h-[640px] p-10 cursor-default"
        >
            <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: spotlightBg }} />
            
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400">
                <ArrowUpRight className="w-5 h-5 text-blue-500/40" />
            </div>

            <div className="text-[72px] font-black text-slate-100 group-hover:text-blue-500/20 tracking-[-0.08em] leading-none mb-6 transition-colors duration-500 select-none">
                {displayIndex}
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c9eff] mb-3">{tag}</div>

            <h3 className="text-[28px] font-black text-slate-900 tracking-[-0.03em] leading-[1.1] mb-8 min-h-[5rem] flex items-start">
                {title}
            </h3>

            <div className="relative flex-1 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {!isHovered ? (
                        <motion.div key="desc" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="absolute inset-0 flex flex-col gap-6">
                            <p className="text-slate-500 text-[16px] leading-[1.8] font-medium">{description}</p>
                            <div className="space-y-3">
                                {features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-3 text-[13px] font-bold text-slate-600">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div key="preview" initial={{ opacity: 0, y: 16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -16, scale: 1.02 }} transition={{ type: 'spring', stiffness: 340, damping: 28 }} className="absolute inset-0 w-full h-full">
                            {preview}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent group-hover:w-full transition-all duration-700 rounded-b-full" />
        </motion.div>
    );
};

const TrustSignals = () => {
    const solutions = [
        {
            tag: 'Tier-1 Institutional Scale',
            title: 'Verified at ₹18 Lakh Crore Asset Scale',
            description: 'Torro AI was deployed across a leading Indian private sector bank’s hybrid estate, delivering 100% visibility of sensitive data assets in record time.',
            features: [
                '14 Petabytes daily scan volume',
                '2.3M+ Data assets discovered',
                'Real-time compliance dashboard',
                'Hybrid Cloud + On-Prem estate'
            ],
            preview: <ScalePreview />
        },
        {
            tag: 'Operational Velocity',
            title: 'From Zero to Production in 3.5 Weeks',
            description: 'Legacy governance projects take years. Torro delivers full-estate audit readiness and real-time masking policies in less than a month.',
            features: [
                'Zero-agent deployment protocol',
                'Automated discovery & tagging',
                'Immediate regulatory mapping',
                '94% Manual effort reduction'
            ],
            preview: <VelocityPreview />
        },
        {
            tag: 'Economic Efficiency',
            title: '72% Lower TCO vs Legacy Alternatives',
            description: 'Eliminate the hidden costs of manual tagging, data duplication, and multi-year consulting engagements with autonomous governance.',
            features: [
                'Eliminated DPDP risk penalties',
                'Native tool consolidation',
                'Automated policy enforcement',
                'Regulator-ready audit exports'
            ],
            preview: <ComplianceVizPreview />
        }
    ];

    return (
        <section className="py-48 bg-[#f8fafc] relative overflow-hidden" id="use-cases">
            <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-[95rem]">
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-8 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#8c9eff]/5 border border-[#8c9eff]/15 shadow-sm mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8c9eff] animate-pulse shadow-[0_0_12px_rgba(140,158,255,0.6)]" />
                        <span className="text-[12px] font-black text-[#8c9eff] uppercase tracking-[0.4em]">Proven at Scale</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
                        Real-World <span className="text-slate-500">Use Cases.</span>
                    </h2>

                    <p className="text-slate-500 text-[20px] leading-relaxed max-w-3xl font-medium">
                        Real-world validation from Tier-1 Financial Institutions who can't afford surprises.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {solutions.map((sol, i) => (
                        <TrustCard key={i} index={i} {...sol} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
