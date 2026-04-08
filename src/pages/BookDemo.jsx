import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import DemoForm from '../components/sections/DemoForm';

const ACCENT = '#99A0F9';

const BookDemo = () => {
  return (
    <div className="bg-[#0c0e1a] text-white min-h-screen border-t border-white/5">
      <section className="relative overflow-hidden pt-20 md:pt-24 pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.10)_0%,transparent_55%)] pointer-events-none" />

        <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[95rem]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10">
              <CalendarCheck className="w-4 h-4" style={{ color: ACCENT }} />
              <span className="text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                Book a Demo
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Evaluate your institutional readiness in <span style={{ color: ACCENT }}>30 minutes</span>.
            </h1>

            <p className="mt-5 mx-0 text-left text-[15px] md:text-[16px] text-white/60 leading-relaxed font-medium max-w-3xl">
              Talk to a Torro governance architect. We’ll map your estate, identify gaps, and show what full compliance looks like in 4 weeks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reuse existing form section */}
      <DemoForm />
    </div>
  );
};

export default BookDemo;

