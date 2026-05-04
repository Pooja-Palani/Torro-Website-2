import React from 'react';
import { motion } from 'framer-motion';

const ACCENT = '#99A0F9';

const serviceAnchor = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Services = () => {
  const services = [
    {
      title: 'Data Engineering Services',
      description:
        'Build and modernize data pipelines with governance built in. We design ingestion, transformation, and orchestration that align with your compliance and lineage requirements.',
      businessValue:
        'Faster time to governed data, fewer rework cycles, and pipelines that are audit-ready by design.',
      capabilities: [
        'Pipeline design and implementation',
        'dbt, Airflow, and Spark integration',
        'Metadata and lineage enablement',
        'PII handling and masking patterns',
      ],
    },
    {
      title: 'Cloud Consulting Services',
      description:
        'Multi-cloud and hybrid strategy: architecture, migration, and cost optimization. We help you move to the cloud without losing control of your data.',
      businessValue:
        'Clear roadmap, reduced risk, and governance that works across AWS, Azure, GCP, and on‑prem.',
      capabilities: [
        'Cloud readiness and migration',
        'Data lake and warehouse design',
        'Security and access architecture',
        'FinOps and cost governance',
      ],
    },
    {
      title: 'Legacy to Cloud Platform Design',
      description:
        'Modernize legacy data estates with a clear path to cloud-native platforms. We preserve lineage, classification, and compliance while you migrate.',
      businessValue:
        'De-risk legacy exit, avoid data black holes, and keep regulators satisfied throughout the transition.',
      capabilities: [
        'Legacy discovery and inventory',
        'Target state architecture',
        'Phased migration and cutover',
        'Governance continuity',
      ],
    },
    {
      title: 'Compliance & Reg Consulting',
      description:
        'DPDP, GDPR, RBI, BCBS239, SOX, HIPAA: we translate regulation into actionable policies and controls. Gap assessments, remediation roadmaps, and audit prep.',
      businessValue:
        'Know exactly where you stand and what to fix. Reduce legal and reputational risk with a defensible program.',
      capabilities: [
        'Regulatory gap assessments',
        'Policy and control design',
        'Audit readiness and evidence',
        'Training and change management',
      ],
    },
    {
      title: 'AI/ML Governance',
      description:
        'Govern model inputs, outputs, and usage. We help you put guardrails around LLMs and ML pipelines so innovation stays within policy.',
      businessValue:
        'Ship AI use cases faster while meeting emerging regulatory and ethical requirements.',
      capabilities: [
        'Model and prompt governance',
        'Bias and fairness checks',
        'Data lineage for ML assets',
        'Audit trails for AI decisions',
      ],
    },
    {
      title: 'Data Governance Assessment',
      description:
        'A structured assessment of your people, process, and technology. We deliver a maturity score, gap analysis, and a prioritized roadmap to full governance.',
      businessValue:
        'Executive-ready view of governance posture and a clear path to improvement without guesswork.',
      capabilities: [
        'Stakeholder interviews and workshops',
        'Current state documentation',
        'Maturity model and scoring',
        'Roadmap and quick wins',
      ],
    },
  ];

  return (
    <section className="bg-[#0c0e1a] text-white min-h-screen pt-40 pb-20 relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          id="services"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white">
              Our <span style={{ color: ACCENT }}>Services</span>
            </h1>
            <p className="mt-5 text-[15px] md:text-[16px] text-white/55 font-medium leading-relaxed">
              Beyond the platform: data engineering, cloud strategy, compliance consulting, and governance assessments.
              We help you design, deploy, and operate with confidence.
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

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            What We <span style={{ color: ACCENT }}>Offer</span>
          </h2>
          <div
            className="h-px w-16 mx-auto bg-gradient-to-r from-transparent to-transparent"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
          />
        </div>

        <div className="space-y-10">
          {services.map((svc, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={svc.title}
                id={serviceAnchor(svc.title)}
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
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-white/55 font-medium leading-relaxed mb-6">{svc.description}</p>

                    <div className="space-y-5">
                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                          Business Value
                        </div>
                        <p className="text-white/60 text-[14px] leading-relaxed font-medium">{svc.businessValue}</p>
                      </div>

                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                          Key Capabilities
                        </div>
                        <ul className="space-y-2">
                          {svc.capabilities.map((c) => (
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
                    Image Placeholder
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

export default Services;

