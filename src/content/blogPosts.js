export const BLOG_POSTS = [
  {
    slug: 'data-chaos-trap',
    title: 'The Data Chaos Trap – Escaping Horizontal Data Flows with Torro.ai + Starburst',
    date: '',
    image: '/resources/data-chaos.jpg',
    imageAlt: 'Torro.ai and Starburst partnership for governed data access across enterprise estates',
    partnership: {
      label: 'Torro.ai × Starburst Partnership',
      partners: [
        { name: 'Torro.ai', logo: '/partners/torro.png' },
        { name: 'Starburst', logo: '/partners/starburst.png' },
      ],
    },
    content: [
      'Enterprises are still organised as vertical stacks—business units, regions, and systems of record—while data moves horizontally across clouds, subsidiaries, and partners. That mismatch is the Data Chaos Trap: teams ship faster than governance can see, and leaders lose the answer to a simple question: where is our critical data right now?',
      'Why Vertical Businesses Fail at Horizontal Data',
      'Picture a sales pod in Singapore pulling leads from a cloud CRM, marketing in Mumbai remixing them on a legacy server, and an analytics team in Bangalore querying a US subsidiary lake. Customer data—names, preferences, transactions—travels multi-dimensionally. It is efficient until a GDPR exposure appears because EU records landed with an unregulated vendor, or a “view-only” grant turns into shadow exports.',
      'Org charts stay vertical. Data does not. APIs, shared drives, VPN copies, and BI extracts ignore floors and elevators. Without a federation layer and a governance control plane, every cross-border project adds another invisible path.',
      'The Torro.ai + Starburst Partnership',
      'Torro.ai and Starburst built a joint architecture for exactly this problem. Starburst provides the enterprise intelligence fabric: federated SQL across warehouses, lakes, and operational stores so teams query data where it lives—without forcing a rip-and-replace centralisation. Torro.ai provides the governance and privacy control plane: discovery, lineage, entitlements, consent and purpose enforcement, and audit-ready evidence.',
      'Together they turn “find and move everything into one platform” into “query with policy.” Starburst opens the estate. Torro decides who may see what, for which purpose, under which regulation—and proves it.',
      'Architecture for Escaping the Data Chaos Trap',
      'In the Torro.ai + Starburst reference design, Starburst sits as the access and analytics fabric over hybrid sources—on-prem, cloud object storage, warehouses, and lakes. Torro overlays the same estate with a unified metadata foundation, end-to-end lineage, sensitivity classification, and automated entitlements (RBAC and ABAC, time-bound access, dynamic PII masking).',
      'The result is one operating model: Starburst delivers governed answers and AI-ready context across distributed systems; Torro ensures every query path, marketplace share, and AI pipeline stays inside DPDP, GDPR, and regional residency rules. Cross-border teams keep velocity. Compliance teams keep evidence.',
      'Control Without Locking Innovation',
      'Isolation alone freezes products. Unrestricted federation alone creates regulatory risk. The partnership purpose is structured liberation: Starburst’s zero-copy, federated access so India, Singapore, and EU teams can work from shared objectives; Torro’s purpose, consent, and policy engine so PII and regulated fields never leave their lawful bounds.',
      'That combination is what breaks the Data Chaos Trap—horizontal data flows with vertical accountability. Download the Torro.ai × Starburst whitepaper for the full architecture, DPDP-oriented controls, and how the two platforms connect in production estates.',
      'Torro.AI Tip: Map one Starburst-accessible dataset this week, then ask Torro which identities, purposes, and jurisdictions currently touch it.',
    ],
    whitepaper: {
      title: 'Torro.ai × Starburst Whitepaper',
      subtitle:
        'Explore the Torro.ai + Starburst architecture for escaping the Data Chaos Trap. — Download the full whitepaper',
      pdfUrl: '/resources/torro-starburst-dpdp-whitepaper.pdf',
      fileName: 'Torro-Starburst-DPDP-WhitePaper.pdf',
    },
  },
  {
    slug: 'data-centric-enterprises',
    title: 'Data-Centric Enterprises – Governing Flows for the AI Onslaught',
    date: '',
    image: '/resources/data-centric.jpg',
    imageAlt: 'Analytics dashboard visualizing governed enterprise data',
    content: [
      "If Blog 1 exposed the cracks, here's the blueprint: Flip the skyscraper. Put data at the center—a glowing core hub with governed elevators (flows), observability radars, and border controls. This isn't buzzword bingo; it's reimagining design for multi-reg compliance, team agility, and AI readiness. At Torro.AI, we live this in our startup stack—here's how any org can.",
      'Streamline with Full Observability: See Every Data Packet',
      'Empower decisions by mapping data like air traffic control. Deploy agent-based monitoring (think lightweight ML sentinels) across cloud/on-prem hybrids. They tag flows in real-time: origin, destination, sensitivity (e.g., via RBI tokenization for Indian banks).',
      'Original twist: Use "data passports"—dynamic metadata stamps logging journey, regs compliance, and access proofs. Query: "Show all customer data paths from Q1." No more "where is it?" black holes. Tools like open-source Collibra forks or Torro.AI-inspired custom dashboards make this democratic—pods self-serve without anarchy.',
      'Regulate Flows, Isolate Risks: Structured Yet Free',
      'Regulate like smart highways: Toll gates for inter-business borders, speed limits for subsidiaries. Tokenize sensitive bits (aligning DPDP/GDPR) so data "flows freely" pseudonymized. Cross-border teams? Federated access—same objectives via zero-trust proxies, no full exports.',
      'How? Zero-copy sharing (e.g., Snowflake-style) lets India devs query Singapore\'s lake without moving bits. Legacy? Wrapper APIs modernize without rip-replace. Control point: Granular policies—"Block PII to non-EU pods unless tokenized."',
      'Cross-Border Teams and AI-Proofing: The Secure Democracy',
      'Manage global squads with "objective-aligned vaults"—shared, governed spaces where data meets teams at objectives, not departments. Want Indian EV startup insights for US expansion? Vault enforces regs, audits collab.',
      "For AI now: Pre-build \"data meshes\" with lineage graphs. When agents trigger \"onslaught\" queries, they're sandboxed—full visibility, no shadow AI on rogue GPUs. We've prototyped this at Torro.AI: 40% faster compliance audits, zero breaches.",
      'Envision and Build: Your Action Plan',
      'Audit: Map top 5 critical datasets\' flows (1 week).',
      'Hub-ify: Centralize governance (e.g., data catalog + policy engine).',
      'Pilot: One cross-pod project with observability.',
      'Scale: AI-stress test for agent flows.',
      'This data-centric pivot turns chaos into competitive moat—secure, observable, border-smart.',
      'Coming Next: AI-Specific Tactics and Case Studies.',
    ],
    whitepaper: {
      title: 'Torro.ai × Starburst Whitepaper',
      subtitle:
        'Explore the Torro.ai + Starburst architecture for escaping the Data Chaos Trap. — Download the full whitepaper',
      pdfUrl: '/resources/torro-starburst-dpdp-whitepaper.pdf',
      fileName: 'Torro-Starburst-DPDP-WhitePaper.pdf',
    },
  },
];

const TAG_ALLOWLIST = [
  'Data Governance',
  'Privacy',
  'Compliance',
  'DPDP',
  'GDPR',
  'CCPA',
  'PII',
  'Cross-Border',
  'Data Localization',
  'AI',
  'LLMs',
  'Observability',
  'Lineage',
  'Tokenization',
  'Zero Trust',
  'Zero-copy',
  'Data Mesh',
  'Starburst',
  'Partnership',
];

export function getBlogPreview50Chars(content) {
  return getBlogPreview(content, 50);
}

export function getBlogPreview(content, max = 160) {
  const text = content.join(' ').replace(/\s+/g, ' ').trim();
  return text.length <= max ? text : `${text.slice(0, max).trimEnd()}…`;
}

export function getBlogTagsFromContent(content) {
  const text = content.join(' ').toLowerCase();

  const rules = [
    { tag: 'Data Governance', match: ['governance'] },
    { tag: 'Privacy', match: ['privacy'] },
    { tag: 'Compliance', match: ['compliance', 'regulation', 'regulatory'] },
    { tag: 'DPDP', match: ['dpdp'] },
    { tag: 'GDPR', match: ['gdpr'] },
    { tag: 'CCPA', match: ['ccpa'] },
    { tag: 'PII', match: ['pii'] },
    { tag: 'Cross-Border', match: ['cross-border', 'cross border'] },
    { tag: 'Data Localization', match: ['data localization', 'localization'] },
    { tag: 'AI', match: ['ai', 'agentic'] },
    { tag: 'LLMs', match: ['llm', 'llms'] },
    { tag: 'Observability', match: ['observability', 'monitoring'] },
    { tag: 'Lineage', match: ['lineage'] },
    { tag: 'Tokenization', match: ['tokenize', 'tokenization'] },
    { tag: 'Zero Trust', match: ['zero-trust', 'zero trust'] },
    { tag: 'Zero-copy', match: ['zero-copy', 'zero copy'] },
    { tag: 'Data Mesh', match: ['data mesh', 'data meshes'] },
    { tag: 'Starburst', match: ['starburst'] },
    { tag: 'Partnership', match: ['partnership', 'torro.ai + starburst', 'torro.ai × starburst'] },
  ];

  const tags = rules
    .filter((r) => r.match.some((m) => text.includes(m)))
    .map((r) => r.tag)
    .filter((t) => TAG_ALLOWLIST.includes(t));

  return Array.from(new Set(tags));
}

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}
