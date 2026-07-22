import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    className={`pointer-events-none relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_50px_-28px_rgba(15,23,42,0.55)] ring-1 ring-black/[0.03] md:h-[340px] ${className}`}
  >
    {children}
  </motion.div>
);

const Header = ({ eyebrow, title }) => (
  <div className="border-b border-slate-200/80 bg-gradient-to-r from-[#3d4db8] to-[#5b6cfa] px-3 py-2 sm:px-3.5">
    <div className="flex items-center justify-between gap-2">
      <div>
        <div className="text-[7px] font-bold uppercase tracking-[0.16em] text-white/70">{eyebrow}</div>
        <div className="text-[10px] font-black text-white sm:text-[11px]">{title}</div>
      </div>
      <motion.span
        animate={{ opacity: [1, 0.35, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[6px] font-black uppercase tracking-wider text-white"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        Live
      </motion.span>
    </div>
  </div>
);

const useCycle = (length, intervalMs = 1600) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);
  return index;
};

/** 1 — Data Engineering: pipeline canvas */
export const DataEngineeringMock = () => {
  const steps = [
    { label: 'Ingest', color: 'bg-sky-100 text-sky-700 border-sky-200' },
    { label: 'Validate', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    { label: 'Transform', color: 'bg-violet-100 text-violet-700 border-violet-200' },
    { label: 'Publish', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  ];
  const active = useCycle(steps.length, 1400);
  const metrics = [
    ['Airflow DAG', '12 tasks'],
    ['dbt models', '48'],
    ['SLA', '99.5%'],
  ];
  const metricActive = useCycle(metrics.length, 1800);

  return (
    <Shell className="bg-[#f5f7fb]">
      <Header eyebrow="Engagement Console" title="Pipeline Blueprint" />
      <div className="relative flex min-h-[236px] flex-1 flex-col justify-center gap-3 px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3 md:min-h-0">
        <div className="flex items-center justify-between gap-0.5 sm:gap-1">
          {steps.map((s, i) => (
            <React.Fragment key={s.label}>
              <motion.div
                animate={{
                  scale: i === active ? 1.06 : 1,
                  y: i === active ? -2 : 0,
                  boxShadow:
                    i === active
                      ? '0 10px 22px -10px rgba(91,108,250,0.45)'
                      : '0 2px 8px -6px rgba(15,23,42,0.12)',
                }}
                transition={{ duration: 0.35 }}
                className={`min-w-0 flex-1 rounded-lg border px-1.5 py-1.5 text-center sm:rounded-xl sm:px-2.5 sm:py-2 ${s.color} ${
                  i === active ? 'ring-2 ring-[#99A0F9]/50' : ''
                }`}
              >
                <Layers className="mx-auto mb-0.5 h-3 w-3 sm:mb-1 sm:h-3.5 sm:w-3.5" />
                <div className="truncate text-[7px] font-black sm:text-[8px]">{s.label}</div>
              </motion.div>
              {i < steps.length - 1 ? (
                <motion.div
                  animate={{
                    opacity: i < active ? 1 : 0.35,
                    backgroundColor: i < active ? '#99A0F9' : 'rgba(153,160,249,0.35)',
                  }}
                  className="h-0.5 flex-1 rounded"
                />
              ) : null}
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {metrics.map(([k, v], i) => (
            <motion.div
              key={k}
              animate={{
                scale: i === metricActive ? 1.04 : 1,
                borderColor: i === metricActive ? '#99A0F9' : '#e2e8f0',
                backgroundColor: i === metricActive ? '#eef0ff' : '#ffffff',
              }}
              transition={{ duration: 0.35 }}
              className="rounded-xl border p-2 text-center shadow-sm"
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
    { name: 'AWS', Icon: Cloud, x: '8%', y: '18%' },
    { name: 'Azure', Icon: Cloud, x: '38%', y: '14%' },
    { name: 'GCP', Icon: Cloud, x: '66%', y: '20%' },
    { name: 'On-Prem', Icon: Server, x: '38%', y: '56%' },
  ];
  const active = useCycle(clouds.length, 1500);

  return (
    <Shell className="bg-[#eef2ff]">
      <Header eyebrow="Architecture Review" title="Hybrid Cloud Target State" />
      <div className="relative min-h-[220px] flex-1 sm:min-h-[236px] md:min-h-0">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 240" fill="none" aria-hidden="true">
          <motion.path
            d="M80 70 L170 70 L170 150 L200 150"
            stroke="#99A0F9"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          />
          <motion.path
            d="M200 60 L200 150"
            stroke="#99A0F9"
            strokeWidth="2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          />
          <motion.path
            d="M320 75 L230 75 L230 150 L200 150"
            stroke="#99A0F9"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          />
        </svg>
        {clouds.map((c, i) => {
          const Icon = c.Icon;
          return (
            <motion.div
              key={c.name}
              animate={{
                scale: i === active ? 1.08 : 1,
                y: i === active ? -3 : 0,
                boxShadow:
                  i === active
                    ? '0 14px 28px -12px rgba(91,108,250,0.5)'
                    : '0 6px 16px -10px rgba(15,23,42,0.2)',
                borderColor: i === active ? '#99A0F9' : '#ffffff',
              }}
              transition={{ duration: 0.35 }}
              className="absolute flex w-[64px] flex-col items-center rounded-xl border bg-white/95 px-1.5 py-1.5 sm:w-[78px] sm:px-2 sm:py-2"
              style={{ left: c.x, top: c.y }}
            >
              <Icon className="mb-0.5 h-3.5 w-3.5 text-[#5b6cfa] sm:mb-1 sm:h-4 sm:w-4" />
              <span className="text-[7px] font-black text-slate-800 sm:text-[8px]">{c.name}</span>
            </motion.div>
          );
        })}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          className="absolute left-[40%] top-[42%] rounded-full bg-[#99A0F9] px-2 py-1 text-[6px] font-black text-white shadow sm:left-[44%]"
        >
          Control Plane
        </motion.div>
      </div>
    </Shell>
  );
};

/** 3 — Legacy to Cloud: migration phases (live progress) */
export const LegacyMigrationMock = () => {
  const frames = [
    [
      { phase: '01', title: 'Discover', pct: 100, done: true },
      { phase: '02', title: 'Pilot', pct: 100, done: true },
      { phase: '03', title: 'Migrate', pct: 42, done: false },
      { phase: '04', title: 'Cutover', pct: 0, done: false },
    ],
    [
      { phase: '01', title: 'Discover', pct: 100, done: true },
      { phase: '02', title: 'Pilot', pct: 100, done: true },
      { phase: '03', title: 'Migrate', pct: 62, done: false },
      { phase: '04', title: 'Cutover', pct: 8, done: false },
    ],
    [
      { phase: '01', title: 'Discover', pct: 100, done: true },
      { phase: '02', title: 'Pilot', pct: 100, done: true },
      { phase: '03', title: 'Migrate', pct: 88, done: false },
      { phase: '04', title: 'Cutover', pct: 18, done: false },
    ],
    [
      { phase: '01', title: 'Discover', pct: 100, done: true },
      { phase: '02', title: 'Pilot', pct: 100, done: true },
      { phase: '03', title: 'Migrate', pct: 100, done: true },
      { phase: '04', title: 'Cutover', pct: 34, done: false },
    ],
    [
      { phase: '01', title: 'Discover', pct: 100, done: true },
      { phase: '02', title: 'Pilot', pct: 100, done: true },
      { phase: '03', title: 'Migrate', pct: 100, done: true },
      { phase: '04', title: 'Cutover', pct: 68, done: false },
    ],
    [
      { phase: '01', title: 'Discover', pct: 100, done: true },
      { phase: '02', title: 'Pilot', pct: 100, done: true },
      { phase: '03', title: 'Migrate', pct: 100, done: true },
      { phase: '04', title: 'Cutover', pct: 100, done: true },
    ],
  ];
  const frame = useCycle(frames.length, 1600);
  const phases = frames[frame];
  const activeIdx = phases.findIndex((p) => !p.done);

  return (
    <Shell className="bg-white">
      <Header eyebrow="Modernization Program" title="Legacy → Cloud Roadmap" />
      <div className="flex min-h-[236px] flex-1 flex-col justify-center space-y-1.5 p-2.5 sm:space-y-2.5 sm:p-3.5 md:min-h-0">
        {phases.map((p, i) => (
          <motion.div
            key={p.phase}
            animate={{
              borderColor: i === activeIdx ? '#99A0F9' : '#e2e8f0',
              backgroundColor: i === activeIdx ? '#f4f6ff' : 'rgba(248,250,252,0.8)',
              scale: i === activeIdx ? 1.01 : 1,
            }}
            transition={{ duration: 0.35 }}
            className="rounded-lg border px-2.5 py-1.5 sm:rounded-xl sm:px-3 sm:py-2"
          >
            <div className="mb-1 flex items-center justify-between sm:mb-1.5">
              <div className="flex min-w-0 items-center gap-2">
                <span className="shrink-0 text-[8px] font-black text-[#5b6cfa]">{p.phase}</span>
                <span className="truncate text-[8px] font-black text-slate-800 sm:text-[9px]">{p.title}</span>
              </div>
              <AnimatePresence mode="wait">
                {p.done ? (
                  <motion.div
                    key="done"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="shrink-0"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  </motion.div>
                ) : (
                  <motion.span
                    key={p.pct}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="shrink-0 text-[7px] font-bold text-slate-400"
                  >
                    {p.pct}%
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-slate-200 sm:h-1.5">
              <motion.div
                animate={{ width: `${p.pct}%` }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
    { reg: 'DPDP', status: 'Gap', tone: 'rose', action: 'Remediate Q3' },
    { reg: 'GDPR', status: 'Partial', tone: 'amber', action: 'Close SCCs' },
    { reg: 'BCBS239', status: 'Ready', tone: 'emerald', action: 'Evidence pack' },
    { reg: 'SOX', status: 'Ready', tone: 'emerald', action: 'Evidence pack' },
    { reg: 'HIPAA', status: 'Gap', tone: 'rose', action: 'Remediate Q3' },
  ];
  const active = useCycle(rows.length, 1400);

  const toneMap = {
    rose: 'bg-rose-50 text-rose-700',
    amber: 'bg-amber-50 text-amber-700',
    emerald: 'bg-emerald-50 text-emerald-700',
  };

  return (
    <Shell className="bg-[#f8f9fc]">
      <Header eyebrow="Regulatory Advisory" title="Control Gap Assessment" />
      <div className="flex min-h-[236px] flex-1 flex-col p-2.5 sm:p-3 md:min-h-0">
        <div className="mb-2 grid grid-cols-[1fr_0.7fr_0.9fr] gap-1 rounded-lg bg-[#7c86e8] px-2.5 py-1.5 text-[7px] font-bold uppercase text-white">
          <span>Mandate</span>
          <span>Status</span>
          <span>Next Action</span>
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r.reg}
            animate={{
              backgroundColor: i === active ? '#eef0ff' : i % 2 ? '#ffffff' : 'rgba(248,250,252,0.8)',
              scale: i === active ? 1.01 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-[1fr_0.7fr_0.9fr] items-center gap-1 border-b border-slate-100 px-2.5 py-2 text-[8px]"
          >
            <span className="font-black text-slate-800">{r.reg}</span>
            <motion.span
              animate={{ scale: i === active ? 1.05 : 1 }}
              className={`w-max rounded-full px-1.5 py-0.5 text-[6px] font-bold ${toneMap[r.tone]}`}
            >
              {r.status}
            </motion.span>
            <span className="truncate text-slate-500">{r.action}</span>
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
  const active = useCycle(models.length, 1500);

  return (
    <Shell className="bg-white">
      <Header eyebrow="AI Control Tower" title="Model & Prompt Registry" />
      <div className="space-y-2 p-3">
        {models.map((m, i) => (
          <motion.div
            key={m.name}
            animate={{
              borderColor: i === active ? '#99A0F9' : '#e2e8f0',
              backgroundColor: i === active ? '#eef0ff' : 'rgba(248,250,252,0.7)',
              x: i === active ? 4 : 0,
            }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2.5 rounded-xl border px-3 py-2.5"
          >
            <motion.div
              animate={{ scale: i === active ? [1, 1.08, 1] : 1 }}
              transition={{ repeat: i === active ? Infinity : 0, duration: 1.4 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef0ff]"
            >
              <Brain className="h-4 w-4 text-[#5b6cfa]" />
            </motion.div>
            <div className="min-w-0 flex-1 text-left">
              <div className="truncate text-[9px] font-black text-slate-900">{m.name}</div>
              <div className="mt-0.5 flex gap-1">
                <span className="rounded bg-white px-1.5 py-0.5 text-[6px] font-bold text-slate-500 ring-1 ring-slate-200">
                  {m.stage}
                </span>
                <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[6px] font-bold text-amber-700">{m.risk} risk</span>
              </div>
            </div>
            <Shield className={`h-3.5 w-3.5 ${i === active ? 'text-[#5b6cfa]' : 'text-emerald-500'}`} />
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
  const scoreFrames = [
    [
      { label: 'People', score: 58 },
      { label: 'Process', score: 44 },
      { label: 'Technology', score: 66 },
      { label: 'Data', score: 52 },
    ],
    [
      { label: 'People', score: 62 },
      { label: 'Process', score: 48 },
      { label: 'Technology', score: 71 },
      { label: 'Data', score: 55 },
    ],
    [
      { label: 'People', score: 68 },
      { label: 'Process', score: 54 },
      { label: 'Technology', score: 76 },
      { label: 'Data', score: 61 },
    ],
    [
      { label: 'People', score: 72 },
      { label: 'Process', score: 59 },
      { label: 'Technology', score: 81 },
      { label: 'Data', score: 67 },
    ],
  ];
  const frame = useCycle(scoreFrames.length, 1800);
  const dims = scoreFrames[frame];
  const overall = Math.round(dims.reduce((a, d) => a + d.score, 0) / dims.length);
  const activeDim = useCycle(dims.length, 1200);

  return (
    <Shell className="bg-[#f7f8fc]">
      <Header eyebrow="Maturity Assessment" title="Governance Scorecard" />
      <div className="grid min-h-[236px] flex-1 grid-cols-1 gap-2 p-2.5 sm:grid-cols-[0.9fr_1.1fr] sm:p-3 md:min-h-0">
        <motion.div
          animate={{ borderColor: ['#e2e8f0', '#99A0F9', '#e2e8f0'] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          className="flex flex-col items-center justify-center rounded-xl border bg-white p-2.5 shadow-sm sm:p-3"
        >
          <Gauge className="mb-1 h-5 w-5 text-[#5b6cfa]" />
          <AnimatePresence mode="wait">
            <motion.div
              key={overall}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-2xl font-black text-slate-900 sm:text-3xl"
            >
              {overall}
            </motion.div>
          </AnimatePresence>
          <div className="text-[7px] font-bold uppercase tracking-wide text-slate-400">Overall maturity</div>
          <div className="mt-2 rounded-full bg-amber-50 px-2 py-0.5 text-[6px] font-black text-amber-700">
            Level {overall >= 70 ? '3' : '2'} · {overall >= 70 ? 'Defined' : 'Managed'}
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-1 sm:space-y-2 sm:gap-0">
          {dims.map((d, i) => (
            <motion.div
              key={d.label}
              animate={{
                borderColor: i === activeDim ? '#99A0F9' : '#e2e8f0',
                backgroundColor: i === activeDim ? '#eef0ff' : '#ffffff',
              }}
              className="rounded-lg border px-2 py-1.5 sm:px-2.5 sm:py-2"
            >
              <div className="mb-1 flex justify-between text-[7px] sm:text-[8px]">
                <span className="font-bold text-slate-700">{d.label}</span>
                <motion.span
                  key={`${d.label}-${d.score}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-black text-[#5b6cfa]"
                >
                  {d.score}
                </motion.span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-slate-100 sm:h-1.5">
                <motion.div
                  animate={{ width: `${d.score}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[#6b74e8] to-[#99A0F9]"
                />
              </div>
            </motion.div>
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
