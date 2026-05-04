import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layout, BarChart3, ChevronRight, CheckCircle2, Database, Clock, Zap } from 'lucide-react';

const CaseStudyCard = ({ id, title, problem, architecture, metrics, valueDrivers, tech, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500"
    >
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Case Study {id}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-6 bg-[#F26969] rounded-full" />
            <div className="w-2 h-6 bg-[#99A0F9] rounded-full" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-8">
          {title}
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Problem Statement */}
          <div className="space-y-4">
            <h4 className="text-[12px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Problem Statement</h4>
            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">{problem}</p>
          </div>

          {/* Impact Metrics */}
          <div className="space-y-4">
            <h4 className="text-[12px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Impact Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-indigo-600 leading-none mb-1">{m.value}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight leading-tight">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture & Tech */}
        <div className="bg-slate-50 rounded-3xl p-6 mb-8 border border-slate-100">
          <h4 className="text-[12px] font-black text-slate-400 uppercase tracking-widest mb-4">Architecture & Tech Ecosystem</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[11px] font-bold text-slate-700 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4">
          <a
            href={href}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0c0e1a] text-white rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 active:scale-95 group"
          >
            Explore Case Study
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: "Transforming Data Governance for a leading Private Bank in India",
      problem: "The client needed to govern a complex, heterogeneous data ecosystem spanning multiple legacy systems. Critical challenges included eliminating PII security blind spots and replacing slow, manual compliance workflows.",
      metrics: [
        { value: "60 / 70", label: "RFP capabilities deployed" },
        { value: "100%", label: "Privacy & Incident coverage" },
        { value: "16 of 30", label: "Bank policies achieved" },
        { value: "10+", label: "Observability dashboards" }
      ],
      tech: ["Azure Blob Storage", "Azure Pipelines", "Starburst", "Power BI", "Oracle", "AWS"],
      href: "/case-studies/bank-india"
    },
    {
      id: 2,
      title: "Data Governance Platform for ESG Entity of a Large Tier-1 Bank",
      problem: "The bank required a centralized backbone to govern a complex ESG data ecosystem. They faced severe bottlenecks in tracking analytics utilization/costs and suffered from sluggish regulatory approval cycles.",
      metrics: [
        { value: "93%", label: "Workflow efficiency gain" },
        { value: "45 → 3", label: "Days for regulatory approval" },
        { value: "1", label: "Unified ESG distribution hub" },
        { value: "HKMA", label: "Compliance Adherence" }
      ],
      tech: ["GCP (GKE, BigQuery)", "Looker Studio", "Google Earth API", "GLIEF", "EPC", "Pycharm"],
      href: "/case-studies/esg-bank"
    },
    {
      id: 3,
      title: "Strategic AI & Data Transformation for a leading Telecom Company in HK",
      problem: "The telecom operator had massive stranded value trapped in complex legacy infrastructure (SAS, Teradata). They needed to operationalize GenAI while adhering to China's stringent PIPL privacy laws.",
      metrics: [
        { value: "US$1M", label: "Direct cost savings" },
        { value: "400B", label: "Parameter AI model deployed" },
        { value: "3,000+", label: "Programs automated" },
        { value: "PIPL", label: "Regional Compliance" }
      ],
      tech: ["Edge AI LLM Gateway", "Dual NVIDIA DGX Spark", "Generative AI", "Teradata", "SAS", "Data Lakehouse"],
      href: "/case-studies/telecom-hk"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="case-studies">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(153,160,249,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#99A0F9]/5 border border-[#99A0F9]/15 shadow-sm mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#99A0F9] animate-pulse" />
            <span className="text-[12px] font-black text-[#99A0F9] uppercase tracking-[0.4em]">In Production</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Proven Success at <span className="text-[#99A0F9]">Enterprise Scale.</span>
          </h2>
          <p className="text-slate-500 text-[19px] leading-relaxed max-w-2xl font-medium">
            Real-world validation from Tier-1 Financial Institutions and Telecom leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {cases.map((c) => (
            <CaseStudyCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
