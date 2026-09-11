import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import {
  ShieldCheck,
  Search,
  Users,
  AlertTriangle,
  ArrowRight,
  ArrowDown,
  Plus,
  Database,
  GitBranch,
  BadgeCheck,
  Lock,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

const ACCENT = '#99A0F9';
const GOLD = '#F8BD64';
const RED = '#E06365';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const primaryCta =
  'inline-flex items-center justify-center rounded-full bg-[#F8BD64] px-7 py-3.5 text-[12px] font-black uppercase tracking-[0.18em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] transition-all duration-300 hover:bg-[#f0b04d] hover:scale-[1.02]';
const secondaryCta =
  'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-[12px] font-black uppercase tracking-[0.18em] text-white/85 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:text-white';

const rotateWords = ['Discover', 'Classify', 'Understand', 'Protect'];

const orbitNodes = [
  { label: 'S3 Bucket', a: -40, r: 46, tone: 'risk' },
  { label: 'Data Lake', a: 28, r: 46, tone: 'ok' },
  { label: 'SaaS Exports', a: 95, r: 46, tone: 'warn' },
  { label: 'BI / Reporting', a: 155, r: 46, tone: 'ok' },
  { label: 'Postgres', a: -10, r: 32, tone: 'ok' },
  { label: 'BigQuery', a: 50, r: 32, tone: 'ok' },
  { label: 'Customer DB', a: 120, r: 32, tone: 'risk' },
  { label: 'Mongo', a: 185, r: 32, tone: 'ok' },
  { label: 'Kafka', a: 230, r: 32, tone: 'ok' },
  { label: 'Azure Blob', a: 290, r: 32, tone: 'warn' },
];

const pillars = [
  {
    tag: 'DISCOVERY',
    title: 'Find Every Sensitive Asset',
    copy: 'Torro auto-discovers data across cloud, on-prem, and SaaS — then flags PII, PHI, and financial data wherever they hide, including shadow copies nobody owns.',
    Icon: Search,
  },
  {
    tag: 'EXPOSURE',
    title: 'See Who Can Reach It',
    copy: 'Identities, roles, and grants mapped to your data assets. Lineage shows where sensitive data has propagated — so over-privileged access can\'t hide.',
    Icon: Users,
  },
  {
    tag: 'POSTURE',
    title: 'Fix What Matters First',
    copy: 'One risk-ranked view of your estate. Findings connect to automated entitlements, time-bound access, and dynamic PII masking — enforcement as a workflow, not a meeting.',
    Icon: AlertTriangle,
  },
];

const steps = [
  { n: '01', title: 'DISCOVER', copy: 'Data assets across databases, warehouses, cloud storage, data lakes, and SaaS.' },
  { n: '02', title: 'CLASSIFY', copy: 'PII, PHI, financial records, and confidential business data.' },
  { n: '03', title: 'MAP', copy: 'Access and lineage for every asset — who can reach it, where it flows.' },
  { n: '04', title: 'ASSESS', copy: 'Sensitivity, exposure, access, and criticality combined into one prioritized view.' },
  { n: '05', title: 'PROTECT', copy: 'Excessive access flagged for enforcement — grants, masking, and time-bound controls.' },
];

const metrics = [
  { label: 'SENSITIVE DATA ASSETS', value: 1284, note: '18% unclassified', tone: 'warn' },
  { label: 'CRITICAL FINDINGS', value: 23, note: '9 new this week', tone: 'bad' },
  { label: 'OVER-PRIVILEGED USERS', value: 47, note: '7 on PII stores', tone: 'bad' },
  { label: 'EXPOSED DATA STORES', value: 9, note: '3 externally reachable', tone: 'bad' },
  { label: 'HIGH-RISK STORES', value: 31, note: '12 need review', tone: 'warn' },
  { label: 'CRITICAL STORES', value: 86, note: 'Lineage verified', tone: 'good' },
];

const findings = [
  { severity: 'CRITICAL', finding: 'Excessive access to customer PII', asset: 'cust_profiles_v3 · Postgres', score: 94, color: '#c23b3b' },
  { severity: 'HIGH', finding: 'PII copy shared org-wide without masking', asset: 'crm_warehouse.gold · BigQuery', score: 81, color: '#8a6116' },
  { severity: 'MEDIUM', finding: 'Dormant grants on regulated dataset', asset: 'claims_phi_v2 · Warehouse', score: 64, color: '#4348b8' },
];

const chain = [
  { label: 'DATA ASSET', value: 'Customer Database' },
  { label: 'SENSITIVE DATA', value: 'Contains: PII' },
  { label: 'USERS / ROLES', value: '42 identities' },
  { label: 'ACCESS LEVEL', value: '7 excessive' },
  { label: 'RISK', value: 'HIGH', hot: true },
];

const flow = [
  { title: 'Customer App', stage: 'ORIGIN', tag: 'PII collected', tone: 'pii' },
  { title: 'Operational DB', stage: 'SYSTEM OF RECORD', tag: 'PII detected', tone: 'pii' },
  { title: 'Data Warehouse', stage: 'ANALYTICS COPY', tag: 'PII propagated', tone: 'prop' },
  { title: 'Analytics', stage: 'TRANSFORM', tag: 'Unclassified copy', tone: 'risk' },
  { title: 'BI / Reporting', stage: 'CONSUMPTION', tag: 'Masked outputs', tone: 'safe' },
];

const compliance = [
  { region: 'INDIA', title: 'DPDP / DPDPA', copy: 'Locates personal data, maps access, and evidences security safeguards over it.', href: '/compliance#dpdp-act-2023', link: 'Torro for DPDP →' },
  { region: 'EU', title: 'GDPR', copy: 'Discovers PII everywhere it rests — including copies — for data-minimization reviews.', href: '/compliance#gdpr', link: 'Torro for GDPR →' },
  { region: 'US', title: 'SOX & HIPAA', copy: 'Shows where reporting data and PHI live and where controls are missing.', href: '/compliance#sox-and-hipaa', link: 'Torro for SOX & HIPAA →' },
  { region: 'BANKING', title: 'BCBS 239', copy: 'Lineage-aware posture keeps risk data classified, governed, and traceable.', href: '/compliance#bcbs-239', link: 'Torro for BCBS 239 →' },
];

const stackLayers = [
  { title: 'Unified Discovery & Metadata Foundation', level: 'FOUNDATION', Icon: Database },
  { title: 'End-to-End Data Lineage', level: 'TRACEABILITY', Icon: GitBranch },
  { title: 'Continuous Data Quality & Trust', level: 'TRUST', Icon: BadgeCheck },
  { title: 'Automated Entitlements & Protection', level: 'ENFORCEMENT', Icon: Lock },
  { title: 'Data Marketplace & PrivBox', level: 'GOVERNED SHARING', Icon: ShoppingBag },
  { title: 'Data Security Posture Management', level: 'SECURITY POSTURE', Icon: ShieldCheck, top: true },
];

const faqs = [
  {
    q: 'What is DSPM (Data Security Posture Management)?',
    a: 'DSPM continuously discovers where sensitive data resides across your databases, warehouses, cloud storage, and applications; classifies that data; analyzes who can access it and how it flows; and prioritizes the risks created by exposure and over-permissive access. It turns data security into a measurable, continuously monitored posture rather than a periodic audit.',
  },
  {
    q: 'How does Torro provide DSPM?',
    a: "Torro DSPM is the security layer of Torro OneData. It builds on Torro's unified discovery and metadata foundation, PII and sensitivity detection, end-to-end data lineage (AssetViz), and automated entitlements (RBAC + ABAC, time-bound permissions, dynamic PII masking) — combined into one data security posture: Discover. Classify. Understand. Protect.",
  },
  {
    q: 'How is DSPM different from DLP?',
    a: "DLP enforces policies on data in motion and in use to block exfiltration. DSPM focuses on the data itself: where sensitive data lives, who can access it, how it moves, and where posture gaps are. DSPM finds and prioritizes the risk; DLP and access controls act on it. Torro's automated entitlements and dynamic PII masking provide the enforcement side.",
  },
  {
    q: 'How does DSPM help with compliance?',
    a: 'DSPM gives compliance teams the evidence layer: where personal and regulated data resides, how it is classified, who can access it, and which controls apply. That visibility supports DPDP Act 2023, GDPR, SOX, HIPAA, and BCBS 239 programs by identifying risks that contribute to compliance gaps. DSPM strengthens a compliance program — it does not replace it.',
  },
];

const chipTone = {
  ok: { border: 'rgba(255,255,255,0.14)', dot: ACCENT },
  risk: { border: 'rgba(242,105,105,0.45)', dot: RED },
  warn: { border: 'rgba(248,189,100,0.45)', dot: GOLD },
};

const ftagTone = {
  pii: 'border border-[#99A0F9]/35 bg-[rgba(99,102,241,0.14)] text-[#c3c8ff]',
  prop: 'border border-[#F8BD64]/40 bg-[rgba(248,189,100,0.1)] text-[#ffdf9f]',
  risk: 'border border-[#F26969]/45 bg-[rgba(242,105,105,0.1)] text-[#ffb9b9]',
  safe: 'border border-[rgba(0,210,148,0.35)] bg-[rgba(0,210,148,0.08)] text-[#8ff0c9]',
};

const noteTone = {
  bad: 'bg-[#fdeaea] text-[#c23b3b]',
  warn: 'bg-[#fdf3dc] text-[#8a6116]',
  good: 'bg-[#e4faf1] text-[#0a7d58]',
};

const severityTone = {
  CRITICAL: 'bg-[#fdeaea] text-[#c23b3b]',
  HIGH: 'bg-[#fdf3dd] text-[#8a6116]',
  MEDIUM: 'bg-[#eceeff] text-[#4348b8]',
};

function CountUp({ to, inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <>{val.toLocaleString()}</>;
}

function OrbitViz() {
  const nodePos = (a, r) => {
    const rad = (a * Math.PI) / 180;
    return {
      left: `${50 + Math.cos(rad) * r}%`,
      top: `${50 + Math.sin(rad) * r}%`,
    };
  };

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <style>{`
        @keyframes dspm-spin { to { transform: rotate(360deg); } }
        @keyframes dspm-core-pulse { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:1;transform:scale(1.04)} }
        @keyframes dspm-float { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-6px)} }
        @keyframes dspm-blink { 50%{opacity:.35} }
        @keyframes dspm-ring-pulse { 0%,100%{opacity:.35} 50%{opacity:.75} }
      `}</style>

      {/* Ambient blend glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(153,160,249,0.22)_0%,rgba(99,102,241,0.08)_40%,transparent_70%)] blur-xl" />
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(15,18,37,0.9)_0%,transparent_70%)]" />

      <div className="relative aspect-square w-full">
        {/* Soft rings */}
        <div
          className="absolute inset-[4%] rounded-full border border-dashed border-[#99A0F9]/20"
          style={{ animation: 'dspm-ring-pulse 5s ease-in-out infinite' }}
        />
        <div className="absolute inset-[18%] rounded-full border border-dashed border-[#99A0F9]/28" />
        <div className="absolute inset-[32%] rounded-full border border-[#99A0F9]/12" />

        {/* Radar sweep */}
        <div
          className="pointer-events-none absolute inset-[4%] rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(153,160,249,.28), transparent 55deg, transparent 360deg)',
            mask: 'radial-gradient(circle, transparent 28%, #000 29%, #000 72%, transparent 73%)',
            WebkitMask: 'radial-gradient(circle, transparent 28%, #000 29%, #000 72%, transparent 73%)',
            animation: 'dspm-spin 7.5s linear infinite',
          }}
        />

        {/* Orbiting source chips */}
        {orbitNodes.map((n, i) => {
          const tone = chipTone[n.tone];
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.05 }}
              className="absolute z-10"
              style={{
                ...nodePos(n.a, n.r),
                transform: 'translate(-50%, -50%)',
                animation: `dspm-float ${3.6 + (i % 4) * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.18}s`,
              }}
            >
              <span
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0c0e1a]/95 px-2.5 py-1.5 text-[10px] font-semibold text-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:text-[11px] sm:px-3"
                style={{ border: `1px solid ${tone.border}` }}
              >
                <i
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{
                    background: tone.dot,
                    boxShadow: n.tone === 'risk' ? `0 0 10px ${RED}` : n.tone === 'warn' ? `0 0 8px ${GOLD}` : undefined,
                  }}
                />
                {n.label}
              </span>
            </motion.div>
          );
        })}

        {/* Core */}
        <div
          className="absolute left-1/2 top-1/2 z-20 flex w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-[22px] border px-2 py-5 text-center sm:gap-2 sm:rounded-[26px] sm:py-6"
          style={{
            borderColor: 'rgba(153,160,249,0.45)',
            background: 'linear-gradient(165deg, rgba(17,21,42,0.98), rgba(10,13,26,0.98))',
            boxShadow:
              '0 0 0 1px rgba(153,160,249,.1), 0 24px 60px rgba(0,0,0,.55), 0 0 60px rgba(153,160,249,.28)',
          }}
        >
          <div
            className="pointer-events-none absolute inset-[-12px] rounded-[34px] border border-[#99A0F9]/20"
            style={{ animation: 'dspm-core-pulse 3.2s ease-in-out infinite' }}
          />
          <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" style={{ color: ACCENT }} strokeWidth={1.6} />
          <b className="relative text-[9px] font-extrabold tracking-[0.14em] text-white sm:text-[10px] sm:tracking-[0.16em]">
            SENSITIVE DATA CORE
          </b>
          <em className="relative text-[8px] not-italic tracking-[0.1em] sm:text-[9px]" style={{ color: ACCENT }}>
            PII · PHI · FIN · CREDS
          </em>
        </div>

        {/* Classification badges */}
        <span className="absolute left-[6%] top-[8%] z-20 rounded-full border border-[#99A0F9]/50 bg-[rgba(99,102,241,0.18)] px-2.5 py-1 text-[9px] font-extrabold tracking-[0.12em] text-[#c7cbff] sm:text-[10px]">
          PII
        </span>
        <span className="absolute right-[4%] top-[14%] z-20 rounded-full border border-[#E06365]/50 bg-[rgba(224,99,101,0.14)] px-2.5 py-1 text-[9px] font-extrabold tracking-[0.12em] text-[#ffb9b9] sm:text-[10px]">
          PHI
        </span>
        <span className="absolute bottom-[10%] left-[4%] z-20 rounded-full border border-[#F8BD64]/50 bg-[rgba(248,189,100,0.12)] px-2.5 py-1 text-[9px] font-extrabold tracking-[0.12em] text-[#ffe3ae] sm:text-[10px]">
          FINANCIAL
        </span>
      </div>
    </div>
  );
}

function PostureDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const circumference = 2 * Math.PI * 66;
  const score = 78;
  const offset = circumference * (1 - (inView ? score : 0) / 100);

  return (
    <div ref={ref} className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#fdfdff] to-[#f4f6ff] text-[#1f2437] shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_40px_90px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3 bg-gradient-to-r from-[#5B6CFA] to-[#818CF8] px-4 py-3 text-white sm:px-5">
        <div className="flex gap-1.5">
          <i className="h-2 w-2 rounded-full bg-white/85" />
          <i className="h-2 w-2 rounded-full bg-white/35" />
          <i className="h-2 w-2 rounded-full bg-white/35" />
        </div>
        <div>
          <div className="text-[13px] font-bold">Torro DSPM — Posture Overview</div>
          <div className="text-[11px] opacity-85">Enterprise estate · all zones</div>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/18 px-2.5 py-1 text-[9.5px] font-extrabold tracking-[0.14em]">
          <i className="h-1.5 w-1.5 rounded-full bg-[#7CFFC4]" style={{ animation: 'dspm-blink 1.6s ease-in-out infinite' }} />
          LIVE
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          <div className="flex flex-col items-center gap-1 rounded-2xl border border-[#e7e9fb] bg-white p-5 text-center">
            <span className="text-[10px] font-bold tracking-[0.16em] text-[#8a90ab]">POSTURE SCORE</span>
            <div className="relative my-2 h-[150px] w-[150px]">
              <svg width="150" height="150" viewBox="0 0 158 158" className="-rotate-90">
                <defs>
                  <linearGradient id="dspmRingGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#5B6CFA" />
                    <stop offset="1" stopColor="#99A0F9" />
                  </linearGradient>
                </defs>
                <circle cx="79" cy="79" r="66" fill="none" stroke="#eef0ff" strokeWidth="13" />
                <circle
                  cx="79"
                  cy="79"
                  r="66"
                  fill="none"
                  stroke="url(#dspmRingGrad)"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(.22,1,.36,1)' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <b className="text-[2rem] font-bold leading-none tracking-tight text-[#10132b]">
                  <CountUp to={score} inView={inView} />
                </b>
                <span className="mt-1 text-[9.5px] font-bold tracking-[0.16em] text-[#8a90ab]">OF 100</span>
              </div>
            </div>
            <span className="rounded-full bg-[#e4faf1] px-3 py-1 text-[11px] font-bold text-[#0a7d58]">▲ +6 this quarter</span>
            <span className="text-[11px] text-[#8a90ab]">Across 2,418 discovered assets</span>
          </div>

          <div className="min-w-0 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-[#e7e9fb] bg-white p-3.5">
                  <span className="text-[9.5px] font-bold tracking-[0.11em] text-[#8a90ab]">{m.label}</span>
                  <b className="mt-0.5 block text-[1.35rem] font-bold tracking-tight text-[#10132b]">
                    <CountUp to={m.value} inView={inView} />
                  </b>
                  <em className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[9.5px] font-bold not-italic ${noteTone[m.tone]}`}>
                    {m.note}
                  </em>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-[#e7e9fb] bg-white">
              <div className="hidden grid-cols-[90px_1fr_190px_56px] gap-3 border-b border-[#eef0fb] bg-[#f6f7ff] px-5 py-2.5 text-[10px] font-extrabold tracking-[0.13em] text-[#8a90ab] sm:grid">
                <span>SEVERITY</span>
                <span>FINDING</span>
                <span>ASSET</span>
                <span>SCORE</span>
              </div>
              {findings.map((f) => (
                <div
                  key={f.finding}
                  className="grid gap-2 border-b border-[#f1f2fb] px-4 py-3 text-[12.5px] text-[#333a52] last:border-0 sm:grid-cols-[90px_1fr_190px_56px] sm:items-center sm:gap-3 sm:px-5"
                >
                  <span>
                    <span className={`inline-block rounded-full px-2.5 py-1 text-[9.5px] font-extrabold tracking-[0.08em] ${severityTone[f.severity]}`}>
                      {f.severity}
                    </span>
                  </span>
                  <span className="font-medium">{f.finding}</span>
                  <span className="text-[#6b7280]">{f.asset}</span>
                  <b style={{ color: f.color }}>{f.score}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Dspm = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % rotateWords.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen border-t border-white/5 bg-[#0c0e1a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(153,160,249,0.1)_0%,transparent_55%)]" />

      {/* Hero */}
      <section className="relative z-10 overflow-hidden px-6 pb-16 pt-[calc(var(--header-height)+3rem)] md:px-12 md:pb-20">
        <div className="pointer-events-none absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(153,160,249,0.16),transparent_65%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-20 top-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_65%)] blur-2xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div {...fadeUp} className="box-copy text-left">
            <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
              <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#99A0F9]" />
              Torro OneData · Solution
            </div>

            <h1 className="!mx-0 !text-left text-4xl font-extrabold leading-[1.06] tracking-tight text-white md:text-5xl xl:text-[3.25rem]">
              Data Security <span style={{ color: ACCENT }}>Posture Management</span>
            </h1>

            <div className="mt-4 flex min-h-[1.35em] flex-wrap items-baseline gap-x-2 text-[clamp(1.35rem,2.3vw,1.8rem)] font-bold tracking-tight text-white">
              <span className="relative inline-grid overflow-hidden" style={{ color: ACCENT }}>
                {rotateWords.map((w, i) => (
                  <span
                    key={w}
                    className="col-start-1 row-start-1 transition-all duration-500"
                    style={{
                      opacity: i === wordIdx ? 1 : 0,
                      transform: i === wordIdx ? 'none' : i < wordIdx ? 'translateY(-60%)' : 'translateY(60%)',
                    }}
                  >
                    {w}
                  </span>
                ))}
              </span>
              <span>your sensitive data.</span>
            </div>

            <p className="!mx-0 mt-4 max-w-xl !text-left text-[15px] font-medium leading-relaxed text-white/55 md:text-[16px]">
              Know where your sensitive data lives, who can access it, how it moves, and where your biggest risks are.
              Torro DSPM unifies discovery, classification, lineage, and entitlements into one continuous view of your
              data security posture.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#how" className={primaryCta}>
                Explore DSPM
              </a>
              <Link to="/book-demo" className={secondaryCta}>
                Talk to an Expert
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {['Sensitive Data Discovery', 'Access & Entitlement Analysis', 'Lineage-Aware Risk', 'Posture & Compliance'].map(
                (c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70"
                  >
                    <i className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                    {c}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <OrbitViz />
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative z-10 border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-3 md:px-12 md:gap-6">
          {pillars.map((p, idx) => (
            <motion.article
              key={p.tag}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="box-copy rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-6 text-left sm:p-7"
            >
              <div className="mb-3 text-[10.5px] font-extrabold tracking-[0.18em]" style={{ color: ACCENT }}>
                {p.tag}
              </div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#99A0F9]/22 bg-[rgba(153,160,249,0.12)]">
                <p.Icon className="h-5 w-5" style={{ color: ACCENT }} />
              </div>
              <h3 className="!mb-2 !text-left text-[1.15rem] font-bold tracking-tight text-white">{p.title}</h3>
              <p className="!mx-0 !max-w-none !text-left text-[14px] font-medium leading-relaxed text-white/55">{p.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 scroll-mt-28 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
              How Torro DSPM works
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Discover. Classify. Map. <span style={{ color: ACCENT }}>Assess. Protect.</span>
            </h2>
            <p className="!mx-0 mx-auto mt-4 max-w-2xl !text-center text-[15px] font-medium text-white/50">
              A continuous lifecycle across your hybrid estate — feeding every finding into the governance controls that fix it.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
            {steps.map((s, idx) => (
              <React.Fragment key={s.title}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="box-copy flex-1 rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.012] p-5 text-left transition-colors hover:border-[#99A0F9]/50"
                >
                  <div className="text-[12px] font-bold tracking-[0.12em]" style={{ color: ACCENT }}>
                    {s.n}
                  </div>
                  <h3 className="!mt-3 !text-left text-[15px] font-bold tracking-[0.03em] text-white">{s.title}</h3>
                  <p className="!mx-0 mt-2 !max-w-none !text-left text-[12px] font-medium leading-relaxed text-white/50">
                    {s.copy}
                  </p>
                </motion.div>
                {idx < steps.length - 1 && (
                  <>
                    <div className="flex justify-center py-0.5 lg:hidden">
                      <ArrowDown className="h-5 w-5" style={{ color: ACCENT }} />
                    </div>
                    <div className="hidden shrink-0 items-center px-1.5 lg:flex xl:px-2">
                      <ArrowRight className="h-5 w-5" style={{ color: ACCENT }} />
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="relative z-10 border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
              DSPM dashboard
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Your data security posture, <span style={{ color: ACCENT }}>on one screen.</span>
            </h2>
            <p className="!mx-0 mx-auto mt-4 max-w-2xl !text-center text-[15px] font-medium text-white/50">
              Risk signals, sensitive assets, critical findings, access risks, and classification coverage — the posture
              view your CISO office has been assembling by hand.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <PostureDashboard />
            <p className="mt-3 text-center text-[11px] text-white/40">Illustrative posture view</p>
          </motion.div>
        </div>
      </section>

      {/* Access & lineage */}
      <section id="access" className="relative z-10 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
              Access & exposure
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Access is where sensitivity <span style={{ color: ACCENT }}>becomes risk.</span>
            </h2>
            <p className="!mx-0 mx-auto mt-4 max-w-2xl !text-center text-[15px] font-medium text-white/50">
              A database with PII and no access is a vault. A database with PII and forty-two identities is an incident
              waiting for a calendar date.
            </p>
          </motion.div>

          <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {chain.map((c, idx) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-xl border px-4 py-4 text-center"
                style={{
                  borderColor: c.hot ? 'rgba(242,105,105,0.5)' : 'rgba(255,255,255,0.14)',
                  background: 'linear-gradient(165deg, rgba(255,255,255,.05), rgba(255,255,255,.015))',
                }}
              >
                <b
                  className="mb-1 block text-[10.5px] font-extrabold tracking-[0.14em]"
                  style={{ color: c.hot ? RED : ACCENT }}
                >
                  {c.label}
                </b>
                <span className={`text-[13px] ${c.hot ? 'font-extrabold text-[#F26969]' : 'text-white/70'}`}>{c.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative rounded-xl border border-white/14 px-3.5 py-4 text-center"
                style={{ background: 'linear-gradient(165deg, rgba(255,255,255,.05), rgba(255,255,255,.015))' }}
              >
                <b className="block text-[14px] text-white">{f.title}</b>
                <em className="mt-1 block text-[9.5px] font-bold not-italic tracking-[0.1em] text-white/40">{f.stage}</em>
                <span className={`mt-3 block rounded-lg px-2 py-1 text-[9.5px] font-extrabold tracking-[0.05em] ${ftagTone[f.tone]}`}>
                  {f.tag}
                </span>
                {idx < flow.length - 1 && (
                  <span className="absolute right-[-10px] top-1/2 z-10 hidden h-0.5 w-5 -translate-y-1/2 bg-gradient-to-r from-[#99A0F9]/20 to-[#99A0F9]/80 lg:block">
                    <span className="absolute -right-0.5 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-[#99A0F9]" />
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <p className="!mx-0 mx-auto mt-10 max-w-3xl !text-center text-[14px] font-medium leading-relaxed text-white/50">
            Built on <span style={{ color: ACCENT }}>Torro AssetViz</span> — graph-based, cell-level lineage. Sensitive
            data rarely leaks from where it was born; it leaks from the copies made after. Lineage tells you which one to
            fix first, and findings connect to{' '}
            <span style={{ color: ACCENT }}>Automated Entitlements & Protection</span> to enforce the fix.
          </p>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="relative z-10 border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
              Governance & compliance
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Visibility your compliance program <span style={{ color: ACCENT }}>can stand on.</span>
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {compliance.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="box-copy flex flex-col gap-2 rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.012] p-5 text-left transition-colors hover:border-[#99A0F9]/45"
              >
                <span className="text-[9.5px] font-extrabold tracking-[0.14em]" style={{ color: ACCENT }}>
                  {c.region}
                </span>
                <h3 className="!mb-0 !text-left text-[16px] font-bold text-white">{c.title}</h3>
                <p className="!mx-0 !max-w-none !text-left text-[13px] font-medium leading-relaxed text-white/50">{c.copy}</p>
                <Link to={c.href} className="mt-auto pt-2 text-[12px] font-bold hover:underline" style={{ color: ACCENT }}>
                  {c.link}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="!mx-0 mx-auto mt-8 max-w-3xl !text-center text-[13px] font-medium text-white/60">
            <span style={{ color: GOLD }}>The honest framing:</span> DSPM provides the visibility and controls needed to
            identify data-security and privacy risks that contribute to compliance gaps. It strengthens your compliance
            program — it is not, by itself, compliance.
          </p>
        </div>
      </section>

      {/* Platform stack */}
      <section id="platform" className="relative z-10 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
              The Torro data security platform
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Not another scanner. The security layer of your{' '}
              <span style={{ color: ACCENT }}>data operating system.</span>
            </h2>
          </motion.div>

          <div className="mx-auto mb-10 flex max-w-3xl flex-col-reverse gap-2.5">
            {stackLayers.map((layer, idx) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="flex items-center justify-between gap-3 rounded-xl border px-5 py-3.5"
                style={
                  layer.top
                    ? {
                        borderColor: 'rgba(153,160,249,0.65)',
                        background: 'linear-gradient(165deg, rgba(99,102,241,.16), rgba(153,160,249,.06))',
                        boxShadow: '0 0 40px rgba(99,102,241,.18)',
                      }
                    : {
                        borderColor: 'rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.03)',
                      }
                }
              >
                <div className="flex min-w-0 items-center gap-3">
                  <layer.Icon className="h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                  <b className="text-[14px] font-bold text-white">{layer.title}</b>
                </div>
                <span
                  className="shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-extrabold tracking-[0.13em]"
                  style={{
                    color: layer.top ? ACCENT : 'rgba(255,255,255,0.4)',
                    borderColor: layer.top ? 'rgba(153,160,249,0.4)' : 'rgba(255,255,255,0.14)',
                  }}
                >
                  {layer.level}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl rounded-[22px] border border-white/8 px-6 py-10 text-center sm:px-10"
            style={{
              background:
                'radial-gradient(60% 90% at 50% 0%, rgba(99,102,241,.12), transparent 60%), rgba(255,255,255,.02)',
            }}
          >
            <div className="text-[clamp(1.3rem,2.4vw,1.8rem)] font-bold leading-snug tracking-tight text-white">
              Move from knowing where your data is to{' '}
              <span style={{ color: ACCENT }}>knowing whether it is secure.</span>
            </div>
            <p className="!mx-0 mx-auto mt-4 max-w-xl !text-center text-[14px] font-medium text-white/50">
              Discovery, metadata, classification, lineage, entitlements, quality, privacy, and governance — one metadata
              layer, one entitlement engine, one posture. Understand your data. Understand who can access it. Understand
              your risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
              FAQ
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              DSPM, <span style={{ color: ACCENT }}>answered.</span>
            </h2>
          </motion.div>

          <div className="mx-auto flex max-w-3xl flex-col gap-3">
            {faqs.map((f, idx) => {
              const open = openFaq === idx;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="overflow-hidden rounded-[15px] border transition-colors"
                  style={{
                    borderColor: open ? 'rgba(153,160,249,0.55)' : 'rgba(255,255,255,0.08)',
                    background: open ? 'rgba(99,102,241,0.06)' : 'rgba(255,255,255,0.025)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-[15px] font-semibold text-white">{f.q}</span>
                    <span
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-lg border border-white/14 text-[14px] font-bold transition-transform"
                      style={{
                        color: ACCENT,
                        background: open ? 'rgba(153,160,249,0.15)' : 'transparent',
                        transform: open ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </span>
                  </button>
                  {open && (
                    <div className="box-copy px-5 pb-5 sm:px-6">
                      <p className="!mx-0 !max-w-none !text-left text-[14px] font-medium leading-relaxed text-white/55">
                        {f.a}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative z-10 overflow-hidden py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(153,160,249,0.14)_0%,transparent_55%)]" />
        <motion.div {...fadeUp} className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
            Take the next step
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Take control of your <span style={{ color: ACCENT }}>data security posture.</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link to="/book-demo" className={primaryCta}>
              Book a Demo
            </Link>
            <Link to="/torro-onedata" className={secondaryCta}>
              Explore the Platform
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
            {['Sensitive Data Discovery', 'Entitlement Analysis', 'Lineage-Aware Risk', 'Audit-Ready Evidence'].map(
              (t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Sparkles className="h-3 w-3" style={{ color: ACCENT }} />
                  {t}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Dspm;
