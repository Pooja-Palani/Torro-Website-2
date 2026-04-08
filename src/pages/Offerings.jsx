import React from 'react';
import { motion } from 'framer-motion';
import { Database, GitBranch, Shield, Lock, Zap, Building2, Scale } from 'lucide-react';

const Offerings = () => {
  const ACCENT = '#99A0F9';

  const offerings = [
    {
      id: 1,
      title: 'Unified Discovery & Metadata Foundation',
      description: 'Centralized metadata repository for complete data visibility across hybrid estates.'
    },
    {
      id: 2,
      title: 'End-to-End Data Lineage',
      description: 'Track data movement and transformations across your entire infrastructure.'
    },
    {
      id: 3,
      title: 'Continuous Data Quality & Trust',
      description: 'Maintain data integrity and quality standards automatically.'
    },
    {
      id: 4,
      title: 'Automated Entitlements & Protection',
      description: 'Control data access with intelligent entitlement management.'
    },
    {
      id: 5,
      title: 'Data Marketplace & PrivBox',
      description: 'Secure data sharing and monetization platform.'
    }
  ];

  const industries = [
    'BFSI',
    'Healthcare',
    'Telecom'
  ];

  const compliance = [
    'DPDP / DPDPA',
    'GDPR',
    'CCPA',
    'BCBS239',
    'SOX',
    'HIPAA'
  ];

  const solutionAnchor = (title) =>
    title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const serviceAnchor = (title) =>
    title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return (
    <section className="bg-[#0c0e1a] text-white min-h-screen pt-40 pb-20 relative border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* (Removed) "Complete Data Solutions" hero */}

        {/* Our Solutions intro (replaces removed summary grid) */}
        <motion.div
          id="solutions"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white">
              The Unified Data Operating System for{' '}
              <span style={{ color: ACCENT }}>Absolute Control</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-white/55 font-medium leading-relaxed">
              From Discovery to Quality, Enforcing Trust Across Your Hybrid Estate. Torro OneData connects
              discovery, lineage, data quality, access control, and governed data sharing into a single
              operating layer for modern hybrid enterprises.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-[#F8BD64] px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] hover:bg-[#f0b04d] transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/85 hover:text-white hover:border-white/50 transition-colors"
              >
                Explore the Platform
              </a>
            </div>
          </div>
        </motion.div>

        {/* Solutions Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
              Our <span style={{ color: ACCENT }}>Solutions</span>
            </h2>
            <div
              className="h-px w-16 mx-auto bg-gradient-to-r from-transparent to-transparent"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
            />
          </div>

          <div className="space-y-10">
            {[
              {
                title: 'Unified Discovery & Metadata Foundation',
                description:
                  'Torro provides a single authoritative layer that automatically catalogs data assets across multi-vendor estates, creating a unified data asset catalog.',
                businessValue:
                  'Eliminates the visibility gap by providing a central business glossary and standardized data definitions across the enterprise.',
                capabilities: [
                  'Automated Asset Discovery',
                  'PII and Sensitivity Detection',
                  'Central Business Glossary',
                  'Metadata Synchronization',
                ],
              },
              {
                title: 'End-to-End Data Lineage',
                description:
                  'AssetViz provides a graph-based visualization engine that maps the lifecycle of data across systems, pipelines, and analytical applications.',
                businessValue:
                  'Provides full traceability to answer who accessed what, when, and why, supporting regulatory accountability.',
                capabilities: [
                  'Graph-based lineage visualization',
                  'Cell-level lineage tracking',
                  'Technical lineage synchronization',
                  'Impact analysis',
                ],
              },
              {
                title: 'Continuous Data Quality & Trust',
                description:
                  'Torro embeds quality monitoring directly into data pipelines using sensors and validation rules that evaluate data integrity continuously.',
                businessValue:
                  'Ensures confidence before consumption and reduces the risk of incorrect data impacting analytics or AI models.',
                capabilities: [
                  'Configurable quality sensors',
                  'Real-time quality monitoring',
                  'DQ dashboards',
                  'Trust signals for consumers',
                ],
              },
              {
                title: 'Automated Entitlements & Protection',
                description:
                  'Torro converts governance policies into system-enforced controls using RBAC and ABAC access models.',
                businessValue:
                  'Prevents toxic access and ghost accounts while enforcing privacy and regulatory compliance.',
                capabilities: [
                  'RBAC + ABAC Enforcement',
                  'Time-bound Permissions',
                  'Dynamic PII Masking',
                  'Consent-based Filtering',
                ],
              },
              {
                title: 'Data Marketplace & PrivBox',
                description:
                  'A governed self-service data marketplace allowing teams to discover, request, and analyze enterprise datasets.',
                businessValue:
                  'Accelerates innovation by reducing data access latency from months to minutes.',
                capabilities: [
                  'Self-service Asset Discovery',
                  'Policy-driven Access Workflows',
                  'PrivBox Secure Analytics Containers',
                  'Governed Data Checkout',
                ],
              },
            ].map((sol, idx) => {
              const isReversed = idx % 2 === 1;
              const Icon =
                sol.title === 'Unified Discovery & Metadata Foundation'
                  ? Database
                  : sol.title === 'End-to-End Data Lineage'
                    ? GitBranch
                    : sol.title === 'Continuous Data Quality & Trust'
                      ? Shield
                      : sol.title === 'Automated Entitlements & Protection'
                        ? Lock
                        : Zap;

              return (
                <motion.div
                  key={sol.title}
                  id={solutionAnchor(sol.title)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: idx * 0.04 }}
                  viewport={{ once: true }}
                  className="scroll-mt-28 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-8 md:p-10"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-10 items-center ${
                      isReversed ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <div className="box-copy text-left">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: 'rgba(153,160,249,0.12)',
                            border: '1px solid rgba(153,160,249,0.22)',
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                          {sol.title}
                        </h3>
                      </div>

                      <p className="text-white/55 font-medium leading-relaxed mb-6">
                        {sol.description}
                      </p>

                      <div className="space-y-5">
                        <div>
                          <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                            Business Value
                          </div>
                          <p className="text-white/60 text-[14px] leading-relaxed font-medium">
                            {sol.businessValue}
                          </p>
                        </div>

                        <div>
                          <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                            Key Capabilities
                          </div>
                          <ul className="space-y-2">
                            {sol.capabilities.map((c) => (
                              <li key={c} className="flex items-start gap-3 text-[14px] text-white/70">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                                <span className="font-medium">{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/5 h-[260px] md:h-[320px] flex items-center justify-center text-white/25 text-sm font-semibold">
                      Image / Screenshot Placeholder
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* (Removed) Industries/Compliance tiles + CTA from Offerings */}
      </div>
    </section>
  );
};

export default Offerings;
