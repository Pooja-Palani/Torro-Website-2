import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const offeringsMenu = {
  solutions: [
    "Unified Discovery & Metadata Foundation",
    "End-to-End Data Lineage",
    "Continuous Data Quality & Trust",
    "Automated Entitlements & Protection",
    "Data Marketplace & PrivBox"
  ],
  services: [
    "Data Engineering Services",
    "Cloud Consulting Services",
    "Legacy to Cloud Platform Design",
    "Compliance & Reg Consulting",
    "AI/ML Governance",
    "Data Governance Assessment"
  ],
  industries: [
    "BFSI",
    "Healthcare",
    "Telecom"
  ],
  compliance: [
    "DPDP / DPDPA",
    "GDPR",
    "CCPA",
    "BCBS239",
    "SOX",
    "HIPAA"
  ]
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#05040a]/50 backdrop-blur-[24px] border-b border-white/[0.06] shadow-md py-4'
        : 'bg-transparent border-b border-transparent py-5'
        }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 z-20 shrink-0" aria-label="Torro home">
          <img
            src="/logotorro.png"
            alt="Torro"
            className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-6' : 'h-7'}`}
          />
        </a>

        {/* Desktop Nav (Perfectly Centered) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 xl:gap-12 z-10 w-max h-full">
          {['Our Offerings', 'Use Cases', 'Resources', 'Company'].map((item) => (
            <div key={item} className="relative group h-full flex items-center">
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[14px] font-medium flex items-center gap-1.5 transition-colors text-white/60 hover:text-white py-6"
              >
                {item} <ChevronDown className="w-3 h-3 opacity-40 group-hover:rotate-180 transition-transform duration-300" />
              </a>

              {/* Mega Menu for Our Offerings */}
              {item === 'Our Offerings' && (
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50 pt-4">
                  <div className="bg-[#0b0c16]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)] p-10 flex gap-[4.5rem]">

                    {/* OUR SOLUTIONS */}
                    <div className="flex flex-col max-w-[240px]">
                      <h4 className="text-[13px] font-bold text-[#F4B952] uppercase tracking-[0.15em] mb-6">
                        Our Solutions
                      </h4>
                      <ul className="flex flex-col gap-[18px]">
                        {offeringsMenu.solutions.map((link) => (
                          <li key={link}>
                            <a href={`/solutions#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors block leading-[1.4]">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* OUR SERVICES */}
                    <div className="flex flex-col max-w-[220px]">
                      <h4 className="text-[13px] font-bold text-[#F4B952] uppercase tracking-[0.15em] mb-6">
                        Our Services
                      </h4>
                      <ul className="flex flex-col gap-[18px]">
                        {offeringsMenu.services.map((link) => (
                          <li key={link}>
                            <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors block leading-[1.4]">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* INDUSTRIES */}
                    <div className="flex flex-col min-w-[120px]">
                      <h4 className="text-[13px] font-bold text-[#F4B952] uppercase tracking-[0.15em] mb-6">
                        Industries
                      </h4>
                      <ul className="flex flex-col gap-[18px]">
                        {offeringsMenu.industries.map((link) => (
                          <li key={link}>
                            <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors block leading-[1.4]">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* COMPLIANCE */}
                    <div className="flex flex-col min-w-[120px]">
                      <h4 className="text-[13px] font-bold text-[#F4B952] uppercase tracking-[0.15em] mb-6">
                        Compliance
                      </h4>
                      <ul className="flex flex-col gap-[18px]">
                        {offeringsMenu.compliance.map((link) => (
                          <li key={link}>
                            <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors block leading-[1.4]">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-5 z-20 shrink-0">
          <a
            href="#demo"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[14px] font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-95 z-20"
          >
            Book a Demo
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors text-white/60 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#05040a]/98 backdrop-blur-3xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-2 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 z-40">
          {['Our Offerings', 'Use Cases', 'Resources', 'Company'].map((item) => (
            <div key={item} className="flex flex-col">
              <button
                className="text-lg font-bold text-white flex justify-between items-center py-4 border-b border-white/5"
                onClick={() => {
                  if (item === 'Our Offerings') {
                    setMobileOfferingsOpen(!mobileOfferingsOpen);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {item}
                <ChevronDown className={`w-5 h-5 opacity-50 transition-transform duration-300 ${item === 'Our Offerings' && mobileOfferingsOpen ? 'rotate-180' : ''}`} />
              </button>

              {item === 'Our Offerings' && mobileOfferingsOpen && (
                <div className="flex flex-col gap-8 py-6 pl-2 animate-in slide-in-from-top-4 border-b border-white/5">
                  <div>
                    <h4 className="text-[12px] font-bold text-[#F4B952] uppercase tracking-widest mb-4">Our Solutions</h4>
                    <ul className="flex flex-col gap-4">
                      {offeringsMenu.solutions.map((link) => (
                        <li key={link}>
                          <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[15px] text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#F4B952] uppercase tracking-widest mb-4">Our Services</h4>
                    <ul className="flex flex-col gap-4">
                      {offeringsMenu.services.map((link) => (
                        <li key={link}>
                          <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[15px] text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-row flex-wrap gap-12">
                    <div>
                      <h4 className="text-[12px] font-bold text-[#F4B952] uppercase tracking-widest mb-4">Industries</h4>
                      <ul className="flex flex-col gap-4">
                        {offeringsMenu.industries.map((link) => (
                          <li key={link}>
                            <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[15px] text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold text-[#F4B952] uppercase tracking-widest mb-4">Compliance</h4>
                      <ul className="flex flex-col gap-4">
                        {offeringsMenu.compliance.map((link) => (
                          <li key={link}>
                            <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[15px] text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="mt-8 mb-4">
            <a
              href="#demo"
              className="w-full h-14 inline-flex items-center justify-center rounded-full bg-white text-[15px] font-bold text-black shadow-lg transition-all active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
