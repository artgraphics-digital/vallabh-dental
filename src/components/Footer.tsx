'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  ChevronRight, 
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link pointing to the homepage (e.g., /#why-us, /#about, /#contact)
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      
      // If we are currently on the homepage, scroll smoothly even if the hash is already active
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

  const workingHours = [
    { days: 'Monday – Thursday', hours: '4:30 PM – 8:00 PM', status: 'open' },
    { days: 'Friday', hours: 'Closed (Weekly Off)', status: 'closed' },
    { days: 'Saturday', hours: '4:30 PM – 8:00 PM', status: 'open' },
    { days: 'Sunday', hours: '11:00 AM – 2:00 PM', status: 'special' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Doctor', href: '/#about' },
    { label: 'Dental Treatments', href: '/treatments' },
    { label: 'Why Choose Us', href: '/#why-us' },
    { label: 'Patient Reviews', href: '/#reviews' },
    { label: 'Contact & Clinic Visit', href: '/#contact' },
  ];

  const services = [
    { label: 'Root Canal Treatment', href: '/treatments#root-canal' },
    { label: 'Dental Implants', href: '/treatments#dental-implants' },
    { label: 'Teeth Whitening & Cleaning', href: '/treatments#teeth-whitening-cleaning' },
    { label: 'Orthodontics & Aligners', href: '/treatments#orthodontics-aligners' },
    { label: 'Painless Extractions', href: '/treatments#painless-extractions' },
    { label: 'Kids & Family Dentistry', href: '/treatments#kids-family-dentistry' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800/80 mt-auto selection:bg-blue-600 selection:text-white">
      {/* Top Highlight Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-blue-900/40 border border-blue-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Need a dental consultation or emergency visit?</h3>
              <p className="text-sm text-slate-400 mt-1">Book an appointment with Dr. Medha Upadhyay at Gomti Nagar.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+919236163027"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-sm border border-slate-700 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              092361 63027
            </a>
            <a
              href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Vallabh%20Dental%20Care."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/50 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Clinic Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-md ring-1 ring-white/20 p-0.5 flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="Vallabh Dental Care Clinic Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight block leading-tight">Vallabh Dental Care</span>
                <span className="text-xs text-blue-400 font-medium tracking-wider uppercase">Advanced Dental Clinic</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed pr-2">
              Providing premium, hygienic, and compassionate oral healthcare to families in Khargapur, Gomti Nagar, and across Lucknow. Led by Dr. Medha Upadhyay with 3+ years of clinical excellence.
            </p>

            <div className="pt-2 space-y-3">
              <a
                href="https://maps.app.goo.gl/x1gic12uMWh2KBsg9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
                <span>
                  152/6, Geeta Puri, Sector 6, Khargapur, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                  <span className="inline-flex items-center gap-1 text-xs text-blue-400 font-medium block mt-1">
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </span>
                </span>
              </a>

              <a
                href="tel:+919236163027"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-blue-400 shrink-0 group-hover:text-blue-300 transition-colors" />
                <span className="font-medium text-slate-200 group-hover:text-white tracking-wide">092361 63027 / +91 92361 63027</span>
              </a>

              <a
                href="mailto:vallabhdental@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-blue-400 shrink-0 group-hover:text-blue-300 transition-colors" />
                <span className="text-slate-300 group-hover:text-white">vallabhdental@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-semibold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 duration-150"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-semibold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    onClick={(e) => {
                      if (pathname === '/treatments' && service.href.startsWith('/treatments#')) {
                        const targetId = service.href.replace('/treatments#', '');
                        const element = document.getElementById(targetId);
                        if (element) {
                          e.preventDefault();
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          window.history.pushState(null, '', service.href);
                        }
                      }
                    }}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 duration-150"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Working Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-semibold tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              Working Hours
            </h4>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="space-y-2.5 text-xs sm:text-sm divide-y divide-slate-800/80">
                {workingHours.map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center ${idx > 0 ? 'pt-2' : ''}`}>
                    <span className="text-slate-400 font-medium">{item.days}</span>
                    <span
                      className={`font-semibold ${
                        item.status === 'closed'
                          ? 'text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-900/40 text-xs'
                          : item.status === 'special'
                          ? 'text-amber-300'
                          : 'text-emerald-400'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/90 text-xs text-slate-400 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Sunday morning slot available (11 AM – 2 PM)</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Sterilized & Hygienic Environment</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            &copy; {currentYear} Vallabh Dental Care. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <Link href="/treatments" className="hover:text-blue-400 transition-colors">Treatments</Link>
            <span>•</span>
            <Link href="/#contact" className="hover:text-blue-400 transition-colors">Directions</Link>
            <span>•</span>
            <a href="tel:+919236163027" className="hover:text-blue-400 transition-colors">Emergency Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
