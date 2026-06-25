"use client";

import React from "react";
import Link from "next/link";
import { 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Heart
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-slate-200 bg-white pt-16 pb-8 overflow-hidden">
      
      {/* Structural Subtle Ambient Background Blur */}
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-50/40 blur-3xl" />
      <div className="absolute top-12 left-0 -z-10 h-72 w-72 rounded-full bg-emerald-50/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* UPPER BLOCK: BRAND MATRIX, NAVIGATION LINKS & MAPS */}
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-12 border-b border-slate-100">
          
          {/* COLUMN 1: BRAND SUMMARY */}
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 cursor-pointer group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 shadow-sm">
                <img src="/logo.jpg" className="w-full h-full object-cover rounded-full" alt="logo" />
              </div>
              <div className="flex flex-col justify-center leading-tight">
                <p className="text-base font-black tracking-tight text-slate-900">
                  Siloam<span className="text-emerald-600 font-extrabold ml-0.5">Diagnostics</span>
                </p>
                <p className="text-[8px] font-bold tracking-[0.2em] text-emerald-800/80 uppercase">
                  Fast. Simple. Reliable.
                </p>
              </div>
            </Link>
            
            <p className="text-xs font-semibold leading-relaxed text-slate-500 max-w-sm">
              Bringing gold-standard diagnostic healthcare straight to your doorstep. Partnered exclusively with NABL-accredited laboratories to deliver accurate medical records comfortably at home.
            </p>

            {/* Verification Badges */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-[10px] font-bold text-slate-600 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                NABL Partner Labs
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/60 px-3 py-1 text-[10px] font-bold text-slate-600 shadow-sm">
                <Clock className="h-3.5 w-3.5 text-emerald-600" />
                Fast Turnaround
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINK ACTIONS */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-900">
              Our Modalities
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-500">
              <li>
                <Link href="/#services" className="transition-colors hover:text-emerald-600 flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0 text-emerald-600" />
                  Blood Test Services
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition-colors hover:text-emerald-600 flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0 text-emerald-600" />
                  Bedside ECG Service
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition-colors hover:text-emerald-600 flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0 text-emerald-600" />
                  Digital X-Ray Service
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition-colors hover:text-emerald-600 flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0 text-emerald-600" />
                  Portable X-Ray For Horses
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition-colors hover:text-emerald-600 flex items-center gap-1 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0 text-emerald-600" />
                  Portable X-Ray For Veterinary
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: DIRECT LAB DESK OPERATIONS */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-900">
              Siloam Bangalore Desk
            </h4>
            <ul className="space-y-3 text-xs font-semibold text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>No.62/4, Panchayat commercial complex,<br/> Thiruvalam, Thiruvallam, <br/>Tamil Nadu 632515</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                <a href="tel:+919629007513" className="transition-colors hover:text-emerald-600">+91 9629007513</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-600 shrink-0" />
                <a href="mailto:siloamdiagnostic0@gmail.com" className="transition-colors hover:text-emerald-600">siloamdiagnostic0@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Mon - Sun: 06:00 AM - 09:00 PM</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: EMBEDDED GOOGLE MAP AREA */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-900">
              Coverage Location Map
            </h4>
            <div className="relative h-40 w-full overflow-hidden rounded-[1.5rem] border border-slate-200/80 shadow-sm bg-slate-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.823620257602!2d79.2655122!3d12.983130499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad496fcc633953%3A0x3e0a8699162691e4!2sSiloam%20diagnostic!5e0!3m2!1sen!2sin!4v1782299531860!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0   transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* LOWER BLOCK: COPYRIGHT & LEGAL DISCLAIMER */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] font-semibold text-slate-400">
          <div>
            <p>© {currentYear} Siloam Diagnostics (Siloam). All rights reserved.</p>
            <p className="mt-1 text-[10px] font-medium leading-relaxed max-w-2xl text-slate-400/80">
              Disclaimer: Siloam Diagnostics (Siloam) is a tech-enabled home collection logistics aggregator platform. Samples are strictly evaluated and processed by fully independent, third-party NABL-accredited diagnostic laboratory partners.
            </p>
          </div>
          
          <div className="flex items-center gap-1 shrink-0 text-slate-400/90 font-bold uppercase tracking-wider text-[10px]">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
            <span>in Chennai</span>
          </div>
        </div>

      </div>
    </footer>
  );
}