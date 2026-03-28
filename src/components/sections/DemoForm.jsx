import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Mail, Building, User, ArrowRight, CheckCircle2, Clock, Play, Map, Send, Bell } from 'lucide-react';

const DemoForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="demo">
            {/* Subtle architectural background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            
            <div className="container relative z-10 max-w-[85rem] mx-auto px-6">
                
                {/* Centered Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#8c9eff]/10 border border-[#8c9eff]/20 mb-2">
                        <span className="text-[10px] font-black text-[#8c9eff] uppercase tracking-[0.4em]">Book a Demo</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Evaluate Your <br /><span className="text-slate-500">Institutional Readiness.</span>
                    </h2>
                    <p className="text-slate-500 text-[16px] font-medium leading-relaxed max-w-2xl mx-auto">
                        Talk to a Torro governance architect. We'll map your estate, identify gaps, and show you what full compliance looks like in 4 weeks.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
                    
                    {/* Left: Schedule a Demo Form */}
                    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 lg:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[4rem] -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                        
                        <div className="relative z-10">
                            <h3 className="text-[24px] font-black text-slate-900 tracking-tight mb-8">Schedule a Demo</h3>

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form 
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="space-y-6"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">Full Name *</label>
                                                <div className="relative">
                                                    <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-sm" placeholder="e.g. Rajiv Nair" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">Business Email *</label>
                                                <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-sm" placeholder="ciso@company.com" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">Company *</label>
                                                <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-sm" placeholder="HDFC Bank" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">Your Role *</label>
                                                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-[14px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all appearance-none cursor-pointer shadow-sm">
                                                    <option>Select role</option>
                                                    <option>CISO / CTO</option>
                                                    <option>Data Architect</option>
                                                    <option>Privacy Officer</option>
                                                    <option>Engineering Manager</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">What's your primary governance challenge? (Optional)</label>
                                            <textarea className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all min-h-[120px] resize-none shadow-sm" placeholder="Describe your DPDP readiness concerns, regulatory pressures, or data discovery challenges..." />
                                        </div>

                                        <button type="submit" className="w-full group bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.35)] active:scale-[0.98]">
                                            Book a Demo 
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 flex flex-col items-center text-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-blue-600" />
                                        </div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">Request Received</h4>
                                        <p className="text-slate-500 font-medium">A Torro governance architect will contact you <br />within 24 hours.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Context & Newsletter */}
                    <div className="space-y-8 flex flex-col h-full">
                        
                        {/* What to Expect */}
                        <div className="bg-slate-50/50 border border-slate-200 rounded-[2.5rem] p-8 lg:p-10 flex-1">
                            <h4 className="text-[18px] font-black text-slate-900 tracking-tight mb-8">What to Expect</h4>
                            <div className="space-y-6">
                                {[
                                    { icon: Clock, label: 'Response in < 24 hours' },
                                    { icon: ShieldCheck, label: '30-minute governance gap assessment' },
                                    { icon: Play, label: 'Live platform walkthrough' },
                                    { icon: Map, label: 'Custom DPDP readiness roadmap' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm transition-colors group-hover:border-blue-400">
                                            <item.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="text-[14px] font-bold text-slate-600 leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Boardroom Headlines */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                            
                            <div className="relative z-10 space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Bell className="w-4 h-4 text-blue-400" />
                                        <h4 className="text-[18px] font-black tracking-tight">Boardroom Headlines</h4>
                                    </div>
                                    <p className="text-white/40 text-[12px] font-medium leading-relaxed">
                                        Weekly intelligence on DPDP, RBI guidelines, and AI governance for senior leaders.
                                    </p>
                                </div>

                                {!newsletterSubmitted ? (
                                    <form onSubmit={(e) => { e.preventDefault(); setNewsletterSubmitted(true); }} className="relative">
                                        <input 
                                            type="email" 
                                            required 
                                            placeholder="your@email.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white/10 transition-all pr-12"
                                        />
                                        <button type="submit" className="absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors group">
                                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                        </button>
                                    </form>
                                ) : (
                                    <div className="flex items-center gap-3 py-1">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                        <span className="text-[13px] font-black text-white uppercase tracking-wider">You're on the list</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DemoForm;
