import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0c0e1a] relative border-t border-white/5">
            {/* Full-height ambient glow (avoid "half/half" footer look) */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(153,160,249,0.12),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(153,160,249,0.08),transparent_60%)]" />

            <div className="max-w-[95rem] mx-auto px-6 md:px-12 relative z-10 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="inline-flex items-center" aria-label="Torro home">
                            <img src="/logotorro.png" alt="Torro" className="h-7 w-auto object-contain" />
                        </Link>

                        <div className="text-white/70 text-[14px] leading-relaxed font-medium max-w-[34rem]">
                            Torro is the unified data operating system for institutional-grade governance, compliance, and secure analytics.
                        </div>

                        <address className="not-italic text-white/55 text-[13px] leading-relaxed font-medium space-y-0.5">
                            <div className="text-white/70 text-[12px] font-black uppercase tracking-[0.18em] mb-2">
                                Research and Development Center
                            </div>
                            <div>Torro AI Lab Limited</div>
                            <div>22/F 3 Lockhart Rd, Wan Chai, Hong Kong</div>
                        </address>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10">
                        <div className="space-y-4">
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Offerings</div>
                            <ul className="space-y-2.5">
                                <li><Link to="/offerings" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Solutions</Link></li>
                                <li><Link to="/services" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Services</Link></li>
                                <li><Link to="/industries" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Industries</Link></li>
                                <li><Link to="/compliance" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Compliance</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Use Cases</div>
                            <ul className="space-y-2.5">
                                <li><Link to="/use-cases#enterprise-data-visibility" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Enterprise Data Visibility</Link></li>
                                <li><Link to="/use-cases#cross-border-data-governance" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Cross-Border Governance</Link></li>
                                <li><Link to="/use-cases#automated-access-provisioning" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Access Provisioning</Link></li>
                                <li><Link to="/use-cases#audit-readiness" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Audit Readiness</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Resources</div>
                            <ul className="space-y-2.5">
                                <li><Link to="/resources" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Blog</Link></li>
                                <li><Link to="/resources" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Newsletter</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Company</div>
                            <ul className="space-y-2.5">
                                <li><Link to="/company" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">About Us</Link></li>
                                <li><Link to="/company" className="text-white/55 hover:text-white transition-colors text-[14px] font-semibold">Partners</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="text-white/40 text-[13px] font-semibold mr-auto">
                        © {year} Torro. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
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
