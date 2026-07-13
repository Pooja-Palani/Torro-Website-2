import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Users,
  Lock,
  CheckCircle2,
  MapPin,
  Clock,
  FileCheck2,
  Shield,
} from 'lucide-react';

/** Fictional use-case UI mocks for marketing — not product screenshots. */

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

/** Visibility — estate map */
export const VisibilityMock = () => {
  const domains = [
    { label: 'Lake', count: '1.2M', x: '10%', y: '20%' },
    { label: 'Warehouse', count: '840K', x: '55%', y: '18%' },
    { label: 'SaaS', count: '210K', x: '18%', y: '55%' },
    { label: 'Legacy', count: '95K', x: '58%', y: '58%' },
  ];
  const active = useCycle(domains.length, 1500);

  return (
    <Shell className="bg-[#eef2ff]">
      <Header eyebrow="Use Case" title="Enterprise Data Visibility" />
      <div className="relative h-[calc(100%-44px)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(153,160,249,0.15),transparent_55%)]" />
        {domains.map((d, i) => (
          <motion.div
            key={d.label}
            animate={{
              scale: i === active ? 1.08 : 1,
              y: i === active ? -4 : 0,
              boxShadow:
                i === active
                  ? '0 12px 28px -12px rgba(91,108,250,0.45)'
                  : '0 6px 16px -10px rgba(15,23,42,0.25)',
            }}
            transition={{ duration: 0.4 }}
            className="absolute w-[88px] rounded-xl border border-white bg-white/95 px-2.5 py-2 text-center"
            style={{ left: d.x, top: d.y }}
          >
            <motion.div
              animate={{ opacity: i === active ? [0.5, 1, 0.5] : 1 }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              <Eye className="mx-auto mb-0.5 h-3.5 w-3.5 text-[#5b6cfa]" />
            </motion.div>
            <div className="text-[8px] font-black text-slate-800">{d.label}</div>
            <div className="text-[7px] font-bold text-[#5b6cfa]">{d.count}</div>
          </motion.div>
        ))}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="absolute left-[38%] top-[38%] rounded-full bg-[#5b6cfa] px-2.5 py-1 text-[7px] font-black text-white shadow"
        >
          Single pane
        </motion.div>
      </div>
    </Shell>
  );
};

/** Cross-border — region gates */
export const CrossBorderMock = () => {
  const regions = [
    { code: 'IN', rule: 'Localize', ok: true },
    { code: 'EU', rule: 'SCCs', ok: true },
    { code: 'US', rule: 'Review', ok: false },
    { code: 'HK', rule: 'Allowed', ok: true },
  ];
  const active = useCycle(regions.length, 1400);

  return (
    <Shell className="bg-white">
      <Header eyebrow="Use Case" title="Cross-Border Governance" />
      <div className="grid h-[calc(100%-44px)] grid-cols-2 gap-2 p-3">
        {regions.map((r, i) => (
          <motion.div
            key={r.code}
            animate={{
              scale: i === active ? 1.04 : 1,
              borderColor: i === active ? (r.ok ? '#6ee7b7' : '#fcd34d') : r.ok ? '#a7f3d0' : '#fde68a',
              y: i === active ? -2 : 0,
            }}
            transition={{ duration: 0.35 }}
            className={`flex flex-col rounded-xl border p-2.5 ${
              r.ok ? 'bg-emerald-50/70' : 'bg-amber-50/70'
            }`}
          >
            <div className="mb-1 flex items-center gap-1.5">
              <motion.div
                animate={{ rotate: i === active ? [0, -12, 12, 0] : 0 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className={`h-3.5 w-3.5 ${r.ok ? 'text-emerald-600' : 'text-amber-600'}`} />
              </motion.div>
              <span className="text-[10px] font-black text-slate-800">{r.code}</span>
            </div>
            <div className="text-[7px] font-semibold text-slate-600">Transfer policy</div>
            <div className={`mt-auto pt-2 text-[8px] font-black ${r.ok ? 'text-emerald-700' : 'text-amber-700'}`}>
              {r.rule}
            </div>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
};

/** Access provisioning — approval flow */
export const AccessProvisioningMock = () => {
  const steps = ['Request', 'Policy', 'Approve', 'Provision'];
  const active = useCycle(steps.length, 1500);

  return (
    <Shell className="bg-[#f6f7fb]">
      <Header eyebrow="Use Case" title="Automated Access Provisioning" />
      <div className="flex h-[calc(100%-44px)] flex-col justify-center gap-4 p-3.5">
        <div className="flex items-center gap-1">
          {steps.map((label, i) => {
            const done = i < active;
            const current = i === active;
            return (
              <React.Fragment key={label}>
                <motion.div
                  animate={{
                    scale: current ? 1.06 : 1,
                    borderColor: done ? '#a7f3d0' : current ? '#99A0F9' : '#e2e8f0',
                    backgroundColor: done ? '#ecfdf5' : current ? '#eef0ff' : '#ffffff',
                  }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-1 flex-col items-center rounded-xl border px-2 py-2"
                >
                  {done ? (
                    <CheckCircle2 className="mb-1 h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <motion.div
                      animate={current ? { opacity: [0.45, 1, 0.45] } : { opacity: 1 }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                      <Users className={`mb-1 h-3.5 w-3.5 ${current ? 'text-[#5b6cfa]' : 'text-slate-400'}`} />
                    </motion.div>
                  )}
                  <span className="text-[7px] font-black text-slate-700">{label}</span>
                </motion.div>
                {i < steps.length - 1 ? (
                  <motion.div
                    animate={{ opacity: i < active ? 1 : 0.35 }}
                    className="h-0.5 w-2 rounded bg-[#99A0F9]/50"
                  />
                ) : null}
              </React.Fragment>
            );
          })}
        </div>
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
        >
          <div className="text-left">
            <div className="text-[8px] font-black text-slate-800">JIT access · risk_mart</div>
            <div className="flex items-center gap-1 text-[7px] text-slate-500">
              <Clock className="h-3 w-3" /> Expires in 7 days
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="rounded-lg bg-[#5b6cfa] px-2.5 py-1 text-[7px] font-black text-white"
            >
              {steps[active]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>
    </Shell>
  );
};

/** Consent & PII */
export const ConsentPiiMock = () => {
  const prefs = [
    { purpose: 'Marketing', on: false },
    { purpose: 'Analytics', on: true },
    { purpose: 'Service', on: true },
    { purpose: 'Sharing', on: false },
  ];
  const fields = ['email', 'phone', 'national_id'];
  const activePref = useCycle(prefs.length, 1400);
  const activeField = useCycle(fields.length, 1100);

  return (
    <Shell className="bg-white">
      <Header eyebrow="Use Case" title="Consent & PII Management" />
      <div className="grid h-[calc(100%-44px)] grid-cols-[1fr_1fr] gap-2 p-3">
        <div className="space-y-1.5">
          {prefs.map((p, i) => {
            const on = i === activePref ? !p.on : p.on;
            return (
              <motion.div
                key={p.purpose}
                animate={{
                  borderColor: i === activePref ? '#99A0F9' : '#e2e8f0',
                  backgroundColor: i === activePref ? '#eef0ff' : '#f8fafc',
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between rounded-lg border px-2.5 py-2"
              >
                <span className="text-[8px] font-bold text-slate-700">{p.purpose}</span>
                <motion.div
                  animate={{ backgroundColor: on ? '#34d399' : '#cbd5e1' }}
                  className="relative h-3.5 w-6 rounded-full"
                >
                  <motion.div
                    animate={{ x: on ? 10 : 2 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="absolute top-0.5 h-2.5 w-2.5 rounded-full bg-white shadow"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="flex flex-col rounded-xl border border-rose-200 bg-rose-50/60 p-2.5"
        >
          <div className="mb-2 flex items-center gap-1 text-[8px] font-black text-rose-700">
            <Lock className="h-3.5 w-3.5" /> PII fields
          </div>
          {fields.map((f, i) => (
            <motion.div
              key={f}
              animate={{
                backgroundColor: i === activeField ? '#ffe4e6' : '#ffffff',
                x: i === activeField ? 3 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="mb-1 rounded-md px-2 py-1.5 font-mono text-[7px] font-semibold text-slate-600"
            >
              {f} · masked
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="mt-auto text-[6px] font-bold text-rose-600"
          >
            Enforced at access
          </motion.div>
        </motion.div>
      </div>
    </Shell>
  );
};

/** Audit readiness */
export const AuditReadinessMock = () => {
  const items = [
    { label: 'Access logs', status: 'Ready' },
    { label: 'Lineage export', status: 'Ready' },
    { label: 'Consent proof', status: 'Ready' },
    { label: 'Incident pack', status: 'Draft' },
  ];
  const active = useCycle(items.length, 1500);
  const score = 90 + (active % 5);

  return (
    <Shell className="bg-[#f8f9fc]">
      <Header eyebrow="Use Case" title="Audit Readiness Console" />
      <div className="flex h-[calc(100%-44px)] flex-col gap-2 p-3">
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
        >
          <div className="flex items-center gap-2 text-left">
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.2 }}
            >
              <Shield className="h-4 w-4 text-[#5b6cfa]" />
            </motion.div>
            <div>
              <div className="text-[9px] font-black text-slate-900">Posture score</div>
              <div className="text-[7px] text-slate-500">DPDP · RBI · SOX pack</div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={score}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-xl font-black text-[#5b6cfa]"
            >
              {score}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="grid flex-1 grid-cols-2 gap-1.5">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              animate={{
                scale: i === active ? 1.03 : 1,
                borderColor: i === active ? '#99A0F9' : '#e2e8f0',
                backgroundColor: i === active ? '#eef0ff' : '#ffffff',
              }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 rounded-lg border px-2.5 py-2"
            >
              {it.status === 'Ready' ? (
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
              ) : (
                <motion.div
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                >
                  <FileCheck2 className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                </motion.div>
              )}
              <div className="min-w-0 text-left">
                <div className="truncate text-[8px] font-bold text-slate-800">{it.label}</div>
                <div className="text-[6px] font-semibold text-slate-400">{it.status}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.01, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="rounded-lg bg-[#5b6cfa] py-2 text-center text-[8px] font-black text-white"
        >
          Export regulator pack
        </motion.div>
      </div>
    </Shell>
  );
};

const USE_CASE_MOCKS = {
  'Enterprise Data Visibility': VisibilityMock,
  'Cross-Border Data Governance': CrossBorderMock,
  'Automated Access Provisioning': AccessProvisioningMock,
  'Consent & PII Management': ConsentPiiMock,
  'Audit Readiness': AuditReadinessMock,
};

export const UseCaseMock = ({ title }) => {
  const Comp = USE_CASE_MOCKS[title] || VisibilityMock;
  return <Comp />;
};

export default UseCaseMock;
