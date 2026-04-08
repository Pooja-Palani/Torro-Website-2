import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, Target, Award, ArrowRight } from 'lucide-react';

const Company = () => {
  return (
    <section className="bg-[#0c0e1a] text-white min-h-screen pt-40 pb-20 relative border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)] mb-6">
            <Handshake className="w-4 h-4 text-blue-400" />
            <span className="text-[12px] font-black text-blue-400 uppercase tracking-[0.4em]">Company</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            About <span className="text-blue-400">Torro</span>
          </h1>
          <p className="text-[16px] text-white/50 font-medium max-w-2xl mx-auto">
            Transforming enterprise data governance through intelligent automation and compliance
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-12 md:p-16 mb-24"
        >
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight">
            Who We <span className="text-blue-400">Are</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-relaxed">
                Torro is a pioneering data governance and compliance platform designed for enterprises navigating complex regulatory landscapes across multiple jurisdictions.
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                We enable organizations to discover, classify, govern, and monetize their data assets with complete transparency and compliance built-in at every layer.
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                Our intelligent platform eliminates manual governance overhead and provides audit-ready evidence for regulatory compliance automatically.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all">
                <Target className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-black text-white mb-2">Our Mission</h4>
                  <p className="text-sm text-white/60">Empower enterprises with autonomous data governance that scales across hybrid infrastructures.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all">
                <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-black text-white mb-2">Our Vision</h4>
                  <p className="text-sm text-white/60">Create a world where data governance is invisible, intelligent, and always compliant.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight">
            Our <span className="text-blue-400">Values</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Autonomy', desc: 'Empowering organizations with self-governing data systems' },
              { title: 'Transparency', desc: 'Complete visibility into data flows and compliance status' },
              { title: 'Security', desc: 'Privacy-first architecture protecting sensitive assets' },
              { title: 'Innovation', desc: 'Cutting-edge AI and ML for intelligent governance' },
              { title: 'Reliability', desc: 'Enterprise-grade systems you can depend on' },
              { title: 'Partnership', desc: 'Dedicated support for your success' }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-[#11152a]/50 to-[#0a0d1a]/50 border border-white/5 rounded-xl p-6 hover:border-blue-500/20 transition-all duration-300"
              >
                <h4 className="font-black text-white mb-2 text-lg">{value.title}</h4>
                <p className="text-sm text-white/60">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-12 md:p-16 mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <Handshake className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl font-black text-white tracking-tight">
              Our <span className="text-blue-400">Partners</span>
            </h2>
          </div>

          <p className="text-white/70 mb-12 max-w-2xl">
            We work with leading enterprises, consulting firms, and technology partners to deliver comprehensive data governance solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { category: 'Cloud Providers', examples: 'AWS, Google Cloud, Microsoft Azure' },
              { category: 'Data Platforms', examples: 'Snowflake, BigQuery, Databricks' },
              { category: 'Consulting Firms', examples: 'Deloitte, EY, Accenture, McKinsey' },
              { category: 'System Integrators', examples: 'Leading regional and global firms' }
            ].map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all"
              >
                <h4 className="font-black text-white mb-2">{partner.category}</h4>
                <p className="text-sm text-white/60">{partner.examples}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
            <h4 className="font-black text-white mb-3">Interested in Partnering?</h4>
            <p className="text-white/60 mb-6">Join our partner ecosystem and help enterprises achieve governance excellence.</p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-lg transition-all uppercase text-sm tracking-[0.2em]">
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">
            Ready to <span className="text-blue-400">Get Started?</span>
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already transforming their data governance with Torro.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] uppercase text-sm tracking-[0.2em]">
              Schedule a Demo
            </a>
            <a href="#" className="px-8 py-4 border border-blue-500/50 hover:border-blue-400 text-white font-black rounded-xl transition-all uppercase text-sm tracking-[0.2em]">
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
