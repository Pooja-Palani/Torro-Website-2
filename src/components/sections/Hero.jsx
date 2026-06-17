import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cloud, BarChart2, Settings, Lock, Cpu, Globe } from 'lucide-react';

const ACCENT = '#99A0F9';

const HERO_VERBS = ['Observe', 'Manage', 'Protect', 'Accelerate'];
const VERB_INTERVAL_MS = 4200;
const VERB_TRANSITION = { duration: 0.75, ease: [0.22, 1, 0.36, 1] };

const orbitLabel = 'text-[8px] font-black uppercase tracking-[0.14em] text-white/65 text-center leading-tight md:text-[9px] max-w-[92px]';

const HeroVerbCarousel = () => {
    const [verbIndex, setVerbIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVerbIndex((current) => (current + 1) % HERO_VERBS.length);
        }, VERB_INTERVAL_MS);
        return () => clearInterval(timer);
    }, []);

    const activeVerb = HERO_VERBS[verbIndex];

    return (
        <span className="relative inline-grid align-bottom text-[#99A0F9]" aria-live="polite" aria-atomic="true">
            <span className="sr-only">{`${activeVerb} Enterprise Data At Scale`}</span>
            {/* Sizing ghost — width matches longest verb without leaving empty inline space */}
            <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
                Accelerate
            </span>
            <span className="relative col-start-1 row-start-1 h-[1.1em] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={activeVerb}
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={VERB_TRANSITION}
                        className="absolute left-0 top-0 block whitespace-nowrap"
                    >
                        {activeVerb}
                    </motion.span>
                </AnimatePresence>
            </span>
        </span>
    );
};

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
        <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-black px-4 pb-16 pt-24 text-white lg:min-h-[88vh] lg:pt-28">
            {/* Starry/Node background effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.15)_0,transparent_100%)]" />
                <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
                    {/* Left Content */}
                    <div className="w-full space-y-3 text-left lg:w-1/2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="!text-left text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.35rem] lg:leading-[1.06]"
                        >
                            Command{' '}
                            <span style={{ color: ACCENT }}>Data Leadership</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.08 }}
                            className="!mx-0 flex max-w-2xl flex-wrap items-baseline gap-x-2 !text-left text-xl font-bold leading-[1.2] tracking-tight text-white md:text-2xl lg:text-3xl"
                            role="doc-subtitle"
                        >
                            <HeroVerbCarousel />
                            <span>
                                Enterprise Data{' '}
                                <span style={{ color: ACCENT }}>At Scale</span>
                            </span>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.16 }}
                            className="!mx-0 max-w-xl !text-left pt-1 text-base leading-relaxed text-gray-300 md:text-lg"
                        >
                            A RegTech platform that enforces real-time PII protection, automates compliance, and delivers full
                            visibility across hybrid data environments.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center"
                        >
                            <button
                                className="z-20 whitespace-nowrap rounded-full px-8 py-3.5 text-[15px] font-bold text-black shadow-[0_14px_34px_-18px_rgba(153,160,249,0.55)] transition-all duration-300 hover:scale-[1.05] active:scale-95"
                                style={{ backgroundColor: ACCENT }}
                                type="button"
                            >
                                Book a Demo
                            </button>
                            <button
                                className="z-20 whitespace-nowrap rounded-full border px-8 py-3.5 text-[14px] font-bold text-white transition-all duration-300 active:scale-95"
                                style={{
                                    border: `1px solid rgba(153,160,249,0.35)`,
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                }}
                                type="button"
                            >
                                Explore the Platform
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Visual (Shield & Platform) */}
                    <div className="relative mt-12 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="group relative flex aspect-square w-full max-w-[650px] flex-col items-center justify-end"
                        >
                            {/* Animated SVG Orbital lines Background */}
                            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                                <svg className="h-full w-full" viewBox="0 0 500 500">
                                    <g className="origin-center animate-[spin_40s_linear_infinite]">
                                        <circle
                                            cx="250"
                                            cy="250"
                                            r="140"
                                            fill="none"
                                            stroke="currentColor"
                                            className="text-primary/40"
                                            strokeWidth="1"
                                            strokeDasharray="3 8"
                                        />
                                    </g>
                                    <g className="origin-center animate-[spin_50s_linear_infinite_reverse]">
                                        <circle
                                            cx="250"
                                            cy="250"
                                            r="185"
                                            fill="none"
                                            stroke="currentColor"
                                            className="text-accent/30"
                                            strokeWidth="1"
                                            strokeDasharray="4 10"
                                        />
                                    </g>
                                    <g className="origin-center animate-[spin_60s_linear_infinite]">
                                        <circle
                                            cx="250"
                                            cy="250"
                                            r="230"
                                            fill="none"
                                            stroke="currentColor"
                                            className="text-primary/20"
                                            strokeWidth="1"
                                            strokeDasharray="4 12"
                                        />
                                    </g>
                                </svg>
                            </div>

                            {/* Orbit 1 (r=140) — Data Quality */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                                className="absolute left-[30%] top-[30%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md">
                                    <Cloud className="h-6 w-6 text-primary" />
                                </div>
                                <span className={orbitLabel}>Data Quality</span>
                            </motion.div>

                            {/* Orbit 1 — Data Stewardship */}
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute left-[70%] top-[70%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md">
                                    <Cpu className="h-5 w-5 text-primary" />
                                </div>
                                <span className={orbitLabel}>Data Stewardship</span>
                            </motion.div>

                            {/* Orbit 2 (r=185) — Data Visibility */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                                className="absolute left-[76%] top-[24%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md">
                                    <BarChart2 className="h-7 w-7 text-accent" />
                                </div>
                                <span className={orbitLabel}>Data Visibility</span>
                            </motion.div>

                            {/* Orbit 3 — Policies & Compliance */}
                            <motion.div
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 2 }}
                                className="absolute left-[96%] top-[50%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md">
                                    <Settings className="h-6 w-6 text-primary" />
                                </div>
                                <span className={orbitLabel}>Policies &amp; Compliance</span>
                            </motion.div>

                            {/* Orbit 3 — Data Access */}
                            <motion.div
                                animate={{ y: [3, -3, 3] }}
                                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 2.5 }}
                                className="absolute left-[4%] top-[50%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md">
                                    <Globe className="h-5 w-5 text-primary" />
                                </div>
                                <span className={orbitLabel}>Data Access</span>
                            </motion.div>

                            {/* Main Shield */}
                            <div className="relative z-20 mb-[20px] translate-y-8 transition-transform duration-700 group-hover:translate-y-2">
                                <div className="absolute inset-0 rounded-full bg-[#99A0F9]/30 blur-3xl" />
                                <Shield className="relative z-10 h-72 w-72 stroke-[1] text-primary drop-shadow-[0_0_40px_rgba(153,160,249,0.5)]" />
                                <Lock className="absolute left-1/2 top-1/2 z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-primary opacity-90 drop-shadow-md" />
                            </div>

                            {/* Professional Isometric Disk Base */}
                            <div className="group relative z-10 mt-8 h-[160px] w-full max-w-[480px]">
                                <div className="absolute inset-x-8 top-[80px] z-0 h-[70px] rounded-[100%] bg-primary/10 blur-[30px]" />
                                <div className="absolute inset-x-0 top-[50px] z-10 h-[100px] rounded-[100%] border-b border-primary/10 bg-gradient-to-b from-[#131024] to-[#05040a] shadow-[0_40px_60px_rgba(0,0,0,0.95)]" />
                                <div className="absolute inset-x-0 top-[50px] z-10 flex h-[50px] items-center justify-center border-x border-primary/10 bg-gradient-to-b from-[#18142e] to-[#0a0715]">
                                    <span className="absolute top-[12px] z-20 text-[20px] font-medium tracking-wide text-[#e2e8f0] drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:text-accent">
                                        Torro OneData Platform
                                    </span>
                                </div>
                                <div className="absolute inset-x-0 top-0 z-20 flex h-[100px] items-center justify-center overflow-hidden rounded-[100%] border border-primary/20 bg-gradient-to-b from-[#251e40] to-[#120e24] shadow-[inset_0_2px_15px_rgba(153,160,249,0.05)]">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(153,160,249,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(153,160,249,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-80" />
                                    <div className="absolute h-[60%] w-[60%] rounded-[100%] bg-gradient-to-r from-primary/15 to-accent/15 blur-[25px]" />
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
                className="pointer-events-none absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2"
            >
                <div className="flex h-[36px] w-[24px] justify-center rounded-full border-2 border-white/20 p-1">
                    <motion.div
                        className="h-[6px] w-[3px] rounded-full bg-gradient-to-b from-white to-white/50"
                        animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-opacity">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
