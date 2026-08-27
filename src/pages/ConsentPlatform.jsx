import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Database,
  Settings2,
  Target,
  ShieldCheck,
  Zap,
  FileCheck2,
  Globe,
  Smartphone,
  Building2,
  Users,
  Webhook,
  BarChart3,
  Brain,
  ShoppingBag,
  AppWindow,
  Check,
  X,
  ScanLine,
  Lock,
  Eye,
  ClipboardList,
  FileSearch,
  Scale,
  Sparkles,
  Network,
  ArrowDown,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

const ACCENT = '#99A0F9';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const primaryCta =
  'inline-flex items-center justify-center rounded-xl bg-[#F8BD64] px-6 py-3.5 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] transition-colors hover:bg-[#f0b04d]';
const secondaryCta =
  'inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-[12px] font-black uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/50 hover:text-white';

const channelIcons = [
  { label: 'Web', Icon: Globe },
  { label: 'Mobile', Icon: Smartphone },
  { label: 'Branch', Icon: Building2 },
  { label: 'CRM', Icon: Users },
  { label: 'APIs', Icon: Webhook },
];

const platformModules = [
  { label: 'Consent Repository', Icon: Database },
  { label: 'Preference Center', Icon: Settings2 },
  { label: 'Purpose Management', Icon: Target },
  { label: 'Policy Engine', Icon: ShieldCheck },
  { label: 'Consent Enforcement', Icon: Zap },
  { label: 'Audit & Evidence', Icon: FileCheck2 },
];

const destinations = [
  { label: 'Analytics', Icon: BarChart3 },
  { label: 'AI', Icon: Brain },
  { label: 'Data Marketplace', Icon: ShoppingBag },
  { label: 'APIs', Icon: Webhook },
  { label: 'Applications', Icon: AppWindow },
];

const features = [
  {
    title: 'Unified Consent Repository',
    description:
      'A centralized repository for consent, preferences, purposes and communication choices across every customer channel.',
    points: ['Unified consent records', 'Purpose management', 'Consent lifecycle', 'Version history'],
    Icon: Database,
  },
  {
    title: 'Dynamic Consent Enforcement',
    description:
      'Automatically enforce consent and policy rules in real time across every data interaction — analytics, AI and applications.',
    points: [
      'Purpose-based enforcement',
      'Real-time policy evaluation',
      'Dynamic record exclusion',
      'Zero manual filtering',
    ],
    Icon: Zap,
  },
  {
    title: 'Purpose-Based Processing',
    description:
      'Ensure data is accessed and used only for approved purposes, with policy-driven controls across systems.',
    points: [
      'Purpose management',
      'Policy-driven access',
      'Data minimization',
      'Cross-system consistency',
    ],
    Icon: Target,
  },
  {
    title: 'Audit & Evidence',
    description:
      'Maintain complete traceability and generate audit-ready evidence for regulators and internal compliance teams.',
    points: [
      'Complete audit timeline',
      'Policy decision logs',
      'Regulatory reports',
      'Evidence at scale',
    ],
    Icon: FileCheck2,
  },
];

const steps = [
  {
    n: '01',
    title: 'Capture',
    copy: 'Collect consent and preferences across all channels.',
    Icon: ScanLine,
  },
  {
    n: '02',
    title: 'Govern',
    copy: 'Centralize and manage consent, purposes and policies.',
    Icon: Lock,
  },
  {
    n: '03',
    title: 'Enforce',
    copy: 'Automatically enforce policies in real time across systems.',
    Icon: Zap,
  },
  {
    n: '04',
    title: 'Monitor',
    copy: 'Continuously monitor consent usage and policy compliance.',
    Icon: Eye,
  },
  {
    n: '05',
    title: 'Audit',
    copy: 'Generate audit-ready evidence and regulatory reports.',
    Icon: ClipboardList,
  },
];

const benefits = [
  {
    title: 'Dynamic Consent Enforcement',
    copy: 'Enforce consent and policy rules automatically at every data interaction — across analytics, apps and AI.',
    Icon: Zap,
  },
  {
    title: 'Unified Preferences',
    copy: 'One source of truth for consent, preferences and purposes across every customer channel.',
    Icon: Network,
  },
  {
    title: 'Purpose-Based Access',
    copy: 'Restrict processing to approved purposes with policy-driven controls that travel with the data.',
    Icon: Target,
  },
  {
    title: 'Audit Ready',
    copy: 'Produce complete timelines and evidence packs for regulators and internal compliance on demand.',
    Icon: FileCheck2,
  },
  {
    title: 'Trusted AI',
    copy: 'Keep AI and analytics pipelines aligned with customer consent so models stay policy-safe.',
    Icon: Sparkles,
  },
  {
    title: 'Continuous Compliance',
    copy: 'Stay aligned with DPDP, GDPR and emerging privacy mandates as policies and purposes change.',
    Icon: ShieldCheck,
  },
];

const governance = [
  {
    title: 'DPIA',
    subtitle: 'Data Protection Impact Assessment',
    description: 'Identify and assess privacy risks early — before processing begins.',
    points: ['Risk assessment templates', 'Purpose & data mapping', 'Mitigation workflows', 'Review & sign-off'],
    Icon: Scale,
  },
  {
    title: 'DSAR',
    subtitle: 'Data Subject Access Requests',
    description: 'Operationalize data subject rights with governed intake and fulfillment.',
    points: ['Intake & verification', 'Discovery across systems', 'Response packages', 'SLA tracking'],
    Icon: FileSearch,
  },
  {
    title: 'RoPA',
    subtitle: 'Record of Processing Activities',
    description: 'Maintain a living inventory of processing activities tied to purpose and consent.',
    points: ['Processing inventory', 'Purpose linkage', 'System coverage', 'Export for regulators'],
    Icon: ClipboardList,
  },
];

const traditional = [
  'Store consent only',
  'Manual enforcement',
  'Application-specific silos',
  'Static preference capture',
  'Limited audit evidence',
  'Bolted-on compliance',
];

const torro = [
  'Governs consent enterprise-wide',
  'Enforces consent automatically',
  'Enterprise-wide policy engine',
  'Dynamic preference & purpose control',
  'Audit-ready evidence at scale',
  'Compliance by architecture',
];

const FlowConnector = ({ delay = 0 }) => (
  <div className="relative mx-auto my-1 flex h-9 w-8 flex-col items-center justify-center">
    <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/15 via-[#99A0F9]/55 to-white/15" />
    <motion.span
      className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#99A0F9] shadow-[0_0_10px_rgba(153,160,249,0.9)]"
      style={{ top: 0 }}
      animate={{ top: ['0%', '72%', '72%'], opacity: [0, 1, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay }}
    />
    <motion.div
      className="absolute bottom-0"
      animate={{ y: [0, 3, 0], opacity: [0.55, 1, 0.55] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <ChevronDown className="h-3.5 w-3.5" style={{ color: ACCENT }} strokeWidth={2.5} />
    </motion.div>
  </div>
);

const ConsentHeroDiagram = () => (
  <div className="relative mx-auto w-full max-w-xl">
    <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_45%,rgba(153,160,249,0.18),transparent_65%)]" />

    {/* Channels */}
    <div className="relative">
      <div className="mb-2 text-center text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
        Customer Channels
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {channelIcons.map(({ label, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
            className="flex min-w-[64px] flex-col items-center gap-1 rounded-xl border border-white/10 bg-[#11152a]/90 px-2.5 py-2"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: ACCENT }} />
            </motion.div>
            <span className="text-[8px] font-bold text-white/70">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>

    <FlowConnector delay={0.15} />

    {/* Platform hub */}
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.35 }}
      className="relative overflow-hidden rounded-2xl border px-4 py-4 sm:px-5 sm:py-5"
      style={{
        borderColor: 'rgba(153,160,249,0.4)',
        background: 'linear-gradient(180deg, rgba(17,21,42,0.98) 0%, rgba(10,13,26,0.98) 100%)',
        boxShadow: '0 0 40px -12px rgba(153,160,249,0.45)',
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(153,160,249,0.2), transparent 55%)',
        }}
      />
      <div
        className="relative mb-3 text-center text-[10px] font-black uppercase tracking-[0.18em]"
        style={{ color: ACCENT }}
      >
        Torro Consent Intelligence Platform
      </div>
      <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
        {platformModules.map(({ label, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 + i * 0.06 }}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0e1a]/80 px-2.5 py-2"
          >
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
              style={{
                backgroundColor: 'rgba(153,160,249,0.12)',
                border: '1px solid rgba(153,160,249,0.22)',
              }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: ACCENT }} />
            </div>
            <span className="text-[9px] font-bold leading-tight text-white/80">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <FlowConnector delay={0.9} />

    {/* Destinations */}
    <div className="relative">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {destinations.map(({ label, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.75 + i * 0.07 }}
            className="flex min-w-[72px] flex-col items-center gap-1 rounded-xl border border-white/10 bg-[#11152a]/90 px-2.5 py-2"
          >
            <Icon className="h-3.5 w-3.5" style={{ color: ACCENT }} />
            <span className="text-[8px] font-bold text-white/70">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ConsentPlatform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen border-t border-white/5 bg-[#0c0e1a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.08)_0%,transparent_55%)]" />

      {/* ── Hero ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-[calc(var(--header-height)+2.5rem)] md:px-12 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div {...fadeUp} className="box-copy text-left">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em]"
              style={{
                color: ACCENT,
                borderColor: 'rgba(153,160,249,0.28)',
                backgroundColor: 'rgba(153,160,249,0.08)',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
              Torro Consent Intelligence Platform
            </div>

            <h1 className="!mx-0 !text-left text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl xl:text-[3.25rem]">
              Consent Capture Is Just the{' '}
              <span style={{ color: ACCENT }}>Beginning.</span>
            </h1>

            <p className="!mx-0 mt-5 max-w-xl !text-left text-[15px] font-medium leading-relaxed text-white/55 md:text-[16px]">
              Transform consent into active enterprise control with a unified platform that captures,
              governs and enforces customer preferences across applications, analytics and AI.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link to="/book-demo" className={primaryCta}>
                Request Demo
              </Link>
              <a href="#platform" className={secondaryCta}>
                Explore Platform
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <ConsentHeroDiagram />
          </motion.div>
        </div>
      </section>

      {/* ── Feature grid ── */}
      <section id="platform" className="relative z-10 scroll-mt-28 border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              One Platform. Complete{' '}
              <span style={{ color: ACCENT }}>Consent Intelligence.</span>
            </h2>
            <div
              className="mx-auto mt-5 h-px w-16"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
            />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="box-copy rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-6 text-left sm:p-7"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'rgba(153,160,249,0.12)',
                    border: '1px solid rgba(153,160,249,0.22)',
                  }}
                >
                  <f.Icon className="h-5 w-5" style={{ color: ACCENT }} />
                </div>
                <h3 className="!text-left text-xl font-black tracking-tight text-white">{f.title}</h3>
                <p className="!mx-0 mt-2 !max-w-none !text-left text-[14px] font-medium leading-relaxed text-white/55">
                  {f.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13px] text-white/75">
                      <span
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: 'rgba(153,160,249,0.18)' }}
                      >
                        <Check className="h-2.5 w-2.5" style={{ color: ACCENT }} strokeWidth={3} />
                      </span>
                      <span className="font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="relative z-10 border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              How It <span style={{ color: ACCENT }}>Works</span>
            </h2>
            <div
              className="mx-auto mt-5 h-px w-16"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
            />
          </motion.div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
            {steps.map((s, idx) => (
              <React.Fragment key={s.title}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="box-copy relative flex-1 rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-5 text-left"
                >
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-full text-[12px] font-black"
                    style={{
                      color: ACCENT,
                      backgroundColor: 'rgba(153,160,249,0.12)',
                      border: '1px solid rgba(153,160,249,0.28)',
                    }}
                  >
                    {s.n}
                  </div>
                  <s.Icon className="mb-2 h-5 w-5" style={{ color: ACCENT }} />
                  <div className="text-[15px] font-black text-white">{s.title}</div>
                  <p className="!mx-0 mt-1.5 !max-w-none !text-left text-[12px] font-medium leading-relaxed text-white/50">
                    {s.copy}
                  </p>
                </motion.div>

                {idx < steps.length - 1 && (
                  <>
                    {/* Mobile / tablet vertical arrow */}
                    <div className="flex items-center justify-center py-0.5 lg:hidden">
                      <motion.div
                        animate={{ y: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.12 }}
                      >
                        <ArrowDown className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2.25} />
                      </motion.div>
                    </div>
                    {/* Desktop horizontal arrow */}
                    <div className="hidden shrink-0 items-center px-1.5 lg:flex xl:px-2.5">
                      <motion.div
                        animate={{ x: [0, 4, 0], opacity: [0.45, 1, 0.45] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.12 }}
                      >
                        <ArrowRight className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={2.25} />
                      </motion.div>
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise benefits ── */}
      <section className="relative z-10 border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Enterprise <span style={{ color: ACCENT }}>Benefits</span>
            </h2>
            <p className="!mx-0 mx-auto mt-4 max-w-2xl !text-center text-[15px] font-medium text-white/50">
              Turn consent into operational control — enforced in real time, proven for audits, ready for AI.
            </p>
            <div
              className="mx-auto mt-5 h-px w-16"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
            />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="box-copy group relative overflow-hidden rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-6 text-left transition-colors duration-300 hover:border-[#99A0F9]/35 sm:p-7"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle, rgba(153,160,249,0.16), transparent 70%)',
                  }}
                />
                <div className="relative flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: 'rgba(153,160,249,0.12)',
                      border: '1px solid rgba(153,160,249,0.25)',
                    }}
                  >
                    <b.Icon className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="!mb-0 !text-left text-[16px] font-black leading-snug tracking-tight text-white">
                      {b.title}
                    </h3>
                    <p className="!mx-0 mt-2 !max-w-none !text-left text-[13px] font-medium leading-relaxed text-white/55">
                      {b.copy}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy governance ── */}
      <section className="relative z-10 border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Built for End-to-End{' '}
              <span style={{ color: ACCENT }}>Privacy Governance</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium text-white/50">
              Extend consent intelligence into the operational workflows regulators expect.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {governance.map((g, idx) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="box-copy rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-6 text-left sm:p-7"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'rgba(153,160,249,0.12)',
                    border: '1px solid rgba(153,160,249,0.22)',
                  }}
                >
                  <g.Icon className="h-5 w-5" style={{ color: ACCENT }} />
                </div>
                <h3 className="!text-left text-xl font-black tracking-tight text-white">{g.title}</h3>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                  {g.subtitle}
                </div>
                <p className="!mx-0 mt-3 !max-w-none !text-left text-[14px] font-medium leading-relaxed text-white/55">
                  {g.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13px] text-white/70">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <span className="font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Torro ── */}
      <section className="relative z-10 border-t border-white/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Why <span style={{ color: ACCENT }}>Torro</span>
            </h2>
            <div
              className="mx-auto mt-5 h-px w-16"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
            />
          </motion.div>

          <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
            <motion.div
              {...fadeUp}
              className="rounded-2xl border border-white/10 bg-[#0a0d1a]/80 p-6 sm:p-8"
            >
              <h3 className="mb-5 text-lg font-black text-white/70">Traditional Consent Platforms</h3>
              <ul className="space-y-3">
                {traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-white/55">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/15">
                      <X className="h-3 w-3 text-rose-400" strokeWidth={2.5} />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="flex items-center justify-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full border text-[13px] font-black tracking-widest"
                style={{
                  color: ACCENT,
                  borderColor: 'rgba(153,160,249,0.4)',
                  backgroundColor: 'rgba(153,160,249,0.12)',
                  boxShadow: '0 0 30px rgba(153,160,249,0.2)',
                }}
              >
                VS
              </div>
            </div>

            <motion.div
              {...fadeUp}
              className="rounded-2xl border p-6 sm:p-8"
              style={{
                borderColor: 'rgba(153,160,249,0.35)',
                background: 'linear-gradient(180deg, rgba(17,21,42,0.98) 0%, rgba(10,13,26,0.98) 100%)',
                boxShadow: '0 0 40px -16px rgba(153,160,249,0.35)',
              }}
            >
              <h3 className="mb-5 text-lg font-black" style={{ color: ACCENT }}>
                Torro Consent Intelligence
              </h3>
              <ul className="space-y-3">
                {torro.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-white/80">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: 'rgba(153,160,249,0.18)' }}
                    >
                      <Check className="h-3 w-3" style={{ color: ACCENT }} strokeWidth={3} />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="relative z-10 overflow-hidden border-t border-white/5 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(153,160,249,0.14)_0%,transparent_55%)]" />
        <motion.div {...fadeUp} className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Build Trust Into Every{' '}
            <span style={{ color: ACCENT }}>Data Interaction.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-relaxed text-white/50 md:text-[16px]">
            Move beyond consent capture to enterprise-wide consent intelligence, policy enforcement
            and regulatory accountability.
          </p>
          <div className="mt-8">
            <Link to="/book-demo" className={primaryCta}>
              Request Demo
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ConsentPlatform;
