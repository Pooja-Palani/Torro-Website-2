import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1228]/50 backdrop-blur-[24px] border-b border-white/[0.06] shadow-md py-4'
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
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-12 z-10 w-max">
          {['Our Offerings', 'Use Cases', 'Resources', 'Company'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[14px] font-medium flex items-center gap-1.5 transition-colors text-white/60 hover:text-white"
            >
              {item} <ChevronDown className="w-3 h-3 opacity-40" />
            </a>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-5 z-20 shrink-0">
          <a
            href="#demo"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[14px] font-bold text-black border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-95 z-20"
          >
            Book a Demo
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white/60 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b0c16]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          {['Our Offerings', 'Use Cases', 'Resources', 'Company'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-base font-semibold text-white flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item} <ChevronDown className="w-4 h-4 opacity-50" />
            </a>
          ))}
          <div className="h-px bg-white/10 w-full" />
          <a
            href="#demo"
            className="w-full inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
