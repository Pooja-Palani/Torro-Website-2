import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle2, Scale, TrendingUp, Building2, Gavel } from 'lucide-react';

const Compliance = () => {
    const regulations = [
        {
            id: 1,
            title: 'DPDP Act 2023',
            subtitle: 'Digital Personal Data Protection',
            mandate: 'Absolute accountability for consent management (Sec 6) and security safeguards (Sec 8).',
            warning: 'Non-compliance risks penalties up to INR 250 Crore.',
            enablement: 'The Regulatory Module dynamically excludes non-consented records from data views in real-time during consumption.',
            templates: 'Configurable "Creation to Deletion" lifecycle management triggers.',
            audit: 'AssetViz provides 100% data visibility and real-time monitoring for rapid breach reporting.',
            icon: Shield
        },
        {
            id: 2,
            title: 'GDPR',
            subtitle: 'General Data Protection Regulation',
            mandate: 'Strict PII enforcement and the "Right to be Forgotten".',
            enablement: 'Auto-detects and masks sensitive PII down to the cell level using automated entitlements (RBAC + ABAC).',
            templates: 'Built-in PII and sensitivity tagging templates.',
            audit: 'Ability to audit all data requests, consumption, and costs linked to each project.',
            icon: Scale
        },
        {
            id: 3,
            title: 'BCBS 239',
            subtitle: 'Banking Risk Data Aggregation',
            mandate: 'Principles for effective risk data aggregation and reporting.',
            enablement: 'Provides a single control plane for enterprise data to ensure consistency across reporting lines.',
            templates: 'Data quality sensors and validation rules deployed directly on pipelines.',
            audit: 'Real-time lineage tracking to answer exactly who accessed what, when, and why.',
            icon: TrendingUp
        },
        {
            id: 4,
            title: 'SOX & HIPAA',
            subtitle: 'Financial & Healthcare Compliance',
            mandate: 'Robust monitoring and protection for financial reporting and PHI.',
            enablement: 'PrivBox secure containers host sensitive assets and analytics tools in an audited environment.',
            templates: 'Geofence control templates for cross-border data flow reviews.',
            audit: 'Incident reporting captures full context, including cause and financial impact tied directly to regulatory references.',
            icon: Building2
        }
    ];

    const edges = [
        {
            title: 'Regulatory Tagging',
            desc: 'Tag data policies directly to regulatory references, creating a full audit trail.'
        },
        {
            title: 'Logic on Infrastructure',
            desc: 'Apply policy logic directly on hybrid infrastructure without complex coding.'
        },
        {
            title: 'Automated Evidence Generation',
            desc: 'Replace manual audit firefighting with defensible automated reports.'
        },
        {
            title: 'Collaborative Governance',
            desc: 'Unified workflows across Business, IT, Risk, and Legal teams.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
        },
    };

    return (
        <section className="bg-[#0c0e1a] text-white relative border-t border-white/5 pt-32 pb-32" id="compliance">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[105rem]">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-24 space-y-6"
                >
                    <div className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-[12px] font-black text-blue-400 uppercase tracking-[0.4em]">Compliance</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                        Navigate Global Mandates with <span className="text-blue-400">Absolute Accountability</span>
                    </h1>
                    
                    <p className="text-[16px] text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
                        The unified operating system to enforce active compliance and generate audit-ready evidence across your hybrid estate.
                    </p>
                </motion.div>

                {/* Compliance Matrix */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid lg:grid-cols-2 gap-6 mb-24"
                >
                    {regulations.map((reg, idx) => {
                        const IconComponent = reg.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group relative bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-8 hover:border-blue-500/20 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Icon & Title */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex-1">
                                            <p className="text-[12px] font-black text-blue-400 uppercase tracking-[0.2em] mb-2">
                                                {`0${reg.id}`}
                                            </p>
                                            <h3 className="text-[24px] font-black text-white tracking-tight mb-1">
                                                {reg.title}
                                            </h3>
                                            <p className="text-[13px] text-white/40 font-medium">
                                                {reg.subtitle}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 ml-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                                <IconComponent className="w-5 h-5 text-blue-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Mandate */}
                                        <div>
                                            <p className="text-[11px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">
                                                The Mandate
                                            </p>
                                            <p className="text-[14px] text-white/60 leading-relaxed font-medium">
                                                {reg.mandate}
                                            </p>
                                            {reg.warning && (
                                                <p className="text-[13px] text-blue-400/80 font-bold mt-3">
                                                    ⚠️ {reg.warning}
                                                </p>
                                            )}
                                        </div>

                                        {/* Enablement */}
                                        <div>
                                            <p className="text-[11px] font-black text-blue-400/40 uppercase tracking-[0.2em] mb-2">
                                                Torro Enablement
                                            </p>
                                            <p className="text-[14px] text-white/50 leading-relaxed font-medium">
                                                {reg.enablement}
                                            </p>
                                        </div>

                                        {/* Templates & Audit */}
                                        <div className="grid grid-cols-2 gap-4 pt-4">
                                            <div>
                                                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-2">
                                                    Templates
                                                </p>
                                                <p className="text-[12px] text-white/40 leading-relaxed">
                                                    {reg.templates}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-2">
                                                    Audit Ready
                                                </p>
                                                <p className="text-[12px] text-white/40 leading-relaxed">
                                                    {reg.audit}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Torro Edge Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                            The <span className="text-blue-400">Torro Edge</span> in Compliance
                        </h2>
                        <p className="text-[14px] text-white/40 font-medium max-w-2xl mx-auto">
                            Our differentiated approach to regulatory excellence
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {edges.map((edge, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-gradient-to-br from-[#11152a]/40 to-[#0a0d1a]/40 border border-white/5 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/20 transition-all duration-300"
                            >
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 mt-1">
                                            <CheckCircle2 className="w-3 h-3 text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-black text-white tracking-tight mb-2">
                                            {edge.title}
                                        </h4>
                                        <p className="text-[13px] text-white/50 leading-relaxed font-medium">
                                            {edge.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                        Is Your Institution <span className="text-blue-400">Defensible?</span>
                    </h2>
                    <p className="text-[15px] text-white/50 font-medium mb-8 leading-relaxed">
                        Non-compliance in the DPDP era is no longer a "reasonable measures" discussion. It is about absolute infrastructure reality.
                    </p>
                    <motion.a
                        href="#demo"
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] uppercase text-[12px] tracking-[0.2em]"
                    >
                        <Shield className="w-5 h-5" />
                        Book a Compliance Deep Dive
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Compliance;
