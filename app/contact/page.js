"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert 
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    modality: "Blood Test Profile",
    message: ""
  });

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const SiloamSupportLine = "919999999999"; // Your central operations support line
    
    const structuredMessage = 
      `*Siloam BENGALURU - GENERAL ENQUIRY DISPATCH*\n` +
      `----------------------------------------\n` +
      `• *Patient/Enquirer Name:* ${formData.name}\n` +
      `• *Contact No:* ${formData.phone}\n` +
      `• *Email Address:* ${formData.email || "Not Provided"}\n` +
      `• *Service Area:* ${formData.modality}\n` +
      `• *Enquiry Details:* ${formData.message}\n` +
      `----------------------------------------\n` +
      `Please route to an available coordinator immediately.`;

    window.open(`https://wa.me/${SiloamSupportLine}?text=${encodeURIComponent(structuredMessage)}`, "_blank");
  };

  return (
    <main className="w-full bg-white text-slate-800 pt-28 pb-16 selection:bg-emerald-50 selection:text-emerald-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/60 px-4 py-1.5 text-xs font-bold text-emerald-900 uppercase tracking-widest">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Direct Support Hub
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
            Contact Our <span className="text-emerald-900">Bengaluru Desk</span>
          </h1>
          <p className="text-base font-semibold leading-relaxed text-slate-500 max-w-2xl">
            Have a question about a prescription or coverage areas? Submit your medical enquiry below, and our central coordination desk will assist you instantly.
          </p>
        </div>

        {/* CORE INTERFACE GRID */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: METADATA & MAPS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-[2rem] border border-slate-100 bg-slate-50/40 p-7 space-y-6">
              <h3 className="text-lg font-black text-slate-900 tracking-tight border-b border-slate-200/60 pb-3">
                Operational Operations
              </h3>
              
              <ul className="space-y-4 text-xs sm:text-sm font-semibold text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-slate-900">Coverage Location</p>
                    <p className="text-xs text-slate-500 mt-0.5">Serving all major sectors across Bengaluru, KA, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-slate-900">Central Helpline</p>
                    <a href="tel:+919999999999" className="text-xs text-slate-500 mt-0.5 block hover:text-emerald-600 transition-colors">+91 99999 99999</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-slate-900">Email Correspondence</p>
                    <a href="mailto:support@Siloam.in" className="text-xs text-slate-500 mt-0.5 block hover:text-emerald-600 transition-colors">support@Siloam.in</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-slate-900">Desk Timings</p>
                    <p className="text-xs text-slate-500 mt-0.5">Mon - Sun: 06:00 AM - 09:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* STYLIZED EMBEDDED MAP PANEL */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-900 pl-2">
                Central Operations Coverage Grid
              </h4>
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] border border-slate-200/80 shadow-sm bg-slate-50">
                <iframe
                  title="Siloam Hub Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.823620257602!2d79.2655122!3d12.983130499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad496fcc633953%3A0x3e0a8699162691e4!2sSiloam%20diagnostic!5e0!3m2!1sen!2sin!4v1782299531860!5m2!1sen!2sin"
                  className="absolute inset-0 h-full w-full border-0  transition-all duration-500"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-CONVERSION ENQUIRY FORM */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,96,57,0.03)]"
            >
              <div className="mb-6 border-b border-slate-100 pb-4">
                <h3 className="text-xl font-black tracking-tight text-slate-900">
                  Submit Diagnostic <span className="text-emerald-800">Enquiry Form</span>
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                  Est. Response Window: 10 Minutes
                </p>
              </div>

              <form onSubmit={handleEnquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 px-4 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile line"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 px-4 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 px-4 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                {/* Modality Core Selection */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Subject Modality</label>
                  <select
                    value={formData.modality}
                    onChange={(e) => setFormData({...formData, modality: e.target.value})}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 py-3 px-4 text-sm font-semibold text-slate-800 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all"
                  >
                    <option>Blood Test Profile Query</option>
                    <option>Bedside ECG System Setup</option>
                    <option>Portable Digital X-Ray Processing</option>
                    <option>Corporate Health Tie-ups</option>
                    <option>Other Operational Support</option>
                  </select>
                </div>

                {/* Message Context text area */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Message / Prescription Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your tests or specific home arrangement instructions..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 px-4 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:border-emerald-800 focus:bg-white focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Dispatch Trigger Button */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 py-4 text-xs font-black tracking-widest uppercase text-white shadow-xl shadow-emerald-900/10 hover:bg-emerald-800 transition-all"
                  >
                    <MessageSquare className="h-4 w-4 fill-white text-emerald-900" />
                    Dispatch Enquiry To WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <ShieldAlert className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600" /> Siloam Encrypted Communications Node
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}