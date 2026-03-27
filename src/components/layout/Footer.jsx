import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0c0e1a] relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(circle_at_20%_120%,rgba(37,99,235,0.12),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(circle_at_85%_120%,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none" />

            <div className="max-w-[95rem] mx-auto px-6 md:px-12 relative z-10 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-4 space-y-6">
                        <a href="/" className="inline-flex items-center" aria-label="Torro home">
                            <img src="/logotorro.png" alt="Torro" className="h-7 w-auto object-contain" />
                        </a>

                        <div className="text-white/70 text-[14px] leading-relaxed font-medium max-w-[34rem]">
                            Torro is the unified data operating system for institutional-grade governance, compliance, and secure analytics.
                        </div>

                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10">
                        <div className="space-y-4">
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Product</div>
                            <ul className="space-y-2.5">
                                <li><a href="#product" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Capabilities</a></li>
                                <li><a href="#showcase" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Platform Overview</a></li>
                                <li><a href="#marketplace" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Data Marketplace</a></li>
                                <li><a href="#comparison" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Comparison</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Use Cases</div>
                            <ul className="space-y-2.5">
                                <li><a href="#use-cases" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">BFSI</a></li>
                                <li><a href="#use-cases" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Telecom</a></li>
                                <li><a href="#use-cases" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Healthcare</a></li>
                                <li><a href="#use-cases" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">AI Governance</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Resources</div>
                            <ul className="space-y-2.5">
                                <li><a href="#resources" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Intelligence Hub</a></li>
                                <li><a href="#resources" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Boardroom Headlines</a></li>
                                <li><a href="#demo" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Contact</a></li>
                                <li><a href="#demo" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Book a Demo</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Company</div>
                            <ul className="space-y-2.5">
                                <li><a href="/" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Home</a></li>
                                <li><a href="#solutions" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Solutions</a></li>
                                <li><a href="#demo" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Partner With Us</a></li>
                                <li><a href="#demo" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="text-white/40 text-[13px] font-semibold mr-auto">
                        © {year} Torro. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#demo" className="text-white/45 hover:text-white text-[13px] font-semibold transition-colors">
                            Contact
                        </a>
                        <button
                            type="button"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-white/45 hover:text-white text-[13px] font-semibold transition-colors inline-flex items-center gap-2"
                        >
                            Back to top <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
