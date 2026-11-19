import { PhoneCall, Calendar, MapPin, Clock, Stethoscope, Sparkles, Smile, Phone, Heart, Users, Shield, Award, CheckCircle2, MessageCircle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import ClinicStatus from '@/components/ClinicStatus';
import ReviewsSection from '@/components/ReviewsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-32">
        {/* Crisp Pure White with Subtle Blue Ambient Radial Glows */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(219,234,254,0.45)_0%,rgba(255,255,255,0)_70%)] pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(239,246,255,0.6)_0%,rgba(255,255,255,0)_70%)] pointer-events-none -z-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-xs sm:text-sm font-semibold mb-6 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Most Hygienic Dental Clinic in Khargapur
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                Gentle Dental Care <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  You Can Truly Trust.
                </span>
              </h1>

              {/* Supporting Subtext */}
              <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Experience pain-free, modern dentistry in Khargapur, Gomti Nagar. Led by Dr. Medha Upadhyay, we combine cutting-edge dental technology with personal care for confident smiles.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
                <a
                  href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Vallabh%20Dental%20Care."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full shadow-lg shadow-green-600/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book on WhatsApp
                </a>
                <Link
                  href="/treatments"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                >
                  View Treatments
                </Link>
              </div>

              {/* Trust Indicators / Badges Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:flex sm:items-center gap-6 text-sm text-slate-600">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 leading-tight">Khargapur</p>
                    <p className="text-xs text-slate-500">Gomti Nagar, LKO</p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100/60">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-slate-900 leading-tight">5.0 Star</span>
                    </div>
                    <p className="text-xs text-slate-500">100% Patient Rating</p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

                {/* Status */}
                <div className="col-span-2 sm:col-span-1">
                  <ClinicStatus />
                </div>
              </div>

            </div>

            {/* Right Visual Carousel Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <HeroCarousel />

                {/* Floating Safety & Hygiene Badge */}
                <div className="absolute -top-4 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-2 z-20">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-slate-800">100% Sterilized Clinic</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 -mt-8 lg:-mt-16 pt-16 lg:pt-24 pb-24 bg-white rounded-t-[2.5rem] lg:rounded-t-[4rem] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1 w-full max-w-md mx-auto lg:mx-0">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
                <Image
                  src="/dr-medha-v1.webp"
                  alt="Dr. Medha Upadhyay"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-4 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 sm:gap-4 z-10 transition-transform hover:-translate-y-0.5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">3+ Years</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Experience</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 max-lg:contents lg:block">
              <div className="order-1 lg:order-none inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 lg:mb-6">
                About The Doctor
              </div>
              <h2 className="order-1 lg:order-none text-3xl lg:text-4xl font-bold text-slate-900 mb-2 lg:mb-4">Meet Dr. Medha Upadhyay</h2>
              <h3 className="order-1 lg:order-none text-xl text-blue-600 font-medium mb-6">BDS, MDS (Specialization)</h3>

              <div className="order-3 lg:order-none space-y-4 text-slate-600 mb-8 leading-relaxed mt-8 lg:mt-0">
                <p>
                  Dr. Medha Upadhyay is a highly skilled and compassionate dental professional dedicated to providing the highest quality of care. With a strong educational background and years of clinical experience, she brings a wealth of knowledge to Vallabh Dental Care.
                </p>
                <p>
                  Her philosophy is centered around patient comfort and utilizing the latest advancements in dentistry to ensure painless and effective treatments. We believe in educating patients about their oral health and working together to achieve beautiful, lasting smiles.
                </p>
              </div>

              <div className="order-3 lg:order-none space-y-3 mb-8">
                {[
                  "Advanced training in modern dentistry",
                  "Member of the Indian Dental Association",
                  "Specialized in painless procedures",
                  "Committed to continuous education"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="pb-24 pt-0 lg:pt-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-4 border border-blue-100">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Specialized Dental Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Flagship <span className="text-blue-600">Treatments</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Targeted, modern, and hygienic dental solutions performed by Dr. Medha Upadhyay with 3+ years of clinical excellence in Khargapur, Gomti Nagar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Root Canal Treatment */}
            <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    Single-Sitting RCT
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Root Canal Treatment (RCT)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Virtually painless single-sitting root canals using advanced digital rotary endodontics and apex locators to eliminate tooth pain and preserve your natural tooth.
                </p>
                <div className="space-y-1.5 mb-6 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Single-visit pain relief</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zirconia & ceramic crown capping</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link href="/treatments#root-canal" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Explore treatment <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20consult%20regarding%20Root%20Canal%20Treatment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-600 transition-colors"
                  title="WhatsApp Consultation"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Card 2: Dental Implants */}
            <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                    <Shield className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
                    Lifelong Solution
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Permanent Dental Implants
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Permanent bio-compatible titanium tooth roots that restore 100% natural chewing strength, prevent jawbone loss, and feel just like your real teeth.
                </p>
                <div className="space-y-1.5 mb-6 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Single & full-arch replacements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Prevents bone loss & facial sagging</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link href="/treatments#dental-implants" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Explore treatment <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20consult%20regarding%20Dental%20Implants."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-600 transition-colors"
                  title="WhatsApp Consultation"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Card 3: Teeth Whitening & Cleaning */}
            <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors shadow-sm">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full">
                    Glow & Hygiene
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Teeth Whitening & Cleaning
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Advanced ultrasonic tartar scaling, plaque biofilm removal, and safe clinical enamel whitening to reverse staining and maintain pink, healthy gums.
                </p>
                <div className="space-y-1.5 mb-6 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Stops gum bleeding & bad breath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fast 30-45 minute brightening</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link href="/treatments#teeth-whitening-cleaning" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Explore treatment <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20consult%20regarding%20Teeth%20Cleaning%20and%20Whitening."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-600 transition-colors"
                  title="WhatsApp Consultation"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Card 4: Orthodontics & Clear Aligners */}
            <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-sm">
                    <Smile className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">
                    Invisible Braces
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Clear Aligners & Orthodontics
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Discreet, custom 3D transparent aligners and modern braces for adults and teens looking to fix crooked teeth, gaps, and bite issues with zero food restrictions.
                </p>
                <div className="space-y-1.5 mb-6 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Nearly invisible removable aligners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Comfortable & zero metal irritation</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link href="/treatments#orthodontics-aligners" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Explore treatment <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20consult%20regarding%20Clear%20Aligners%20and%20Braces."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-600 transition-colors"
                  title="WhatsApp Consultation"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Card 5: Painless & Wisdom Tooth Extractions */}
            <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors shadow-sm">
                    <Heart className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full">
                    Atraumatic Surgery
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Painless & Wisdom Extractions
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Minimally invasive tooth extractions and surgical removal of impacted wisdom teeth with effective local anesthetics for zero procedural pain and speedy healing.
                </p>
                <div className="space-y-1.5 mb-6 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Gentle tissue-preserving techniques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Specialized wisdom tooth protocols</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link href="/treatments#painless-extractions" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Explore treatment <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20consult%20regarding%20Tooth%20Extraction."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-600 transition-colors"
                  title="WhatsApp Consultation"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Card 6: Kids & Family Dentistry */}
            <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                    Family & Kids
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Kids & Family Dentistry
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Fear-free, compassionate dental visits for toddlers, children, adults, and seniors. Fluoride protection, preventive pit & fissure sealants, and holistic oral checkups.
                </p>
                <div className="space-y-1.5 mb-6 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero dental anxiety for kids</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Preventive sealants & cavity defenses</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link href="/treatments#kids-family-dentistry" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Explore treatment <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20consult%20regarding%20Kids%20and%20Family%20Dental%20Care."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-600 transition-colors"
                  title="WhatsApp Consultation"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Banner linking to full treatments breakdown */}
          <div className="mt-12 text-center">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
            >
              <span>View All 6 Flagship Treatments & Symptoms</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-4 border border-blue-100">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Patient-First Dentistry in Khargapur, Gomti Nagar
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why Patients Choose <span className="text-blue-600">Vallabh Dental Care</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Recognized as one of the most hygienic, ethical, and patient-recommended dental clinics in Lucknow. Here is why families across Gomti Nagar trust Dr. Medha Upadhyay with their smiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primary USP: Gold-Standard Hygiene & Sterilization */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 flex flex-col hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Shield className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full w-fit mb-3">
                Core USP
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Uncompromising Clinic Hygiene & Sterilization
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Ranked as the most hygienic dental clinic in Khargapur. We enforce hospital-grade multi-tier autoclave sterilization, bio-medical waste segregation, and single-use disposable kits for 100% infection-free dental visits.
              </p>
            </div>

            {/* Pillar 2: Advanced & Painless Care */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 flex flex-col hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Heart className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-full w-fit mb-3">
                Gentle Protocols
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Gentle & Painless Dentistry
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Say goodbye to dental fear. From rotary endodontics for single-sitting root canals to atraumatic tooth extractions, we utilize modern local anesthetics and gentle techniques designed for adults and children alike.
              </p>
            </div>

            {/* Pillar 3: Family-Centric & Doctor-Led Care */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 flex flex-col hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-2.5 py-1 rounded-full w-fit mb-3">
                3+ Yrs Experience
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Family-Centric, Personalized Attention
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Unlike hurried corporate dental chains, you receive personalized care directly from Dr. Medha Upadhyay. We listen, diagnose root causes, and provide dedicated time to ensure comprehensive oral wellness for every family member.
              </p>
            </div>

            {/* Pillar 4: Transparent & Ethical Pricing */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 flex flex-col hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Award className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full w-fit mb-3">
                Honest Dentistry
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                100% Transparent & Ethical Pricing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                No hidden costs, no surprise add-ons, and zero unnecessary treatments. We believe in transparent diagnosis, providing upfront estimates, and offering genuine clinical advice prioritizing your health and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <ReviewsSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Visit Our Clinic</h2>
                <p className="text-lg text-slate-600 mb-8">Located conveniently in the heart of Gomti Nagar. We&apos;re currently accepting new patients.</p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex shrink-0 items-center justify-center text-blue-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">Address</h4>
                      <p className="text-slate-600 mt-1">152/6, Geeta Puri, Sector 6,<br />Khargapur, Gomti Nagar,<br />Lucknow, Uttar Pradesh 226010</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex shrink-0 items-center justify-center text-blue-600">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">Call Us</h4>
                      <a href="tel:+919236163027" className="text-blue-600 hover:text-blue-700 font-medium mt-1 inline-block text-lg">+91 92361 63027</a>
                      <p className="text-sm text-slate-500 mt-1">For appointments & emergencies</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex shrink-0 items-center justify-center text-blue-600">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">Hours</h4>
                      <p className="text-slate-600 mt-1">Mon – Thu & Sat: 4:30 PM – 8:00 PM</p>
                      <p className="text-slate-600">Sunday: 11:00 AM – 2:00 PM</p>
                      <p className="text-rose-600 font-medium">Friday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-slate-100">
                  <a href="https://www.google.com/maps/search/?api=1&query=Vallabh+Dental+Care,+Sector+6,+Gomti+Nagar,+Lucknow" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors">
                    <MapPin className="w-5 h-5" />
                    Get Directions on Maps
                  </a>
                </div>
              </div>

              <div className="relative min-h-[400px] lg:min-h-full bg-slate-200">
                {/* Embedded Google Maps Placeholder referencing the location */}
                <iframe
                  src="https://maps.google.com/maps?q=Vallabh%20Dental%20Care%2C%20Sector%206%2C%20Gomti%20Nagar%2C%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map to Vallabh Dental Care"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
