import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Compliance = () => {
    const ACCENT = '#99A0F9';

    return (
        <section className="bg-[#0c0e1a] text-white relative border-t border-white/5 pt-32 pb-32" id="compliance">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.08)_0%,transparent_55%)] pointer-events-none" />

            <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[105rem]">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-24 space-y-6"
                >
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#99A0F9]/10 border border-[#99A0F9]/20 shadow-[0_0_22px_rgba(153,160,249,0.10)]">
                        <Shield className="w-4 h-4" style={{ color: ACCENT }} />
                        <span className="text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                            Compliance
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                        Navigate Global Mandates with <span style={{ color: ACCENT }}>Absolute Accountability</span>
                    </h1>
                    
                    <p className="text-[16px] text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
                        The unified operating system to enforce active compliance and generate audit-ready evidence across your hybrid estate.
                    </p>
                </motion.div>

                {/* Tier-1 Proof Section */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: '-120px' }}
                    className="mb-24"
                >
                    <div className="text-center mb-10 space-y-4">
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/35">
                            In Production
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                            Proven at <span style={{ color: ACCENT }}>Tier‑1 Scale</span>
                        </h2>
                    </div>

                    <div className="mx-auto max-w-[88rem]">
                        <div className="group relative bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-3xl overflow-hidden shadow-[0_18px_60px_-28px_rgba(0,0,0,0.75)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(153,160,249,0.10)_0%,transparent_55%)] opacity-60 pointer-events-none" />

                            <div className="relative z-10 p-8 md:p-10">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span
                                        className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider border"
                                        style={{
                                            backgroundColor: 'rgba(153,160,249,0.12)',
                                            borderColor: 'rgba(153,160,249,0.25)',
                                            color: 'rgba(153,160,249,0.95)',
                                        }}
                                    >
                                        BFSI
                                    </span>
                                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/35">
                                    Production Case Study
                                </span>
                            </div>

                            <h3 className="text-[22px] md:text-[26px] font-black tracking-tight text-white mb-2">
                                HDFC Framework: Full Production Data Governance at Tier‑1 Scale
                            </h3>
                            <p className="text-[13px] text-white/45 font-medium mb-4">
                                Leading Indian Private Sector Bank
                            </p>
                            <p className="text-[14px] md:text-[15px] text-white/55 leading-relaxed font-medium max-w-4xl">
                                A leading Indian private sector bank with ₹18 lakh crore in assets deployed Torro AI across their hybrid estate — covering 47 data centers, 3 cloud providers, and 2,300+ data systems. Within 3.5 weeks, 100% sensitive data visibility was achieved, automated DPDP compliance reporting was live, and the bank’s audit committee received its first-ever real-time compliance posture dashboard.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="/case-studies"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[12px] font-black text-black uppercase tracking-[0.22em] transition-colors"
                                    style={{
                                        backgroundColor: ACCENT,
                                    }}
                                >
                                    Read the Full Case Study
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { value: '2.3 Million+', label: 'Data Assets Discovered' },
                                    { value: '100%', label: 'Compliance Coverage' },
                                    { value: '3.5 Weeks', label: 'Deployment Time' },
                                    { value: '94%', label: 'Manual Effort Reduction' },
                                    { value: '72% Lower TCO', label: 'Cost vs Legacy Alternative' },
                                    { value: 'Eliminated', label: 'DPDP Risk Score' },
                                ].map((kpi) => (
                                    <div
                                        key={kpi.label}
                                        className="rounded-2xl bg-white/5 border border-white/5 p-4 md:p-5"
                                    >
                                        <div className="text-[18px] md:text-[20px] font-black tracking-tight text-white">
                                            {kpi.value}
                                        </div>
                                        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35 mt-1">
                                            {kpi.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>
                </motion.div>

                
            </div>
        </section>
    );
};

export default Compliance;
