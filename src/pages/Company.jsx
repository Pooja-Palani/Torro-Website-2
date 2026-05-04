import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye } from 'lucide-react';

const Company = () => {
  const ACCENT = '#99A0F9';

  return (
    <section className="bg-[#0c0e1a] text-white min-h-screen pt-20 md:pt-24 pb-20 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.09)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[95rem]">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Users className="w-4 h-4" style={{ color: ACCENT }} />
            <span className="text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            The Torro story, built for <span style={{ color: ACCENT }}>modern enterprise</span>.
          </h1>
          <p className="mt-5 text-[15px] md:text-[16px] text-white/60 font-medium max-w-3xl mx-auto leading-relaxed">
            Deep domain expertise across governance, privacy compliance, and AI—delivered with a future‑forward, unified platform.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 md:mb-16"
        >
          <div className="lg:col-span-4">
            <div className="text-[30px] font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
              Our Story
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-7 md:p-10">
              <div className="box-copy text-left space-y-6">
                <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed font-medium">
                  At Torro.AI, our story began with a spark—a realization of a critical gap in the world of regulatory
                  technology back in 2019. With a passion for data integrity, governance, and digital agility, we began
                  our journey to simplify complex data ecosystems and empower organizations with a future-forward,
                  unified platform.
                </p>
                <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed font-medium">
                  By 2021, our vision took shape. Torro.AI was officially incorporated, and our open-source
                  build—contributed to by talented Google engineers—set a new benchmark for collaborative tech
                  innovation. From ideation to implementation, we transformed into more than a product—we became a
                  movement toward smarter, streamlined data management.
                </p>
                <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed font-medium">
                  In 2022, industry recognition followed. Google Professional Services recommended our solution for
                  implementation in a leading Hong Kong-based bank. This validation reinforced our belief: deep domain
                  expertise, trust, and simplicity must drive transformation.
                </p>
                <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed font-medium">
                  2023 was a landmark year. Our client was awarded by Google for best cloud solution—a true reflection
                  of our impact. We launched Torro OneData: Enterprise Edition, delivering an end-to-end, AI-powered
                  data governance solution for enterprises worldwide.
                </p>
                <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed font-medium">
                  Today, Torro Enterprise is backed by experts with two decades of experience from top-tier banks,
                  powered by partnerships with Microsoft, Google Cloud, and Databricks, and trusted by industries
                  ranging from banking to real estate. Our commitment? To simplify, unify, and accelerate your data
                  transformation journey—so you can focus on what matters most.
                </p>
                <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed font-semibold">
                  We’re not just a tech company—we’re your data ally, on a mission to uncomplicate the future.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Foundation */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          <div className="lg:col-span-4">
            <div className="text-[30px] font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
              Our Foundation
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: 'rgba(153,160,249,0.12)',
                      borderColor: 'rgba(153,160,249,0.22)',
                      color: 'rgba(153,160,249,0.95)',
                    }}
                  >
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-black uppercase tracking-[0.28em] text-white/35 mb-2">
                      Our Mission
                    </div>
                    <div className="box-copy text-left">
                      <p className="text-[14px] text-white/60 leading-relaxed font-medium">
                        We are on a mission to uncomplicate the world of data. By bringing together deep expertise in
                        banking, governance, and analytics, we simplify complexities that often hinder digital
                        transformation. Our solutions are built to empower organizations with agility, trust, and
                        resilience. Whether it’s through our GenAI-assisted governance or hybrid data architectures, we
                        aim to deliver scalable, secure, and smart solutions that make data a true asset—not a burden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: 'rgba(153,160,249,0.12)',
                      borderColor: 'rgba(153,160,249,0.22)',
                      color: 'rgba(153,160,249,0.95)',
                    }}
                  >
                    <Eye className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-black uppercase tracking-[0.28em] text-white/35 mb-2">
                      Our Vision
                    </div>
                    <div className="box-copy text-left">
                      <p className="text-[14px] text-white/60 leading-relaxed font-medium">
                        At Torro.AI, our vision is to lead the evolution of organizations into digital-first,
                        cloud-powered, data-centric entities. We believe that being digitally nimble is no longer
                        optional but essential. Our goal is to provide a “heads-up display” for modern enterprises—a
                        command-and-control platform that enables seamless data management, fortified security, and
                        agile data utilization across diverse, complex landscapes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 p-7 md:p-10">
              <div className="text-[12px] font-black uppercase tracking-[0.28em] text-white/35 mb-3">Our Team</div>
              <div className="box-copy text-left">
                <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed font-medium">
                  The heart of Torro lies in our cross-functional, impact-driven team—a blend of domain experts, data
                  scientists, engineers, and architects who thrive on solving real-world challenges. We operate as a
                  unified force, merging innovation with precision, to design and deliver data governance solutions
                  that align with evolving regulatory demands and business goals. Our collaborative approach ensures
                  every client benefits from deep industry insights, cutting-edge technology, and a partnership rooted
                  in trust and performance.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Company;
