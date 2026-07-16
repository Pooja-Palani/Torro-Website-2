import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, ChevronLeft, Layout, CheckCircle2, TrendingUp, Database, ArrowRight, Activity } from 'lucide-react';

const CaseStudyTelecomHK = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 pt-[calc(var(--header-height)+2rem)]">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-[12px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors mb-12">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header Section */}
        <div className="max-w-5xl mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em]">Case Study 03</span>
            <div className="w-px h-4 bg-blue-200" />
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">Telecom & AI</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
            Strategic AI & Data Transformation for a <span className="text-blue-600">Leading Telecom</span> Company in HK
          </h1>
          <p className="text-[20px] text-slate-500 font-medium leading-relaxed max-w-4xl">
            Operationalizing Generative AI across the Greater Bay Area while modernizing legacy infrastructure and adhering to stringent PIPL privacy laws.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Problem Statement */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
              <h2 className="text-[13px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6">Problem Statement</h2>
              <p className="text-[18px] text-slate-700 font-medium leading-relaxed mb-6">
                The telecom operator had massive stranded value trapped in complex legacy infrastructure (SAS, Teradata). They needed to operationalize Generative AI across the Greater Bay Area while strictly adhering to China's stringent PIPL privacy laws.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Database className="w-6 h-6 text-blue-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Legacy Tech Debt</h4>
                  <p className="text-[14px] text-slate-500 font-medium">Massive stranded value trapped in aging SAS and Teradata environments.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Shield className="w-6 h-6 text-amber-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">PIPL Compliance</h4>
                  <p className="text-[14px] text-slate-500 font-medium">Strict cross-border data privacy requirements for the Greater Bay Area.</p>
                </div>
              </div>
            </div>

            {/* Modernization Architecture */}
            <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Cpu className="w-48 h-48" />
              </div>
              <h2 className="text-[13px] font-black text-blue-400 uppercase tracking-[0.4em] mb-10 relative z-10">Edge AI & Modernization Architecture</h2>
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">Legacy Transformation Agent</h4>
                  <p className="text-[14px] text-blue-100/60 font-medium leading-relaxed">Proprietary tool bridging SAS to modern Data Lakehouse architectures.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">Edge AI LLM Gateway</h4>
                  <p className="text-[14px] text-blue-100/60 font-medium leading-relaxed">Decentralized architecture with built-in differential privacy.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">Distributed Agentic Copilot</h4>
                  <p className="text-[14px] text-blue-100/60 font-medium leading-relaxed">CI/CD integrated coding assistant for internal engineering teams.</p>
                </div>
              </div>
            </div>

            {/* Value Drivers */}
            <div className="space-y-6">
              <h2 className="text-[13px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">Strategic Value Drivers</h2>
              <div className="grid gap-4">
                {[
                  "Zero-compromise data processing via advanced differential privacy protocols.",
                  "Automated migration tooling accelerating time-to-value for legacy systems.",
                  "Comprehensive regional compliance (PIPL) integrated at the architectural layer."
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm hover:translate-x-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-slate-700 font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Impact Metrics Sidebar */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm sticky top-24">
              <h3 className="text-[13px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Impact Metrics</h3>
              <div className="space-y-10">
                <div className="space-y-2">
                  <span className="text-4xl font-black text-blue-600 leading-none block">US$1M</span>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-tight">Direct cost savings from legacy modernization</p>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-blue-500 w-[75%]" />
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-slate-900 leading-none block">400B</span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Parameter AI Model Deployed</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Zap className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-slate-900 leading-none block">3,000+</span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Programs Automated & Modernized</p>
                  </div>
                </div>
              </div>

              {/* Tech Ecosystem */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <h4 className="text-[12px] font-black text-slate-400 uppercase tracking-widest mb-4">Technology Ecosystem</h4>
                <div className="flex flex-wrap gap-2">
                  {["Edge AI LLM Gateway", "Generative AI", "Dual NVIDIA DGX Spark", "Teradata", "SAS", "Data Lakehouse"].map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTelecomHK;
