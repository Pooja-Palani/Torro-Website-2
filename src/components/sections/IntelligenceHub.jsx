import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ACCENT = '#99A0F9';

const InsightCard = ({ tag, readTime, title, excerpt, author, date, index }) => (
    <motion.a
        href="/resources"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-8 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.75)] hover:border-white/20 transition-colors"
    >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(153,160,249,0.10)_0%,transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-black text-white/70">
                {tag}
            </span>
            <span className="text-[11px] font-semibold text-white/35">{readTime}</span>
        </div>
        
        <h3 className="relative z-10 mt-5 text-left text-[18px] font-black tracking-tight text-white leading-snug">
            {title}
        </h3>

        <p className="relative z-10 mt-3 min-h-[4.5rem] flex-1 !text-left text-[13px] leading-relaxed font-medium text-white/50 line-clamp-3 !mx-0 !max-w-none">
            {excerpt}
        </p>

        <div className="relative z-10 mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black border"
                    style={{
                        backgroundColor: 'rgba(153,160,249,0.12)',
                        borderColor: 'rgba(153,160,249,0.25)',
                        color: 'rgba(153,160,249,0.95)',
                    }}
                >
                    {author.trim().slice(0, 1).toUpperCase()}
                </div>
                <div className="leading-tight">
                    <div className="text-[12px] font-semibold text-white/70">{author}</div>
                    <div className="text-[11px] font-medium text-white/35">{date}</div>
                </div>
            </div>

            <div
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-colors group-hover:border-white/20"
                aria-hidden="true"
            >
                <ArrowUpRight className="w-4 h-4 text-white/45 group-hover:text-white/70 transition-colors" />
            </div>
        </div>
    </motion.a>
);

const IntelligenceHub = () => {
    const insights = [
        {
            tag: 'AI Governance',
            readTime: '7 min read',
            title: 'AI Readiness Now Exposes Your Legacy Governance Gaps',
            excerpt:
                "Financial institutions rushing AI adoption are discovering that the legacy data silos aren’t just inefficient — they’re liability exposure. Here’s what…",
            author: 'Rajiv Nair',
            date: '4 March 2026',
        },
        {
            tag: 'DPDP Compliance',
            readTime: '9 min read',
            title: 'DPDP Act: The ₹250 Crore Question Every CISO Must Answer',
            excerpt:
                'The Digital Personal Data Protection Act is no longer on the horizon. Enforcement is imminent. Banks and telecom companies with inadequate data discover…',
            author: 'Priya Menon',
            date: '25 February 2026',
        },
        {
            tag: 'Data Modernization',
            readTime: '12 min read',
            title: 'From Shadow Data to Sovereign Data: A BFSI Playbook',
            excerpt:
                "India’s largest private sector banks operate 40% of their sensitive data in unmonitored ‘dark’ stores. Torro’s 4‑week deployment framework turns…",
            author: 'Aditya Sharma',
            date: '18 February 2026',
        },
    ];

    return (
        <section className="bg-[#0c0e1a] text-white relative border-t border-white/5 pt-12 md:pt-16 pb-12 md:pb-16" id="resources">
                {/* Ambient background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.08)_0%,transparent_55%)] pointer-events-none" />

                <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[105rem] w-full">
                    {/* Section Header */}
                    <div className="text-center mb-6 md:mb-8 space-y-2 flex flex-col items-center">
                        <span
                            className="text-[11px] font-black uppercase tracking-[0.45em]"
                            style={{ color: ACCENT }}
                        >
                            Boardroom Headlines
                        </span>

                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
                            Intelligence for Executives{' '}
                            <span style={{ color: ACCENT }}>at Scale</span>
                        </h2>

                        <a
                            href="/resources"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[12px] font-black uppercase tracking-[0.25em] text-white/70 hover:text-white hover:border-white/20 transition-colors"
                        >
                            View All Articles <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {insights.map((i, idx) => (
                            <InsightCard key={i.title} index={idx} {...i} />
                        ))}
            </div>
            </div>
        </section>
    );
};

export default IntelligenceHub;
