import React from 'react';

import { ArrowRight, TrendingUp, ShieldCheck, Database } from 'lucide-react';

const CaseStudy = () => {
    return (
        <section className="py-24" id="solutions">
            <div className="container">
                <div className="pristine-card overflow-hidden">
                    <div className="grid lg:grid-cols-2">

                        {/* Narrative Side (Left) */}
                        <div className="p-10 lg:p-16 flex flex-col justify-center bg-white border-b lg:border-b-0 lg:border-r border-gray-100">
                            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">
                                Enterprise Case Study
                            </span>

                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                                How GlobalBank automated DPDP compliance across 10,000 databases.
                            </h3>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
                                Faced with a multi-year cloud migration and stringent new privacy laws, GlobalBank deployed Torro's autonomous agents. The result: absolute visibility without slowing down engineering velocity.
                            </p>

                            <a href="#" className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue-600 hover:text-blue-700 transition-colors w-fit">
                                Read Full Engineering Case Study <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        {/* Metrics Side (Right) */}
                        <div className="p-10 lg:p-16 bg-gray-50 flex flex-col justify-center">
                            <div className="grid sm:grid-cols-2 gap-8">

                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                        <TrendingUp className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="text-[40px] font-bold tracking-tight text-gray-900 leading-none">
                                        85%
                                    </div>
                                    <div className="text-[14px] font-medium text-gray-500 leading-snug">
                                        Reduction in manual mapping time
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div className="text-[40px] font-bold tracking-tight text-gray-900 leading-none">
                                        Zero
                                    </div>
                                    <div className="text-[14px] font-medium text-gray-500 leading-snug">
                                        Compliance breach incidents post-deployment
                                    </div>
                                </div>

                                <div className="space-y-3 sm:col-span-2 mt-4 pt-8 border-t border-gray-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                            <Database className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <span className="text-[14px] font-bold text-gray-900">Scale Achieved</span>
                                    </div>
                                    <p className="text-[14px] text-gray-600 leading-relaxed max-w-sm">
                                        Torro actively scans over <strong className="font-bold text-gray-900">14 Petabytes</strong> of data daily, enforcing over 500 dynamic masking policies across 9 global regions.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
