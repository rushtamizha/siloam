"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, HeartPulse, ShieldAlert, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "NABL-Certified Partner Labs",
    desc: "Your samples are processed exclusively in gold-standard, fully accredited NABL laboratories ensuring absolute clinical accuracy and reliability.",
    icon: <Award className="h-6 w-6" />,
    badge: "Quality Guaranteed"
  },
  {
    title: "Certified & Gentle Phlebotomists",
    desc: "Our highly trained medical technicians specialize in gentle, hygienic care—ensuring a painless, stress-free experience for senior citizens and children alike.",
    icon: <ShieldCheck className="h-6 w-6" />,
    badge: "Expert Care"
  },
  {
    title: "100% Doorstep Convenience",
    desc: "Skip traffic, crowded clinics, and long waiting rooms. We bring premium hospital-grade diagnostic infrastructure right to your bedroom.",
    icon: <HeartPulse className="h-6 w-6" />,
    badge: "Zero Hassle"
  },
  {
    title: "Rapid Digital Report Delivery",
    desc: "Get your secure, digitized medical records delivered straight to your WhatsApp and email within hours of sample processing.",
    icon: <Clock className="h-6 w-6" />,
    badge: "Fast Turnaround"
  }
];

export default function WhyChooseUs() {
  // Framer Motion Animation Settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 }
    }
  };

  return (
    <section id="why-choose-us" className="relative w-full bg-white py-0 ">
      
      {/* Subtle Medical Graphic Grid Accents */}
      <div className="absolute top-40 left-0 -z-10 h-72 w-72 rounded-full bg-emerald-50/60 blur-3xl" />
      <div className="absolute bottom-20 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-50/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER ARCHITECTURE */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/50 px-4 py-1.5 text-xs font-bold text-emerald-900 uppercase tracking-widest">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Safety First. Accuracy Always.
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900  ">
            Why Bengaluru Trusts <span className="text-emerald-900">Siloam</span>
          </h2>
          <p className="text-base font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We are committed to redefining home diagnostics through professional integrity, rigorous clinical safety, and unmatched customer convenience.
          </p>
        </div>

        {/* 4-COLUMN FEATURE GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-200/60 bg-slate-50/30 p-6 transition-all duration-300 hover:border-emerald-800/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,96,57,0.04)]"
            >
              <div>
                {/* Icon Shell */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-900 border border-slate-200/60 shadow-sm transition-all group-hover:bg-emerald-900 group-hover:text-white group-hover:border-emerald-900">
                  {pillar.icon}
                </div>

                {/* Text Content */}
                <div className="mt-6 space-y-2">
                  <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase block">
                    {pillar.badge}
                  </span>
                  <h3 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold leading-relaxed text-slate-500">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Branding Accent Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1">
                  Siloam Verified Desk <ShieldAlert className="h-3 w-3 text-emerald-600 fill-emerald-600" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}