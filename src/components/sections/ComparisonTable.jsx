import React from 'react';

const ComparisonTable = () => {
    const features = [
        { name: "DEPLOYMENT TIME", torro: "✓ 2-4 Weeks", comp: "6-18 Months", legacy: "12-24 Months" },
        { name: "TCO (3-YEAR)", torro: "✓ 60-80% Lower", comp: "Baseline", legacy: "2-3x Higher" },
        { name: "DPDP / INDIA COMPLIANCE", torro: "✓ Native - Built-in", comp: "Partial (paid add-on)", legacy: "Not Available" },
        { name: "HYBRID ESTATE SUPPORT", torro: "✓ Full (Cloud + On-prem)", comp: "Cloud-first only", legacy: "Cloud-only" },
        { name: "AI GOVERNANCE", torro: "✓ Built-in (Day 1)", comp: "On Roadmap", legacy: "Not Available" },
        { name: "SELF-SERVICE DATA ACCESS", torro: "✓ Real-time Marketplace", comp: "Limited", legacy: "Limited" },
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden" id="comparison">
            {/* Visual Hook: Architectural Grid Overlay & Breathing Ambient Orbs using Logo Colors */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_10%,transparent_100%)] opacity-70 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#ff2079]/10 rounded-full blur-[120px] opacity-80 pointer-events-none animate-pulse" />
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-[120px] opacity-60 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="w-full max-w-[100rem] px-4 md:px-12 mx-auto flex flex-col items-center relative z-10">

                <div className="max-w-3xl mx-auto text-center mb-16 space-y-6 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#ff2079]/5 border border-[#ff2079]/10 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff2079] animate-pulse" />
                        <span className="text-[10px] font-bold text-[#ff2079] uppercase tracking-widest">
                            Competitive Analysis
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Strategic <span className="text-slate-500">Superiority.</span>
                    </h2>
                    <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mx-auto block !mx-auto !text-center">
                        World-class governance at a fraction of the cost and deployment time.
                    </p>
                </div>

                <div className="w-full pristine-card overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(255,32,121,0.08)] border-gray-200/60 ring-1 ring-black/5 bg-white/80 backdrop-blur-3xl">
                    {/* Header Row */}
                    <div className="grid grid-cols-4 p-6 lg:p-8 border-b border-gray-200 bg-gray-50 items-center">
                        <div className="flex items-center">
                            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">Capability</span>
                        </div>
                        <div className="flex flex-col items-start gap-2 border-l border-gray-200 pl-4 md:pl-6">
                            <span className="text-[16px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff2079] to-[#fbbf24] tracking-wider uppercase">Torro AI</span>
                            <span className="bg-[#fbbf24] text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Recommended</span>
                        </div>
                        <div className="flex items-center border-l border-gray-200 pl-4 md:pl-6">
                            <span className="text-[12px] font-bold text-gray-700 uppercase tracking-widest">Our Competitors</span>
                        </div>
                        <div className="flex items-center border-l border-gray-200 pl-4 md:pl-6">
                            <span className="text-[12px] font-bold text-gray-700 uppercase tracking-widest">Legacy Big Tech</span>
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-gray-100/60 bg-transparent">
                        {features.map((feature, i) => (
                            <div key={i} className="grid grid-cols-4 p-6 lg:p-6 hover:bg-white/50 transition-colors text-[14px] md:text-[15px] items-center">
                                <div className="text-slate-500 font-bold text-[12px] tracking-widest">
                                    {feature.name}
                                </div>
                                <div className="text-gray-900 font-bold tracking-tight border-l border-gray-100/60 pl-4 md:pl-6">
                                    {feature.torro}
                                </div>
                                <div className="text-gray-500 font-medium border-l border-gray-100/60 pl-4 md:pl-6">
                                    {feature.comp}
                                </div>
                                <div className="text-gray-500 font-medium border-l border-gray-100/60 pl-4 md:pl-6 whitespace-nowrap lg:whitespace-normal">
                                    {feature.legacy}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
