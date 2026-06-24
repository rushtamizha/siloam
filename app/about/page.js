"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Heart, 
  CheckCircle2, 
  Activity, 
  ArrowRight,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50,000+", label: "Samples Collected", desc: "Across major sectors in Bengaluru" },
  { value: "100%", label: "NABL Accredited", desc: "Processed via gold-standard labs" },
  { value: "4.9 / 5", label: "Google Rating", desc: "Trusted by families and senior citizens" },
  { value: "15 Mins", label: "Average Setup Time", desc: "Quick, painless doorstep procedures" },
];

const coreValues = [
  {
    title: "Clinical Integrity First",
    desc: "We never compromise on accuracy. By routing samples exclusively to accredited NABL partner labs, we ensure hospital-grade diagnostic metrics.",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Empathy in Care",
    desc: "Our phlebotomists are specially certified in geriatric and pediatric care, bringing a gentle, patient-first approach to your bedside.",
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: "Radical Transparency",
    desc: "No hidden logistics surcharges, no unexpected premiums. Transparent healthcare updates tracked via real-time WhatsApp dispatch counters.",
    icon: <ShieldCheck className="h-6 w-6" />
  }
];

export default function AboutPage() {
  // Animation Keyframes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
  };

  return (
    <main className="w-full bg-white text-slate-800 selection:bg-emerald-50 selection:text-emerald-900 pt-28">
      
      {/* SECTION 1: HERO MISSION STATEMENT */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-emerald-50/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-emerald-50/40 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/60 px-4 py-1.5 text-xs font-bold text-emerald-900 uppercase tracking-widest">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              Redefining At-Home Healthcare
            </div>
            
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Healthcare That Comes to You. <span className="text-emerald-900">Accurate & Effortless.</span>
            </h1>
            
            <p className="text-base sm:text-lg font-semibold leading-relaxed text-slate-500 max-w-2xl">
              At siloam Diagnostics (Siloam), we believe that accessing reliable clinical insight shouldn't require long waiting rooms, traffic stress, or crowded hospital queues. We bring premium medical diagnostics straight to your doorstep across Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: METRIC HIGHLIGHTS COUNTER */}
      <section className="w-full border-y border-slate-100 bg-slate-50/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1 text-center lg:text-left border-l border-slate-200 pl-6 first:border-0 first:pl-0">
                <p className="text-3xl font-black tracking-tight text-emerald-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-xs font-black text-slate-800 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-[11px] font-semibold text-slate-400">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DEEP STORY ARCHITECTURE */}
      <section className="w-full py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
                Our Narrative
              </span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl leading-tight">
                The Story Behind <span className="text-emerald-900">siloam Diagnostics</span>
              </h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                Siloam Operations Hub <Activity className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
              </p>
            </div>

            <div className="lg:col-span-7 text-sm font-semibold text-slate-500 space-y-6 leading-relaxed">
              <p>
                Siloam was founded in Bengaluru with a clear purpose: to bridge the gap between world-class laboratory diagnostic validation and extreme physical accessibility. We witnessed senior citizens dealing with stressful early-morning traffic just for routine fasting blood draws, and families waiting endlessly in sterile clinical waiting areas for basic bedside updates.
              </p>
              <p className="border-l-4 border-emerald-800 pl-4 py-1 text-slate-800 font-bold italic bg-emerald-50/40 rounded-r-2xl">
                "Our core thesis is uncompromised healthcare symmetry. A patient at home deserves the exact same precision index as a patient walking into a premier diagnostic facility center."
              </p>
              <p>
                Today, Siloam functions as a premier technology-enabled collection grid. We manage specialized medical technicians equipped with advanced temperature-controlled validation systems, ensuring sample preservation meets rigid clinical parameters. Every single draw is matched directly with fully independent NABL partner channels, ensuring reports remain completely objective, fast, and secure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PILLARS & VALUES */}
      <section className="w-full bg-slate-50/40 border-t border-slate-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-2xl text-center space-y-3 mb-16">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              The Principles That <span className="text-emerald-900">Guide Us</span>
            </h2>
            <p className="text-xs font-semibold text-slate-500 leading-relaxed">
              Every logistics dispatch, laboratory check, and patient conversation runs on strict medical and ethical standards.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group rounded-[2rem] border border-slate-200/70 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all hover:border-emerald-800/20 hover:shadow-[0_20px_50px_rgba(0,96,57,0.04)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-100 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-black tracking-tight text-slate-900 group-hover:text-emerald-900 transition-colors">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 5: FINAL BOOKING CONVERSION CTA */}
      <section className="w-full bg-emerald-900 text-white py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f5335_1px,transparent_1px),linear-gradient(to_bottom,#0f5335_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 space-y-6 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Experience Hassle-Free At-Home Diagnostics
          </h2>
          <p className="text-sm font-semibold text-emerald-100 max-w-xl mx-auto leading-relaxed opacity-90">
            Schedule a certified Siloam medical representative to handle your blood tests, bedside ECG, or portable digital X-ray today.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-black tracking-widest uppercase text-emerald-950 shadow-xl transition-all hover:bg-emerald-50 hover:scale-105 active:scale-95"
            >
              Book Home Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-emerald-900" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}