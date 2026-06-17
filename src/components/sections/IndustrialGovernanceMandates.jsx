import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Search, Shield, Lock, Database, Cloud, CheckCircle2, FileText } from 'lucide-react';

const LAVENDER = '#99A0F9';

const mandates = [
  {
    num: '01',
    tag: 'Discovery',
    Icon: Search,
    title: 'Stop Operational Drift',
    body:
      'Legacy systems silently bleed data. Torro auto-discovers 100% of sensitive assets across your hybrid estate — cloud, on-prem, dark data stores — before regulators do.',
    Preview: DiscoveryPreview,
  },
  {
    num: '02',
    tag: 'Enforcement',
    Icon: Shield,
    title: 'Replace Assumption with Enforcement',
    body:
      "Manually maintained policies are fiction. Torro's automated entitlement engine enforces real-time access controls, classification, and data lineage — no human bottlenecks.",
    Preview: EnforcementPreview,
  },
  {
    num: '03',
    tag: 'Compliance',
    Icon: Lock,
    title: 'Make Your Institution Defensible',
    body:
      "When the RBI examiner arrives or a ₹250 Cr DPDP fine is at stake, Torro's immutable audit trail and compliance posture make your institution bulletproof.",
    Preview: CompliancePreview,
  },
];

function DiscoveryPreview() {
  const rows = [
    { label: 'Cloud Assets', pct: 94 },
    { label: 'On-Prem Stores', pct: 88 },
    { label: 'Dark Data', pct: 76 },
  ];
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-[#0a0d18] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#99A0F9]">Asset Scanner</p>
          <p className="text-[17px] font-black tracking-tight text-white">100% Coverage</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#99A0F9]/30 bg-[#99A0F9]/10">
          <Database className="h-5 w-5 text-[#99A0F9]" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3">
        {rows.map((r, i) => (
          <div key={r.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/60">{r.label}</span>
              <span className="text-[10px] font-black text-[#99A0F9]">{r.pct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${r.pct}%` }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: 'circOut' }}
                className="h-full rounded-full bg-gradient-to-r from-[#99A0F9] to-indigo-400"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3">
        <Cloud className="h-3.5 w-3.5 text-[#99A0F9]" />
        <span className="text-[9px] font-black uppercase tracking-widest text-white/40">2.3M+ assets indexed</span>
      </div>
    </div>
  );
}

function EnforcementPreview() {
  const rules = ['Role-Based Access', 'Column Masking', 'Lineage Enforcement', 'Policy-as-Code'];
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-[#0a0d18] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#99A0F9]">Policy Engine</p>
          <p className="text-[17px] font-black tracking-tight text-white">Live Enforcement</p>
        </div>
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-2 w-2 rounded-full bg-emerald-400"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {rules.map((rule, i) => (
          <motion.div
            key={rule}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2 rounded-lg border border-white/5 bg-[#11152a] px-3 py-2"
          >
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
            <span className="text-[11px] font-bold text-white/75">{rule}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 border-t border-white/5 pt-3 text-[9px] font-black uppercase tracking-widest text-emerald-400">
        Zero human bottlenecks
      </div>
    </div>
  );
}

function CompliancePreview() {
  const items = [
    { label: 'RBI Audit Trail', status: 'Ready' },
    { label: 'DPDP Posture', status: 'Compliant' },
    { label: 'Immutable Logs', status: 'Active' },
  ];
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-[#0a0d18] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#99A0F9]">Audit Vault</p>
          <p className="text-[17px] font-black tracking-tight text-white">Defensible</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#99A0F9]/30 bg-[#99A0F9]/10">
          <FileText className="h-5 w-5 text-[#99A0F9]" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-[#11152a] px-3 py-2.5"
          >
            <span className="text-[11px] font-bold text-white/75">{item.label}</span>
            <span className="text-[9px] font-black uppercase text-emerald-400">{item.status}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3">
        <Lock className="h-3.5 w-3.5 text-[#99A0F9]" />
        <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Regulator-ready exports</span>
      </div>
    </div>
  );
}

const MandateCard = ({ mandate, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = mandate.Icon;
  const Preview = mandate.Preview;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 120 });

  const spotlightBg = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(153,160,249,0.12), transparent 70%)`
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex min-h-[420px] cursor-default flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-8 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.75)] transition-shadow duration-500 hover:border-[#99A0F9]/30 hover:shadow-[0_28px_80px_-24px_rgba(153,160,249,0.25)] md:p-9"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlightBg }}
      />

      <span
        className="pointer-events-none absolute right-6 top-6 text-[56px] font-black leading-none select-none transition-colors duration-500 group-hover:text-[#99A0F9]/55 md:right-8 md:top-8"
        style={{ color: 'rgba(153, 160, 249, 0.35)' }}
        aria-hidden
      >
        {mandate.num}
      </span>

      <div className="relative mb-6 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#99A0F9]/25 bg-[#99A0F9]/10 transition-transform duration-500 group-hover:scale-110">
          <Icon className="h-5 w-5 text-[#99A0F9]" strokeWidth={2} />
        </div>
        <span className="mt-1 inline-flex items-center rounded-md border border-[#99A0F9]/30 bg-[#99A0F9]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#99A0F9]">
          {mandate.tag}
        </span>
      </div>

      <h3 className="relative mb-4 text-xl font-black tracking-tight text-white md:text-[1.35rem]">
        {mandate.title}
      </h3>

      <div className="relative min-h-[200px] flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.p
              key="desc"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 !mx-0 !max-w-none text-left text-[15px] font-medium leading-relaxed text-white/55"
            >
              {mandate.body}
            </motion.p>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              className="absolute inset-0 h-full w-full"
            >
              <Preview />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-b-full bg-gradient-to-r from-[#99A0F9] via-indigo-400 to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
};

const IndustrialGovernanceMandates = () => {
  return (
    <section
      id="governance"
      className="relative overflow-hidden border-b border-white/5 bg-[#0c0e1a] py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.08)_0%,transparent_55%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[95rem] px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
        >
          <h2
            className="!text-center text-3xl font-black tracking-tight md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
            style={{ color: LAVENDER }}
          >
            Institutional Data Governance
          </h2>
          <p className="!mx-auto mt-5 max-w-2xl !text-center text-[17px] font-medium leading-relaxed text-white/50 md:text-lg">
            Built for enterprises where data missteps aren&apos;t just costly — they&apos;re regulatory failures.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {mandates.map((m, i) => (
            <MandateCard key={m.num} mandate={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialGovernanceMandates;
