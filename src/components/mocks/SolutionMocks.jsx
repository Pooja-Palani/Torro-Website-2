import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Database,
  FileCode2,
  Table2,
  Search,
  ShoppingCart,
  Lock,
  Check,
  Filter,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  Share2,
  ArrowUp,
  ArrowDown,
  FileText,
  Zap,
  Star,
} from 'lucide-react';

/** Marketing-only UI mocks — fictional chrome & data, not product screenshots. */

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
};

const Shell = ({ children, className = '' }) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className={`pointer-events-none relative min-h-[260px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_50px_-28px_rgba(15,23,42,0.55)] ring-1 ring-black/[0.03] sm:h-[280px] md:h-[340px] ${className}`}
  >
    {children}
  </motion.div>
);

const TopBar = ({ title, subtitle }) => (
  <div className="flex items-center justify-between bg-gradient-to-r from-[#3d4db8] to-[#5b6cfa] px-3 py-2 sm:px-3.5">
    <div className="text-left">
      <div className="text-[9px] font-bold tracking-wide text-white sm:text-[10px]">{title}</div>
      {subtitle ? <div className="text-[7px] text-white/65 sm:text-[8px]">{subtitle}</div> : null}
    </div>
    <div className="flex items-center gap-1.5">
      <div className="h-5 w-5 rounded-full bg-white/15" />
      <div className="h-5 w-5 rounded-full bg-white/15" />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/90"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </motion.div>
    </div>
  </div>
);

export const DiscoveryInventoryMock = () => {
  const rows = [
    { name: 'cust_profiles_q2.parquet', type: 'Azure', size: '12.4 MB', app: 'Onboarding', status: 'ok' },
    { name: 'ledger_entries_v3', type: 'Postgres', size: '840 KB', app: 'Core Banking', status: 'ok' },
    { name: 'claims_raw_feed.json', type: 'S3', size: '4.1 MB', app: 'Claims Ops', status: 'no' },
    { name: 'risk_scores_daily', type: 'BigQuery', size: '2.2 MB', app: 'Risk Desk', status: 'ok' },
    { name: 'kyc_docs_index', type: 'Mongo', size: '18 MB', app: 'Compliance', status: 'ok' },
    { name: 'fx_rates_intraday', type: 'Kafka', size: '920 KB', app: 'Treasury', status: 'ok' },
  ];

  return (
    <Shell className="bg-[#f6f7fb]">
      <TopBar title="Asset Inventory" subtitle="Hybrid estate catalog" />
      <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-3 py-2 text-[8px] text-slate-500 sm:text-[9px]">
        <span className="font-medium">Showing 1–6 of 2,418 assets</span>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-semibold text-slate-600">Go</span>
          <ChevronLeft className="h-3 w-3 text-slate-400" />
          <ChevronRight className="h-3 w-3 text-slate-400" />
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-[14px_1.5fr_0.55fr_0.5fr_0.75fr_1fr] gap-1 bg-[#7c86e8] px-2.5 py-2 text-[7px] font-bold uppercase tracking-wider text-white sm:text-[8px]">
          <span>#</span>
          <span>Name</span>
          <span>Type</span>
          <span>Size</span>
          <span>App</span>
          <span>Actions</span>
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i, duration: 0.35 }}
            className={`grid grid-cols-[14px_1.5fr_0.55fr_0.5fr_0.75fr_1fr] items-center gap-1 border-b border-slate-100 px-2.5 py-1.5 text-[7px] sm:py-2 sm:text-[8px] ${
              i % 2 ? 'bg-slate-50/90' : 'bg-white'
            }`}
          >
            <span className="text-slate-400">{i + 1}</span>
            <span className="truncate font-semibold text-slate-800">{r.name}</span>
            <span className="truncate rounded bg-slate-100 px-1 py-0.5 text-center text-slate-600">{r.type}</span>
            <span className="truncate text-slate-500">{r.size}</span>
            <span className="truncate text-slate-500">{r.app}</span>
            <div className="flex flex-wrap items-center gap-1">
              <span className="inline-flex items-center gap-0.5 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[6px] font-bold text-blue-600 shadow-sm sm:text-[7px]">
                <Eye className="h-2.5 w-2.5" /> View
              </span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[6px] font-bold sm:text-[7px] ${
                  r.status === 'ok' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                }`}
              >
                {r.status === 'ok' ? 'Approved' : 'Rejected'}
              </span>
              {r.status === 'ok' ? (
                <span className="inline-flex items-center gap-0.5 rounded-md bg-[#6b74e8] px-1.5 py-0.5 text-[6px] font-bold text-white sm:text-[7px]">
                  <Share2 className="h-2 w-2" /> Sync
                </span>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
};

export const LineageGraphMock = () => {
  const nodes = [
    { x: '5%', y: '16%', label: 'CRM_RAW', sub: 'unknown table', tag: 'SOURCE', tone: 'rose', delay: 0 },
    { x: '5%', y: '62%', label: 'LEDGER_IN', sub: 'oltp feed', tag: 'TABLE', tone: 'rose', delay: 0.08 },
    { x: '26%', y: '38%', label: 'CLEANSE', sub: 'SAS script', tag: 'PROCESS', tone: 'amber', delay: 0.16 },
    { x: '46%', y: '36%', label: 'FOCUS', sub: 'selected node', tag: 'FOCUS', tone: 'focus', delay: 0.24 },
    { x: '72%', y: '16%', label: 'MART_A', sub: 'analytics', tag: 'DEST', tone: 'indigo', delay: 0.32 },
    { x: '72%', y: '62%', label: 'MART_B', sub: 'reporting', tag: 'DEST', tone: 'indigo', delay: 0.4 },
  ];

  const tones = {
    rose: 'border-rose-200 bg-white text-rose-700 shadow-rose-100/80',
    amber: 'border-amber-200 bg-white text-amber-800 shadow-amber-100/80',
    indigo: 'border-indigo-200 bg-white text-indigo-700 shadow-indigo-100/80',
    focus: 'border-indigo-500 bg-[#3d4db8] text-white shadow-indigo-300/50',
  };

  return (
    <Shell className="bg-[#eef1f8]">
      <TopBar title="Lineage Explorer" subtitle="Upstream · Focus · Downstream" />
      <div className="relative h-[calc(100%-40px)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(99,102,241,0.08),transparent_55%)]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 280" fill="none" aria-hidden="true">
          <motion.path
            d="M95 75 C155 75, 185 130, 220 140"
            stroke="#f07167"
            strokeWidth="2.5"
            opacity="0.75"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
          <motion.path
            d="M95 205 C155 205, 185 160, 220 140"
            stroke="#f07167"
            strokeWidth="2.5"
            opacity="0.55"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: 'easeOut' }}
          />
          <motion.path
            d="M130 140 C170 140, 190 140, 220 140"
            stroke="#f4a261"
            strokeWidth="2.5"
            opacity="0.85"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          />
          <motion.path
            d="M220 140 C265 95, 290 75, 345 75"
            stroke="#5b6cfa"
            strokeWidth="2.5"
            opacity="0.75"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
          />
          <motion.path
            d="M220 140 C265 185, 290 205, 345 205"
            stroke="#5b6cfa"
            strokeWidth="2.5"
            opacity="0.55"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          />
        </svg>

        {nodes.map((n) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: n.delay, duration: 0.4 }}
            className={`absolute w-[86px] rounded-xl border px-2 py-1.5 shadow-md sm:w-[96px] ${tones[n.tone]}`}
            style={{ left: n.x, top: n.y }}
          >
            <div className="flex items-center justify-between gap-1">
              <Database className="h-3 w-3 opacity-70" />
              <span className="text-[6px] font-black uppercase tracking-wider opacity-75">{n.tag}</span>
            </div>
            <div className="mt-1 text-[9px] font-black leading-none sm:text-[10px]">{n.label}</div>
            <div className={`mt-0.5 text-[6px] opacity-60 ${n.tone === 'focus' ? 'text-white/70' : ''}`}>{n.sub}</div>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
};

const FunnelArt = () => (
  <svg viewBox="0 0 120 64" className="h-14 w-full" aria-hidden="true">
    <defs>
      <linearGradient id="funnelGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c7cdff" />
        <stop offset="100%" stopColor="#99A0F9" />
      </linearGradient>
    </defs>
    <circle cx="22" cy="14" r="4" fill="#99A0F9" opacity="0.35" />
    <rect x="34" y="10" width="7" height="7" rx="1.5" fill="#99A0F9" opacity="0.45" />
    <circle cx="50" cy="16" r="3.5" fill="#7c86e8" opacity="0.5" />
    <path d="M18 28 H102 L78 58 H42 Z" fill="url(#funnelGrad)" opacity="0.55" />
    <path d="M30 28 H90 L74 48 H46 Z" fill="#fff" opacity="0.35" />
  </svg>
);

const GearsArt = () => (
  <svg viewBox="0 0 120 64" className="h-14 w-full" aria-hidden="true">
    <text x="8" y="34" style={{ fontSize: 8, fontWeight: 700, fill: '#94a3b8' }}>
      RAW
    </text>
    <circle cx="48" cy="32" r="12" fill="#e8ebff" stroke="#99A0F9" strokeWidth="2" />
    <circle cx="68" cy="24" r="9" fill="#dfe3ff" stroke="#7c86e8" strokeWidth="2" />
    <circle cx="70" cy="42" r="8" fill="#cfd5ff" stroke="#5b6cfa" strokeWidth="2" />
    <text x="86" y="34" style={{ fontSize: 7, fontWeight: 700, fill: '#94a3b8' }}>
      ENRICH
    </text>
  </svg>
);

const RuntimeArt = () => (
  <svg viewBox="0 0 120 64" className="h-14 w-full" aria-hidden="true">
    <path d="M18 48 A22 22 0 0 1 62 48" fill="none" stroke="#d1fae5" strokeWidth="8" strokeLinecap="round" />
    <path d="M18 48 A22 22 0 0 1 50 30" fill="none" stroke="#34d399" strokeWidth="8" strokeLinecap="round" />
    <text x="28" y="46" style={{ fontSize: 6, fontWeight: 800, fill: '#059669' }}>
      REVENUE
    </text>
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={i} x={72 + i * 8} y={44 - i * 5} width="5" height={8 + i * 5} rx="1" fill="#99A0F9" opacity={0.45 + i * 0.1} />
    ))}
  </svg>
);

export const DataQualityMock = () => {
  const stages = [
    { title: 'Ingestion', desc: 'Source landing quality', Art: FunnelArt, crit: '2', risk: '5', ok: '41', assets: '48', coverage: '96%', pass: '91%' },
    { title: 'Processing', desc: 'Pipeline transform quality', Art: GearsArt, crit: '1', risk: '3', ok: '28', assets: '32', coverage: '88%', pass: '94%' },
    { title: 'Runtime', desc: 'Consumption layer quality', Art: RuntimeArt, crit: '0', risk: '2', ok: '19', assets: '21', coverage: '100%', pass: '97%', live: true },
  ];

  return (
    <Shell className="bg-[#f8f9fc]">
      <div className="flex items-start justify-between border-b border-slate-200/80 bg-white px-3 py-2.5 sm:px-3.5">
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <Zap className="h-3 w-3 text-[#6b74e8]" />
            <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#6b74e8]">Data Quality</span>
          </div>
          <div className="mt-0.5 text-[11px] font-black tracking-tight text-slate-900 sm:text-[12px]">Portfolio health</div>
        </div>
        <div className="flex gap-1">
          <span className="rounded-full bg-[#e8ebff] px-2 py-1 text-[7px] font-bold text-[#5b6cfa]">By Asset</span>
          <span className="rounded-full border border-slate-200 px-2 py-1 text-[7px] font-bold text-slate-500">Admin</span>
        </div>
      </div>
      <div className="grid h-[calc(100%-52px)] grid-cols-3 gap-2 p-2 sm:p-2.5">
        {stages.map((s, idx) => {
          const Art = s.Art;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.4 }}
              className="relative flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_8px_20px_-14px_rgba(15,23,42,0.35)]"
            >
              {s.live ? (
                <span className="absolute right-1.5 top-1.5 z-10 inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[6px] font-black text-emerald-600">
                  <motion.span
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ repeat: Infinity, duration: 1.4 }}
                    className="h-1 w-1 rounded-full bg-emerald-500"
                  />{' '}
                  LIVE
                </span>
              ) : null}
              <div className="border-b border-slate-100 bg-gradient-to-b from-[#f4f6ff] to-white px-1.5 pt-1">
                <Art />
              </div>
              <div className="box-copy flex flex-1 flex-col px-2 pb-1.5 pt-1.5 text-left">
                <div className="text-[9px] font-black text-slate-900 sm:text-[10px]">{s.title}</div>
                <div className="mb-1.5 text-[6px] text-slate-500 sm:text-[7px]">{s.desc}</div>
                <div className="mb-1 grid grid-cols-3 gap-0.5 text-center">
                  {[
                    [s.crit, 'bg-rose-400', 'text-rose-600'],
                    [s.risk, 'bg-amber-400', 'text-amber-600'],
                    [s.ok, 'bg-emerald-400', 'text-emerald-600'],
                  ].map(([val, bar, color], i) => (
                    <div key={i}>
                      <div className={`mx-auto mb-0.5 h-0.5 w-full rounded ${bar}`} />
                      <div className={`text-[8px] font-black ${color}`}>{val}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto rounded-md bg-[#eef0ff] py-1 text-center text-[6px] font-bold text-[#5b6cfa]">
                  View Stage Assets →
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Shell>
  );
};

export const AccessRequestMock = () => (
  <Shell className="bg-[#f3f5f9]">
    <TopBar title="Access Workspace" subtitle="Governed field selection" />
    <div className="grid h-[calc(100%-40px)] grid-cols-[1.4fr_0.95fr] gap-2 p-2 sm:p-2.5">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 px-2.5 py-2">
          <Database className="h-3.5 w-3.5 text-[#5b6cfa]" />
          <div className="min-w-0 text-left">
            <div className="truncate text-[8px] font-black text-slate-800">retail_accounts_v2</div>
            <div className="text-[6px] text-slate-400">azure_datalake_file · 28 fields</div>
          </div>
        </div>
        <div className="grid grid-cols-[14px_1.2fr_0.55fr_0.65fr] gap-1 bg-[#7c86e8] px-2.5 py-1.5 text-[6px] font-bold uppercase text-white">
          <span />
          <span>Field</span>
          <span>Type</span>
          <span>PII</span>
        </div>
        {[
          ['account_id', 'STRING', false],
          ['customer_name', 'STRING', true],
          ['balance_amt', 'INT64', false],
          ['national_id', 'STRING', true],
          ['branch_code', 'STRING', false],
        ].map(([f, t, pii], i) => (
          <motion.div
            key={f}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i }}
            className={`grid grid-cols-[14px_1.2fr_0.55fr_0.65fr] items-center gap-1 border-b border-slate-50 px-2.5 py-1.5 text-[7px] ${
              i % 2 ? 'bg-slate-50/80' : 'bg-white'
            }`}
          >
            <span className={`h-2.5 w-2.5 rounded border ${pii ? 'border-[#99A0F9] bg-[#99A0F9]' : 'border-slate-300 bg-white'}`} />
            <span className="truncate font-mono font-semibold text-slate-700">{f}</span>
            <span className="text-slate-500">{t}</span>
            <span className={`rounded-full px-1.5 py-0.5 text-[6px] font-bold ${pii ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
              {pii ? 'PII' : 'Clear'}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
        <div className="text-left text-[9px] font-black text-[#4f5bd5]">Request Cart</div>
        <div className="mt-2 space-y-1.5">
          {['customer_name', 'national_id', 'balance_amt'].map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08 }}
              className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-2 py-1.5"
            >
              <span className="font-mono text-[7px] font-semibold text-slate-700">{f}</span>
              <Check className="h-2.5 w-2.5 text-emerald-500" />
            </motion.div>
          ))}
        </div>
        <div className="mt-auto rounded-lg bg-gradient-to-r from-[#6b74e8] to-[#99A0F9] py-2 text-center text-[8px] font-black text-white">
          Submit for Approval
        </div>
      </div>
    </div>
  </Shell>
);

/** Marketplace — featured + list layout (readable at mock size) */
export const MarketplaceCatalogMock = () => {
  const featured = {
    name: 'customer_360_gold',
    kind: 'TABLE',
    tag: 'CURATED',
    score: '98',
    db: 'enterprise_dw',
    schema: 'crm',
    owner: 'Customer Data Office',
    published: '08 Jul 2026',
  };

  const side = [
    { name: 'loan_book_daily', kind: 'PARQUET', tag: 'SOURCE', owner: 'Lending' },
    { name: 'kyc_watchlist.sql', kind: 'SCRIPT', tag: 'LOGIC', owner: 'Compliance' },
    { name: 'fx_mid_rates', kind: 'TABLE', tag: 'CURATED', owner: 'Treasury' },
  ];

  return (
    <Shell className="bg-[#f4f6fb]">
      <div className="border-b border-slate-200 bg-white px-3 py-2.5 sm:px-3.5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="text-left">
            <span className="inline-flex rounded-full bg-[#e8ebff] px-2 py-0.5 text-[7px] font-black uppercase tracking-[0.14em] text-[#5b6cfa]">
              Marketplace
            </span>
            <div className="mt-1 text-[12px] font-black text-slate-900 sm:text-[13px]">Discover assets</div>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span className="text-[7px] font-bold text-slate-500">1 / 12</span>
            <LayoutGrid className="h-3.5 w-3.5" />
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 shadow-inner">
            <Search className="h-3 w-3 shrink-0 text-slate-400" />
            <span className="truncate text-[8px] text-slate-400">Search tables, scripts, datasets…</span>
          </div>
          <span className="rounded-lg bg-[#5b6cfa] px-2.5 py-1.5 text-[7px] font-bold text-white shadow-sm">All</span>
          <span className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[7px] font-bold text-slate-500">Tables</span>
          <span className="inline-flex items-center gap-0.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[7px] font-bold text-slate-500">
            <Filter className="h-2.5 w-2.5" /> Vendors
          </span>
        </div>
      </div>

      <div className="grid h-[calc(100%-84px)] grid-cols-[1.25fr_1fr] gap-2.5 p-2.5">
        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.45)]"
        >
          <div className="relative border-b border-slate-100 bg-gradient-to-br from-[#eef0ff] via-white to-[#f8fafc] px-3 py-2.5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                  <Table2 className="h-4 w-4 text-[#5b6cfa]" />
                </div>
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="rounded bg-[#e8ebff] px-1.5 py-0.5 text-[6px] font-black text-[#5b6cfa]">{featured.kind}</span>
                    <span className="rounded bg-sky-50 px-1.5 py-0.5 text-[6px] font-black text-sky-700">{featured.tag}</span>
                  </div>
                  <div className="mt-0.5 text-[10px] font-black text-slate-900 sm:text-[11px]">{featured.name}</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[6px] font-black text-emerald-600">
                  <Check className="h-2.5 w-2.5" /> Verified
                </span>
                <span className="inline-flex items-center gap-0.5 text-[8px] font-black text-amber-500">
                  <Star className="h-3 w-3 fill-amber-400" /> {featured.score}
                </span>
              </div>
            </div>
          </div>

          <div className="box-copy flex flex-1 flex-col px-3 py-2.5 text-left">
            <div className="space-y-1.5 text-[7px] sm:text-[8px]">
              {[
                ['Database', featured.db],
                ['Schema', featured.schema],
                ['Published', featured.published],
                ['Owner', featured.owner],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-2 border-b border-slate-50 pb-1">
                  <span className="font-semibold text-slate-500">{k}</span>
                  <span className="truncate font-bold text-[#5b6cfa]">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="inline-flex items-center gap-0.5 text-[7px] font-bold">
                  <ArrowUp className="h-3 w-3" /> 24
                </span>
                <span className="inline-flex items-center gap-0.5 text-[7px] font-bold">
                  <FileText className="h-3 w-3" /> 8
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-lg bg-[#5b6cfa] px-2.5 py-1 text-[7px] font-black text-white">
                <ShoppingCart className="h-3 w-3" /> Request
              </span>
            </div>
          </div>
        </motion.div>

        {/* Side list */}
        <div className="flex flex-col gap-1.5">
          {side.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.35 }}
              className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-2 shadow-sm"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#eef0ff]">
                {c.kind === 'SCRIPT' ? (
                  <FileCode2 className="h-3.5 w-3.5 text-[#5b6cfa]" />
                ) : c.kind === 'PARQUET' ? (
                  <Table2 className="h-3.5 w-3.5 text-[#5b6cfa]" />
                ) : (
                  <Database className="h-3.5 w-3.5 text-[#5b6cfa]" />
                )}
              </div>
              <div className="min-w-0 flex-1 text-left">
                <div className="truncate text-[8px] font-black text-slate-900 sm:text-[9px]">{c.name}</div>
                <div className="mt-0.5 flex items-center gap-1">
                  <span className="rounded bg-slate-100 px-1 py-0.5 text-[5px] font-bold text-slate-500">{c.kind}</span>
                  <span className="truncate text-[6px] text-slate-400">{c.owner}</span>
                </div>
              </div>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </Shell>
  );
};

const MOCK_BY_TITLE = {
  'Unified Discovery & Metadata Foundation': DiscoveryInventoryMock,
  'End-to-End Data Lineage': LineageGraphMock,
  'Continuous Data Quality & Trust': DataQualityMock,
  'Automated Entitlements & Protection': AccessRequestMock,
  'Data Marketplace & PrivBox': MarketplaceCatalogMock,
};

export const SolutionMock = ({ title }) => {
  const Comp = MOCK_BY_TITLE[title] || DiscoveryInventoryMock;
  return <Comp />;
};

export default SolutionMock;
