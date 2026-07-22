import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Globe, Users, Lock, CheckCircle2, Layers } from 'lucide-react';
import { UseCaseMock } from '../components/mocks/UseCaseMocks';

const UseCases = () => {
  const ACCENT = '#99A0F9';

  const useCaseAnchor = (title) =>
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
        {/* Use Cases intro */}
        <motion.div
          id="use-cases"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white">
              Use Cases for <span style={{ color: ACCENT }}>Enterprise Data Governance</span>
            </h1>
            <p className="mt-5 text-[15px] md:text-[16px] text-white/55 font-medium leading-relaxed max-w-3xl mx-auto">
              From full data visibility to audit-ready compliance, Torro addresses the real‑world scenarios that even CISOs and data leaders awake at night. One platform, every use case.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center rounded-xl bg-[#F8BD64] px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] hover:bg-[#f0b04d] transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                to="/offerings#solutions"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/85 hover:text-white hover:border-white/50 transition-colors"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            How We <span style={{ color: ACCENT }}>Help</span>
          </h2>
          <div
            className="h-px w-16 mx-auto bg-gradient-to-r from-transparent to-transparent"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
          />
        </div>

        <div className="space-y-10">
          {[
            {
              title: 'Enterprise Data Visibility',
              description:
                'Get single-pane-of-glass access across your entire data estate — on-prem, multi-cloud, and legacy systems. No more shadow data or audit surprises.',
              businessValue:
                'Eliminate blind spots so you can answer who, what, when, and where for every data asset. Reduce breach detection time from months to minutes.',
              capabilities: [
                'Unified data asset catalog',
                'Real-time lineage and usage tracking',
                'PII and sensitivity classification',
                'Executive compliance dashboards',
              ],
            },
            {
              title: 'Open Semantic Interchange',
              description:
                'Unify meaning across your data estate with an OSI semantic layer. One governed contract between sources, AI, analytics, and reporting — so every consumer speaks the same business language.',
              businessValue:
                'Stop rewriting metrics for every tool. OSI gives AI, dashboards, and reports a shared semantic backbone — faster delivery, fewer inconsistencies, stronger governance.',
              capabilities: [
                'Central semantic contract for all consumers',
                'Source-to-meaning mapping with lineage',
                'AI-ready governed definitions',
                'Consistent metrics across BI and reporting',
              ],
            },
            {
              title: 'Cross-Border Data Governance',
              description:
                'Manage data residency, transfer restrictions, and regulatory requirements across jurisdictions. DPDP, GDPR, and regional rules enforced in one place.',
              businessValue:
                'Stay compliant when data crosses borders. Automated policy enforcement and consent tracking reduces legal and reputational risk.',
              capabilities: [
                'Data residency and transfer controls',
                'Consent and lawful basis tracking',
                'Jurisdiction-specific policy engine',
                'Cross-border impact analysis',
              ],
            },
            {
              title: 'Automated Access Provisioning',
              description:
                'Replace manual ticket-based access with policy-driven RBAC and ABAC. Approve once, enforce everywhere — with time-bound permissions and automatic revocation.',
              businessValue:
                'Cut access request cycles from weeks to minutes. Remove toxic access and ghost accounts while keeping audit trails intact.',
              capabilities: [
                'Policy-as-code access controls',
                'Just-in-time and time-bound access',
                'Integration with IAM and data platforms',
                'Access certification and recert',
              ],
            },
            {
              title: 'Consent & PII Management',
              description:
                'Centralize consent capture, preferences, and PII handling. Enforce consent at the point of access and by purpose for regulated use cases.',
              businessValue:
                'Meet DPDP and GDPR consent requirements without spreadsheet chaos. Real-time consent checks prevent unauthorized use of personal data.',
              capabilities: [
                'Consent and preference directory',
                'PII discovery and classification',
                'Dynamic masking and filtering by consent',
                'Right-to-erasure and portability workflows',
              ],
            },
            {
              title: 'Audit Readiness',
              description:
                'Deliver regulator-ready evidence on demand. Immutable logs, compliance posture dashboards, and one-click export for internal and external audits.',
              businessValue:
                'When the regulator calls, answer with confidence. No last-minute scrambles or incomplete records.',
              capabilities: [
                'End-to-end audit trails',
                'Compliance posture scoring',
                'DPDP / RBI / SOX report templates',
                'Incident and breach notification workflows',
              ],
            },
          ].map((uc, idx) => {
            const isReversed = idx % 2 === 1;
            const Icon =
              uc.title === 'Enterprise Data Visibility'
                ? Eye
                : uc.title === 'Cross-Border Data Governance'
                  ? Globe
                  : uc.title === 'Automated Access Provisioning'
                    ? Users
                    : uc.title === 'Consent & PII Management'
                      ? Lock
                      : uc.title === 'Open Semantic Interchange'
                        ? Layers
                        : CheckCircle2;

            return (
              <motion.div
                key={uc.title}
                id={useCaseAnchor(uc.title)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className="scroll-mt-28 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-5 sm:p-7 tablet:p-6 lg:p-10"
              >
                <div className={`grid min-w-0 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="box-copy min-w-0 text-left">
                    <div className="mb-4 flex items-start gap-3 sm:items-center">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: 'rgba(153,160,249,0.12)',
                          border: '1px solid rgba(153,160,249,0.22)',
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                      </div>
                      <h3 className="min-w-0 text-xl font-black leading-tight tracking-tight text-white sm:text-2xl tablet:text-[1.75rem] lg:text-3xl">
                        {uc.title}
                      </h3>
                    </div>

                    <p className="text-white/55 font-medium leading-relaxed mb-6">{uc.description}</p>

                    <div className="space-y-5">
                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                          Business Value
                        </div>
                        <p className="text-white/60 text-[14px] leading-relaxed font-medium">{uc.businessValue}</p>
                      </div>

                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                          Key Capabilities
                        </div>
                        <ul className="space-y-2">
                          {uc.capabilities.map((c) => (
                            <li key={c} className="flex items-start gap-3 text-[14px] text-white/70">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                              <span className="font-medium">{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <UseCaseMock title={uc.title} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-8 sm:p-12 md:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              Ready to <span style={{ color: ACCENT }}>Solve</span> Your Top Use Case?
            </h2>
            <p className="text-white/50 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
              See how Torro addresses enterprise data visibility, compliance, and access control in one platform.
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-black font-black rounded-xl transition-all duration-300 uppercase text-xs sm:text-sm tracking-[0.2em]"
              style={{
                backgroundColor: ACCENT,
                boxShadow: '0 10px 30px rgba(153,160,249,0.25)',
              }}
            >
              Request an Enterprise Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
