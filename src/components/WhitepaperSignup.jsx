import React, { useState } from 'react';
import { Download, FileText, Loader2, Check } from 'lucide-react';
import { submitDemoRequest, DEMO_INBOX } from '../lib/submitDemoRequest';

const ACCENT = '#99A0F9';
const STORAGE_PREFIX = 'torro-whitepaper-unlocked:';

const PartnerLogos = ({ compact = false }) => (
  <div className={`inline-flex items-center ${compact ? 'gap-2' : 'gap-2.5'}`}>
    <img
      src="/partners/torro.png"
      alt="Torro.ai"
      className={`${compact ? 'h-6' : 'h-7'} w-auto object-contain`}
    />
    <span className="text-[11px] font-semibold text-white/30">×</span>
    <img
      src="/partners/starburst.png"
      alt="Starburst"
      className={`${compact ? 'h-3.5' : 'h-4'} w-auto object-contain brightness-0 invert opacity-90`}
    />
  </div>
);

const WhitepaperSignup = ({ whitepaper, compact = false }) => {
  const pdfUrl = whitepaper?.pdfUrl || '/resources/torro-starburst-dpdp-whitepaper.pdf';
  const fileName = whitepaper?.fileName || 'Torro-Starburst-DPDP-WhitePaper.pdf';
  const title = whitepaper?.title || 'Torro.ai × Starburst Whitepaper';
  const subtitle =
    whitepaper?.subtitle ||
    'Explore the Torro.ai + Starburst architecture for escaping the Data Chaos Trap. — Download the full whitepaper';

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(() => {
    try {
      return localStorage.getItem(`${STORAGE_PREFIX}${pdfUrl}`) === '1' ? 'unlocked' : 'idle';
    } catch {
      return 'idle';
    }
  });
  const [error, setError] = useState('');

  const triggerDownload = () => {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = fileName;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const unlock = () => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${pdfUrl}`, '1');
    } catch {
      /* ignore */
    }
    setStatus('unlocked');
    triggerDownload();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Enter a valid work email.');
      return;
    }

    setStatus('loading');
    try {
      await submitDemoRequest({
        name: name.trim() || trimmed.split('@')[0],
        email: trimmed,
        company: trimmed.split('@')[1] || '',
        role: '',
        challenge: `Whitepaper download request: ${title}`,
        source: 'blog-whitepaper',
      });
      unlock();
    } catch (err) {
      setStatus('idle');
      setError(err?.message || `Something went wrong. Please email ${DEMO_INBOX}.`);
    }
  };

  if (status === 'unlocked') {
    return (
      <div
        className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 ${
          compact ? 'p-5' : 'p-6'
        }`}
      >
        <PartnerLogos compact={compact} />
        <div className="mt-4 flex items-start gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: 'rgba(153,160,249,0.12)',
              border: '1px solid rgba(153,160,249,0.22)',
            }}
          >
            <Check className="h-5 w-5" style={{ color: ACCENT }} />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-black uppercase tracking-[0.28em] text-white/35">
              Whitepaper unlocked
            </div>
            <div className="mt-1.5 text-[15px] font-black tracking-tight text-white">{title}</div>
            <p className="!mx-0 mt-2 !max-w-none !text-left text-[13px] font-medium leading-relaxed text-white/55">
              Your download should start automatically. If it didn’t, use the button below.
            </p>
            <button
              type="button"
              onClick={triggerDownload}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[12px] font-black uppercase tracking-[0.18em] text-black transition-colors"
              style={{ backgroundColor: ACCENT, boxShadow: '0 10px 30px rgba(153,160,249,0.22)' }}
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 ${
        compact ? 'p-5' : 'p-6'
      }`}
    >
      <PartnerLogos compact={compact} />

      <div className="mt-4 flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{
            backgroundColor: 'rgba(153,160,249,0.12)',
            border: '1px solid rgba(153,160,249,0.22)',
          }}
        >
          <FileText className="h-5 w-5" style={{ color: ACCENT }} />
        </div>
        <div className="min-w-0">
          <div className="text-[11px] font-black uppercase tracking-[0.28em] text-white/35">
            Whitepaper
          </div>
          <div className="mt-1.5 text-[15px] font-black tracking-tight text-white">{title}</div>
          <p className="!mx-0 mt-2 !max-w-none !text-left text-[13px] font-medium leading-relaxed text-white/55">
            {subtitle}
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-5 space-y-3">
        {!compact && (
          <div>
            <label htmlFor="wp-name" className="sr-only">
              Name
            </label>
            <input
              id="wp-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0c0e1a]/70 px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/35 focus:border-[#99A0F9]/45"
            />
          </div>
        )}
        <div>
          <label htmlFor="wp-email" className="sr-only">
            Work email
          </label>
          <input
            id="wp-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#0c0e1a]/70 px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/35 focus:border-[#99A0F9]/45"
          />
        </div>

        {error ? (
          <p className="!mx-0 !max-w-none !text-left text-[12px] font-medium text-rose-300">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[12px] font-black uppercase tracking-[0.18em] text-black transition-opacity disabled:opacity-70"
          style={{ backgroundColor: ACCENT, boxShadow: '0 10px 30px rgba(153,160,249,0.22)' }}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Unlocking…
            </>
          ) : (
            <>
              <Download className="h-4 w-4" />
              Get the Whitepaper
            </>
          )}
        </button>

        <p className="!mx-0 !max-w-none !text-left text-[11px] font-medium leading-relaxed text-white/35">
          We’ll email your request to Torro and unlock the PDF instantly. No spam.
        </p>
      </form>
    </div>
  );
};

export default WhitepaperSignup;
