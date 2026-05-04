import React from 'react';
import { Shield, Cpu, BarChart3 } from 'lucide-react';

const SolutionsForTeam = () => {
  const solutions = [
    {
      title: 'Defensible by Design',
      subtitle: 'CISO / AUDIT OFFICE',
      icon: Shield,
      description: 'Complete audit trails, real-time breach detection, and automated DPDP and RBI compliance reporting. When the regulator calls, you answer with confidence — not a spreadsheet.',
      features: [
        'Real-time compliance posture dashboard',
        'Automated incident response workflows',
        'Immutable, regulator-ready audit exports',
        'Personal data breach notification automation'
      ]
    },
    {
      title: 'Governance Without Friction',
      subtitle: 'DATA ENGINEERING TEAMS',
      icon: Cpu,
      description: 'Zero-friction data pipelines with built-in classification, masking, and lineage tracking. Torro integrates natively into your CI/CD and data orchestration layer — governance as code.',
      features: [
        'Native dbt, Airflow, and Spark integrations',
        'Automated PII masking in data pipelines',
        'Column-level lineage across all transformations',
        'Policy-as-code with Git-based versioning'
      ]
    },
    {
      title: 'Data in Minutes, Not Months',
      subtitle: 'BUSINESS DECISION MAKERS',
      icon: BarChart3,
      description: 'Self-service data access in minutes, not months — with governance guardrails built in. Browse the data marketplace, request access, get approval, and start analyzing — all in one governed workflow.',
      features: [
        'Self-service data marketplace catalog',
        'One-click governed access requests',
        'Business-friendly data quality scores',
        'Automated data contract enforcement'
      ]
    }
  ];

  return (
    <section className="bg-[#0c0e1a] text-white py-24 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.06)_0%,transparent_55%)] pointer-events-none" />
      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#99A0F9]/10 border border-[#99A0F9]/20 shadow-[0_0_20px_rgba(153,160,249,0.08)] mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-[#99A0F9] animate-pulse shadow-[0_0_12px_rgba(153,160,249,0.45)]" />
            <span className="text-[12px] font-black text-[#99A0F9] uppercase tracking-[0.4em]">
              Solutions For Team
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-[1.1]">
            Built for Every <span className="text-[#99A0F9]">Institutional Stakeholder</span>
          </h2>
          <p className="text-[16px] md:text-lg text-white/55 font-medium max-w-3xl mx-auto">
            Torro speaks the language of CISOs, data engineers, and business leaders — simultaneously.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div
                key={idx}
                className="group bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-8 hover:border-[#99A0F9]/30 transition-all duration-300 hover:shadow-[0_24px_70px_-18px_rgba(0,0,0,0.55)]"
              >
                {/* Icon & Title */}
                <div className="mb-6 text-left">
                  <div className="w-14 h-14 rounded-xl bg-[#99A0F9]/10 border border-[#99A0F9]/20 flex items-center justify-center mb-4 transition-all">
                    <Icon className="w-7 h-7 text-[#99A0F9]" />
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-[0.15em] text-[#99A0F9] mb-2">
                    {solution.subtitle}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {solution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/55 text-[15px] leading-relaxed mb-6 text-left font-medium">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 text-left">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-white/75">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#99A0F9] mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsForTeam;
