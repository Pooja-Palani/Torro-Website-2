import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Cpu, Globe, CheckCircle2, FileText, ChevronRight, Zap, Target, Activity } from 'lucide-react';

/* ─── DASHBOARD CONTENT 1: Architecture Schematic ─── */
const CatalogSchematic = () => (
    <div className="flex flex-col w-full h-full bg-[#05060f] rounded-[1.5rem] border border-[#1e2343]/50 p-4 md:p-6 relative overflow-hidden group">
        <div className="flex items-center justify-between mb-8 relative z-10">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Architecture Insight</p>
                <p className="text-[20px] font-black text-white tracking-tight leading-none">Catalog Evolution</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-indigo-400" />
            </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-6 justify-center relative z-10 max-w-md mx-auto w-full">
            <div className="flex items-center gap-4">
                <div className="flex-1 px-4 py-4 bg-[#0c0e1a] rounded-xl border border-white/5 text-center transition-colors">
                    <p className="text-[8px] font-black text-white/30 uppercase mb-2">Legacy</p>
                    <p className="text-[12px] font-bold text-white/60">Manual Tagging</p>
                </div>
                <div className="flex flex-col items-center gap-1 text-indigo-500/30">
                    <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                        <ChevronRight className="w-5 h-5" />
                    </motion.div>
                </div>
                <div className="flex-1 px-4 py-4 bg-indigo-500/90 rounded-xl text-center shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <p className="text-[8px] font-black text-white/50 uppercase mb-2">Torro AI</p>
                    <p className="text-[12px] font-bold text-white uppercase tracking-wider">Autonomous</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {[
                    { l: '100% Agentless', i: '01' },
                    { l: 'Scale Ready', i: '02' },
                    { l: 'GenAI Native', i: '03' },
                    { l: 'Zero Drift', i: '04' }
                ].map(tag => (
                    <div key={tag.l} className="flex items-center gap-3 px-4 py-3 bg-[#0c0e1a]/80 rounded-lg border border-white/5">
                        <span className="text-[9px] font-black text-indigo-400/40">{tag.i}</span>
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-tight">{tag.l}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Scan line effect */}
        <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/5 to-transparent h-1/2 w-full pointer-events-none z-0"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

/* ─── DASHBOARD CONTENT 2: Compliance Score ─── */
const ComplianceScorePreview = () => (
    <div className="flex flex-col w-full h-full bg-[#05060f] rounded-[1.5rem] border border-[#1e2343]/50 p-4 md:p-6 relative overflow-hidden text-center justify-center gap-4">
        <div className="relative">
            <svg className="w-28 h-28 mx-auto" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#1e2343" strokeWidth="6" />
                <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="#6366f1" strokeWidth="6" 
                    strokeDasharray="283" initial={{ strokeDashoffset: 283 }} 
                    animate={{ strokeDashoffset: 28 }} transition={{ duration: 1.5, ease: "easeOut" }} 
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[28px] font-black text-white leading-none">90%</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mt-1">Audit Score</span>
            </div>
        </div>
        
        <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-400/10 border border-indigo-400/20">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                <span className="text-[9px] font-black text-[#99A0F9] uppercase tracking-widest">DPDP Ready</span>
            </div>
            <p className="text-[18px] font-black text-white tracking-tight">Institutional Risk Clearance</p>
        </div>

        <div className="flex flex-col gap-1.5 px-16">
            <div className="h-1 bg-indigo-500 rounded-full w-full shadow-[0_0_10px_rgba(37,99,235,0.3)]" />
            <div className="h-1 bg-indigo-800 rounded-full w-4/5 mx-auto" />
            <div className="h-1 bg-[#1e2343] rounded-full w-1/2 mx-auto" />
        </div>
    </div>
);

/* ─── DASHBOARD CONTENT 3: Residency Map ─── */
const ResidencyPreview = () => (
    <div className="flex flex-col w-full h-full bg-[#05060f] rounded-[1.5rem] border border-[#1e2343]/50 p-4 md:p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-[#99A0F9] uppercase tracking-widest px-3 py-1 bg-[#99A0F9]/10 rounded-full border border-[#99A0F9]/20 w-fit">Sovereign Control</span>
                <p className="text-[20px] font-black text-white tracking-tight">India Sovereign Estate</p>
            </div>
            <Globe className="w-7 h-7 text-indigo-500/30" />
        </div>
        
        <div className="relative flex-1 bg-[#0c0e1a] rounded-2xl border border-white/5 overflow-hidden">
             {/* Abstract grid */}
             <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
             
             {/* Abstract map nodes */}
             {[20, 40, 60, 80].map((left, i) => (
                <motion.div 
                    key={left} initial={{ scale: 0 }} animate={{ scale: 1 }} 
                    transition={{ delay: i * 0.1 }} 
                    className="absolute w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]" 
                    style={{ left: `${left}%`, top: `${30 + i * 15}%` }} 
                />
             ))}
             
             <div className="absolute inset-0 flex items-center justify-center p-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#11152a]/90 backdrop-blur-md p-5 rounded-xl border border-indigo-400/20 text-center shadow-2xl"
                >
                    <p className="text-[12px] font-black text-white leading-tight mb-2 uppercase tracking-wide">PostgreSQL @ Mumbai</p>
                    <div className="flex items-center gap-2 justify-center">
                         <CheckCircle2 className="w-3.5 h-3.5 text-[#99A0F9]" />
                         <span className="text-[9px] font-black text-[#99A0F9] uppercase tracking-widest">Certified Resident</span>
                    </div>
                </motion.div>
             </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">
            <span>Authenticated 4.2k Nodes</span>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(37,99,235,1)]" />
                <span className="text-white/60">Locked ✓</span>
            </div>
        </div>
    </div>
);

const IntelligenceHub = () => {
    const [activePillar, setActivePillar] = useState(0);
    const sectionRef = useRef(null);
    const NUM_PILLARS = 3;

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scrollableDistance = rect.height - viewportHeight;
            const scrolledDistance = -rect.top;

            if (scrolledDistance >= 0 && scrolledDistance <= scrollableDistance) {
                const progress = scrolledDistance / scrollableDistance;
                const idx = Math.min(Math.floor(progress * NUM_PILLARS), NUM_PILLARS - 1);
                setActivePillar(idx);
            } else if (scrolledDistance < 0) {
                setActivePillar(0);
            } else if (scrolledDistance > scrollableDistance) {
                setActivePillar(NUM_PILLARS - 1);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlePillarClick = (idx) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const scrollableDistance = rect.height - window.innerHeight;
        const targetScroll = absoluteTop + scrollableDistance * (idx / (NUM_PILLARS - 1));
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    const pillars = [
        {
            title: 'Technical Strategy',
            label: 'Why Legacy Catalogs Fail',
            desc: 'Manual tagging is an active liability for AI adoption. Torro uses autonomous ML to classify exabyte-scale data in real-time.',
            viz: <CatalogSchematic />
        },
        {
            title: 'Compliance Roadmap',
            label: 'Institutional DPDP Clearance',
            desc: 'Compliance is embedded directly into the data layer. Automate policy enforcement with zero performance overhead.',
            viz: <ComplianceScorePreview />
        },
        {
            title: 'BFSI Playbook',
            label: 'Sovereign Control Estates',
            desc: 'Map and govern 100% of your Indian data estate. Maintain absolute residency control across multi-cloud deployments.',
            viz: <ResidencyPreview />
        }
    ];

    return (
        <section ref={sectionRef} className="bg-[#0c0e1a] text-white relative border-t border-white/5 h-[400vh]" id="resources">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-4">
                {/* Ambient background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[105rem] w-full">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-12 space-y-6 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-[#99A0F9]/10 border border-[#99A0F9]/20 shadow-[0_0_20px_rgba(140,158,255,0.1)]">
                        <BookOpen className="w-3.5 h-3.5 text-[#99A0F9]" />
                        <span className="text-[12px] font-black text-[#99A0F9] uppercase tracking-[0.4em]">Intelligence Console</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                        Boardroom <span className="text-[#99A0F9]">Insights.</span>
                    </h2>
                </div>

                {/* Main Console Card */}
                <div className="relative bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343] rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col lg:flex-row min-h-[480px] w-full">
                    
                    {/* Left Panel (38%) */}
                    <div className="lg:w-[38%] p-6 lg:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0f1225]/40 relative z-10">
                        <div className="flex-1 space-y-4 flex flex-col items-center text-center">
                            <div className="flex flex-col items-center">
                                <h3 className="text-[22px] font-black text-white tracking-tight leading-none mb-4">Strategic Deep-Dives</h3>
                                <p className="text-[14px] text-white/40 font-medium leading-relaxed max-w-sm">
                                    Autonomous intelligence reports tailored for leadership. Select an estate pillar to scan current research schematics.
                                </p>
                            </div>

                            {/* Pillar Navigation */}
                            <div className="flex flex-col gap-3 w-full max-w-md">
                                {pillars.map((p, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePillarClick(i)}
                                        className={`group relative flex flex-col items-center p-5 rounded-2xl text-center transition-all duration-500 border ${
                                            activePillar === i 
                                            ? 'bg-gradient-to-r from-[#1e2343] to-[#151930] border-indigo-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.2)]' 
                                            : 'bg-[#0c0e1a]/40 border-transparent hover:border-white/10'
                                        }`}
                                    >
                                        <div className="flex items-center justify-center gap-2 mb-2 w-full">
                                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${activePillar === i ? 'text-indigo-400' : 'text-white/20'}`}>0{i + 1} — {p.title}</span>
                                        </div>
                                        <p className={`text-[15px] font-black tracking-tight ${activePillar === i ? 'text-white' : 'text-white/40'}`}>{p.label}</p>
                                        {activePillar === i && (
                                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-[13px] text-white/30 font-medium mt-3 leading-relaxed">
                                                {p.desc}
                                            </motion.p>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="pt-8 mt-8 border-t border-white/5 flex justify-center w-full">
                             <a href="#" className="flex items-center justify-between gap-6 px-8 py-3.5 bg-indigo-500 rounded-xl group overflow-hidden relative shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all">
                                <span className="text-white text-[12px] font-black uppercase tracking-[0.2em] relative z-10">Get Full PDF Playbook</span>
                                <FileText className="w-4 h-4 text-white/80 relative z-10" />
                                <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                             </a>
                        </div>
                    </div>

                    {/* Right Panel (58%) */}
                    <div className="flex-1 p-10 lg:p-14 relative bg-[#05060f]/60">
                        {/* Mesh grid over the dashboard */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                            <svg className="w-full h-full">
                                <pattern id="darkmesh" width="30" height="30" patternUnits="userSpaceOnUse">
                                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#darkmesh)" />
                            </svg>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePillar}
                                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.02, y: -15 }}
                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                className="w-full h-full relative z-10"
                            >
                                {pillars[activePillar].viz}
                            </motion.div>
                        </AnimatePresence>

                        {/* Status bar */}
                        <div className="absolute bottom-6 right-10 flex items-center gap-6">
                             <div className="flex gap-1">
                                {[0, 1, 2].map(i => (
                                    <div key={i} className={`w-1 h-3 rounded-full transition-all duration-300 ${i === activePillar ? 'bg-indigo-500 h-4' : 'bg-white/10'}`} />
                                ))}
                             </div>
                             <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/5">
                                <Activity className="w-3 h-3 text-indigo-400" />
                                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Live Engine Feed</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default IntelligenceHub;
