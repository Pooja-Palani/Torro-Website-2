import React from 'react';

const DataCulture = () => {
    const stats = [
        {
            value: "100%",
            label: "Asset Visibility Coverage",
        },
        {
            value: "<20ms",
            label: "Policy Enforcement Latency",
        },
        {
            value: "Zero",
            label: "Data Copies Required",
        }
    ];

    return (
        <section className="py-32">
            <div className="container flex flex-col items-center">

                <div className="max-w-3xl text-center mb-20 space-y-6">
                    <span className="text-sm font-bold text-[#8c9eff] uppercase tracking-[0.4em] block">
                        Performance
                    </span>
                    <h2 className="text-white">Engineered for <span className="text-gray-500">Scale.</span></h2>
                    <p className="text-gray-400">
                        Torro is a spatial infrastructure layer, built to embed a compliance culture across massive hybrid environments without inducing computational drag.
                    </p>
                </div>

                <div className="w-full max-w-5xl rounded-[32px] overflow-hidden grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800 border border-gray-800 bg-gray-900/50">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-12 flex flex-col items-center justify-center text-center">
                            <div className="text-[56px] lg:text-[72px] font-bold tracking-tight text-white mb-2" style={{ letterSpacing: '-0.04em' }}>
                                {stat.value}
                            </div>
                            <div className="text-[13px] font-bold text-gray-400 tracking-widest uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DataCulture;
