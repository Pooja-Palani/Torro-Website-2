import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const ACCENT = '#99A0F9';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return undefined;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    window.addEventListener('resize', syncHeaderHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncHeaderHeight);
    };
  }, [isScrolled, isMobileMenuOpen]);

  const offeringsMegaMenu = {
    sections: [
      {
        title: 'Our Solutions',
        href: '/offerings#solutions',
        links: [
          { label: 'Unified Discovery & Metadata Foundation', href: '/offerings#unified-discovery-and-metadata-foundation' },
          { label: 'End-to-End Data Lineage', href: '/offerings#end-to-end-data-lineage' },
          { label: 'Continuous Data Quality & Trust', href: '/offerings#continuous-data-quality-and-trust' },
          { label: 'Automated Entitlements & Protection', href: '/offerings#automated-entitlements-and-protection' },
          { label: 'Data Marketplace & PrivBox', href: '/offerings#data-marketplace-and-privbox' }
        ]
      },
      {
        title: 'Our Services',
        href: '/services#services',
        links: [
          { label: 'Data Engineering Services', href: '/services#data-engineering-services' },
          { label: 'Cloud Consulting Services', href: '/services#cloud-consulting-services' },
          { label: 'Legacy to Cloud Platform Design', href: '/services#legacy-to-cloud-platform-design' },
          { label: 'Compliance & Reg Consulting', href: '/services#compliance-and-reg-consulting' },
          { label: 'AI/ML Governance', href: '/services#ai-ml-governance' },
          { label: 'Data Governance Assessment', href: '/services#data-governance-assessment' }
        ]
      },
      {
        title: 'Industries',
        href: '/industries#industries',
        links: [
          { label: 'BFSI', href: '/industries#bfsi' },
          { label: 'Healthcare', href: '/industries#healthcare' },
          { label: 'Telecom', href: '/industries#telecom' }
        ]
      },
      {
        title: 'Compliance',
        href: '/compliance#compliance',
        links: [
          { label: 'DPDP / DPDPA', href: '/compliance#dpdp-act-2023' },
          { label: 'GDPR', href: '/compliance#gdpr' },
          { label: 'BCBS239', href: '/compliance#bcbs-239' },
          { label: 'SOX & HIPAA', href: '/compliance#sox-and-hipaa' }
        ]
      }
    ]
  };

  const navItems = [
    {
      label: 'TorroOneData',
      href: '/torro-onedata'
    },
    {
      label: 'Our Offerings',
      href: '/offerings',
      megaMenu: offeringsMegaMenu
    },
    {
      label: 'Use Cases',
      href: '/use-cases#use-cases',
      submenu: [
        { label: 'Enterprise Data Visibility', href: '/use-cases#enterprise-data-visibility' },
        { label: 'Cross-Border Data Governance', href: '/use-cases#cross-border-data-governance' },
        { label: 'Automated Access Provisioning', href: '/use-cases#automated-access-provisioning' },
        { label: 'Consent & PII Management', href: '/use-cases#consent-and-pii-management' },
        { label: 'Audit Readiness', href: '/use-cases#audit-readiness' }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      submenu: [
        { label: 'Blog', href: '/resources#briefings' },
        { label: 'Newsletter', href: '/resources#newsletter' }
      ]
    },
    {
      label: 'Company',
      href: '/company',
      submenu: [
        { label: 'About Us', href: '/company#about' },
        // { label: 'Partners', href: '/company' }
      ]
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0c0e1a]/70 text-white backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${isScrolled ? 'py-2.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]' : 'py-3.5'
        }`}
    >
      <div className="container flex items-center justify-between px-6">

          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="Torro home">
            <img
              src="/torro_png_logo.png"
              alt="Torro"
              className="h-12 w-auto object-contain sm:h-14 md:h-16"
            />
            <span
              className="ml-0.5 text-[19px] font-extrabold leading-none tracking-[0.06em] text-white sm:text-[21px] md:text-[23px]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              TORRO
            </span>
          </Link>

          {/* Desktop Nav — lg+ to avoid collision with logo/CTA on tablets */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex xl:gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[13px] font-medium text-gray-100 transition-colors hover:text-white xl:px-4 xl:text-[14px]"
                >
                  {item.label}
                  {(item.submenu || item.megaMenu) && (
                    <ChevronDown size={14} className="opacity-60 group-hover:opacity-100" />
                  )}
                </Link>

                {/* Regular Dropdown Menu */}
                {item.submenu && !item.megaMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] backdrop-blur-xl border border-[#1e2343]/50 rounded-xl shadow-2xl py-3 min-w-[320px]">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          to={subitem.href}
                          className="block px-6 py-3 text-[13px] text-white/70 transition-all font-medium hover:translate-x-1 duration-200"
                          style={{
                            transitionProperty: 'color, background-color, transform',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = ACCENT;
                            e.currentTarget.style.backgroundColor = 'rgba(153,160,249,0.06)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '';
                            e.currentTarget.style.backgroundColor = '';
                          }}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu (Our Offerings) */}
                {item.megaMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-[min(880px,calc(100vw-2rem))] max-w-[92vw] rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                      <div className="grid grid-cols-2 gap-6 xl:grid-cols-4 xl:gap-10">
                        {item.megaMenu.sections.map((section) => (
                          <div key={section.title} className="min-w-0">
                            <Link
                              to={section.href}
                              className="block text-[12px] font-black uppercase tracking-[0.3em] transition-colors mb-5"
                              style={{ color: 'rgba(248,189,100,0.95)' }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = ACCENT;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'rgba(248,189,100,0.95)';
                              }}
                            >
                              {section.title}
                            </Link>
                            <div className="space-y-3">
                              {section.links.map((link) => (
                                <Link
                                  key={link.label}
                                  to={link.href}
                                  className="block text-[13px] text-white/70 transition-all font-medium leading-snug hover:translate-x-0.5 duration-200"
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = ACCENT;
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '';
                                  }}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <Link
              to="/book-demo"
              className="hidden items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md active:scale-95 lg:inline-flex"
            >
              Book Demo
            </Link>

            {/* Mobile / tablet Toggle */}
            <button
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/5 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 flex max-h-[min(80vh,calc(100dvh-var(--header-height)))] animate-in slide-in-from-top-2 flex-col gap-4 overflow-y-auto border-b border-black/40 bg-black/95 p-6 shadow-lg backdrop-blur-sm lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                className="text-base font-semibold text-gray-100 hover:text-white block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>

              {item.megaMenu && (
                <div className="pl-4 mt-2 space-y-4">
                  {item.megaMenu.sections.map((section) => (
                    <div key={section.title}>
                      <Link
                        to={section.href}
                        className="block text-[12px] font-black uppercase tracking-[0.3em] transition-colors py-1"
                        style={{ color: 'rgba(248,189,100,0.95)' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {section.title}
                      </Link>
                      <div className="mt-2 space-y-1">
                        {section.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            className="text-sm text-gray-400 hover:text-gray-100 block py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {item.submenu && !item.megaMenu && (
                <div className="pl-4 space-y-1 mt-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      to={subitem.href}
                      className="text-sm text-gray-400 hover:text-gray-100 block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="h-px bg-gray-100 w-full my-2" />
          <Link
            to="/book-demo"
            className="w-full inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
