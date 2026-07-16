import React from 'react';

const ComparisonTable = () => {
    const features = [
        { name: "DEPLOYMENT TIME", torro: "✓ 4-6 Months", comp: "6-18 Months", legacy: "12-24 Months" },
        { name: "TCO (3-YEAR)", torro: "✓ 60-80% Lower", comp: "Baseline", legacy: "2-3x Higher" },
        { name: "DPDP / INDIA COMPLIANCE", torro: "✓ Native - Built-in", comp: "Partial (paid add-on)", legacy: "Not Available" },
        { name: "HYBRID ESTATE SUPPORT", torro: "✓ Full (Cloud + On-prem)", comp: "Cloud-first only", legacy: "Cloud-only" },
        { name: "AI GOVERNANCE", torro: "✓ Built-in (Day 1)", comp: "On Roadmap", legacy: "Not Available" },
        { name: "SELF-SERVICE DATA ACCESS", torro: "✓ Real-time Marketplace", comp: "Limited", legacy: "Limited" },
    ];

    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-6 sm:pt-24 md:pt-32 md:pb-10" id="comparison">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_10%,transparent_100%)]" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[min(900px,100%)] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#F26969]/10 opacity-80 blur-[120px]" />
            <div className="pointer-events-none absolute top-1/4 left-1/3 h-[600px] w-[min(600px,100%)] animate-pulse rounded-full bg-[#F4B952]/10 opacity-60 blur-[120px]" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 mx-auto flex w-full max-w-[100rem] flex-col items-center px-4 md:px-12">
                <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center space-y-5 text-center sm:mb-16 sm:space-y-6">
                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F26969]/10 bg-[#F26969]/5 px-4 py-1.5 shadow-sm">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F26969]" />
                        <span className="text-[10px] font-bold tracking-widest text-[#F26969] uppercase">
                            Competitive Analysis
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                        Strategic <span className="text-[#99A0F9]">Superiority.</span>
                    </h2>
                    <p className="mx-auto block max-w-xl !text-center text-[16px] leading-relaxed text-gray-500 sm:text-[18px]">
                        World-class governance at a fraction of the cost and deployment time.
                    </p>
                </div>

                {/* Mobile: stacked capability cards */}
                <div className="flex w-full flex-col gap-4 md:hidden">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="rounded-2xl border border-gray-200/60 bg-white/90 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur-xl"
                        >
                            <div className="mb-3 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                                {feature.name}
                            </div>
                            <div className="space-y-2 text-[13px]">
                                <div className="flex items-start justify-between gap-3">
                                    <span className="font-semibold text-[#F26969]">Torro AI</span>
                                    <span className="text-right font-bold text-slate-900">{feature.torro}</span>
                                </div>
                                <div className="flex items-start justify-between gap-3">
                                    <span className="font-semibold text-slate-500">Competitors</span>
                                    <span className="text-right text-slate-600">{feature.comp}</span>
                                </div>
                                <div className="flex items-start justify-between gap-3">
                                    <span className="font-semibold text-slate-500">Legacy</span>
                                    <span className="text-right text-slate-600">{feature.legacy}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tablet/desktop: table */}
                <div className="hidden w-full overflow-x-auto rounded-2xl md:block">
                    <div className="pristine-card relative min-w-[700px] overflow-hidden border-gray-200/60 bg-white/80 shadow-[0_20px_60px_-15px_rgba(255,32,121,0.08)] ring-1 ring-black/5 backdrop-blur-3xl">
                        <div className="grid grid-cols-4 items-center border-b border-gray-200 bg-gray-50 p-4 md:p-6 lg:p-8">
                            <div className="flex items-center">
                                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase md:text-[12px]">Capability</span>
                            </div>
                            <div className="flex flex-col items-start gap-2 border-l border-gray-200 pl-3 md:pl-4 lg:pl-6">
                                <span className="bg-gradient-to-r from-[#F26969] to-[#F4B952] bg-clip-text text-[13px] font-extrabold tracking-wider text-transparent uppercase md:text-[16px]">Torro AI</span>
                                <span className="rounded bg-[#F4B952] px-1.5 py-0.5 text-[8px] font-bold text-black shadow-sm md:px-2 md:text-[10px]">Recommended</span>
                            </div>
                            <div className="flex items-center border-l border-gray-200 pl-3 md:pl-4 lg:pl-6">
                                <span className="text-[10px] font-bold tracking-widest text-gray-700 uppercase md:text-[12px]">Competitors</span>
                            </div>
                            <div className="flex items-center border-l border-gray-200 pl-3 md:pl-4 lg:pl-6">
                                <span className="text-[10px] font-bold tracking-widest text-gray-700 uppercase md:text-[12px]">Legacy</span>
                            </div>
                        </div>

                        <div className="divide-y divide-gray-100/60 bg-transparent">
                            {features.map((feature, i) => (
                                <div key={i} className="grid grid-cols-4 items-center p-4 text-[13px] transition-colors hover:bg-white/50 md:p-5 md:text-[15px] lg:p-6">
                                    <div className="pr-2 text-[10px] font-bold tracking-widest leading-snug text-slate-500 md:text-[12px]">
                                        {feature.name}
                                    </div>
                                    <div className="border-l border-gray-100/60 pl-3 text-[12px] font-bold tracking-tight text-gray-900 md:pl-4 md:text-[14px] lg:pl-6">
                                        {feature.torro}
                                    </div>
                                    <div className="border-l border-gray-100/60 pr-2 pl-3 text-[12px] leading-snug font-medium text-gray-500 md:pl-4 md:text-[14px] lg:pl-6">
                                        {feature.comp}
                                    </div>
                                    <div className="border-l border-gray-100/60 pl-3 text-[12px] leading-snug font-medium whitespace-nowrap text-gray-500 md:pl-4 md:text-[14px] lg:pl-6 lg:whitespace-normal">
                                        {feature.legacy}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
