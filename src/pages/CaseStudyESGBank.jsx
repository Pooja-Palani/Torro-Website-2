import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, BarChart3, ChevronLeft, Layout, CheckCircle2, Globe, TrendingUp, Search, UserCheck } from 'lucide-react';

const CaseStudyESGBank = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <a href="/" className="inline-flex items-center gap-2 text-[12px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors mb-12">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </a>

        {/* Header Section */}
        <div className="max-w-5xl mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
            <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em]">Case Study 02</span>
            <div className="w-px h-4 bg-emerald-200" />
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">ESG & Sustainability</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
            Data Governance Platform for <span className="text-emerald-600">ESG Entity</span> of a Large Tier-1 Bank
          </h1>
          <p className="text-[20px] text-slate-500 font-medium leading-relaxed max-w-4xl">
            Building a centralized backbone to govern a complex ESG data ecosystem while dramatically accelerating regulatory approval cycles for HKMA mandates.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Problem Statement */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
              <h2 className="text-[13px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-6">Problem Statement</h2>
              <p className="text-[18px] text-slate-700 font-medium leading-relaxed mb-6">
                The bank required a centralized backbone to govern a complex ESG data ecosystem. They faced severe bottlenecks in tracking analytics utilization/costs and suffered from sluggish regulatory approval cycles tightly bound by HKMA cloud and privacy mandates.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <BarChart3 className="w-6 h-6 text-emerald-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Cost Visibility</h4>
                  <p className="text-[14px] text-slate-500 font-medium">Difficulty in tracking analytics utilization and project costs across the ESG entity.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Shield className="w-6 h-6 text-amber-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">HKMA Compliance</h4>
                  <p className="text-[14px] text-slate-500 font-medium">Strict regulatory mandates requiring complex approval cycles for data processing.</p>
                </div>
              </div>
            </div>

            {/* Pod Ecosystem */}
            <div className="bg-emerald-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Leaf className="w-48 h-48" />
              </div>
              <h2 className="text-[13px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-10 relative z-10">ESG Analytics Pod Ecosystem</h2>
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">WESGaaS Deployment</h4>
                  <p className="text-[14px] text-emerald-100/60 font-medium leading-relaxed">Wholesale ESG as a Service for internal and external distribution.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">Automated Data Workbenches</h4>
                  <p className="text-[14px] text-emerald-100/60 font-medium leading-relaxed">Single-request spin-up for Data Scientists and Analysts.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <Search className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-[16px] font-black tracking-tight">Natural Language Modelling</h4>
                  <p className="text-[14px] text-emerald-100/60 font-medium leading-relaxed">Mapping analytics directly to UN Sustainability goals (SDGs).</p>
                </div>
              </div>
            </div>

            {/* Value Drivers */}
            <div className="space-y-6">
              <h2 className="text-[13px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">Operational Value Drivers</h2>
              <div className="grid gap-4">
                {[
                  "Strict adherence to HKMA cloud and privacy regulations.",
                  "Built-in visual dashboards for transparent project cost tracking.",
                  "Self-serve workbench provisioning for ML engineers and researchers."
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm hover:translate-x-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
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
                <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
                  <span className="text-5xl font-black text-emerald-600 leading-none block mb-2">93%</span>
                  <p className="text-[11px] font-black text-emerald-900 uppercase tracking-[0.2em]">Overall Workflow Efficiency Gain</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-3xl font-black text-slate-900">45 Days</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                    <span className="text-3xl font-black text-emerald-600">3 Days</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">Reduction in compliance & regulatory approval times</p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Layout className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-slate-900 leading-none block">1</span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Unified ESG Distribution Hub</p>
                  </div>
                </div>
              </div>

              {/* Tech Ecosystem */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <h4 className="text-[12px] font-black text-slate-400 uppercase tracking-widest mb-4">Technology Ecosystem</h4>
                <div className="flex flex-wrap gap-2">
                  {["GCP (GKE, BigQuery, DataProc, GCS)", "Pycharm", "Looker Studio", "Google Earth API", "GLIEF", "EPC"].map((t, i) => (
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

export default CaseStudyESGBank;
