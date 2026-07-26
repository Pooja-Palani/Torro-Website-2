import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, BadgeCheck, Building2 } from 'lucide-react';

const ACCENT = '#99A0F9';

const partners = [
    { name: 'Deloitte', logo: '/partners/deloitte.png', status: 'CoE Vetted Partner' },
    { name: 'Wipro', logo: '/partners/wipro.png', status: 'CoE Vetted Partner' },
    { name: 'LTI Mindtree', logo: '/partners/ltimindtree.png', status: 'CoE Vetted Partner' },
    { name: 'CapGemini', logo: '/partners/capgemini.png', status: 'CoE Vetted Partner' },
    { name: 'Hoonartek', logo: '/partners/hoonartek.png', status: 'CoE Vetted Partner' },
    { name: 'IBM', logo: '/partners/ibm.png', status: 'CoE Vetted Partner' },
    { name: 'CRISIL', logo: '/partners/crisil.png', status: 'CoE Vetted Partner' },
    { name: 'Celebal Technologies', logo: '/partners/celebal.png', status: 'CoE Vetted Partner' },
    { name: 'Starburst Software', logo: '/partners/starburst.png', status: 'Sales & Technology Partner' },
];

const PartnerCard = ({ partner, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.32) }}
        className="group flex h-full w-full max-w-[220px] flex-col items-center rounded-2xl border border-slate-200/70 bg-white px-5 py-7 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#99A0F9]/40 hover:shadow-[0_18px_40px_-20px_rgba(153,160,249,0.4)] sm:max-w-[240px]"
    >
        <div className="mb-5 flex h-[72px] w-full items-center justify-center">
            <img
                src={`${partner.logo}?v=3`}
                alt={`${partner.name} logo`}
                className="max-h-[64px] w-auto max-w-[88%] object-contain"
                loading="lazy"
            />
        </div>
        <p className="text-center text-[13px] font-bold tracking-tight text-slate-900">{partner.name}</p>
        <div className="mt-3 flex items-center justify-center gap-1.5">
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
            <span className="text-center text-[9px] font-black uppercase tracking-[0.08em] text-emerald-700">
                {partner.status}
            </span>
        </div>
    </motion.div>
);

const Partners = () => {
    return (
        <section className="light-section-bg relative overflow-hidden py-16 text-slate-900 md:py-20" id="partners">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(153,160,249,0.16)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(153,160,249,0.1)_0%,transparent_45%)]" />

            <div className="relative z-10 mx-auto max-w-[105rem] px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 flex max-w-4xl flex-col items-center space-y-5 text-center md:mb-16"
                >
                    <div className="glass-badge relative z-10 inline-flex items-center justify-center gap-3 px-6 py-2.5">
                        <Building2 className="relative z-10 h-4 w-4" style={{ color: ACCENT }} />
                        <span
                            className="relative z-10 text-[12px] font-black uppercase tracking-[0.4em]"
                            style={{ color: ACCENT }}
                        >
                            Partners
                        </span>
                    </div>

                    <h1 className="!text-center text-4xl font-black leading-[1.1] tracking-tight !text-slate-900 md:text-5xl lg:text-6xl">
                        <span style={{ color: ACCENT }}>Market Validation &amp; Scale</span>
                        <br />
                        Strategic Partnership Ecosystem
                    </h1>

                    <p className="!mx-auto max-w-2xl !text-center text-[16px] font-medium leading-relaxed !text-slate-600">
                        Torro is the trusted technology partner for global IT leaders. Our solution has been independently
                        vetted by{' '}
                        <span className="font-bold text-slate-800">Data Governance Center of Excellence (CoE)</span> of
                        premium services firms to power their global customer implementations.
                    </p>
                </motion.div>

                <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 md:gap-5">
                    {partners.map((partner, i) => (
                        <div key={partner.name} className="flex w-[calc(50%-0.5rem)] justify-center sm:w-[calc(33.333%-0.875rem)] lg:w-[calc(20%-1rem)]">
                            <PartnerCard partner={partner} index={i} />
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-3 md:mt-14"
                >
                    <Handshake className="h-5 w-5 shrink-0" style={{ color: ACCENT }} />
                    <p className="text-left text-[13px] font-medium leading-relaxed text-slate-600 md:text-[14px]">
                        Formal understanding established with each partner to position{' '}
                        <span className="font-bold" style={{ color: ACCENT }}>
                            Torro
                        </span>{' '}
                        Data Governance solutions across their global BFSI and Enterprise customer base.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
