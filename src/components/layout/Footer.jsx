import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const OFFICES = [
    {
        label: 'Contact Us',
        name: 'Torro.ai Pte. Ltd. Singapore',
        details: [
            { type: 'email', value: 'solutions@torro.ai' },
            { type: 'phone', value: '+91 95525 96169' },
            { type: 'text', value: 'Singapore' },
        ],
    },
    {
        label: 'Authorized Distributor and India Development Center',
        name: 'Torro Digihub Private Limited India',
        details: [
            { type: 'text', value: 'Sristi Greenwoods, Nookampalayam Main Road, Chennai 600131' },
            { type: 'email', value: 'digihub@torro.ai' },
        ],
    },
    {
        label: 'Research and Development Center',
        name: 'Torro AI Lab Limited',
        details: [{ type: 'text', value: '22/F 3 Lockhart Rd, Wan Chai, Hong Kong' }],
    },
];

const CONTACT_OFFICE = OFFICES[0];
const INDIA_OFFICE = OFFICES[1];
const HK_OFFICE = OFFICES[2];

const OfficeBlock = ({ office }) => (
    <address className="not-italic text-[13px] font-medium leading-relaxed text-white/55">
        <div className="mb-2 text-[11px] font-black uppercase tracking-[0.14em] text-white/70">
            {office.label}
        </div>
        <div className="mb-1.5 font-semibold text-white/80">{office.name}</div>
        <div className="space-y-1">
            {office.details.map((detail) => {
                if (detail.type === 'email') {
                    return (
                        <div key={detail.value}>
                            <span className="text-white/45">E-mail: </span>
                            <a
                                href={`mailto:${detail.value}`}
                                className="text-white/65 transition-colors hover:text-white"
                            >
                                {detail.value}
                            </a>
                        </div>
                    );
                }
                if (detail.type === 'phone') {
                    return (
                        <div key={detail.value}>
                            <span className="text-white/45">Contact: </span>
                            <a
                                href={`tel:${detail.value.replace(/\s/g, '')}`}
                                className="text-white/65 transition-colors hover:text-white"
                            >
                                {detail.value}
                            </a>
                        </div>
                    );
                }
                return <div key={detail.value}>{detail.value}</div>;
            })}
        </div>
    </address>
);

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 bg-[#0c0e1a]">
            {/* Full-height ambient glow (avoid "half/half" footer look) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(153,160,249,0.12),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(153,160,249,0.08),transparent_60%)]" />

            <div className="relative z-10 mx-auto max-w-[95rem] px-6 py-12 md:px-12 md:py-16">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className="space-y-6 md:space-y-8 lg:col-span-5">
                        <Link to="/" className="inline-flex items-center" aria-label="Torro home">
                            <img src="/logotorro.png" alt="Torro" className="h-7 w-auto object-contain" />
                        </Link>

                        <div className="max-w-[34rem] text-[14px] font-medium leading-relaxed text-white/70">
                            Torro is the unified data operating system for institutional-grade governance, compliance, and secure analytics.
                        </div>

                        <OfficeBlock office={CONTACT_OFFICE} />
                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-4">
                        <div className="space-y-4">
                            <div className="text-[12px] font-black uppercase tracking-[0.2em] text-white">Offerings</div>
                            <ul className="space-y-2.5">
                                <li><Link to="/offerings" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Solutions</Link></li>
                                <li><Link to="/services" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Services</Link></li>
                                <li><Link to="/industries" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Industries</Link></li>
                                <li><Link to="/compliance" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Compliance</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black uppercase tracking-[0.2em] text-white">Use Cases</div>
                            <ul className="space-y-2.5">
                                <li><Link to="/use-cases#enterprise-data-visibility" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Enterprise Data Visibility</Link></li>
                                <li><Link to="/use-cases#cross-border-data-governance" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Cross-Border Governance</Link></li>
                                <li><Link to="/use-cases#automated-access-provisioning" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Access Provisioning</Link></li>
                                <li><Link to="/use-cases#audit-readiness" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Audit Readiness</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black uppercase tracking-[0.2em] text-white">Resources</div>
                            <ul className="space-y-2.5">
                                <li><Link to="/resources" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Blog</Link></li>
                                <li><Link to="/resources" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Newsletter</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] font-black uppercase tracking-[0.2em] text-white">Company</div>
                            <ul className="space-y-2.5">
                                <li><Link to="/company" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">About Us</Link></li>
                                {/* <li><Link to="/company" className="text-[14px] font-semibold text-white/55 transition-colors hover:text-white">Partners</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* India (left) + Hong Kong R&D (right) */}
                <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/5 pt-8 sm:grid-cols-2 sm:gap-12">
                    <OfficeBlock office={INDIA_OFFICE} />
                    <div className="sm:text-right">
                        <div className="sm:inline-block sm:text-left">
                            <OfficeBlock office={HK_OFFICE} />
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
                    <div className="mr-auto text-[13px] font-semibold text-white/40">
                        © {year} Torro. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <button
                            type="button"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/45 transition-colors hover:text-white"
                        >
                            Back to top <ArrowUp className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
