import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Shield, Cloud, BarChart2, Settings, Lock, Unlock, Cpu, Globe } from 'lucide-react';

const Hero = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-black text-white min-h-[92vh] flex items-center">
            {/* Starry/Node background effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,150,0.15)_0,transparent_100%)]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
                {/* Simulated stars */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen" />
                {/* Faint Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-8 text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] !text-left"
                        >
                            Control{' '}
                            <motion.span 
                                className="inline-block cursor-default transition-all duration-300 hover:scale-[1.05] hover:text-[#60a5fa] hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]"
                            >
                                Enterprise Data
                            </motion.span>
                            <br /> 
                            <span className="text-slate-500">at Scale!</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-lg text-gray-300 leading-relaxed max-w-xl !text-left !mx-0"
                        >
                            A RegTech platform that enforces real-time PII protection, automates compliance, and delivers full visibility across hybrid data environments.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center gap-10 pt-4"
                        >
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-1">93%</div>
                                    <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Efficiency Gain</div>
                                </div>
                                <div>
                                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-1">85%</div>
                                    <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Risk Reduction</div>
                                </div>
                            </div>

                             <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                                <button className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-[15px] transition-all duration-300 hover:bg-gray-100 hover:scale-[1.05] active:scale-95 whitespace-nowrap z-20">
                                    Book a Demo
                                </button>
                                <button className="px-8 py-3.5 rounded-full border border-white/40 text-white font-bold text-[14px] hover:bg-white/10 transition-all duration-300 whitespace-nowrap active:scale-95 z-20">
                                    Explore the Platform
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual (Shield & Platform) */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative w-full max-w-[650px] aspect-square flex flex-col items-center justify-end group"
                        >
                            {/* Animated SVG Orbital lines Background */}
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
                                <svg className="w-full h-full" viewBox="0 0 500 500">
                                    <g className="origin-center animate-[spin_40s_linear_infinite]">
                                        <circle cx="250" cy="250" r="140" fill="none" stroke="currentColor" className="text-primary/40" strokeWidth="1" strokeDasharray="3 8" />
                                    </g>
                                    <g className="origin-center animate-[spin_50s_linear_infinite_reverse]">
                                        <circle cx="250" cy="250" r="185" fill="none" stroke="currentColor" className="text-accent/30" strokeWidth="1" strokeDasharray="4 10" />
                                    </g>
                                    <g className="origin-center animate-[spin_60s_linear_infinite]">
                                        <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" className="text-primary/20" strokeWidth="1" strokeDasharray="4 12" />
                                    </g>
                                </svg>
                            </div>

                            {/* Floating Icons Exact Placement */}

                            {/* Orbit 1 (r=140) */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute left-[30%] top-[30%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#1e2343]/90 border border-primary/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(148,164,244,0.3)] z-30"
                            >
                                <Cloud className="w-6 h-6 text-primary" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute left-[70%] top-[70%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e2343]/90 border border-primary/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(148,164,244,0.3)] z-30"
                            >
                                <Cpu className="w-5 h-5 text-primary" />
                            </motion.div>

                            {/* Orbit 2 (r=185) */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute left-[76%] top-[24%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#1e2343]/90 border border-primary/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(148,164,244,0.3)] z-30"
                            >
                                <BarChart2 className="w-7 h-7 text-accent" />
                            </motion.div>

                            {/* Orbit 3 (r=230) */}
                            <motion.div
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                                className="absolute left-[96%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#1e2343]/90 border border-primary/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(148,164,244,0.3)] z-30"
                            >
                                <Settings className="w-6 h-6 text-primary" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [3, -3, 3] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2.5 }}
                                className="absolute left-[4%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e2343]/90 border border-primary/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(148,164,244,0.3)] z-30"
                            >
                                <Globe className="w-5 h-5 text-primary" />
                            </motion.div>

                            {/* Main Shield */}
                            <div className="relative z-20 mb-[20px] translate-y-8 group-hover:translate-y-2 transition-transform duration-700">
                                <div className="absolute inset-0 bg-[#3b82f6]/40 blur-3xl rounded-full" />
                                <Shield className="w-72 h-72 text-primary drop-shadow-[0_0_40px_rgba(148,164,244,0.4)] z-10 relative stroke-[1]" />
                                {/* Static Lock */}
                                <Lock className="w-16 h-16 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-90 drop-shadow-md" />
                            </div>

                            {/* Professional Isometric Disk Base */}
                            <div className="relative z-10 w-full max-w-[480px] mt-8 group h-[160px]">
                                {/* Deep Ambient Shadow underneath */}
                                <div className="absolute top-[80px] inset-x-8 h-[70px] bg-primary/5 blur-[30px] rounded-[100%] z-0" />

                                {/* Bottom Base Curve (Lower Ellipse) */}
                                <div className="absolute top-[50px] inset-x-0 h-[100px] bg-gradient-to-b from-[#0a0d1c] to-[#020308] rounded-[100%] border-b border-white/5 shadow-[0_40px_60px_rgba(0,0,0,0.95)] z-10" />

                                {/* Middle Bridge (Cylinder Body) */}
                                <div className="absolute top-[50px] inset-x-0 h-[50px] bg-gradient-to-b from-[#0c0f22] to-[#060813] border-x border-primary/10 z-10 flex items-center justify-center">
                                    <span className="text-[#e2e8f0] font-medium text-[20px] tracking-wide absolute top-[12px] z-20 transition-all duration-300 group-hover:text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">Torro OneData Platform</span>
                                </div>

                                {/* Top Surface Lid (Upper Ellipse) */}
                                <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-[#111633] to-[#0a0d1c] rounded-[100%] border border-primary/20 z-20 shadow-[inset_0_2px_15px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden">
                                    {/* Subtle top grid mapped directly to the ellipse */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,164,244,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,164,244,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-80" />
                                    {/* Shield reflection glow */}
                                    <div className="absolute w-[60%] h-[60%] bg-gradient-to-r from-primary/10 to-accent/10 blur-[25px] rounded-[100%]" />
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: hasScrolled ? 0 : 1, y: hasScrolled ? 10 : 0 }}
                transition={{ delay: hasScrolled ? 0 : 3, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30"
            >
                <div className="w-[24px] h-[36px] rounded-full border-2 border-white/20 flex justify-center p-1">
                    <motion.div 
                        className="w-[3px] h-[6px] bg-white rounded-full bg-gradient-to-b from-white to-white/50"
                        animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                </div>
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] transition-opacity">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
