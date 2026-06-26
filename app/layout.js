import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.siloamdiagnostics.in"),

  title: {
    default:
      "Siloam Diagnostics Chennai | Blood Test, ECG & Portable X-Ray at Home",
    template: "%s | Siloam Diagnostics Chennai",
  },

  description:
    "Book Blood Tests, ECG, Portable Digital X-Ray, Veterinary X-Ray, and Horse X-Ray services at home in Chennai. NABL-certified partner labs, doorstep diagnostics, same-day reports, and professional healthcare services.",

  keywords: [
    "Blood Test at Home Chennai",
    "Home Blood Collection Chennai",
    "ECG at Home Chennai",
    "Portable X Ray Chennai",
    "Digital X Ray at Home Chennai",
    "Veterinary X Ray Chennai",
    "Horse X Ray Chennai",
    "Home Diagnostics Chennai",
    "NABL Lab Chennai",
    "Senior Citizen Health Checkup Chennai",
    "Pet X Ray Chennai",
    "Animal X Ray Chennai",
    "Doorstep Diagnostics Chennai",
    "Home Healthcare Chennai",
    "Siloam Diagnostics",
  ],

  authors: [
    {
      name: "Siloam Diagnostics",
      url: "https://www.siloamdiagnostics.in",
    },
  ],

  creator: "Siloam Diagnostics",
  publisher: "Siloam Diagnostics",

  category: "Medical Diagnostics",

  alternates: {
    canonical: "https://www.siloamdiagnostics.in",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Siloam Diagnostics Chennai | Blood Test, ECG & Portable X-Ray at Home",
    description:
      "Trusted home diagnostics in Chennai. Blood Tests, ECG, Portable X-Ray, Veterinary X-Ray, and Horse X-Ray services delivered at your doorstep.",
    url: "https://www.siloamdiagnostics.in",
    siteName: "Siloam Diagnostics",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siloam Diagnostics Chennai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Siloam Diagnostics Chennai | Blood Test, ECG & Portable X-Ray",
    description:
      "Doorstep diagnostics in Chennai with NABL-certified partner labs.",
    images: ["/og-image.png"],
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    ICBM: "13.0827,80.2707",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Siloam Diagnostics",
            url: "https://www.siloamdiagnostics.in",
            logo: "https://www.siloamdiagnostics.in/logo.jpg",
            image: "https://www.siloamdiagnostics.in/og-image.png",
            telephone: "+91 9629007513",
            email: "siloamdiagnostic0@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "No.62/4, Panchayat Commercial Complex, Thiruvalam",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              postalCode: "632515",
              addressCountry: "IN",
            },
            areaServed: "Chennai",
            openingHours: "Mo-Su 06:00-21:00",
            priceRange: "₹₹",
            sameAs: [],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Diagnostic Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Blood Test at Home",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "ECG at Home" },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Portable Digital X-Ray",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Veterinary X-Ray Service",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Horse X-Ray Service",
                  },
                },
              ],
            },
          }),
        }}
      />
        <Navbar />
        {children}
        <ContactButton/>
        <Footer />
      </body>
    </html>
  );
}
