import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Mail, Shield, Scale, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, getBlogPreview, getBlogTagsFromContent } from '../content/blogPosts';

const ACCENT = '#99A0F9';
const GOLD = '#F8BD64';

const TOPICS = [
  { id: 'all', label: 'All Briefings' },
  { id: 'governance', label: 'Data Governance' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'ai', label: 'AI Readiness' },
];

const TOPIC_MATCH = {
  governance: ['Data Governance', 'Lineage', 'Observability', 'Data Mesh'],
  compliance: ['Compliance', 'Privacy', 'DPDP', 'GDPR', 'CCPA', 'PII', 'Cross-Border'],
  ai: ['AI', 'LLMs'],
};

const readingMinutes = (content) => {
  const words = content.join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.round(words / 200));
};

const Resources = () => {
  const [topic, setTopic] = useState('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const posts = useMemo(
    () =>
      BLOG_POSTS.map((p, idx) => ({
        ...p,
        number: String(idx + 1).padStart(2, '0'),
        excerpt: getBlogPreview(p.content, 180),
        tags: getBlogTagsFromContent(p.content),
        minutes: readingMinutes(p.content),
      })),
    []
  );

  const filtered = useMemo(() => {
    if (topic === 'all') return posts;
    const keys = TOPIC_MATCH[topic] || [];
    return posts.filter((p) => p.tags.some((t) => keys.includes(t)));
  }, [posts, topic]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="relative min-h-screen border-t border-white/5 bg-[#0c0e1a] pb-20 pt-[calc(var(--header-height)+2rem)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Enterprise hero — matches Offerings / Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 shadow-[0_0_22px_rgba(153,160,249,0.10)]">
              <BookOpen className="h-4 w-4" style={{ color: ACCENT }} />
              <span className="text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                Resources
              </span>
            </div>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Intelligence for <span style={{ color: ACCENT }}>Institutional Data Leaders</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium leading-relaxed text-white/55 md:text-[16px]">
              Executive briefings on data governance, regulatory accountability, and AI readiness—written for teams
              operating under DPDP, GDPR, BCBS 239, and board-level scrutiny.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] transition-colors hover:bg-[#f0b04d]"
                style={{ backgroundColor: GOLD }}
              >
                Book a Demo
              </Link>
              <a
                href="#briefings"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/50 hover:text-white"
              >
                View Briefings
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mb-14 grid gap-4 sm:grid-cols-3 md:mb-16"
        >
          {[
            { Icon: Shield, title: 'Governance', copy: 'Operating models for hybrid estates' },
            { Icon: Scale, title: 'Compliance', copy: 'DPDP, GDPR, BCBS 239, SOX & HIPAA' },
            { Icon: Brain, title: 'AI Readiness', copy: 'Controlled data for model and agent use' },
          ].map(({ Icon, title, copy }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] px-5 py-5"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: 'rgba(153,160,249,0.12)',
                  borderColor: 'rgba(153,160,249,0.22)',
                  color: ACCENT,
                }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 text-left">
                <div className="text-[13px] font-black tracking-tight text-white">{title}</div>
                <div className="mt-1 text-[12px] font-medium text-white/45">{copy}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Briefings */}
        <div id="briefings" className="mb-10 scroll-mt-28 text-center md:mb-12">
          <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Latest <span style={{ color: ACCENT }}>Briefings</span>
          </h2>
          <div
            className="mx-auto mt-4 h-px w-16"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
          />
        </div>

        {/* Topic filter */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:mb-10">
          {TOPICS.map((t) => {
            const active = topic === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTopic(t.id)}
                className={`rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? 'border-[#99A0F9]/40 bg-[#99A0F9]/15 text-[#99A0F9]'
                    : 'border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-6 md:space-y-8">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] px-8 py-14 text-center">
              <p className="text-[15px] font-medium text-white/50">No briefings in this category yet.</p>
              <button
                type="button"
                onClick={() => setTopic('all')}
                className="mt-4 text-[12px] font-black uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Show all briefings
              </button>
            </div>
          ) : (
            filtered.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a]"
              >
                <div className="grid md:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,340px)_1fr]">
                  <div className="relative min-h-[200px] overflow-hidden border-b border-white/5 md:min-h-full md:border-b-0 md:border-r">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0d1a]/40 max-md:bg-gradient-to-t max-md:from-[#0a0d1a]/50 max-md:to-transparent" />
                  </div>

                  <div className="box-copy flex flex-col justify-center p-7 text-left md:p-9 lg:p-10">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/35">
                        Briefing {post.number}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/25" />
                      <span className="text-[11px] font-semibold text-white/40">{post.minutes} min read</span>
                    </div>

                    <h3 className="!mb-4 !text-left text-xl font-black leading-snug tracking-tight text-white md:text-2xl lg:text-[1.65rem]">
                      {post.title}
                    </h3>

                    <p className="!mx-0 mb-5 max-w-2xl !text-left text-[14px] font-medium leading-relaxed text-white/50 md:text-[15px]">
                      {post.excerpt}
                    </p>

                    {post.tags.length > 0 ? (
                      <div className="mb-6 flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <Link
                      to={`/resources/${post.slug}`}
                      className="inline-flex w-max items-center gap-2 text-[12px] font-black uppercase tracking-[0.2em] transition-all hover:gap-3"
                      style={{ color: ACCENT }}
                    >
                      Read Briefing <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>

        {/* Newsletter — enterprise band */}
        <motion.div
          id="newsletter"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-16 scroll-mt-28 overflow-hidden rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] md:mt-20"
        >
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-12 md:p-12">
            <div className="box-copy text-left">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#99A0F9]/25 bg-[#99A0F9]/10">
                <Mail className="h-5 w-5" style={{ color: ACCENT }} />
              </div>
              <h2 className="!text-left text-2xl font-black tracking-tight text-white md:text-3xl">
                Executive <span style={{ color: ACCENT }}>Briefing List</span>
              </h2>
              <p className="!mx-0 mt-3 max-w-md !text-left text-[14px] font-medium leading-relaxed text-white/50 md:text-[15px]">
                Receive new institutional briefings when published. No weekly filler—only material relevant to
                governance, compliance, and AI control.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="rounded-xl border border-[#99A0F9]/25 bg-[#99A0F9]/10 px-5 py-4 text-[14px] font-semibold" style={{ color: ACCENT }}>
                  Subscription confirmed. You will receive future briefings at your work email.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Work email address"
                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/25 px-5 py-3.5 text-[14px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#99A0F9]/45"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl px-6 py-3.5 text-[12px] font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#f0b04d]"
                    style={{ backgroundColor: GOLD }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] px-8 py-10 text-center md:mt-12 md:px-12 md:py-12"
        >
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
            Move from insight to <span style={{ color: ACCENT }}>operating control</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] font-medium text-white/50 md:text-[15px]">
            See how Torro OneData enforces governance, privacy, and audit readiness across hybrid estates.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] transition-colors hover:bg-[#f0b04d]"
              style={{ backgroundColor: GOLD }}
            >
              Book a Demo
            </Link>
            <Link
              to="/torro-onedata"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              Explore the Platform
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
