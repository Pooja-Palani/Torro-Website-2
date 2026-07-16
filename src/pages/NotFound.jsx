import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center border-t border-white/5 bg-[#0c0e1a] px-6 pb-20 pt-40 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.08)_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-xl">
        <p className="mb-4 text-[12px] font-black uppercase tracking-[0.35em] text-[#99A0F9]">404</p>
        <h1 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">Page not found</h1>
        <p className="mb-10 text-[15px] font-medium leading-relaxed text-white/55">
          This route doesn&apos;t exist. Head back home or book a demo with the Torro team.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/50 hover:text-white"
          >
            Back to Home
          </Link>
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center rounded-xl bg-[#F8BD64] px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#f0b04d]"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
