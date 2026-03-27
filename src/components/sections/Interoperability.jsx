import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const VENDORS = [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftazure.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecloud.svg" },
    { name: "Databricks", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/databricks.svg" },
    { name: "Snowflake", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/snowflake.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg" },
    { name: "Kafka", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apachekafka.svg" },
];

const Interoperability = () => {
    return (
        <section className="py-24 bg-[#0c0e1a] overflow-hidden relative border-y border-white/5">
            {/* Visual Hook: Subtle Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#ff2079]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 mb-14 text-center space-y-5 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-3"
                >
                    Interoperability
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                    Seamless <span className="text-slate-500">Interoperability.</span>
                </h2>
                <p className="max-w-none mx-auto text-[19px] text-gray-400/90 leading-relaxed font-medium italic">
                    "Torro connects to every data platform in your stack. Your hybrid estate, fully governed."
                </p>
            </div>

            <div className="flex overflow-hidden relative py-16">
                {/* Enhanced Gradient Masks for smoother fade */}
                <div className="absolute inset-y-0 left-0 w-80 bg-gradient-to-r from-[#0c0e1a] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-80 bg-gradient-to-l from-[#0c0e1a] to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee whitespace-nowrap gap-10 items-center">
                    {[...VENDORS, ...VENDORS].map((vendor, i) => (
                        <div 
                            key={i} 
                            className="flex items-center gap-6 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[1.5rem] px-11 py-7 group hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden shrink-0"
                        >
                            {/* Glass Reflection Sweep */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6]/0 via-[#ff2079]/10 to-[#fbbf24]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none" />
                            
                            <img
                                src={vendor.logo}
                                alt={vendor.name}
                                className="h-9 w-auto brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] relative z-20"
                            />
                            <span className="text-[12px] font-black text-white/40 uppercase tracking-[0.25em] group-hover:text-white group-hover:tracking-[0.3em] transition-all duration-500 relative z-20">{vendor.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 flex justify-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-2xl text-white/70 text-[13px] font-bold tracking-wide group hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-xl cursor-default"
                >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <Zap className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">Native connectors across 50+ data sources and counting</span>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}} />
        </section>
    );
};

export default Interoperability;
