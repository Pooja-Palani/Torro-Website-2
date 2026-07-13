import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Server,
  CheckCircle2,
  AlertTriangle,
  Brain,
  Layers,
  Shield,
  Gauge,
} from 'lucide-react';

/** Distinct service-page mocks — fictional consulting UI, not product screens. */

const Shell = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className={`pointer-events-none relative h-[280px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_50px_-28px_rgba(15,23,42,0.55)] ring-1 ring-black/[0.03] md:h-[340px] ${className}`}
  >
    {children}
  </motion.div>
);

const Header = ({ eyebrow, title }) => (
  <div className="border-b border-slate-200/80 bg-gradient-to-r from-[#3d4db8] to-[#5b6cfa] px-3 py-2 sm:px-3.5">
    <div className="text-[7px] font-bold uppercase tracking-[0.16em] text-white/70">{eyebrow}</div>
    <div className="text-[10px] font-black text-white sm:text-[11px]">{title}</div>
  </div>
);

/** 1 — Data Engineering: pipeline canvas */
export const DataEngineeringMock = () => {
  const steps = [
    { label: 'Ingest', color: 'bg-sky-100 text-sky-700 border-sky-200' },
    { label: 'Validate', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    { label: 'Transform', color: 'bg-violet-100 text-violet-700 border-violet-200' },
    { label: 'Publish', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  ];

  return (
    <Shell className="bg-[#f5f7fb]">
      <Header eyebrow="Engagement Console" title="Pipeline Blueprint" />
      <div className="relative flex h-[calc(100%-44px)] flex-col justify-center gap-4 px-4 py-3">
        <div className="flex items-center justify-between gap-1">
          {steps.map((s, i) => (
            <React.Fragment key={s.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className={`rounded-xl border px-2.5 py-2 text-center shadow-sm ${s.color}`}
              >
                <Layers className="mx-auto mb-1 h-3.5 w-3.5" />
                <div className="text-[8px] font-black">{s.label}</div>
              </motion.div>
              {i < steps.length - 1 ? (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.35 }}
                  className="h-0.5 flex-1 origin-left rounded bg-[#99A0F9]/50"
                />
              ) : null}
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ['Airflow DAG', '12 tasks'],
            ['dbt models', '48'],
            ['SLA', '99.5%'],
          ].map(([k, v], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.08 }}
              className="rounded-xl border border-slate-200 bg-white p-2 text-center shadow-sm"
            >
              <div className="text-[9px] font-black text-slate-900">{v}</div>
              <div className="text-[6px] font-semibold uppercase tracking-wide text-slate-400">{k}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Shell>
  );
};

/** 2 — Cloud Consulting: multi-cloud map */
export const CloudConsultingMock = () => {
  const clouds = [
    { name: 'AWS', Icon: Cloud, x: '12%', y: '22%' },
    { name: 'Azure', Icon: Cloud, x: '42%', y: '18%' },
    { name: 'GCP', Icon: Cloud, x: '72%', y: '24%' },
    { name: 'On-Prem', Icon: Server, x: '42%', y: '58%' },
  ];

  return (
    <Shell className="bg-[#eef2ff]">
      <Header eyebrow="Architecture Review" title="Hybrid Cloud Target State" />
      <div className="relative h-[calc(100%-44px)]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 240" fill="none" aria-hidden="true">
          <motion.path
            d="M80 70 L170 70 L170 150 L200 150"
            stroke="#99A0F9"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M200 60 L200 150"
            stroke="#99A0F9"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          />
          <motion.path
            d="M320 75 L230 75 L230 150 L200 150"
            stroke="#99A0F9"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          />
        </svg>
        {clouds.map((c, i) => {
          const Icon = c.Icon;
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="absolute flex w-[78px] flex-col items-center rounded-xl border border-white bg-white/95 px-2 py-2 shadow-md"
              style={{ left: c.x, top: c.y }}
            >
              <Icon className="mb-1 h-4 w-4 text-[#5b6cfa]" />
              <span className="text-[8px] font-black text-slate-800">{c.name}</span>
            </motion.div>
          );
        })}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          className="absolute left-[44%] top-[42%] rounded-full bg-[#99A0F9] px-2 py-1 text-[6px] font-black text-white shadow"
        >
          Control Plane
        </motion.div>
      </div>
    </Shell>
  );
};

/** 3 — Legacy to Cloud: migration phases */
export const LegacyMigrationMock = () => {
  const phases = [
    { phase: '01', title: 'Discover', pct: 100, done: true },
    { phase: '02', title: 'Pilot', pct: 100, done: true },
    { phase: '03', title: 'Migrate', pct: 62, done: false },
    { phase: '04', title: 'Cutover', pct: 12, done: false },
  ];

  return (
    <Shell className="bg-white">
      <Header eyebrow="Modernization Program" title="Legacy → Cloud Roadmap" />
      <div className="space-y-2.5 p-3 sm:p-3.5">
        {phases.map((p, i) => (
          <motion.div
            key={p.phase}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * i }}
            className="rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-black text-[#5b6cfa]">{p.phase}</span>
                <span className="text-[9px] font-black text-slate-800">{p.title}</span>
              </div>
              {p.done ? (
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              ) : (
                <span className="text-[7px] font-bold text-slate-400">{p.pct}%</span>
              )}
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.pct}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
                className={`h-full rounded-full ${p.done ? 'bg-emerald-400' : 'bg-[#99A0F9]'}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
};

/** 4 — Compliance consulting: gap matrix */
export const ComplianceConsultingMock = () => {
  const rows = [
    { reg: 'DPDP', status: 'Gap', tone: 'rose' },
    { reg: 'GDPR', status: 'Partial', tone: 'amber' },
    { reg: 'BCBS239', status: 'Ready', tone: 'emerald' },
    { reg: 'SOX', status: 'Ready', tone: 'emerald' },
    { reg: 'HIPAA', status: 'Gap', tone: 'rose' },
  ];

  const toneMap = {
    rose: 'bg-rose-50 text-rose-700',
    amber: 'bg-amber-50 text-amber-700',
    emerald: 'bg-emerald-50 text-emerald-700',
  };

  return (
    <Shell className="bg-[#f8f9fc]">
      <Header eyebrow="Regulatory Advisory" title="Control Gap Assessment" />
      <div className="p-3">
        <div className="mb-2 grid grid-cols-[1fr_0.7fr_0.9fr] gap-1 rounded-lg bg-[#7c86e8] px-2.5 py-1.5 text-[7px] font-bold uppercase text-white">
          <span>Mandate</span>
          <span>Status</span>
          <span>Next Action</span>
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r.reg}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i }}
            className={`grid grid-cols-[1fr_0.7fr_0.9fr] items-center gap-1 border-b border-slate-100 px-2.5 py-2 text-[8px] ${
              i % 2 ? 'bg-white' : 'bg-slate-50/80'
            }`}
          >
            <span className="font-black text-slate-800">{r.reg}</span>
            <span className={`w-max rounded-full px-1.5 py-0.5 text-[6px] font-bold ${toneMap[r.tone]}`}>{r.status}</span>
            <span className="truncate text-slate-500">{r.status === 'Ready' ? 'Evidence pack' : 'Remediate Q3'}</span>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
};

/** 5 — AI/ML Governance: model registry */
export const AimlGovernanceMock = () => {
  const models = [
    { name: 'credit_risk_v4', stage: 'Prod', risk: 'High' },
    { name: 'churn_llm_assist', stage: 'Pilot', risk: 'Med' },
    { name: 'doc_extract_ocr', stage: 'Dev', risk: 'Low' },
  ];

  return (
    <Shell className="bg-white">
      <Header eyebrow="AI Control Tower" title="Model & Prompt Registry" />
      <div className="space-y-2 p-3">
        {models.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef0ff]">
              <Brain className="h-4 w-4 text-[#5b6cfa]" />
            </div>
            <div className="min-w-0 flex-1 text-left">
              <div className="truncate text-[9px] font-black text-slate-900">{m.name}</div>
              <div className="mt-0.5 flex gap-1">
                <span className="rounded bg-white px-1.5 py-0.5 text-[6px] font-bold text-slate-500 ring-1 ring-slate-200">
                  {m.stage}
                </span>
                <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[6px] font-bold text-amber-700">{m.risk} risk</span>
              </div>
            </div>
            <Shield className="h-3.5 w-3.5 text-emerald-500" />
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center justify-center gap-1 rounded-lg border border-dashed border-[#99A0F9]/40 bg-[#f4f6ff] py-2 text-[7px] font-bold text-[#5b6cfa]"
        >
          <AlertTriangle className="h-3 w-3" /> Policy gate: human review required
        </motion.div>
      </div>
    </Shell>
  );
};

/** 6 — Governance Assessment: maturity scorecard */
export const GovernanceAssessmentMock = () => {
  const dims = [
    { label: 'People', score: 62 },
    { label: 'Process', score: 48 },
    { label: 'Technology', score: 71 },
    { label: 'Data', score: 55 },
  ];

  return (
    <Shell className="bg-[#f7f8fc]">
      <Header eyebrow="Maturity Assessment" title="Governance Scorecard" />
      <div className="grid h-[calc(100%-44px)] grid-cols-[0.9fr_1.1fr] gap-2 p-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
        >
          <Gauge className="mb-1 h-5 w-5 text-[#5b6cfa]" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-slate-900"
          >
            59
          </motion.div>
          <div className="text-[7px] font-bold uppercase tracking-wide text-slate-400">Overall maturity</div>
          <div className="mt-2 rounded-full bg-amber-50 px-2 py-0.5 text-[6px] font-black text-amber-700">Level 2 · Managed</div>
        </motion.div>
        <div className="space-y-2">
          {dims.map((d, i) => (
            <div key={d.label} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2">
              <div className="mb-1 flex justify-between text-[8px]">
                <span className="font-bold text-slate-700">{d.label}</span>
                <span className="font-black text-[#5b6cfa]">{d.score}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${d.score}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.7 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#6b74e8] to-[#99A0F9]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
};

const SERVICE_MOCKS = {
  'Data Engineering Services': DataEngineeringMock,
  'Cloud Consulting Services': CloudConsultingMock,
  'Legacy to Cloud Platform Design': LegacyMigrationMock,
  'Compliance & Reg Consulting': ComplianceConsultingMock,
  'AI/ML Governance': AimlGovernanceMock,
  'Data Governance Assessment': GovernanceAssessmentMock,
};

export const ServiceMock = ({ title }) => {
  const Comp = SERVICE_MOCKS[title] || DataEngineeringMock;
  return <Comp />;
};

export default ServiceMock;
