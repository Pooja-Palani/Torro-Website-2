import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Cpu, Database, Zap } from 'lucide-react';

const ACCENT = '#99A0F9';

const PillarCard = ({ icon: Icon, title, text }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-6">
    <div className="flex items-start gap-4">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center border"
        style={{
          backgroundColor: 'rgba(153,160,249,0.12)',
          borderColor: 'rgba(153,160,249,0.22)',
          color: 'rgba(153,160,249,0.95)',
        }}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[15px] font-black tracking-tight text-white mb-2">{title}</div>
        <p className="text-[13px] md:text-[14px] text-white/55 leading-relaxed font-medium">{text}</p>
      </div>
    </div>
  </div>
);

const CaseStudyTelecomHK = () => {
  return (
    <div className="bg-[#0c0e1a] text-white">
      <section className="relative overflow-hidden border-t border-white/5 pt-20 md:pt-24 pb-14 md:pb-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.10)_0%,transparent_55%)] pointer-events-none" />

        <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[95rem]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="text-[11px] font-black uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
                Case Study
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white/35">
                Hong Kong Telecom
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
              Executive Summary:{' '}
              <span style={{ color: ACCENT }}>Strategic AI & Data Transformation</span> for a Telecom Company in Hong Kong
            </h1>

            <p className="mt-5 mx-0 text-left text-[15px] md:text-[16px] text-white/60 leading-relaxed font-medium max-w-4xl">
              Torro has recently spearheaded a comprehensive, multi-layered data and artificial intelligence
              transformation for a Telecom company in Hong Kong. By bridging the gap between legacy infrastructure and
              cutting-edge generative AI, Torro has delivered measurable financial impact, fortified data security, and
              dramatically enhanced engineering productivity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[12px] font-black text-black uppercase tracking-[0.22em] transition-colors"
                style={{ backgroundColor: ACCENT, boxShadow: '0 10px 30px rgba(153,160,249,0.25)' }}
              >
                View Resources <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="/use-cases"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[12px] font-black uppercase tracking-[0.22em] border border-white/10 bg-white/5 text-white/75 hover:text-white hover:border-white/20 transition-colors"
              >
                Back to Use Cases
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-20 md:pb-24">
        <div className="mx-auto px-6 md:px-12 max-w-[95rem]">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-7 md:p-10">
            <div className="text-[11px] font-black uppercase tracking-[0.35em] text-white/35 mb-3">
              Core pillars of success
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <PillarCard
                icon={ShieldCheck}
                title="Secure Edge AI for Next‑Generation Privacy"
                text="Implemented an Edge AI LLM Gateway with advanced differential privacy protocols, ensuring sensitive enterprise data is processed securely at the edge without compromising LLM analytical power."
              />
              <PillarCard
                icon={Database}
                title="Legacy Modernization and US$1M Value Creation"
                text="Engineered a proprietary SAS‑to‑Lakehouse transformation agent to modernize 3,000 legacy SAS programs, generating US$1M in direct cost savings and establishing an AI‑ready data model with quality guardrails and lineage."
              />
              <PillarCard
                icon={Cpu}
                title="Hyper‑Scale AI Deployment & Workforce Uplift"
                text="Established CI/CD for a 400B parameter model on dual NVIDIA DGX Spark infrastructure, integrating a distributed, agentic coding system that uplifts developer productivity and accelerates delivery."
              />
              <PillarCard
                icon={Zap}
                title="Greater Bay Area Modernization & PIPL Compliance"
                text="Executed a Lakehouse transformation across China’s Greater Bay Area, modernizing legacy Teradata and SAS environments into an industry-standard Lakehouse engineered to fulfill PIPL regulatory requirements."
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0a0d1a]/40 p-6">
              <div className="text-[11px] font-black uppercase tracking-[0.35em] mb-2" style={{ color: ACCENT }}>
                Business Impact
              </div>
              <p className="mx-0 text-left text-[13px] md:text-[14px] text-white/55 leading-relaxed font-medium">
                Through this strategic initiative, Torro has enabled the client to securely harness generative AI,
                modernize legacy data architectures across key regions with exceptional ROI, ensure strict cross-border
                regulatory compliance, and future-proof its engineering workforce for the AI era.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyTelecomHK;

