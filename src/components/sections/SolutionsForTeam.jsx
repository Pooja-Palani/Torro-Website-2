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
    <section className="bg-white text-gray-900 py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[12px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Solutions For Team</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Built for Every <span className="text-blue-600">Institutional Stakeholder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]"
              >
                {/* Icon & Title */}
                <div className="mb-6 text-left">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-[0.15em] text-blue-600 mb-2">
                    {solution.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {solution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 text-left">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 text-left">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
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
