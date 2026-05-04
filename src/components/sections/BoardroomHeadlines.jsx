import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ArticleCard = ({ title, excerpt, category, index }) => (
    <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="group flex flex-col p-8 pristine-card h-full"
    >
        <div className="flex items-center justify-between mb-8">
            <span className="text-[11px] font-bold text-[#99A0F9] uppercase tracking-widest">{category}</span>
            <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-transparent transition-colors">
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors transform group-hover:-rotate-45" />
            </div>
        </div>

        <h3 className="text-[22px] font-bold text-gray-900 leading-snug mb-4">
            {title}
        </h3>

        <p className="text-gray-600 text-[15px] font-normal leading-relaxed mt-auto">
            {excerpt}
        </p>
    </motion.a>
);

const BoardroomHeadlines = () => {
    const articles = [
        {
            category: "Architecture",
            title: "Why Legacy Catalogs Fail at Cloud Scale",
            excerpt: "Financial institutions rushing AI adoption are discovering that manual tagging systems aren't just inefficient — they are an active liability exposure."
        },
        {
            category: "Compliance",
            title: "Navigating the DPDP Act Framework",
            excerpt: "The Digital Personal Data Protection Act is no longer on the horizon. Learn how deterministic ML classifiers automate continuous compliance."
        },
        {
            category: "Strategy",
            title: "Zero-Trust Engineering in BFSI",
            excerpt: "India's largest banks operate 40% of their sensitive data in unmonitored 'dark' stores. A technical approach to sovereign data."
        }
    ];

    return (
        <section className="py-24" id="resources">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl space-y-4">
                        <span className="text-sm font-bold text-[#99A0F9] uppercase tracking-[0.4em] block">
                            Intelligence
                        </span>
                        <h2 className="text-left">Technical <span className="text-gray-400">Insights.</span></h2>
                    </div>

                    <a href="#" className="flex items-center gap-2 text-[15px] font-semibold text-indigo-500 hover:text-indigo-600 transition-colors">
                        View Documentation <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {articles.map((article, i) => (
                        <div key={i} className="h-full">
                            <ArticleCard index={i} {...article} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardroomHeadlines;
