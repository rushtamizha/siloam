// data.js
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
  { label: "Contact", href: "/contact" },
];