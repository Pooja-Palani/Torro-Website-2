import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Lock,
  CheckCircle2,
  FileText,
  Eye,
  Ban,
  Activity,
} from 'lucide-react';

/** Fictional compliance UI mocks for marketing — not product screenshots. */

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

/** DPDP — consent gate + lifecycle */
export const DpdpMock = () => {
  const steps = ['Collect', 'Consent', 'Purpose', 'Retain', 'Delete'];
  const active = useCycle(steps.length, 1400);

  return (
    <Shell className="bg-[#f6f7fb]">
      <Header eyebrow="India · DPDP Act 2023" title="Consent & Lifecycle Control" />
      <div className="flex h-[calc(100%-44px)] flex-col gap-3 p-3 sm:p-3.5">
        <div className="flex items-center justify-between gap-1">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <motion.div
                animate={{
                  scale: i === active ? 1.06 : 1,
                  borderColor: i === active ? '#99A0F9' : '#e2e8f0',
                  backgroundColor: i === active ? '#eef0ff' : '#ffffff',
                }}
                transition={{ duration: 0.35 }}
                className="rounded-lg border px-2 py-1.5 text-center"
                style={{ color: i === active ? '#5b6cfa' : '#475569' }}
              >
                <div className="text-[7px] font-black sm:text-[8px]">{s}</div>
              </motion.div>
              {i < steps.length - 1 ? (
                <motion.div
                  animate={{ opacity: i < active ? 1 : 0.35, scaleX: i < active ? 1 : 0.6 }}
                  transition={{ duration: 0.35 }}
                  className="h-0.5 flex-1 origin-left rounded bg-[#99A0F9]/50"
                />
              ) : null}
            </React.Fragment>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-2 gap-2">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
            className="flex flex-col rounded-xl border border-emerald-200 bg-emerald-50/80 p-2.5"
          >
            <div className="mb-1 flex items-center gap-1 text-[8px] font-black text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> Consent granted
            </div>
            <div className="text-[7px] leading-snug text-emerald-800/80">Purpose: onboarding · Expires: 12 mo</div>
            <motion.div
              key={active}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              className="mt-auto pt-2 text-[9px] font-black text-emerald-700"
            >
              {(14.2 + (active % 3) * 0.1).toFixed(1)}M records
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 0.4 }}
            className="flex flex-col rounded-xl border border-rose-200 bg-rose-50/80 p-2.5"
          >
            <div className="mb-1 flex items-center gap-1 text-[8px] font-black text-rose-700">
              <Ban className="h-3.5 w-3.5" /> Blocked at access
            </div>
            <div className="text-[7px] leading-snug text-rose-800/80">No valid consent · Auto-excluded</div>
            <motion.div
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="mt-auto pt-2 text-[9px] font-black text-rose-700"
            >
              Live filter on
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Shell>
  );
};

/** GDPR — PII cell mask */
export const GdprMock = () => {
  const rows = [
    ['Anna K.', 'anna@corp.eu', 'DE'],
    ['Marco R.', 'marco@corp.eu', 'IT'],
    ['Priya S.', 'priya@corp.in', 'IN'],
    ['Jon W.', 'jon@corp.uk', 'UK'],
  ];
  const scan = useCycle(rows.length, 1300);

  return (
    <Shell className="bg-white">
      <Header eyebrow="EU · GDPR" title="Cell-level PII Protection" />
      <div className="p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <motion.span
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[7px] font-bold text-rose-700"
          >
            <Lock className="h-2.5 w-2.5" /> Masking active
          </motion.span>
          <span className="text-[7px] font-semibold text-slate-400">Role: Analyst · Region: EU</span>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-[1fr_1.2fr_0.5fr_0.7fr] bg-[#7c86e8] px-2.5 py-1.5 text-[6px] font-bold uppercase text-white">
            <span>Name</span>
            <span>Email</span>
            <span>CC</span>
            <span>Status</span>
          </div>
          {rows.map(([name, email, cc], i) => {
            const masked = i !== scan;
            return (
              <motion.div
                key={name}
                animate={{
                  backgroundColor: i === scan ? '#eef0ff' : i % 2 ? '#f8fafc' : '#ffffff',
                }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-[1fr_1.2fr_0.5fr_0.7fr] items-center gap-1 border-b border-slate-100 px-2.5 py-1.5 text-[7px]"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${name}-${masked}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="font-semibold text-slate-700"
                  >
                    {masked ? '••••••' : name}
                  </motion.span>
                </AnimatePresence>
                <span className="truncate font-mono text-slate-500">{masked ? '••••@••••.eu' : email}</span>
                <span className="text-slate-500">{cc}</span>
                <motion.span
                  animate={{ scale: i === scan ? [1, 1.08, 1] : 1 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-full px-1.5 py-0.5 text-center text-[6px] font-bold ${
                    masked ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                  }`}
                >
                  {masked ? 'Masked' : 'Clear'}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Shell>
  );
};

/** BCBS 239 — risk aggregation */
export const BcbsMock = () => {
  const lines = [
    { name: 'Credit Risk', pct: 92 },
    { name: 'Market Risk', pct: 78 },
    { name: 'Liquidity', pct: 85 },
    { name: 'Ops Risk', pct: 70 },
  ];
  const active = useCycle(lines.length, 1500);
  const score = Math.round(lines.reduce((a, l, i) => a + (i === active ? l.pct + 2 : l.pct), 0) / lines.length);

  return (
    <Shell className="bg-[#f8f9fc]">
      <Header eyebrow="Banking · BCBS 239" title="Risk Data Aggregation" />
      <div className="grid h-[calc(100%-44px)] grid-cols-[1.1fr_0.9fr] gap-2 p-3">
        <div className="space-y-2">
          {lines.map((l, i) => (
            <motion.div
              key={l.name}
              animate={{
                borderColor: i === active ? '#99A0F9' : '#e2e8f0',
                boxShadow: i === active ? '0 0 0 1px rgba(153,160,249,0.25)' : '0 0 0 0 transparent',
              }}
              className="rounded-lg border bg-white px-2.5 py-2"
            >
              <div className="mb-1 flex justify-between text-[8px]">
                <span className="font-bold text-slate-700">{l.name}</span>
                <span className="font-black text-[#5b6cfa]">{l.pct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  key={`${l.name}-${active}`}
                  initial={{ width: 0 }}
                  animate={{ width: i === active ? `${l.pct}%` : `${Math.max(28, l.pct - 18)}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#6b74e8] to-[#99A0F9]"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          >
            <Activity className="mb-1 h-5 w-5 text-[#5b6cfa]" />
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={score}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-2xl font-black text-slate-900"
            >
              {score}
            </motion.div>
          </AnimatePresence>
          <div className="text-[7px] font-bold uppercase tracking-wide text-slate-400">Aggregation score</div>
          <motion.div
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="mt-2 rounded-full bg-emerald-50 px-2 py-0.5 text-[6px] font-black text-emerald-700"
          >
            Lineage verified
          </motion.div>
        </motion.div>
      </div>
    </Shell>
  );
};

/** SOX & HIPAA — secure container */
export const SoxHipaaMock = () => {
  const rows = ['Notebook: risk_model.ipynb', 'Dataset: claims_phi_v2', 'Session TTL: 4h'];
  const active = useCycle(rows.length, 1600);

  return (
    <Shell className="bg-[#eef1f8]">
      <Header eyebrow="SOX · HIPAA" title="PrivBox Secure Analytics" />
      <div className="relative flex h-[calc(100%-44px)] items-center justify-center p-4">
        <motion.div
          animate={{
            boxShadow: [
              '0 10px 30px -18px rgba(91,108,250,0.35)',
              '0 14px 36px -14px rgba(91,108,250,0.55)',
              '0 10px 30px -18px rgba(91,108,250,0.35)',
            ],
          }}
          transition={{ repeat: Infinity, duration: 2.6 }}
          className="relative w-full max-w-[280px] rounded-2xl border-2 border-dashed border-[#99A0F9]/50 bg-white/90 p-4"
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-2.5 left-4 rounded-full bg-[#5b6cfa] px-2 py-0.5 text-[6px] font-black uppercase text-white"
          >
            Isolated container
          </motion.div>
          <div className="mb-3 flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
            >
              <Shield className="h-5 w-5 text-[#5b6cfa]" />
            </motion.div>
            <div className="text-left">
              <div className="text-[10px] font-black text-slate-900">PHI / Financial vault</div>
              <div className="text-[7px] text-slate-500">Geofenced · Session audited</div>
            </div>
          </div>
          <div className="space-y-1.5">
            {rows.map((row, i) => (
              <motion.div
                key={row}
                animate={{
                  backgroundColor: i === active ? '#eef0ff' : '#f8fafc',
                  x: i === active ? 4 : 0,
                }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[7px] font-semibold text-slate-600"
              >
                <FileText className="h-3 w-3 text-[#99A0F9]" />
                {row}
              </motion.div>
            ))}
          </div>
          <motion.div
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ repeat: Infinity, duration: 1.7 }}
            className="mt-3 flex items-center justify-center gap-1 text-[7px] font-bold text-emerald-600"
          >
            <Eye className="h-3 w-3" /> Recording audit trail
          </motion.div>
        </motion.div>
      </div>
    </Shell>
  );
};

const COMPLIANCE_MOCKS = {
  'DPDP Act 2023': DpdpMock,
  GDPR: GdprMock,
  'BCBS 239': BcbsMock,
  'SOX & HIPAA': SoxHipaaMock,
};

export const ComplianceMock = ({ title }) => {
  const Comp = COMPLIANCE_MOCKS[title] || DpdpMock;
  return <Comp />;
};

export default ComplianceMock;
