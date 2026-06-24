"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Phone, Clipboard, ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";

// Native Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const slideBackgrounds = [
  {
    image: "/heroImages/siloam-diagnostics-home-blood-sample-collection-elderly-patient-india.webp",
    title: "Blood Tests at Home for Seniors & Families",
    tagline: "Siloam Diagnostics Care",
    desc: "Skip the travel and long waiting times. Our trained sample collection professionals visit your home to collect blood samples safely and hygienically. Enjoy accurate diagnostics, fast reports, and comfortable healthcare services right at your doorstep."
  },
  {
    image: "/heroImages/portable-xray-service-at-home-elderly-patient-india-siloam-diagnostics.webp",
    title: "Professional Digital X-Ray Services at Your Doorstep Paragraph",
    tagline: "Portable X-Ray Service at Home",
    desc: "Monitor your heart health without leaving home. Our trained healthcare professionals provide safe and reliable ECG testing at your doorstep using advanced diagnostic equipment, ensuring comfort, convenience, and timely reports."
  },
  {
    image: "heroImages/home-ecg-test-service-elderly-patient-india-siloam-diagnostics.webp",
    title: "Accurate ECG Testing at Home for Seniors & Families",
    tagline: "Home ECG Service Available",
    desc: "Receive accurate and convenient X-ray imaging without visiting a hospital. Our trained radiology technicians bring portable digital X-ray equipment to your home, providing safe, reliable, and comfortable diagnostic care for seniors, patients with limited mobility, and families."
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    testType: "Executive Full Body Checkup",
    date: ""
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const customerCareNumber = "919999999999"; 
    
    const structuredMessage = 
      `*SILOAM DIAGNOSTICS - APPOINTMENT DESK*\n` +
      `----------------------------------------\n` +
      `• *Patient Name:* ${formData.name}\n` +
      `• *Contact No:* ${formData.phone}\n` +
      `• *Prescribed Test:* ${formData.testType}\n` +
      `• *Preferred Date:* ${formData.date}\n` +
      `----------------------------------------\n` +
      `Please check slot availability and confirm back.`;

    window.open(`https://wa.me/${customerCareNumber}?text=${encodeURIComponent(structuredMessage)}`, "_blank");
  };

  return (
    <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-slate-950 py-26 lg:py-0">
      
      {/* MASTER BACKGROUND IMAGERY CAROUSEL (USING NATIVE IMG TAGS) */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          allowTouchMove={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {slideBackgrounds.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative h-full w-full overflow-hidden">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[6000ms] scale-105"
              />
              {/* Siloam Corporate Gradient Overlay Architecture */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-transparent z-10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CORE CONTENT DISPLAY GRID */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* LEFT: TEXT OVERLAY INTERFACE (DYNAMICALLY LINKED TO ACTIVE BACKGROUND SLIDE) */}
          <div className="text-white lg:col-span-7 space-y-6">
            <div className="min-h-[280px] flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-4"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md uppercase tracking-wider">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {slideBackgrounds[activeIndex].tagline}
                  </span>
                  
                  <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl  leading-[1.15]">
                    {slideBackgrounds[activeIndex].title}
                  </h1>
                  
                  <p className="max-w-xl text-base font-medium text-slate-300 sm:text-lg leading-relaxed">
                    {slideBackgrounds[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Manual Bullet Navigation Indicators */}
            <div className="flex gap-2.5 pt-2 hidden">
              {slideBackgrounds.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === idx ? "w-10 bg-emerald-500" : "w-2.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Siloam STYLE WHITE BOOKING CARD */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-[0_25px_60px_-15px_rgba(0,96,57,0.12)]"
            >
              <div className="mb-6 border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold uppercase  text-slate-900">
                  Siloam <span className="text-emerald-800">Quick Booking</span>
                </h3>
                <p className="text-xs font-semibold text-slate-400 mt-1 uppercase ">
                  Direct Laboratory Integration
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Patient Name input */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">Patient Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm font-semibold text-slate-800 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Mobile Number input */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm font-semibold text-slate-800 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Test Selector */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">Select Profile</label>
                  <div className="relative">
                    <Clipboard className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <select
                      value={formData.testType}
                      onChange={(e) => setFormData({...formData, testType: e.target.value})}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm font-semibold text-slate-800 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all"
                    >
                      <option>Hygienic Home Sample Collection</option>
                      <option>Executive Full Body Checkup</option>
                      <option>Resting / Stress ECG (TMT)</option>
                      <option>Digital Chest X-Ray Scan</option>
                      <option>Advanced Sugar & Lipid Profiling</option>
                    </select>
                  </div>
                </div>

                {/* Appointment Date */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm font-semibold text-slate-800 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 py-3.5 text-xs font-bold tracking-widest uppercase text-white shadow-xl shadow-emerald-900/10 hover:bg-emerald-800 transition-all"
                >
                  <MessageSquare className="h-4 w-4 fill-white text-emerald-900" />
                  Request via WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}