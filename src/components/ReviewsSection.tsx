'use client';

import { useState } from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquare, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  date: string;
  treatment: string;
  review: string;
  verified: boolean;
  avatarBg?: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    name: 'Amit Srivastava',
    initials: 'AS',
    rating: 5,
    date: '3 weeks ago',
    treatment: 'Root Canal Treatment (RCT)',
    review:
      'Dr. Medha Upadhyay is extremely skilled and gentle. I was very terrified of getting a Root Canal done, but the procedure here was completely painless! The clinic is spotless and maintains exceptional sterilization. Highly recommended in Gomti Nagar.',
    verified: true,
    avatarBg: 'bg-blue-600',
  },
  {
    id: '2',
    name: 'Pooja Verma',
    initials: 'PV',
    rating: 5,
    date: '1 month ago',
    treatment: 'Teeth Cleaning & Scaling',
    review:
      'The cleanest and most hygienic dental clinic in Khargapur! Dr. Medha took time to explain proper oral hygiene and did thorough scaling without any sensitivity. Honest advice and very reasonable charges.',
    verified: true,
    avatarBg: 'bg-emerald-600',
  },
  {
    id: '3',
    name: 'Rajesh Kumar Pandey',
    initials: 'RP',
    rating: 5,
    date: '2 months ago',
    treatment: 'Painless Tooth Extraction',
    review:
      'I visited for an urgent tooth extraction for severe pain. The extraction was done smoothly in under 15 minutes with zero discomfort during or after the procedure. Excellent post-procedure guidance.',
    verified: true,
    avatarBg: 'bg-indigo-600',
  },
  {
    id: '4',
    name: 'Shweta Tiwari',
    initials: 'ST',
    rating: 5,
    date: '2 months ago',
    treatment: 'Kids Dentistry',
    review:
      'Took my 7-year-old daughter for dental checkup and cavity filling. Dr. Medha was so patient and friendly that my child had no fear at all! Truly the best family dentist in Gomti Nagar.',
    verified: true,
    avatarBg: 'bg-amber-600',
  },
  {
    id: '5',
    name: 'Vikas Mishra',
    initials: 'VM',
    rating: 5,
    date: '3 months ago',
    treatment: 'Crown & Bridge Work',
    review:
      'Very professional approach. The zirconia crown fitted perfectly on the first trial itself with natural bite alignment. Transparent pricing with no hidden charges. Genuine 5-star clinic!',
    verified: true,
    avatarBg: 'bg-teal-600',
  },
  {
    id: '6',
    name: 'Anjali Saxena',
    initials: 'AS',
    rating: 5,
    date: '4 months ago',
    treatment: 'Dental Cavity Filling',
    review:
      'Dr. Medha has a very light hand and explains every step patiently before starting. The clinic follows strict infection control and autoclave protocols. Five stars all the way!',
    verified: true,
    avatarBg: 'bg-violet-600',
  },
];

// Google Maps place review & search URLs
const GOOGLE_MAPS_SEARCH_URL =
  'https://www.google.com/maps/search/?api=1&query=Vallabh+Dental+Care,+Sector+6,+Gomti+Nagar,+Lucknow';
const GOOGLE_WRITE_REVIEW_URL =
  'https://www.google.com/maps/search/?api=1&query=Vallabh+Dental+Care,+Sector+6,+Gomti+Nagar,+Lucknow';

export default function ReviewsSection() {
  const [filter, setFilter] = useState<'all' | 'rct' | 'extraction' | 'cleaning'>('all');

  const filteredReviews = REVIEWS_DATA.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'rct') return r.treatment.includes('Root Canal');
    if (filter === 'extraction') return r.treatment.includes('Extraction');
    if (filter === 'cleaning') return r.treatment.includes('Cleaning');
    return true;
  });

  return (
    <section id="reviews" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Google Trust Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs sm:text-sm font-semibold mb-4 border border-amber-200/70">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              Verified Patient Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Loved by Patients Across <br />
              <span className="text-blue-600">Gomti Nagar & Khargapur</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Read real, unbiased feedback from patients who experienced our gentle, pain-free dental care and gold-standard hygiene firsthand.
            </p>
          </div>

          {/* Google Summary Score Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-sm shrink-0">
            {/* Google G Logo & Rating */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold text-slate-900">5.0</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  Google Business Profile Reviews
                </p>
              </div>
            </div>

            <div className="h-px sm:h-12 w-full sm:w-px bg-slate-200"></div>

            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-sm hover:shadow"
            >
              <MessageSquare className="w-4 h-4 text-blue-600" />
              Write a Review
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs sm:text-sm no-scrollbar">
          <span className="text-slate-400 font-medium mr-2 shrink-0">Filter by treatment:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors shrink-0 ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Reviews ({REVIEWS_DATA.length})
          </button>
          <button
            onClick={() => setFilter('rct')}
            className={`px-4 py-2 rounded-full font-medium transition-colors shrink-0 ${
              filter === 'rct'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Root Canal
          </button>
          <button
            onClick={() => setFilter('cleaning')}
            className={`px-4 py-2 rounded-full font-medium transition-colors shrink-0 ${
              filter === 'cleaning'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Cleaning & Scaling
          </button>
          <button
            onClick={() => setFilter('extraction')}
            className={`px-4 py-2 rounded-full font-medium transition-colors shrink-0 ${
              filter === 'extraction'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Extractions
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Review Header: User info, Google badge, Rating */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${item.avatarBg || 'bg-blue-600'} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base leading-tight group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
                    </div>
                  </div>

                  {/* Google Verified Icon */}
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded-full shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Google</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-slate-700 ml-1.5">5.0</span>
                </div>

                {/* Treatment Badge */}
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-semibold tracking-wide text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    {item.treatment}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 text-sm leading-relaxed relative">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Bottom Verification Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Patient
                </span>
                <span>Khargapur, Lucknow</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Footer linking to Google Profile */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Have you visited Vallabh Dental Care recently?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Your honest feedback helps our community in Gomti Nagar discover trusted, pain-free dental care.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md shadow-blue-100 transition-all hover:-translate-y-0.5"
            >
              <Star className="w-4 h-4 fill-white" />
              Write a Google Review
            </a>
            <a
              href={GOOGLE_MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
