'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  PhoneCall, 
  Menu, 
  X, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'About Doctor', href: '/#about' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];

  const whatsappUrl = "https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Vallabh%20Dental%20Care.";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand with official logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full overflow-hidden bg-white shadow-sm ring-1 ring-slate-200/80 group-hover:ring-blue-300 transition-all flex items-center justify-center p-0.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Vallabh Dental Care Clinic Logo"
              width={56}
              height={56}
              className="w-full h-full object-contain rounded-full"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
              Vallabh Dental Care
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 tracking-wide uppercase">
              Where Hygiene Meets Quality Care
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => {
            const isTreatments = item.href === '/treatments';
            const isActive = isTreatments ? pathname === '/treatments' : pathname === '/' && item.href === '/';

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-blue-600 bg-blue-50/60'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:text-white bg-emerald-50 hover:bg-emerald-600 active:bg-emerald-700 border border-emerald-200/80 hover:border-emerald-600 rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href="tel:+919236163027"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-full shadow-sm shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp"
            className="p-2 text-white bg-emerald-600 rounded-full shadow-sm active:bg-emerald-700"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="tel:+919236163027"
            aria-label="Call Clinic"
            className="p-2 text-white bg-blue-600 rounded-full shadow-sm active:bg-blue-700"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                {item.name}
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm text-center transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Book on WhatsApp
            </a>
            <a
              href="tel:+919236163027"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm text-center transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Call +91 92361 63027
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
