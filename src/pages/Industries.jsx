import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ACCENT = '#99A0F9';

const anchor = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Industries = () => {
  const industries = [
    {
      title: 'BFSI',
      image: '/industries/bfsi.jpg',
      imageAlt: 'Financial market analytics and trading data visualization',
      description:
        'Banks, insurers, and financial institutions need DPDP, RBI, BCBS239 and SOX compliance without slowing down data-driven innovation. Torro delivers full visibility, automated entitlements, and audit-ready reporting.',
      businessValue:
        'Reduce compliance effort by up to 94%, achieve 100% sensitive data visibility in weeks, and cut TCO vs legacy alternatives. Proven at tier‑1 scale.',
      capabilities: [
        'DPDP and RBI readiness',
        'BCBS239 risk data aggregation',
        'SOX and audit trail automation',
        'Hybrid estate: 47+ DCs, multi‑cloud',
      ],
    },
    {
      title: 'Healthcare',
      image: '/industries/healthcare.jpg',
      imageAlt: 'Healthcare professional using digital technology for patient care',
      description:
        'Patient data is highly sensitive and heavily regulated. Torro helps healthcare organizations govern PHI/PII, enforce consent, and maintain HIPAA and local privacy compliance across EHRs, analytics, and research.',
      businessValue:
        'Enable secure, governed use of clinical and operational data for analytics and AI while keeping regulators and patients confident.',
      capabilities: [
        'PHI/PII discovery and classification',
        'Consent and purpose limitation',
        'HIPAA and local privacy alignment',
        'Research and de-identification workflows',
      ],
    },
    {
      title: 'Telecom',
      image: '/industries/telecom.jpg',
      imageAlt: 'Network infrastructure and data center connectivity for telecom',
      description:
        'Telecoms hold vast amounts of subscriber and usage data. Torro supports TRAI, DPDP, and cross-border requirements while enabling data monetization and analytics in a governed way.',
      businessValue:
        'Balance regulatory compliance with the need to leverage data for personalization, fraud detection, and network optimization.',
      capabilities: [
        'Subscriber and CDR governance',
        'Data residency and transfer controls',
        'Consent and preference management',
        'Unified catalog across BSS/OSS',
      ],
    },
  ];

  return (
    <section className="bg-[#0c0e1a] text-white min-h-screen pt-40 pb-20 relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          id="industries"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white">
              Industries We <span style={{ color: ACCENT }}>Serve</span>
            </h1>
            <p className="mt-5 text-[15px] md:text-[16px] text-white/55 font-medium leading-relaxed">
              BFSI, Healthcare, and Telecom face the toughest data and compliance demands. Torro is built for
              regulated industries that can’t afford to be wrong.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center rounded-xl bg-[#F8BD64] px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] hover:bg-[#f0b04d] transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                to="/case-studies/bank-india"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/85 hover:text-white hover:border-white/50 transition-colors"
              >
                Read Case Study
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            Built for <span style={{ color: ACCENT }}>Regulated Sectors</span>
          </h2>
          <div
            className="h-px w-16 mx-auto bg-gradient-to-r from-transparent to-transparent"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
          />
        </div>

        <div className="space-y-10">
          {industries.map((ind, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={ind.title}
                id={anchor(ind.title)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className="scroll-mt-28 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-5 sm:p-7 tablet:p-6 lg:p-10"
              >
                <div
                  className={`grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-10 ${
                    isReversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="box-copy text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                      {ind.title}
                    </h3>
                    <p className="text-white/55 font-medium leading-relaxed mb-6">{ind.description}</p>

                    <div className="space-y-5">
                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                          Business Value
                        </div>
                        <p className="text-white/60 text-[14px] leading-relaxed font-medium">{ind.businessValue}</p>
                      </div>

                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                          Key Capabilities
                        </div>
                        <ul className="space-y-2">
                          {ind.capabilities.map((c) => (
                            <li key={c} className="flex items-start gap-3 text-[14px] text-white/70">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                              <span className="font-medium">{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="group relative h-[260px] overflow-hidden rounded-2xl border border-white/10 md:h-[320px]">
                    <img
                      src={ind.image}
                      alt={ind.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0d1a]/70 via-transparent to-[#0a0d1a]/20" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        background:
                          'radial-gradient(ellipse at 30% 20%, rgba(153,160,249,0.22), transparent 55%)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;

