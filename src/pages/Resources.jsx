import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mail, Download, ArrowRight } from 'lucide-react';

const Resources = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Data Governance in 2026',
      category: 'Governance',
      excerpt: 'Discover emerging trends and best practices shaping the data governance landscape.',
      date: 'April 8, 2026'
    },
    {
      id: 2,
      title: 'DPDP Compliance: A Practical Guide',
      category: 'Compliance',
      excerpt: 'Navigate India\'s new digital personal data protection regulations effectively.',
      date: 'April 1, 2026'
    },
    {
      id: 3,
      title: 'Building Trust with Data Quality',
      category: 'Best Practices',
      excerpt: 'How continuous monitoring ensures data integrity across your enterprise.',
      date: 'March 28, 2026'
    },
    {
      id: 4,
      title: 'Cross-Border Data Strategies',
      category: 'Strategy',
      excerpt: 'Managing data across multiple geographies and regulatory frameworks.',
      date: 'March 25, 2026'
    },
    {
      id: 5,
      title: 'AI/ML Governance Essentials',
      category: 'AI & ML',
      excerpt: 'Governing machine learning models and datasets in production environments.',
      date: 'March 22, 2026'
    },
    {
      id: 6,
      title: 'Case Study: Financial Services Transformation',
      category: 'Case Study',
      excerpt: 'How a leading BFSI institution achieved regulatory excellence.',
      date: 'March 20, 2026'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Blog',
      description: 'Latest insights, best practices, and industry trends in data governance',
      icon: BookOpen,
      link: '#'
    },
    {
      id: 2,
      title: 'Newsletter',
      description: 'Weekly updates delivered to your inbox about compliance and governance',
      icon: Mail,
      link: '#'
    }
  ];

  return (
    <section className="bg-[#0c0e1a] text-white min-h-screen pt-40 pb-20 relative border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)] mb-6">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-[12px] font-black text-blue-400 uppercase tracking-[0.4em]">Resources</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Learn & <span className="text-blue-400">Grow</span>
          </h1>
          <p className="text-[16px] text-white/50 font-medium max-w-2xl mx-auto">
            Expert insights, guides, and best practices for modern data governance
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <motion.a
                key={idx}
                href={resource.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                    {resource.title}
                  </h3>

                  <p className="text-white/50 font-medium mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Blog Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight">
            Latest <span className="text-blue-400">Blog Posts</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] bg-blue-500/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-white/40">{post.date}</span>
                  </div>

                  <h4 className="text-lg font-black text-white mb-3 tracking-tight line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#11152a] to-[#0a0d1a] border border-blue-500/20 rounded-2xl p-12 md:p-16 text-center"
        >
          <Mail className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
            Subscribe to Our <span className="text-blue-400">Newsletter</span>
          </h3>
          <p className="text-white/50 font-medium mb-8 max-w-2xl mx-auto">
            Get the latest insights on data governance, compliance, and best practices delivered weekly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 transition-colors"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-lg transition-all duration-300 uppercase text-sm tracking-[0.2em] whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
