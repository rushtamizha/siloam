"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";

const faqData = [
  {
    question: "How do I book a doorstep blood test, X-ray, or ECG with Siloam?",
    answer: "Booking is simple and effortless. You can fill out our Quick Booking form on the website, which instantly routes your request directly to our WhatsApp Desk. Alternatively, you can message or call our support lines directly to confirm your preferred time slot."
  },
  {
    question: "Are your lab testing facilities NABL-accredited?",
    answer: "Yes, absolutely. To guarantee the highest standards of medical accuracy and reliable diagnostics, all samples collected by Siloam Diagnostics are processed exclusively through our network of fully certified NABL partner laboratories."
  },
  {
    question: "How long does it take to get my diagnostic test reports?",
    answer: "Most routine blood test panels and automated ECG reports are processed rapidly and delivered straight to your verified WhatsApp number and email within hours. Specific specialized radiology or pathology scans may take up to 24 hours."
  },
  {
    question: "How should I prepare for a home sample collection?",
    answer: "Preparation depends on the prescribed test. For full-body health checks or lipid panels, a standard 8 to 12-hour overnight fast is usually required. For ECG and portable digital X-ray services, ensure the patient is wearing loose, comfortable clothing."
  },
  {
    question: "Is there an additional premium charge for home collection services in Bengaluru?",
    answer: "At Siloam, we believe in transparent pricing with zero hidden charges. Our core mission is to make healthcare accessible and affordable, so our home care phlebotomy and diagnostic visits are kept highly competitive alongside partner lab rates."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      
      {/* Subtle Structural Background Accent Blur */}
      <div className="absolute top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-emerald-50/50 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 -z-10 h-80 w-80 rounded-full bg-emerald-50/40 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/50 px-4 py-1.5 text-xs font-bold text-emerald-900 uppercase tracking-widest">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Clear Answers. Instant Information.
          </div>
          <h2 className="text-2xl font-black  text-slate-900 ">
            Frequently Asked <span className="text-emerald-900">Questions</span>
          </h2>
          <p className="text-base font-medium text-slate-500 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our home diagnostic services, reporting timelines, and laboratory safety protocols.
          </p>
        </div>

        {/* ACCORDION WRAPPER */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-emerald-800/30 bg-emerald-50/20 shadow-[0_15px_40px_rgba(0,96,57,0.02)]" 
                    : "border-slate-200/70 bg-slate-50/30 hover:border-slate-300 hover:bg-slate-50/60"
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`h-5 w-5 mt-0.5 shrink-0 transition-colors ${isOpen ? "text-emerald-900" : "text-slate-400"}`} />
                    <span className={`text-sm sm:text-base font-black tracking-tight transition-colors ${isOpen ? "text-emerald-900" : "text-slate-800"}`}>
                      {item.question}
                    </span>
                  </div>
                  
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? "border-emerald-800/20 bg-emerald-800 text-white rotate-180" : "border-slate-200 bg-white text-slate-400"}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Answer Box Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: { height: { duration: 0.25 }, opacity: { duration: 0.2 } }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.2 }, opacity: { duration: 0.15 } }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-14 border-t border-dashed border-slate-200/60 pt-4 text-xs sm:text-sm font-semibold leading-relaxed text-slate-500">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}