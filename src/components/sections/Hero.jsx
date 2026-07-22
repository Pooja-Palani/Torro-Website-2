import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Shield, Cloud, BarChart2, Settings, Lock, Cpu, Globe } from 'lucide-react';

const ACCENT = '#99A0F9';

const HERO_VERBS = ['Govern', 'Protect', 'Accelerate', 'Manage', 'Observe'];
const VERB_INTERVAL_MS = 4200;
const VERB_EASE = [0.22, 1, 0.36, 1];
const VERB_TRANSITION = { duration: 0.55, ease: VERB_EASE };
const WIDTH_TRANSITION = { duration: 0.5, ease: VERB_EASE };

const orbitLabel = 'text-[7px] font-black uppercase tracking-[0.12em] text-white/65 text-center leading-tight lg:text-[9px] max-w-[88px]';

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
        <motion.span
            layout="size"
            transition={{ layout: WIDTH_TRANSITION }}
            className="relative inline-grid align-baseline text-[#99A0F9]"
            aria-live="polite"
            aria-atomic="true"
        >
            <span className="sr-only">{`${activeVerb} Enterprise Data At Scale`}</span>
            <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
                {activeVerb}
            </span>
            <span className="relative col-start-1 row-start-1 h-[1.15em] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={activeVerb}
                        initial={{ y: '108%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-108%', opacity: 0 }}
                        transition={VERB_TRANSITION}
                        className="absolute left-0 top-0 block whitespace-nowrap will-change-transform"
                    >
                        {activeVerb}
                    </motion.span>
                </AnimatePresence>
            </span>
        </motion.span>
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
        <section className="relative isolate flex w-full min-h-[100svh] min-h-[100dvh] items-center overflow-x-clip bg-black px-0 py-8 pt-[calc(var(--header-height)+1rem)] text-white sm:py-10 sm:pt-[calc(var(--header-height)+1.25rem)] lg:pt-[calc(var(--header-height)+1.5rem)]">
            {/* Starry/Node background effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.15)_0,transparent_100%)]" />
                <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 tablet:px-10 lg:max-w-7xl lg:px-8">
                {/* Stacked &lt;900 · side-by-side from Surface Pro / desk (900+) */}
                <div className="flex w-full flex-col items-stretch gap-6 sm:gap-8 tablet:gap-7 desk:flex-row desk:items-center desk:gap-5 lg:gap-10 xl:gap-12">
                    <div className="box-copy flex w-full min-w-0 flex-col justify-center space-y-4 text-left sm:space-y-5 tablet:space-y-4 desk:w-[46%] desk:shrink-0 desk:space-y-3.5 lg:w-1/2 lg:space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="!mx-0 !text-left text-[clamp(2.85rem,12.5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-[clamp(2.85rem,6vw,3.4rem)] tablet:text-[clamp(2.9rem,4.6vw,3.5rem)] desk:text-[clamp(2.35rem,3.4vw,2.85rem)] lg:text-5xl xl:text-5xl 2xl:text-6xl"
                        >
                            Command{' '}
                            <span className="whitespace-normal desk:whitespace-nowrap" style={{ color: ACCENT }}>
                              Data Leadership
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.08 }}
                            className="!mx-0 max-w-3xl !text-left text-[clamp(1.65rem,6.8vw,2.15rem)] font-bold leading-[1.15] tracking-tight text-white sm:text-[clamp(1.55rem,3.5vw,2rem)] tablet:text-[clamp(1.7rem,2.8vw,2.15rem)] desk:text-[clamp(1.25rem,2.1vw,1.65rem)] lg:text-3xl"
                            role="doc-subtitle"
                        >
                            <LayoutGroup id="hero-verb-line">
                                <span className="inline-flex flex-wrap items-baseline gap-x-[0.28em] gap-y-1">
                                    <HeroVerbCarousel />
                                    <motion.span
                                        layout
                                        transition={{ layout: WIDTH_TRANSITION }}
                                        className="desk:whitespace-nowrap"
                                    >
                                        Enterprise Data{' '}
                                        <span style={{ color: ACCENT }}>At Scale</span>
                                    </motion.span>
                                </span>
                            </LayoutGroup>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.16 }}
                            className="!mx-0 max-w-2xl !text-left pt-1 text-[15px] leading-relaxed text-gray-300 sm:text-base tablet:text-[17px] desk:text-[15px] desk:leading-snug lg:text-lg"
                        >
                            The Unified Data Operating System for Enterprise Grade Governance, Compliance and Secure Analytics.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex w-full flex-col items-stretch gap-3 pt-1 tablet:flex-row tablet:items-center tablet:gap-4 desk:w-full desk:flex-col desk:items-stretch desk:gap-2.5 lg:w-auto lg:flex-row lg:items-center lg:gap-4"
                        >
                            <Link
                                to="/book-demo"
                                className="z-20 w-full whitespace-nowrap rounded-full px-6 py-3.5 text-center text-[14px] font-bold text-black shadow-[0_14px_34px_-18px_rgba(153,160,249,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-95 tablet:w-auto tablet:px-8 tablet:text-[15px] desk:w-full desk:px-6 desk:py-3 lg:w-auto lg:px-8 lg:py-3.5"
                                style={{ backgroundColor: ACCENT }}
                            >
                                Book a Demo
                            </Link>
                            <Link
                                to="/torro-onedata"
                                className="z-20 w-full whitespace-nowrap rounded-full border px-6 py-3.5 text-center text-[13px] font-bold text-white transition-all duration-300 active:scale-95 tablet:w-auto tablet:px-8 tablet:text-[14px] desk:w-full desk:px-6 desk:py-3 lg:w-auto lg:px-8 lg:py-3.5"
                                style={{
                                    border: `1px solid rgba(153,160,249,0.35)`,
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                }}
                            >
                                Explore the Platform
                            </Link>
                        </motion.div>
                    </div>

                    {/* Visual — stacked below copy until desk; beside copy from 900px */}
                    <div className="relative mt-1 flex w-full min-w-0 justify-center overflow-hidden desk:mt-0 desk:w-[54%] desk:justify-end lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="group relative flex aspect-square w-full max-w-[min(100%,320px)] flex-col items-center justify-end tablet:max-w-[460px] desk:max-w-[min(100%,400px)] lg:max-w-[560px] xl:max-w-[650px]"
                        >
                            {/* Animated SVG Orbital lines Background */}
                            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                                <svg className="h-full w-full" viewBox="0 0 500 500">
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

                            {/* Orbit 1 — Data Quality */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                                className="absolute left-[24%] top-[20%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 tablet:left-[20%] tablet:top-[18%] desk:left-[18%] lg:left-[22%] lg:top-[22%]"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md tablet:h-10 tablet:w-10 desk:h-9 desk:w-9 lg:h-14 lg:w-14">
                                    <Cloud className="h-3.5 w-3.5 text-primary tablet:h-4 tablet:w-4 lg:h-6 lg:w-6" />
                                </div>
                                <span className={`${orbitLabel} hidden tablet:block desk:hidden lg:block`}>Data Quality</span>
                            </motion.div>

                            {/* Orbit 1 — Data Stewardship */}
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute left-[70%] top-[58%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 tablet:left-[70%] tablet:top-[60%] lg:left-[72%] lg:top-[62%]"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md tablet:h-9 tablet:w-9 desk:h-8 desk:w-8 lg:h-12 lg:w-12">
                                    <Cpu className="h-3.5 w-3.5 text-primary tablet:h-4 tablet:w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className={`${orbitLabel} hidden lg:block`}>Data Stewardship</span>
                            </motion.div>

                            {/* Orbit 2 — Data Visibility */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                                className="absolute left-[72%] top-[22%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 tablet:left-[74%] tablet:top-[20%] desk:left-[76%] lg:left-[74%] lg:top-[24%]"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md tablet:h-11 tablet:w-11 desk:h-10 desk:w-10 lg:h-16 lg:w-16">
                                    <BarChart2 className="h-4 w-4 text-accent tablet:h-5 tablet:w-5 lg:h-7 lg:w-7" />
                                </div>
                                <span className={`${orbitLabel} hidden tablet:block desk:hidden lg:block`}>Data Visibility</span>
                            </motion.div>

                            {/* Orbit 3 — Policies & Compliance */}
                            <motion.div
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 2 }}
                                className="absolute left-[78%] top-[48%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 tablet:left-[80%] tablet:top-[48%] desk:left-[82%] lg:left-[90%] lg:top-[50%]"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md tablet:h-10 tablet:w-10 desk:h-9 desk:w-9 lg:h-14 lg:w-14">
                                    <Settings className="h-3.5 w-3.5 text-primary tablet:h-4 tablet:w-4 lg:h-6 lg:w-6" />
                                </div>
                                <span className={`${orbitLabel} hidden xl:block`}>Policies &amp; Compliance</span>
                            </motion.div>

                            {/* Orbit 3 — Data Access */}
                            <motion.div
                                animate={{ y: [3, -3, 3] }}
                                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 2.5 }}
                                className="absolute left-[18%] top-[48%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 tablet:left-[14%] tablet:top-[48%] desk:left-[16%] lg:left-[10%] lg:top-[50%]"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-[#1e1a38]/90 shadow-[0_0_20px_rgba(153,160,249,0.3)] backdrop-blur-md tablet:h-9 tablet:w-9 desk:h-8 desk:w-8 lg:h-12 lg:w-12">
                                    <Globe className="h-3.5 w-3.5 text-primary tablet:h-4 tablet:w-4 lg:h-5 lg:w-5" />
                                </div>
                                <span className={`${orbitLabel} hidden tablet:block desk:hidden lg:block`}>Data Access</span>
                            </motion.div>

                            {/* Main Shield */}
                            <div className="relative z-20 mb-2 translate-y-2 transition-transform duration-700 group-hover:translate-y-1 tablet:mb-3 tablet:translate-y-4 desk:mb-2 desk:translate-y-3 lg:mb-5 lg:translate-y-6 xl:mb-[20px] xl:translate-y-8">
                                <div className="absolute inset-0 rounded-full bg-[#99A0F9]/30 blur-3xl" />
                                <Shield className="relative z-10 h-28 w-28 stroke-[1] text-primary drop-shadow-[0_0_40px_rgba(153,160,249,0.5)] tablet:h-52 tablet:w-52 desk:h-44 desk:w-44 lg:h-60 lg:w-60 xl:h-72 xl:w-72" />
                                <Lock className="absolute top-1/2 left-1/2 z-20 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-primary opacity-90 drop-shadow-md tablet:h-11 tablet:w-11 desk:h-10 desk:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16" />
                            </div>

                            {/* Lakehouse base — Torro brand trio: red · lavender · gold */}
                            <div className="group relative z-10 mt-2 h-[100px] w-full max-w-[480px] tablet:mt-4 tablet:h-[150px] desk:mt-3 desk:h-[130px] lg:mt-6 lg:h-[165px] xl:mt-8 xl:h-[190px]">
                                <div className="absolute inset-x-10 top-[62%] z-0 h-[40%] rounded-[100%] bg-[#E06365]/15 blur-[36px]" />

                                {/* Base — Torro red #E06365 */}
                                <div className="absolute inset-x-0 top-[48%] z-[11] h-[46%] sm:inset-x-[-2%]">
                                    <div className="absolute inset-x-0 top-[28%] h-[72%] rounded-[100%] border-b border-[#E06365]/30 bg-gradient-to-b from-[#1a0e10] to-[#080406] shadow-[0_28px_40px_rgba(0,0,0,0.85)]" />
                                    <div className="absolute inset-x-0 top-[28%] h-[28%] border-x border-[#E06365]/25 bg-gradient-to-b from-[#2a1418] to-[#12080a]" />
                                    <div className="absolute inset-x-0 top-0 h-[56%] overflow-hidden rounded-[100%] border border-[#E06365]/45 bg-gradient-to-b from-[#4a2028] to-[#1a0e12]">
                                        <div
                                            className="absolute inset-0 opacity-55"
                                            style={{
                                                backgroundImage:
                                                    'radial-gradient(ellipse at 50% 40%, rgba(224,99,101,0.28) 0%, transparent 55%), repeating-radial-gradient(ellipse at 50% 50%, transparent 0 10px, rgba(224,99,101,0.16) 10px 11px)',
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Mid — Torro lavender #99A0F9 */}
                                <div className="absolute inset-x-[7%] top-[26%] z-[12] h-[38%]">
                                    <div className="absolute inset-x-0 top-[28%] h-[72%] rounded-[100%] border-b border-[#99A0F9]/30 bg-gradient-to-b from-[#161a32] to-[#080a14] shadow-[0_20px_32px_rgba(0,0,0,0.7)]" />
                                    <div className="absolute inset-x-0 top-0 h-[56%] overflow-hidden rounded-[100%] border border-[#99A0F9]/50 bg-gradient-to-b from-[#3a4280] to-[#181c38] shadow-[inset_0_2px_18px_rgba(153,160,249,0.2)]">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(153,160,249,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(153,160,249,0.16)_1px,transparent_1px)] bg-[size:0.8rem_0.5rem] opacity-80" />
                                    </div>
                                </div>

                                {/* Crown — Torro gold #F8BD64 */}
                                <div className="absolute inset-x-[16%] top-0 z-[13] h-[36%]">
                                    <div className="absolute inset-x-0 top-[28%] h-[72%] rounded-[100%] border-b border-[#F8BD64]/35 bg-gradient-to-b from-[#1c160c] to-[#08060a] shadow-[0_16px_28px_rgba(0,0,0,0.65)]" />
                                    <div className="absolute inset-x-0 top-0 h-[56%] overflow-hidden rounded-[100%] border border-[#F8BD64]/55 bg-gradient-to-b from-[#4a3a16] to-[#1a140c] shadow-[inset_0_2px_18px_rgba(248,189,100,0.22)]">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,189,100,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,189,100,0.12)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-80" />
                                        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-br from-[#F8BD64]/35 via-[#99A0F9]/12 to-transparent blur-[16px]" />
                                        <div className="absolute left-1/2 top-1/2 h-[42%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-[#F8BD64]/40 opacity-70" />
                                        <div className="absolute left-1/2 top-1/2 h-[24%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-[#F8BD64]/60 opacity-80" />
                                    </div>
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
