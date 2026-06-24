"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, CheckCircle2, Quote } from "lucide-react";

// Native Swiper core layout styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ramesh Kirshnamurthy",
    location: "Jayanagar, Bengaluru",
    role: "Senior Citizen Patient",
    rating: 5,
    date: "2 days ago",
    text: "Booking a blood test for my father used to be an ordeal. Siloam changed everything. The phlebotomist arrived right at 7:00 AM, wore proper hygienic gear, and was incredibly gentle. Highly recommended for elders!"
  },
  {
    name: "Priya Sharma",
    location: "Whitefield, Bengaluru",
    role: "IT Professional",
    rating: 5,
    date: "1 week ago",
    text: "Extremely reliable service. Needed an urgent ECG and health checkup done at home for my mother. The technician brought digital portable setups, completed everything in 20 minutes, and reports were on my WhatsApp by evening."
  },
  {
    name: "Anand Verma",
    location: "Indiranagar, Bengaluru",
    role: "Verified Patient",
    rating: 5,
    date: "3 weeks ago",
    text: "Impressive processing speed and completely straightforward data routing. No premium hidden charges, absolute transparency, and trusted NABL-certified reporting. Siloam is my permanent health companion now."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full pt-10 bg-white  ">
      {/* Soft Clinical Grid Accents */}
      <div className="absolute top-10 left-10 -z-10 h-72 w-72 rounded-full bg-emerald-100/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-emerald-100/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION ARCHITECTURE */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/60 px-4 py-1.5 text-xs font-bold text-emerald-900 uppercase tracking-widest">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Patient Centered Trust
          </div>
          <h2 className="text-2xl font-black  text-slate-900  ">
            What Our Patients Say <span className="text-emerald-900">About Siloam</span>
          </h2>
          
          {/* GOOGLE VERIFIED REVIEW CREDIBILITY ACCENT */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
              {/* Clean Vector SVG representing Google's Multi-Colored G Symbol */}
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-xs font-black tracking-tight text-slate-800">Google</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-l border-slate-200 pl-2">Verified Review Desk</span>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-1">4.9 / 5.0 rating</span>
            </div>
          </div>
        </div>

        {/* SWIPER FEEDBACK CAROUSEL WRAPPER */}
        <div className="w-full mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3, allowTouchMove: false }
            }}
            className="w-full !pb-14"
          >
            {testimonials.map((review, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.015)] transition-all duration-300 hover:border-emerald-800/30 hover:shadow-[0_20px_50px_rgba(0,96,57,0.04)]">
                  
                  {/* Decorative Upper Elements */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-slate-100 group-hover:text-emerald-50 transition-colors" />
                    </div>

                    {/* Patient Review Content */}
                    <p className="text-xs font-semibold leading-relaxed text-slate-600">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Profile Metadata Segment */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black tracking-tight text-slate-900 group-hover:text-emerald-900 transition-colors">
                        {review.name}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                        {review.role} • <span className="text-emerald-800 lowercase font-medium">{review.location}</span>
                      </p>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 lowercase">
                      {review.date}
                    </span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}