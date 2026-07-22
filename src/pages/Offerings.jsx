import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, GitBranch, Shield, Lock, Zap } from 'lucide-react';
import { SolutionMock } from '../components/mocks/SolutionMocks';

const Offerings = () => {
  const ACCENT = '#99A0F9';

  const solutionAnchor = (title) =>
    title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return (
    <section className="relative min-h-screen border-t border-white/5 bg-[#0c0e1a] pb-20 pt-40 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          id="solutions"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              The Unified Data Operating System for{' '}
              <span style={{ color: ACCENT }}>Absolute Control</span>
            </h2>
            <p className="mt-5 text-[15px] font-medium leading-relaxed text-white/55 md:text-[16px]">
              From Discovery to Quality, Enforcing Trust Across Your Hybrid Estate. Torro OneData connects
              discovery, lineage, data quality, access control, and governed data sharing into a single
              operating layer for modern hybrid enterprises.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center rounded-xl bg-[#F8BD64] px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] transition-colors hover:bg-[#f0b04d]"
              >
                Book a Demo
              </Link>
              <Link
                to="/torro-onedata"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/50 hover:text-white"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-white">
              Our <span style={{ color: ACCENT }}>Solutions</span>
            </h2>
            <div
              className="mx-auto h-px w-16"
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
                  className="scroll-mt-28 rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-5 sm:p-7 tablet:p-6 lg:p-10"
                >
                  <div
                    className={`grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-10 ${
                      isReversed ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <div className="box-copy text-left">
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: 'rgba(153,160,249,0.12)',
                            border: '1px solid rgba(153,160,249,0.22)',
                          }}
                        >
                          <Icon className="h-5 w-5" style={{ color: ACCENT }} />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                          {sol.title}
                        </h3>
                      </div>

                      <p className="mb-6 font-medium leading-relaxed text-white/55">{sol.description}</p>

                      <div className="space-y-5">
                        <div>
                          <div className="mb-2 text-[12px] font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                            Business Value
                          </div>
                          <p className="text-[14px] font-medium leading-relaxed text-white/60">{sol.businessValue}</p>
                        </div>

                        <div>
                          <div className="mb-2 text-[12px] font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                            Key Capabilities
                          </div>
                          <ul className="space-y-2">
                            {sol.capabilities.map((c) => (
                              <li key={c} className="flex items-start gap-3 text-[14px] text-white/70">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: ACCENT }} />
                                <span className="font-medium">{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <SolutionMock title={sol.title} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offerings;
