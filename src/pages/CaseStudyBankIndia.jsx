import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, ArrowRight, CheckCircle2, ChevronLeft, Layout, BarChart3, Clock, AlertCircle } from 'lucide-react';

const CaseStudyBankIndia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 pt-[calc(var(--header-height)+2rem)]">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <a href="/" className="inline-flex items-center gap-2 text-[12px] font-black text-slate-400 uppercase tracking-widest hover:text-[#99A0F9] transition-colors mb-12">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </a>

        {/* Header Section */}
        <div className="max-w-5xl mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#99A0F9]/10 border border-[#99A0F9]/20 mb-6">
            <span className="text-[11px] font-black text-[#99A0F9] uppercase tracking-[0.3em]">Case Study 01</span>
            <div className="w-px h-4 bg-[#99A0F9]/30" />
            <span className="text-[11px] font-bold text-[#99A0F9]/80 uppercase tracking-widest">Banking Sector</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
            Transforming Data Governance for a <span className="text-[#99A0F9]">Leading Private Bank</span> in India
          </h1>
          <p className="text-[20px] text-slate-500 font-medium leading-relaxed max-w-4xl">
            How Torro enabled a Tier-1 financial institution to achieve 100% data privacy coverage and eliminate PII security blind spots across a complex legacy architecture.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Problem Statement */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
              <h2 className="text-[13px] font-black text-[#99A0F9] uppercase tracking-[0.4em] mb-6">Problem Statement</h2>
              <p className="text-[18px] text-slate-700 font-medium leading-relaxed mb-6">
                The client needed to govern a complex, heterogeneous data ecosystem spanning multiple legacy systems. Critical challenges included eliminating PII security blind spots and replacing slow, manual compliance workflows with automated, scalable governance.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <AlertCircle className="w-6 h-6 text-red-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">PII Blind Spots</h4>
                  <p className="text-[14px] text-slate-500 font-medium">Unidentified sensitive data across multiple platforms creating regulatory risk.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Clock className="w-6 h-6 text-amber-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Manual Workflows</h4>
                  <p className="text-[14px] text-slate-500 font-medium">Bottlenecks in compliance processes slowing down data access and innovation.</p>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Layout className="w-48 h-48" />
              </div>
              <h2 className="text-[13px] font-black text-[#99A0F9]/80 uppercase tracking-[0.4em] mb-10 relative z-10">Accelerated Governance Architecture</h2>
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#99A0F9]/20 border border-[#99A0F9]/30 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#99A0F9]/80" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">Auto-PII Detection & Masking</h4>
                  <p className="text-[14px] text-slate-400 font-medium leading-relaxed">AI-powered discovery across platforms with dynamic masking.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">Advanced Workflow Approvals</h4>
                  <p className="text-[14px] text-slate-400 font-medium leading-relaxed">Automated routing and policy tagging for rapid access.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <Database className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">End-to-End Data Lineage</h4>
                  <p className="text-[14px] text-slate-400 font-medium leading-relaxed">Visual traceability and impact analysis across the estate.</p>
                </div>
              </div>
            </div>

            {/* Value Drivers */}
            <div className="space-y-6">
              <h2 className="text-[13px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">Strategic Value Drivers</h2>
              <div className="grid gap-4">
                {[
                  "Open architecture highly adaptable to complex banking processes.",
                  "Deep Data Governance and Cloud SME expertise accelerating deployment.",
                  "Scalable, future-ready foundation built for continuous innovation."
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm hover:translate-x-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-[#99A0F9]/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#99A0F9]" />
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
                  <div className="flex justify-between items-end">
                    <span className="text-4xl font-black text-slate-900 leading-none">60 / 70</span>
                    <span className="text-[11px] font-black text-[#99A0F9] uppercase tracking-widest bg-[#99A0F9]/10 px-2 py-1 rounded">RFP Target</span>
                  </div>
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-tight">Capabilities successfully deployed and active</p>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-[#99A0F9] w-[85%]" />
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full border-8 border-[#99A0F9]/20 border-t-[#99A0F9] flex items-center justify-center shrink-0">
                    <span className="text-[16px] font-black text-slate-900">100%</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-black text-slate-900">Privacy Coverage</h4>
                    <p className="text-[11px] text-slate-400 font-bold uppercase">Reporting (12/12 requirements)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-2xl font-black text-slate-900 block mb-1">16 of 30</span>
                    <p className="text-[10px] font-black text-slate-400 uppercase leading-tight">Bank policies achieved out-of-the-box</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-2xl font-black text-slate-900 block mb-1">10+</span>
                    <p className="text-[10px] font-black text-slate-400 uppercase leading-tight">Integrated observability dashboards</p>
                  </div>
                </div>
              </div>

              {/* Tech Ecosystem */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <h4 className="text-[12px] font-black text-slate-400 uppercase tracking-widest mb-4">Technology Ecosystem</h4>
                <div className="flex flex-wrap gap-2">
                  {["Azure Blob Storage", "Azure Pipelines", "Starburst", "Power BI", "Oracle", "AWS"].map((t, i) => (
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

export default CaseStudyBankIndia;
