import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Activity, 
  HeartHandshake, 
  Baby, 
  Calendar, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin,
  ChevronRight,
  HelpCircle,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Flagship Dental Treatments in Gomti Nagar, Lucknow | Vallabh Dental Care",
  description: "Explore flagship dental treatments at Vallabh Dental Care, Khargapur, Gomti Nagar, Lucknow by Dr. Medha Upadhyay. Painless single-sitting root canals (RCT), lifetime dental implants, ultrasonic teeth cleaning & whitening, invisible aligners, atraumatic extractions, and pediatric dentistry.",
  keywords: [
    "Root Canal Treatment in Gomti Nagar Lucknow",
    "Single Sitting RCT Khargapur",
    "Dental Implants Khargapur Lucknow",
    "Teeth Whitening and Cleaning Gomti Nagar",
    "Clear Aligners and Braces Lucknow",
    "Painless Tooth Extraction Gomti Nagar",
    "Wisdom Tooth Removal Lucknow",
    "Kids and Pediatric Dentist Lucknow",
    "Best Dental Treatments in Gomti Nagar",
    "Vallabh Dental Care Flagship Treatments",
    "Dr Medha Upadhyay Dentist Lucknow"
  ],
  alternates: {
    canonical: "https://www.vallabhdental.in/treatments",
  },
  openGraph: {
    title: "Flagship Dental Treatments | Vallabh Dental Care Lucknow",
    description: "Modern, hygienic, and pain-free dental treatments in Khargapur, Gomti Nagar led by Dr. Medha Upadhyay (3+ Years Experience).",
    url: "https://www.vallabhdental.in/treatments",
    type: "website",
  },
};

export default function TreatmentsPage() {
  const treatments = [
    {
      id: "root-canal",
      title: "Root Canal Treatment (RCT)",
      category: "Endodontics",
      shortDesc: "Single-sitting, microscopic rotary endodontics to relieve acute pain and preserve natural teeth permanently.",
      detailedDesc:
        "Root Canal Treatment at Vallabh Dental Care eliminates deep pulp infections, throbbing toothaches, and abscesses while saving your natural tooth from extraction. Utilizing rotary endodontic micro-files, electronic apex locators, and bio-ceramic hermetic obturation, Dr. Medha Upadhyay performs virtually painless single-sitting and multi-visit root canals, followed by custom-fitted high-strength zirconia or ceramic crowns.",
      highlights: [
        "Single-sitting RCT capability",
        "Rotary endodontics for pinpoint accuracy",
        "Bio-ceramic hermetic canal sealing",
        "Durable zirconia & porcelain crown options"
      ],
      symptoms: ["Severe throbbing or radiating toothache", "Lingering sensitivity to hot or cold foods", "Gum swelling, pimple, or tenderness near tooth", "Darkening or discoloration of a single tooth"],
      duration: "1–2 Sessions (Single-sitting available)",
      icon: <Activity className="w-8 h-8" />,
      badge: "Single-Sitting RCT",
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      category: "Implantology",
      shortDesc: "Permanent, medical-grade titanium roots that restore 100% natural chewing strength, jawbone health, and aesthetic perfection.",
      detailedDesc:
        "Dental implants represent the modern gold standard in restorative dentistry for replacing lost or extracted teeth. Surgically anchored into the jawbone, bio-inert titanium posts osseointegrate with living bone tissue, halting bone resorption and preserving facial symmetry. From single missing front or back teeth to implant-supported bridges and full-mouth rehabilitations, our Khargapur clinic offers world-class implant solutions.",
      highlights: [
        "100% bio-compatible titanium fixtures",
        "Preserves adjacent teeth without shaving",
        "Prevents jawbone shrinkage and facial sagging",
        "Natural chewing power matching natural teeth"
      ],
      symptoms: ["Missing one or multiple natural teeth", "Loose, uncomfortable, or clicking dentures", "Difficulty chewing healthy fruits, nuts, or meats", "Premature aging or sunken cheeks from bone loss"],
      duration: "Multi-stage with lifelong longevity",
      icon: <ShieldCheck className="w-8 h-8" />,
      badge: "Permanent Replacement",
    },
    {
      id: "teeth-whitening-cleaning",
      title: "Teeth Whitening & Cleaning",
      category: "Cosmetic & Preventive",
      shortDesc: "Hospital-grade ultrasonic scaling, deep stain removal, and gentle enamel-safe laser whitening for bright, fresh smiles.",
      detailedDesc:
        "Even dedicated brushing cannot eliminate calcified dental tartar (calculus) and sub-gingival plaque colonies. Our ultrasonic prophylaxis gently vibrates away hardened deposits, halts gum bleeding, and neutralizes bad breath (halitosis). Finish with clinical in-office whitening to lift stubborn stains caused by tea, coffee, smoking, and aging safely without harming tooth enamel.",
      highlights: [
        "Gentle ultrasonic calculus & tartar removal",
        "Sub-gingival biofilm cleaning to stop pyorrhea",
        "Enamel-safe peroxide whitening formula",
        "Visible shade lightening in a single 45-min visit"
      ],
      symptoms: ["Noticeable yellowing, coffee or tea stains", "Bleeding gums during routine tooth brushing", "Rough tartar accumulation behind lower front teeth", "Chronic bad breath (halitosis) despite brushing"],
      duration: "30–45 Minutes",
      icon: <Sparkles className="w-8 h-8" />,
      badge: "Instant Glow & Hygiene",
    },
    {
      id: "orthodontics-aligners",
      title: "Orthodontics & Clear Aligners",
      category: "Orthodontics",
      shortDesc: "Custom 3D invisible clear aligners and modern ceramic braces to correct misaligned teeth, gaps, and bite issues comfortably.",
      detailedDesc:
        "Straighten your smile discreetly without conspicuous metal wires. We provide cutting-edge clear aligners—virtually invisible, custom-fabricated thermoplastic trays that gradually guide your teeth into optimal cosmetic and functional alignment. Aligners are easily removable for meals and brushing, making oral hygiene seamless. We also offer aesthetic ceramic and low-profile self-ligating braces.",
      highlights: [
        "Virtually invisible transparent clear aligners",
        "Removable for effortless eating & oral hygiene",
        "Custom 3D digital smile simulation",
        "Ceramic & self-ligating brackets for complex malocclusions"
      ],
      symptoms: ["Crowded, overlapping, or rotated teeth", "Noticeable gaps between teeth (diastema)", "Overbite, underbite, or uneven crossbite", "Difficulty cleaning tight dental spaces"],
      duration: "6–18 Months (tailored case timeline)",
      icon: <Smile className="w-8 h-8" />,
      badge: "Invisible Braces",
    },
    {
      id: "painless-extractions",
      title: "Painless & Wisdom Tooth Extractions",
      category: "Oral Surgery",
      shortDesc: "Minimally invasive, atraumatic extractions and surgical wisdom tooth removals with local anesthetics and rapid healing.",
      detailedDesc:
        "When an impacted wisdom tooth causes recurrent pericoronitis, jaw stiffness, or cyst formation, or when a tooth is cracked beyond restoration, a painless extraction is the safest medical solution. Dr. Medha Upadhyay utilizes modern atraumatic periotomes, localized anesthesia, and bone-preserving techniques to minimize tissue disruption, reduce post-operative swelling, and ensure quick recovery.",
      highlights: [
        "Gentle localized numbing for zero pain during procedure",
        "Atraumatic luxation preserving surrounding bone",
        "Specialized surgical techniques for impacted wisdom teeth",
        "Clear post-op recovery & medication guidelines"
      ],
      symptoms: ["Severe jaw ache or difficulty opening mouth", "Partially erupted or horizontally impacted wisdom tooth", "Recurrent swelling or food impaction at rear gums", "Severely fractured or non-restorable tooth root"],
      duration: "20–40 Minutes",
      icon: <HeartHandshake className="w-8 h-8" />,
      badge: "Zero-Fear Surgery",
    },
    {
      id: "kids-family-dentistry",
      title: "Kids & Family Dentistry",
      category: "Pediatric & Preventive",
      shortDesc: "Compassionate, stress-free dental care for children, teens, and whole families—including fluoride shields and pit sealants.",
      detailedDesc:
        "Vallabh Dental Care creates a joyful, comforting environment designed to eliminate dental phobia from a child's earliest visits. We focus on preventive pedodontics—applying dental sealants over deep molars, fluoride remineralization treatments to stop early decay, and gentle tooth-colored fillings. We also provide routine family screenings and geriatric dental maintenance in Khargapur.",
      highlights: [
        "Child-friendly, fear-free compassionate consultations",
        "Cavity-preventing fluoride varnishes & pit sealants",
        "Habit counseling (thumb sucking, mouth breathing)",
        "Comprehensive whole-family preventive screenings"
      ],
      symptoms: ["Early childhood dental cavities (bottle caries)", "Sensitivity in young erupting permanent molars", "Routine first dental visit for toddlers & children", "Preventive bi-annual family oral examinations"],
      duration: "Routine session: 30 Minutes",
      icon: <Baby className="w-8 h-8" />,
      badge: "Child & Family Care",
    },
  ];

  const faqs = [
    {
      question: "Are root canal treatments painful at Vallabh Dental Care?",
      answer: "No. With advanced localized anesthetics, digital rotary endodontics, and gentle clinical protocols practiced by Dr. Medha Upadhyay, root canal therapy at Vallabh Dental Care is comfortable and painless—comparable to receiving a routine composite filling."
    },
    {
      question: "How long do dental implants last and what is the success rate?",
      answer: "With proper oral hygiene and regular dental checkups, titanium dental implants have an over 95% clinical success rate and are engineered to last a lifetime. They integrate directly with your jawbone to prevent bone deterioration."
    },
    {
      question: "What are the advantages of Clear Aligners over traditional metal braces?",
      answer: "Clear aligners are nearly invisible, smooth, and fully removable. You can take them out while eating, drinking, and brushing your teeth, ensuring no dietary restrictions and significantly easier oral hygiene compared to metal wires and brackets."
    },
    {
      question: "How often should I get ultrasonic teeth cleaning done?",
      answer: "Dentists recommend professional ultrasonic scaling and polishing every 6 months to remove hardened calculus (tartar) and bacterial plaque that normal brushing cannot reach, protecting against bleeding gums, pyorrhea, and bad breath."
    },
    {
      question: "Do you offer consultations for children and whole families?",
      answer: "Yes, Vallabh Dental Care is a family-first dental clinic located in Khargapur, Gomti Nagar. We provide gentle pediatric treatments for toddlers and kids, alongside specialized adult and geriatric dental care."
    },
    {
      question: "How do I schedule an appointment with Dr. Medha Upadhyay?",
      answer: "You can book directly by calling +91 92361 63027 or by messaging us on WhatsApp (+91 92361 63027). Our clinic is open Monday to Thursday and Saturday (4:30 PM – 8:00 PM) and Sunday (11:00 AM – 2:00 PM)."
    }
  ];

  // Schema.org MedicalBusiness / MedicalWebPage & FAQPage for AI & Search Engine Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.vallabhdental.in/treatments#webpage",
        "url": "https://www.vallabhdental.in/treatments",
        "name": "Flagship Dental Treatments in Gomti Nagar, Lucknow | Vallabh Dental Care",
        "description": "Comprehensive guide to flagship dental treatments by Dr. Medha Upadhyay at Vallabh Dental Care, Khargapur, Gomti Nagar, Lucknow.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.vallabhdental.in/#website",
          "name": "Vallabh Dental Care",
          "url": "https://www.vallabhdental.in"
        },
        "about": {
          "@type": "Dentist",
          "name": "Vallabh Dental Care",
          "telephone": "+919236163027",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "152/6, Geeta Puri, Sector 6, Khargapur",
            "addressLocality": "Gomti Nagar, Lucknow",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "226010",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "ItemList",
        "name": "Flagship Dental Treatments at Vallabh Dental Care",
        "itemListElement": treatments.map((treatment, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": treatment.title,
          "description": treatment.shortDesc,
          "url": `https://www.vallabhdental.in/treatments#${treatment.id}`
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.vallabhdental.in/treatments#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      {/* JSON-LD Schema markup for AI engines, Google Search, and Perplexity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-5 border border-blue-100">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Flagship Treatments • Vallabh Dental Care, Gomti Nagar
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
            Flagship Dental <span className="text-blue-600">Treatments & Care</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From single-sitting painless root canals and life-lasting dental implants to invisible aligners and gentle family dentistry—experience world-class, hygienic dental care led by Dr. Medha Upadhyay in Khargapur, Gomti Nagar.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Multi-tier Autoclave Sterilization
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Gentle & Pain-Free Techniques
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 100% Ethical & Upfront Pricing
            </span>
          </div>

          {/* Quick jump navigation for treatments */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {treatments.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition-colors"
              >
                {t.title.split('(')[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Treatments Grid Section */}
      <section className="py-16 sm:py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <article
                key={treatment.id}
                id={treatment.id}
                className="bg-white rounded-3xl p-7 lg:p-8 shadow-sm border border-slate-200/80 flex flex-col h-full hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group scroll-mt-24"
              >
                {/* Header Badge & Icon */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    {treatment.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {treatment.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                      {treatment.category}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {treatment.title}
                </h2>

                <p className="text-sm font-semibold text-slate-700 mb-4 leading-normal">
                  {treatment.shortDesc}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                  {treatment.detailedDesc}
                </p>

                {/* Treatment Highlights */}
                <div className="mb-5 space-y-1.5">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Features
                  </h3>
                  {treatment.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Common Symptoms / Key Indicators */}
                <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100 mt-auto">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                    When is this treatment needed?
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {treatment.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Typical Duration: <strong className="text-slate-700">{treatment.duration}</strong></span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={`https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(treatment.title)}%20at%20Vallabh%20Dental%20Care.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-sm shadow-blue-200 transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Consultation
                  </a>
                  <a
                    href="tel:09236163027"
                    className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    title="Call Clinic at +91 92361 63027"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & AI-Search Optimized FAQs Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold mb-2">
              <HelpCircle className="w-4 h-4" /> Patient Questions Answered
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Dental Questions</h2>
            <p className="text-sm text-slate-500 mt-2">Clear, expert information verified by Dr. Medha Upadhyay to guide your decisions.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Bottom Contact / Location Card */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-white inline-block">
                Khargapur • Gomti Nagar
              </span>
              <h3 className="text-2xl font-bold">Ready to consult Dr. Medha Upadhyay?</h3>
              <p className="text-blue-100 text-sm">
                Visit our clinic at 152/6, Geeta Puri, Sector 6, Khargapur, Gomti Nagar, Lucknow.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-md inline-flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                View Map & Timing
              </Link>
              <a
                href="https://wa.me/919236163027?text=Hello%20Dr.%20Medha%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-all shadow-md inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
