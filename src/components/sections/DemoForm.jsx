import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2, Clock, Play, Map, Loader2 } from 'lucide-react';
import { submitDemoRequest } from '../../lib/submitDemoRequest';

const expectItems = [
    {
        icon: Clock,
        title: 'Response in < 24 hours',
        desc: 'A governance architect reviews your request and gets back quickly.',
    },
    {
        icon: ShieldCheck,
        title: '30-minute gap assessment',
        desc: 'We map compliance exposure across your hybrid estate.',
    },
    {
        icon: Play,
        title: 'Live platform walkthrough',
        desc: 'See Torro enforce policies and lineage in real time.',
    },
    {
        icon: Map,
        title: 'Custom readiness roadmap',
        desc: 'Leave with a clear DPDP and governance path forward.',
    },
];

const fieldClass =
    'h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-[14px] text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-[#99A0F9]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#99A0F9]/25';

const initialForm = {
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
};

const DemoForm = ({ sectionClassName = '', title = 'Evaluate Your', titleAccent = 'Institutional Readiness.' }) => {
    const [form, setForm] = useState(initialForm);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const updateField = (key) => (e) => {
        setForm((prev) => ({ ...prev, [key]: e.target.value }));
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        try {
            await submitDemoRequest({ ...form, source: 'platform-demo-form' });
            setIsSubmitted(true);
            setForm(initialForm);
        } catch (err) {
            setError(err?.message || 'Something went wrong. Please email solutions@torro.ai.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={`light-section-bg relative overflow-hidden py-16 sm:py-20 md:py-24 ${sectionClassName}`} id="demo">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(153,160,249,0.14)_0%,transparent_45%),radial-gradient(circle_at_80%_100%,rgba(153,160,249,0.08)_0%,transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="container relative z-10 mx-auto max-w-[85rem] px-4 sm:px-6">
                <div className="mb-10 flex flex-col items-center text-center sm:mb-12 md:mb-14">
                    <div className="glass-badge relative z-10 mb-6 inline-flex items-center justify-center gap-3 px-6 py-2.5">
                        <div className="relative z-10 h-2.5 w-2.5 animate-pulse rounded-full bg-[#99A0F9] shadow-[0_0_12px_rgba(153,160,249,0.45)]" />
                        <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#7b82e8] sm:text-[12px] sm:tracking-[0.4em]">
                            Book a Demo
                        </span>
                    </div>

                    <h2 className="!mb-4 !text-center !text-3xl !font-black !leading-[1.1] !tracking-tight !text-slate-900 sm:!mb-5 sm:!text-4xl md:!text-5xl">
                        <span className="text-slate-900">{title}</span>{' '}
                        <span className="text-[#6b72d6]">{titleAccent}</span>
                    </h2>

                    <p className="!mx-auto max-w-3xl !text-center text-[15px] font-medium !text-slate-600 sm:text-[16px] md:text-lg">
                        Talk to a Torro governance architect. We&apos;ll map your estate, identify gaps, and show you what full
                        compliance looks like in 4 weeks.
                    </p>
                </div>

                <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6 xl:gap-8">
                    <div className="glass-panel group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-5 sm:rounded-[2rem] sm:p-7 lg:p-8">
                        <div className="pointer-events-none absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-bl-[4rem] bg-gradient-to-bl from-[#99A0F9]/20 to-transparent transition-transform group-hover:scale-110" />

                        <div className="relative z-10 flex h-full flex-col">
                            <h3 className="mb-5 text-[20px] font-black tracking-tight text-slate-900 sm:mb-6 sm:text-[22px]">
                                Schedule a Demo
                            </h3>

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="flex flex-1 flex-col gap-4"
                                    >
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-1.5">
                                                <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={form.name}
                                                    onChange={updateField('name')}
                                                    className={fieldClass}
                                                    placeholder="e.g. Rajiv Nair"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                                                    Business Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={form.email}
                                                    onChange={updateField('email')}
                                                    className={fieldClass}
                                                    placeholder="ciso@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-1.5">
                                                <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                                                    Company *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    required
                                                    value={form.company}
                                                    onChange={updateField('company')}
                                                    className={fieldClass}
                                                    placeholder="Largest Indian Private Bank"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                                                    Your Role *
                                                </label>
                                                <select
                                                    name="role"
                                                    required
                                                    value={form.role}
                                                    onChange={updateField('role')}
                                                    className={`${fieldClass} cursor-pointer appearance-none`}
                                                >
                                                    <option value="">Select role</option>
                                                    <option>CISO / CTO</option>
                                                    <option>Data Architect</option>
                                                    <option>Privacy Officer</option>
                                                    <option>Engineering Manager</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-1 flex-col space-y-1.5">
                                            <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                                                What&apos;s your primary governance challenge? (Optional)
                                            </label>
                                            <textarea
                                                name="challenge"
                                                value={form.challenge}
                                                onChange={updateField('challenge')}
                                                className="min-h-[96px] w-full flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-[#99A0F9]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#99A0F9]/25"
                                                placeholder="Describe your DPDP readiness concerns, regulatory pressures, or data discovery challenges..."
                                            />
                                        </div>

                                        {error ? (
                                            <p className="text-[13px] font-semibold text-rose-600">{error}</p>
                                        ) : null}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group mt-1 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#6b72d6] py-3.5 text-[12px] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_28px_rgba(107,114,214,0.28)] transition-all hover:bg-[#5a61c4] hover:shadow-[0_16px_36px_rgba(107,114,214,0.35)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:text-[13px]"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    Sending…
                                                </>
                                            ) : (
                                                <>
                                                    Book a Demo
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-1 flex-col items-center justify-center py-10 text-center"
                                    >
                                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
                                            <CheckCircle2 className="h-8 w-8 text-[#6b72d6]" />
                                        </div>
                                        <h4 className="mb-2 text-xl font-black text-slate-900 sm:text-2xl">Request Received</h4>
                                        <p className="max-w-sm font-medium text-slate-500">
                                            Sent to solutions@torro.ai. A Torro governance architect will contact you within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="glass-card relative z-10 flex h-full flex-col overflow-hidden rounded-[1.75rem] p-5 sm:rounded-[2rem] sm:p-7 lg:p-8">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(153,160,249,0.12)_0%,transparent_55%)]" />

                        <div className="relative z-10 mb-5 sm:mb-6">
                            <h3 className="mb-2 text-[20px] font-black tracking-tight text-slate-900 sm:text-[22px]">
                                What to Expect
                            </h3>
                            <p className="text-[14px] leading-relaxed font-medium text-slate-500">
                                A focused session built for CISOs, data leaders, and compliance teams.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-1 flex-col gap-3">
                            {expectItems.map((item) => (
                                <div
                                    key={item.title}
                                    className="group flex flex-1 items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white/70 px-3.5 py-3.5 transition-colors hover:border-[#99A0F9]/35 hover:bg-white sm:gap-4 sm:px-4 sm:py-4"
                                >
                                    <div className="glass-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:border-[#99A0F9]/40">
                                        <item.icon className="h-5 w-5 text-[#6b72d6]" />
                                    </div>
                                    <div className="min-w-0 pt-0.5">
                                        <div className="text-[14px] font-black tracking-tight text-slate-900">{item.title}</div>
                                        <p className="mt-0.5 text-[13px] leading-snug font-medium text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative z-10 mt-5 border-t border-slate-200/80 pt-4 text-[12px] font-bold tracking-wide text-slate-400 sm:mt-6">
                            No commitment · 30 minutes · Architecture-level deep dive
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;
