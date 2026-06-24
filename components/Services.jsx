"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Activity, Layers, Scan, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

// Native Swiper styles for layout configuration
import "swiper/css";
import "swiper/css/pagination";

// Card Data with corresponding high-resolution diagnostic images
const servicesList = [
  {
    title: "Blood Test Services",
    desc: "From routine fasting glucose and lipid panels to full-body executive metabolic profiles. Safe, highly hygienic sample collection at your convenience.",
    image: "/heroImages/siloam-diagnostics-home-blood-sample-collection-elderly-patient-india.webp",
    icon: <Layers className="h-5 w-5" />,
    badge: "Hygienic Home Sampling"
  },
  {
    title: "Bedside ECG Service",
    desc: "12-Lead automated resting ECG scans carried out comfortably on your bed by certified phlebotomists with instant cloud cardiology processing.",
    image: "/heroImages/portable-xray-service-at-home-elderly-patient-india-siloam-diagnostics.webp", 
    icon: <Activity className="h-5 w-5" />,
    badge: "Instant Cardiology Review"
  },
  {
    title: "Digital X-Ray Service",
    desc: "Advanced low-radiation chest and structural bone radiology brought directly to your doorstep using cutting-edge, mobile digital equipment.",
    image: "/heroImages/portable-xray-service-at-home-elderly-patient-india-siloam-diagnostics.webp",
    icon: <Scan className="h-5 w-5" />,
    badge: "Doorstep Portable Radiology"
  }
];

export default function Services() {

  // WhatsApp Routing Event Handler
  const handleWhatsAppBooking = (serviceTitle) => {
    // Replace with your clinic's business mobile line (include country code, omit spaces/plus sign)
    const companyWhatsAppNumber = "919999999999"; 
    
    const messageText = 
      `*SILOAM DIAGNOSTICS - HOME SERVICE DESK*\n` +
      `----------------------------------------\n` +
      `I would like to schedule an at-home booking for:\n` +
      `• *Requested Modality:* ${serviceTitle}\n\n` +
      `Please check available time slots for Vellore. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${companyWhatsAppNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="services" className="relative w-full bg-white py-10">
      {/* Decorative Subtle Background Gradients */}
      <div className="absolute top-12 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-100/20 blur-3xl" />
      <div className="absolute bottom-12 left-0 -z-10 h-72 w-72 rounded-full bg-emerald-100/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/50 px-4 py-1.5 text-xs font-bold text-emerald-900 uppercase tracking-widest">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Fast. Simple. Reliable. The Siloam Way.
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Our Core <span className="text-emerald-900">Services in Vellore</span>
          </h2>
          <p className="text-base font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
            At Apollo Diagnostics (Siloam), we bring trusted healthcare services straight to your doorstep, making diagnostics simple, safe, and convenient. Our popular at-home options ensure accurate and timely results from NABL-certified partner labs.
          </p>
        </div>

        {/* SWIPER IMAGE CARD GRID LAYER */}
        <div className="mt-10 w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".services-swiper-pagination" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3, allowTouchMove: false } // Autolocks grid cleanly on desktop width screens
            }}
            className="w-full !pb-14"
          >
            {servicesList.map((service, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="group relative flex h-[400px] flex-col justify-end overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white p-6 transition-all duration-300 hover:border-emerald-800/20 hover:shadow-lg">
                  
                  {/* CARD IMAGE CANVAS */}
                  <div className="absolute left-0 -top-25 z-0 h-full w-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Seamless White Fade Gradient Mask (Clinical Look) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />
                  </div>

                  {/* CONTENT INTERFACE OVERLAY */}
                  <div className="relative z-20 w-full space-y-2">
                    {/* Header Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-100">
                        {service.icon}
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-slate-200/60 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-slate-500 shadow-sm">
                        <MapPin className="h-3 w-3 text-emerald-800" /> Vellore
                      </span>
                    </div>

                    {/* Metadata & Description */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase">
                        {service.badge}
                      </span>
                      <h3 className="text-xl font-black tracking-tight text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold leading-relaxed text-slate-500">
                        {service.desc}
                      </p>
                    </div>

                    {/* Action Route Trigger (Replaced Link with custom button handler) */}
                    <div className="pt-2 border-t border-slate-100">
                      <button
                        onClick={() => handleWhatsAppBooking(service.title)}
                        className="flex w-full items-center justify-between text-xs font-bold text-slate-800 transition-colors hover:text-emerald-900 focus:outline-none"
                      >
                        <span>Schedule Booking via WhatsApp</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 group-hover:bg-emerald-900 transition-colors">
                          <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                      </button>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dynamic Swiper Pagination Bullet Interface */}
          <div className="services-swiper-pagination flex justify-center gap-2 mt-4 !relative !bottom-0" />
        </div>

      </div>
    </section>
  );
}