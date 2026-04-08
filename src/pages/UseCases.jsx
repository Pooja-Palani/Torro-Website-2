import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Globe, Users, Lock, CheckCircle2 } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      title: 'Enterprise Data Visibility',
      description: 'Gain complete visibility into your data estate across all systems and clouds.',
      icon: Eye,
      benefits: [
        'Discover all data assets',
        'Real-time monitoring dashboards',
        'Cross-infrastructure insights',
        'Business context enrichment'
      ]
    },
    {
      id: 2,
      title: 'Cross-Border Data Governance',
      description: 'Navigate complex regulatory requirements across multiple geographies.',
      icon: Globe,
      benefits: [
        'Regional compliance tracking',
        'Data residency enforcement',
        'Multi-jurisdiction policies',
        'Automated geofencing'
      ]
    },
    {
      id: 3,
      title: 'Automated Access Provisioning',
      description: 'Streamline data access management with intelligent automation.',
      icon: Users,
      benefits: [
        'Self-service data requests',
        'Intelligent recommendations',
        'Policy-driven approvals',
        'Instant activation'
      ]
    },
    {
      id: 4,
      title: 'Consent & PII Management',
      description: 'Manage personal data with absolute consent and privacy controls.',
      icon: Lock,
      benefits: [
        'Consent tracking',
        'PII detection & masking',
        'Right to be forgotten',
        'Privacy audit trails'
      ]
    },
    {
      id: 5,
      title: 'Audit Readiness',
      description: 'Stay prepared for regulatory audits with continuous evidence generation.',
      icon: CheckCircle2,
      benefits: [
        'Automated report generation',
        'Evidence collection',
        'Audit trail preservation',
        'Compliance dashboards'
      ]
    }
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
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-[12px] font-black text-blue-400 uppercase tracking-[0.4em]">Use Cases</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Real-World <span className="text-blue-400">Implementations</span>
          </h1>
          <p className="text-[16px] text-white/50 font-medium max-w-2xl mx-auto">
            Solving enterprise data governance challenges across industries and regulatory landscapes
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
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
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-2">
                        USE CASE 0{idx + 1}
                      </p>
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        {useCase.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  <p className="text-white/50 font-medium mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">
                      Key Benefits
                    </p>
                    {useCase.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-white/60">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              Ready to <span className="text-blue-400">Transform</span> Your Governance?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto font-medium">
              Let our team help you identify the right use cases and implementation strategy for your organization.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] uppercase text-sm tracking-[0.2em]"
            >
              Schedule a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
