import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getBlogTagsFromContent } from '../content/blogPosts';

const ACCENT = '#99A0F9';

const isHeading = (s) => typeof s === 'string' && s.trim().length > 0 && !/[.!?]$/.test(s.trim());

const slugifyHeading = (s) =>
  s
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const headings = React.useMemo(() => {
    if (!post) return [];
    return post.content.filter((b) => isHeading(b)).map((h) => ({ text: h, id: slugifyHeading(h) }));
  }, [post]);
  const lead = React.useMemo(() => {
    if (!post) return '';
    const firstPara = post.content.find((b) => !isHeading(b) && b.trim().length > 0);
    return firstPara || '';
  }, [post]);
  const tags = React.useMemo(() => {
    if (!post) return [];
    return getBlogTagsFromContent(post.content);
  }, [post]);

  const highlightTokens = React.useMemo(
    () => [
      'GDPR',
      'DPDP',
      'CCPA',
      'PII',
      'LLMs',
      'agentic AI',
      'data localization',
      'cross-border',
      'zero-trust',
      'zero-copy',
      'data passports',
      'lineage',
      'observability',
      'tokenize',
      'tokenization',
      'data mesh',
      'data meshes',
    ],
    []
  );

  const renderWithHighlights = React.useCallback(
    (text) => {
      if (!text) return text;
      const tokens = highlightTokens
        .slice()
        .sort((a, b) => b.length - a.length)
        .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

      const re = new RegExp(`\\b(${tokens.join('|')})\\b`, 'gi');
      const parts = text.split(re);
      return parts.map((part, i) => {
        if (re.test(part)) {
          return (
            <span
              key={i}
              className="font-semibold"
              style={{ color: 'rgba(153,160,249,0.92)' }}
            >
              {part}
            </span>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      });
    },
    [highlightTokens]
  );

  if (!post) {
    return (
      <section className="bg-[#0c0e1a] text-white min-h-screen pt-24 pb-20 border-t border-white/5">
        <div className="mx-auto px-6 md:px-12 max-w-[95rem]">
          <div className="max-w-3xl">
            <div className="text-[12px] font-black uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
              Not found
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">This blog post doesn’t exist.</h1>
            <Link
              to="/resources"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-black uppercase tracking-[0.25em] text-white/75 hover:text-white hover:border-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Resources
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0c0e1a] text-white min-h-screen pt-20 md:pt-24 pb-20 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.09)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[95rem]">
        {/* Top breadcrumb / back */}
        <div className="max-w-[78rem] mx-auto text-left">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-black uppercase tracking-[0.25em] text-white/75 hover:text-white hover:border-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.28em]">
              <span style={{ color: ACCENT }}>Blog</span>
              <span className="text-white/25">•</span>
              <span className="text-white/55">Resources</span>
            </div>

            <h1 className="mt-6 text-left text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] max-w-5xl">
              {post.title}
            </h1>

            {lead ? (
              <p className="mt-6 mx-0 text-left text-[15px] md:text-[16px] text-white/60 leading-relaxed font-medium max-w-5xl">
                {renderWithHighlights(lead)}
              </p>
            ) : null}

            {/* Top CTA */}
            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[12px] font-black text-black uppercase tracking-[0.22em] transition-colors"
                style={{ backgroundColor: ACCENT, boxShadow: '0 10px 30px rgba(153,160,249,0.22)' }}
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[12px] font-black uppercase tracking-[0.22em] border border-white/10 bg-white/5 text-white/75 hover:text-white hover:border-white/20 transition-colors"
              >
                View all blogs
              </Link>
            </div>

            {/* Header → Body spacing */}
            <div className="mt-10 h-px w-full bg-white/10" />
          </motion.div>

          {/* Article layout */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
            <article className="min-w-0 text-left">
              <div className="space-y-6">
                {post.content.map((block, idx) => {
                  if (block === lead) return null;
                  if (isHeading(block)) {
                    const id = slugifyHeading(block);
                    return (
                      <div key={idx} className="pt-8">
                        <div className="h-px w-full bg-white/10 mb-6" />
                        <h2
                          id={id}
                          className="mx-0 text-left text-[18px] md:text-[22px] font-black tracking-tight text-white"
                        >
                          <span style={{ color: ACCENT }}>{block}</span>
                        </h2>
                      </div>
                    );
                  }

                  const trimmed = block.trim();
                  const isTip = trimmed.startsWith('Torro.AI Tip:');

                  if (isTip) {
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-5 md:p-6"
                      >
                        <p className="mx-0 text-left text-[13px] md:text-[14px] text-white/65 leading-relaxed font-semibold">
                          <span style={{ color: ACCENT }}>Torro.AI Tip:</span>{' '}
                          {renderWithHighlights(trimmed.replace('Torro.AI Tip:', '').trim())}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <p
                      key={idx}
                      className="mx-0 text-left text-[14px] md:text-[16px] text-white/60 leading-relaxed font-medium"
                    >
                      {renderWithHighlights(block)}
                    </p>
                  );
                })}
              </div>

              {/* Tagged with */}
              {tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="text-[12px] font-black text-white/70 mb-4">Tagged with</div>
                  <div className="flex flex-wrap gap-2.5">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full px-4 py-2 text-[12px] font-semibold border"
                        style={{
                          color: 'rgba(153,160,249,0.95)',
                          backgroundColor: 'rgba(153,160,249,0.10)',
                          borderColor: 'rgba(153,160,249,0.18)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-6 md:p-8">
                <div className="text-[11px] font-black uppercase tracking-[0.35em] text-white/35">
                  Next step
                </div>
                <div className="mt-3 text-[18px] md:text-[20px] font-black tracking-tight text-white">
                  See what this looks like in your estate.
                </div>
                <p className="mt-3 mx-0 text-left text-[13px] md:text-[14px] text-white/55 leading-relaxed font-medium max-w-2xl">
                  Book a demo with a Torro governance architect to map your current flows, identify risk, and design a compliant operating model.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/book-demo"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[12px] font-black text-black uppercase tracking-[0.22em] transition-colors"
                    style={{ backgroundColor: ACCENT, boxShadow: '0 10px 30px rgba(153,160,249,0.22)' }}
                  >
                    Book a Demo
                  </Link>
                  <Link
                    to="/resources"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[12px] font-black uppercase tracking-[0.22em] border border-white/10 bg-white/5 text-white/75 hover:text-white hover:border-white/20 transition-colors"
                  >
                    View all blogs
                  </Link>
                </div>
              </div>
            </article>

            <aside className="hidden lg:block sticky top-28">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-6">
                <div className="text-[11px] font-black uppercase tracking-[0.35em] text-white/35">
                  On this page
                </div>
                <div className="mt-4 space-y-2">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="block text-[13px] font-semibold text-white/55 hover:text-white transition-colors leading-snug"
                    >
                      <span style={{ color: ACCENT }}>•</span> {h.text}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;

