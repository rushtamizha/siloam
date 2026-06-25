// data.js

import { Droplets, Activity, Scan, PawPrint, Stethoscope } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      {
        label: "Blood Test",
        href: "/#services",
        // subDropdown: [
        //   { label: "Resting ECG", href: "/services/ecg/resting" },
        //   { label: "Stress ECG (TMT)", href: "/services/ecg/stress" },
        //   { label: "Holter Monitoring", href: "/services/ecg/holter" },
        // ],
      },
      {
        label: "X-ray",
        href: "/#services",
        // subDropdown: [
        //   { label: "Digital X-Ray", href: "/services/xray/digital" },
        //   { label: "Chest X-Ray", href: "/services/xray/chest" },
        //   { label: "Ultrasound (USG)", href: "/services/ultrasound" },
        // ],
      },
      {
        label: "ECG - Electrocardiogram",
        href: "/#services",
        // subDropdown: [
        //   { label: "Full Body Checkup", href: "/services/blood/full-body" },
        //   { label: "Diabetes Profile", href: "/services/blood/diabetes" },
        //   { label: "Lipid/Cholesterol Panel", href: "/services/blood/lipid" },
        // ],
      },
      {
        label: "Horse X-Ray ",
        href: "/#services",
        // subDropdown: [
        //   { label: "Full Body Checkup", href: "/services/blood/full-body" },
        //   { label: "Diabetes Profile", href: "/services/blood/diabetes" },
        //   { label: "Lipid/Cholesterol Panel", href: "/services/blood/lipid" },
        // ],
      },
      {
        label: "Veterinary X-Ray ",
        href: "/#services",
        // subDropdown: [
        //   { label: "Full Body Checkup", href: "/services/blood/full-body" },
        //   { label: "Diabetes Profile", href: "/services/blood/diabetes" },
        //   { label: "Lipid/Cholesterol Panel", href: "/services/blood/lipid" },
        // ],
      },
    ],
  },
//   {
//     label: "For Patients",
//     href: "#",
//     dropdown: [
//       { label: "Book a Test", href: "/booking" },
//       { label: "Download Reports", href: "/reports" },
//       { label: "Home Collection", href: "/home-sample" },
//       { label: "Insurance & TPA", href: "/insurance" },
//     ],
//   },
 { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Testimonials", href: "/#testimonials" },
  
  { label: "About Us", href: "/about" },
];

 export const servicesList = [
  {
    title: "Blood Test Services",
    desc:
      "From routine fasting glucose and lipid panels to comprehensive executive metabolic profiles. Our NABL-certified phlebotomists visit your home with individually sealed, sterile collection kits — ensuring zero cross-contamination and lab-grade sample integrity from your doorstep.",
    image:
      "/heroImages/siloam-diagnostics-home-blood-sample-collection-elderly-patient-india.webp",
    icon: <Droplets className="h-5 w-5" />,
    badge: "NABL-Certified Home Collection",
  },
 
  {
    title: "Bedside ECG Service",
    desc:
      "Hospital-grade 12-lead resting ECG performed at your bedside by certified cardiac technicians. Recordings are uploaded instantly to our cloud cardiology platform, reviewed by a senior cardiologist, and delivered as a signed digital report — typically within 2 hours of the visit.",
    image:
      "/heroImages/home-ecg-test-service-elderly-patient-india-siloam-diagnostics.webp", // ← replace path
    icon: <Activity className="h-5 w-5" />,
    badge: "2-Hour Cardiologist Report",
  },
 
  {
    title: "Digital X-Ray Service",
    desc:
      "Mobile CR/DR digital radiography brought directly to your home. Low-radiation chest, spine, and orthopaedic imaging using compact, clinical-grade equipment. DICOM-standard images are shared instantly via your hospital portal or WhatsApp for same-day radiologist review.",
    image:
      "/heroImages/portable-xray-service-at-home-elderly-patient-india-siloam-diagnostics.webp",
    icon: <Scan className="h-5 w-5" />,
    badge: "Same-Day DICOM Radiology",
  },
 
  {
    title: "Portable X-Ray for Horses",
    desc:
      "Specialist equine digital radiography deployed to stud farms, race tracks, and private stables. Our mobile DR units produce high-resolution limb, hoof, cervical, and thoracic images on-site — giving your equine vet the imaging quality needed for rapid lameness, fracture, and injury diagnosis in the field.",
    image:
      "/heroImages/portable-x-ray-for-horses-in-india.webp",
    icon: <PawPrint className="h-5 w-5" />,
    badge: "On-Site Equine Radiology",
  },
  {
    title: "Veterinary X-Ray Service",
    desc:
      "Portable digital X-ray for small and large animals — dogs, cats, birds, rabbits, and livestock. Our veterinary imaging technicians work alongside your clinic vet or home vet for in-situ bone, thoracic, and abdominal studies, minimising patient stress and eliminating the need for a hospital visit.",
    image:
      "/heroImages/portable-x-ray-for-dogs-and-cats.webp", // ← replace with vet/pet image
    icon: <Stethoscope className="h-5 w-5" />,
    badge: "Low-Stress Pet Imaging",
  },
];


export const faqData = [
  {
    question: "Do you provide blood test sample collection at home?",
    answer:
      "Yes. Our trained phlebotomists collect blood samples from your home using sterile, single-use collection kits. Samples are safely transported to NABL-accredited laboratories for accurate testing and reporting."
  },

  {
    question: "How do I book a home blood test, ECG, or X-ray service?",
    answer:
      "You can book through our website, WhatsApp, or by calling our support team. Once your request is received, our team will confirm the appointment and arrange a convenient visit to your location."
  },

  {
    question: "Are your laboratory partners NABL accredited?",
    answer:
      "Yes. All diagnostic samples are processed through trusted NABL-accredited laboratories to ensure high standards of accuracy, quality control, and reliable test results."
  },

  {
    question: "How soon will I receive my blood test reports?",
    answer:
      "Most routine blood test reports are delivered within a few hours to 24 hours. Specialized tests may require additional processing time depending on the investigation requested."
  },

  {
    question: "Do you provide ECG tests at home?",
    answer:
      "Yes. We offer bedside 12-lead ECG services performed by trained technicians using hospital-grade equipment. Reports are reviewed by qualified cardiologists and shared digitally."
  },

  {
    question: "How long does it take to receive an ECG report?",
    answer:
      "Most ECG reports are delivered within 2 hours of the test. In urgent situations, reports can be prioritized for faster review by our cardiology team."
  },

  {
    question: "Do you offer portable digital X-ray services at home?",
    answer:
      "Yes. Our mobile digital X-ray units can perform chest, spine, orthopedic, and other radiology examinations at home, reducing the need for hospital visits."
  },

  {
    question: "Are home X-rays safe?",
    answer:
      "Absolutely. Our portable digital radiography systems use low-radiation technology and follow strict safety protocols to ensure patient safety while maintaining diagnostic image quality."
  },

  {
    question: "Do you provide veterinary X-ray services for pets?",
    answer:
      "Yes. We provide portable digital X-ray services for dogs, cats, birds, rabbits, and other pets. Imaging can be performed at veterinary clinics or at the animal's location when required."
  },

  {
    question: "Do you offer portable X-ray services for horses?",
    answer:
      "Yes. Our equine radiography service provides high-resolution digital imaging for horses at stables, farms, race tracks, and training facilities, supporting rapid diagnosis of injuries and lameness issues."
  },

  {
    question: "Which areas do you serve for home diagnostic services?",
    answer:
      "We provide doorstep blood testing, ECG, and portable X-ray services across Chennai and surrounding regions. Contact our team to confirm service availability in your area."
  },

  {
    question: "Do I need a doctor's prescription for a home diagnostic test?",
    answer:
      "Many routine blood tests can be booked directly. However, certain specialized tests, ECGs, or X-ray examinations may require a valid doctor's prescription based on medical guidelines."
  }
];

export const slideBackgrounds = [
  {
    image: "/heroImages/siloam-diagnostics-home-blood-sample-collection-elderly-patient-india.webp",
    title: "Blood Tests at Home for Seniors & Families",
    tagline: "Siloam Diagnostics Care",
    desc: "Skip the travel and long waiting times. Our trained sample collection professionals visit your home to collect blood samples safely and hygienically. Enjoy accurate diagnostics, fast reports, and comfortable healthcare services right at your doorstep."
  },
  {
    image: "/heroImages/portable-xray-service-at-home-elderly-patient-india-siloam-diagnostics.webp",
    title: "Professional Digital X-Ray Services at Your Doorstep",
    tagline: "Portable X-Ray Service at Home",
    desc: "Receive accurate and convenient X-ray imaging without visiting a hospital. Our trained radiology technicians bring portable digital X-ray equipment to your home, providing safe, reliable, and comfortable diagnostic care."
  },
  {
    image: "/heroImages/home-ecg-test-service-elderly-patient-india-siloam-diagnostics.webp",
    title: "Accurate ECG Testing at Home for Seniors & Families",
    tagline: "Home ECG Service Available",
    desc: "Monitor your heart health without leaving home. Our trained healthcare professionals provide safe and reliable ECG testing at your doorstep using advanced diagnostic equipment, ensuring comfort, convenience, and timely reports."
  },
  {
    image: "/heroImages/portable-x-ray-for-horses-in-india.webp",
    title: "Portable Digital X-Ray Services for Horses",
    tagline: "Equine Diagnostic Imaging",
    desc: "Advanced portable X-ray solutions for horses at stables, farms, and equestrian facilities. Our veterinary imaging team delivers fast, accurate diagnostic scans to support injury assessment, lameness evaluation, and preventive healthcare."
  },
  {
    image: "/heroImages/portable-x-ray-for-dogs-and-cats.webp",
    title: "Veterinary X-Ray Services for Pets & Livestock",
    tagline: "Animal Diagnostic Imaging",
    desc: "Portable digital X-ray services for dogs, cats, birds, rabbits, goats, cattle, and other animals. Our veterinary diagnostic team provides high-quality imaging at clinics, farms, shelters, and homes for quick and accurate diagnosis."
  }
];