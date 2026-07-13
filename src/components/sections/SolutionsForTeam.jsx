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
    <section className="light-section-bg relative py-16 text-slate-900 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(153,160,249,0.18)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(153,160,249,0.1)_0%,transparent_45%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <div className="glass-badge relative z-10 mb-6 inline-flex items-center justify-center gap-3 px-5 py-2.5 sm:px-6">
            <div className="relative z-10 h-2.5 w-2.5 animate-pulse rounded-full bg-[#99A0F9] shadow-[0_0_12px_rgba(153,160,249,0.45)]" />
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#7b82e8] sm:text-[12px] sm:tracking-[0.4em]">
              Solutions For Team
            </span>
          </div>

          <h2 className="!mb-5 !text-center !text-3xl !font-black !leading-[1.1] !tracking-tight !text-slate-900 sm:!text-4xl md:!text-5xl">
            <span className="text-slate-900">Built for Every</span>{' '}
            <span className="text-[#6b72d6]">Institutional Stakeholder</span>
          </h2>
          <p className="!mx-auto max-w-3xl !text-center text-[15px] font-medium !text-slate-600 sm:text-[16px] md:text-lg">
            Torro speaks the language of CISOs, data engineers, and business leaders — simultaneously.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-lift group box-copy p-8"
              >
                <div className="relative z-10 mb-6 text-left">
                  <div className="glass-icon-lavender relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
                    <Icon className="relative z-10 h-7 w-7 text-[#6b72d6]" />
                  </div>
                  <div className="mb-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#7b82e8]">
                    {solution.subtitle}
                  </div>
                  <h3 className="!text-left !text-2xl !font-black !tracking-tight !text-slate-900">
                    {solution.title}
                  </h3>
                </div>

                <p className="relative z-10 mb-6 text-left text-[15px] font-medium leading-relaxed text-slate-600">
                  {solution.description}
                </p>

                <ul className="relative z-10 space-y-3 text-left">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] !text-slate-700">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#99A0F9]" />
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
