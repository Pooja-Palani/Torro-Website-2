import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, BarChart3, Check } from 'lucide-react';

const StakeholderCard = ({ icon: Icon, tag, title, description, features, gradient, dotColor }) => (
    <div className="relative flex flex-col bg-white border border-slate-200/60 rounded-[2.5rem] shadow-none shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_72px_rgba(15,23,42,0.08)] transition-all duration-700 hover:-translate-y-2 overflow-hidden p-10 h-full group">

        {/* Subtle background glow effect on hover */}
        <div className={`absolute top-0 right-0 w-64 h-64 ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 blur-[60px] rounded-full pointer-events-none`} />

        <div className="flex items-center justify-between mb-8">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                <Icon className="w-7 h-7 text-slate-900" strokeWidth={1.5} />
            </div>

            <div className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{tag}</span>
            </div>
        </div>

        <h3 className="text-[26px] font-black text-slate-900 tracking-[-0.03em] leading-[1.15] mb-5">
            {title}
        </h3>

        <p className="text-slate-500 text-[16px] leading-[1.7] font-medium mb-8 flex-grow">
            {description}
        </p>

        <div className="space-y-4 pt-8 border-t border-slate-100">
            {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-indigo-50 group-hover/item:border-indigo-100 transition-colors duration-300">
                        <Check className="w-3 h-3 text-slate-500 group-hover/item:text-indigo-500 transition-colors duration-300" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] font-medium text-slate-600 leading-snug group-hover/item:text-slate-900 transition-colors duration-300">{feature}</span>
                </div>
            ))}
        </div>
    </div>
);

const Stakeholders = () => {
    const roles = [
        {
            icon: ShieldCheck,
            tag: "CISO / AUDIT",
            title: "Defensible by Design",
            description: "Complete audit trails, real-time breach detection, and automated DPDP and RBI compliance reporting. When the regulator calls, you answer with confidence — not a spreadsheet.",
            features: [
                "Real-time compliance posture dashboard",
                "Automated incident response workflows",
                "Immutable, regulator-ready audit exports",
                "Personal data breach notification automation"
            ],
            gradient: "from-indigo-400 to-indigo-600",
            dotColor: "bg-indigo-400"
        },
        {
            icon: Cpu,
            tag: "DATA ENGINEERING",
            title: "Governance Without Friction",
            description: "Zero-friction data pipelines with built-in classification, masking, and lineage tracking. Torro integrates natively into your CI/CD and data orchestration layer.",
            features: [
                "Native dbt, Airflow, and Spark integrations",
                "Automated PII masking in data pipelines",
                "Column-level lineage across all transformations",
                "Policy-as-code with Git-based versioning"
            ],
            gradient: "from-rose-400 to-red-400",
            dotColor: "bg-rose-400"
        },
        {
            icon: BarChart3,
            tag: "BUSINESS LEADERS",
            title: "Data in Minutes, Not Months",
            description: "Self-service data access in minutes, not months — with governance guardrails built in. Browse the marketplace, request access, and start analyzing in one workflow.",
            features: [
                "Self-service data marketplace catalog",
                "One-click governed access requests",
                "Business-friendly data quality scores",
                "Automated data contract enforcement"
            ],
            gradient: "from-amber-400 to-amber-600",
            dotColor: "bg-amber-500"
        }
    ];

    return (
        <section className="py-32 bg-[#f8fafc] relative overflow-hidden" id="stakeholders">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container relative z-10 mx-auto px-6 max-w-[85rem]">
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-8 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#99A0F9]/5 border border-[#99A0F9]/15 shadow-sm mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#99A0F9] animate-pulse shadow-[0_0_12px_rgba(140,158,255,0.6)]" />
                        <span className="text-[12px] font-black text-[#99A0F9] uppercase tracking-[0.4em]">
                            Solutions For Team
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-[48px] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Built for Every <span className="text-[#99A0F9]">Institutional Stakeholder.</span>
                    </h2>

                    <p className="text-slate-500 text-[20px] leading-relaxed max-w-2xl mx-auto font-medium">
                        Torro speaks the language of CISOs, data engineers, and business leaders — simultaneously.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <StakeholderCard {...role} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stakeholders;
