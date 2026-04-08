import React from 'react';
import { motion } from 'framer-motion';
import { Database, GitBranch, Shield, Lock, Zap, Briefcase, Building2, Scale } from 'lucide-react';

const Offerings = () => {
  const offerings = [
    {
      id: 1,
      title: 'Unified Discovery & Metadata Foundation',
      description: 'Centralized metadata repository for complete data visibility across hybrid estates.'
    },
    {
      id: 2,
      title: 'End-to-End Data Lineage',
      description: 'Track data movement and transformations across your entire infrastructure.'
    },
    {
      id: 3,
      title: 'Continuous Data Quality & Trust',
      description: 'Maintain data integrity and quality standards automatically.'
    },
    {
      id: 4,
      title: 'Automated Entitlements & Protection',
      description: 'Control data access with intelligent entitlement management.'
    },
    {
      id: 5,
      title: 'Data Marketplace & PrivBox',
      description: 'Secure data sharing and monetization platform.'
    }
  ];

  const services = [
    'Data Engineering Services',
    'Cloud Consulting Services',
    'Legacy to Cloud Platform Design',
    'Compliance & Reg Consulting',
    'AI/ML Governance',
    'Data Governance Assessment'
  ];

  const industries = [
    'BFSI',
    'Healthcare',
    'Telecom'
  ];

  const compliance = [
    'DPDP / DPDPA',
    'GDPR',
    'CCPA',
    'BCBS239',
    'SOX',
    'HIPAA'
  ];

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
            <Database className="w-4 h-4 text-blue-400" />
            <span className="text-[12px] font-black text-blue-400 uppercase tracking-[0.4em]">Our Offerings</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Complete Data <span className="text-blue-400">Solutions</span>
          </h1>
          <p className="text-[16px] text-white/50 font-medium max-w-2xl mx-auto">
            Comprehensive solutions, services, and compliance frameworks for enterprise data governance
          </p>
        </motion.div>

        {/* Main Grid - 4 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-3xl p-12 md:p-16 mb-24 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Our Solutions */}
            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.3em] text-amber-400 mb-8">
                Our Solutions
              </h2>
              <div className="space-y-5">
                {offerings.map((offering, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-white/80 hover:text-blue-400 transition-colors font-medium text-sm leading-relaxed hover:underline"
                    >
                      {offering.title}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 2: Our Services */}
            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.3em] text-amber-400 mb-8">
                Our Services
              </h2>
              <div className="space-y-5">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-white/80 hover:text-blue-400 transition-colors font-medium text-sm leading-relaxed hover:underline"
                    >
                      {service}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 3: Industries */}
            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.3em] text-amber-400 mb-8">
                Industries
              </h2>
              <div className="space-y-5">
                {industries.map((industry, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-white/80 hover:text-blue-400 transition-colors font-medium text-sm leading-relaxed hover:underline"
                    >
                      {industry}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 4: Compliance */}
            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.3em] text-amber-400 mb-8">
                Compliance
              </h2>
              <div className="space-y-5">
                {compliance.map((comp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-white/80 hover:text-blue-400 transition-colors font-medium text-sm leading-relaxed hover:underline"
                    >
                      {comp}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight">
            Our <span className="text-blue-400">Solutions in Detail</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    {idx === 0 && <Database className="w-6 h-6 text-blue-400" />}
                    {idx === 1 && <GitBranch className="w-6 h-6 text-blue-400" />}
                    {idx === 2 && <Shield className="w-6 h-6 text-blue-400" />}
                    {idx === 3 && <Lock className="w-6 h-6 text-blue-400" />}
                    {idx === 4 && <Zap className="w-6 h-6 text-blue-400" />}
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                    {offering.title}
                  </h3>

                  <p className="text-white/50 font-medium mb-6 leading-relaxed">
                    {offering.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-[0.2em] hover:text-blue-300 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight">
            Professional <span className="text-blue-400">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-b from-[#11152a]/50 to-[#0a0d1a]/50 border border-[#1e2343]/50 rounded-xl hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span className="text-white/80 font-semibold text-sm">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries & Compliance Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-12"
          >
            <h3 className="text-3xl font-black text-white mb-8 tracking-tight">
              <span className="text-amber-400">Industries</span> We Serve
            </h3>

            <div className="space-y-6">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white/5 border border-white/5 rounded-lg hover:border-blue-500/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <span className="text-white/80 font-semibold">{industry}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-12"
          >
            <h3 className="text-3xl font-black text-white mb-8 tracking-tight">
              <span className="text-amber-400">Compliance</span> Frameworks
            </h3>

            <div className="space-y-6">
              {compliance.map((comp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-white/5 border border-white/5 rounded-lg hover:border-blue-500/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Scale className="w-5 h-5 text-blue-400" />
                    <span className="text-white/80 font-semibold">{comp}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              Find the Perfect Solution for Your <span className="text-blue-400">Enterprise</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
              Our team can help you select the right combination of solutions, services, and frameworks for your organization.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] uppercase text-sm tracking-[0.2em]"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offerings;
