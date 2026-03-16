import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import MobileStickyCTA from "../components/MobileStickyCTA";
import ExitIntent from "../components/ExitIntent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santoshhomeopathicclinic.in"),
  title: {
    default: "Santosh Homeopathic Clinic | Dr. Amit Kumar Jatwa BHMS – Muhana, Jaipur",
    template: "%s | Santosh Homeopathic Clinic Jaipur",
  },
  description:
    "Best homeopathic doctor in Muhana, Jaipur – Dr. Amit Kumar Jatwa (BHMS, DNHE). Treats chronic diseases, skin problems, child health, PCOS, anxiety & more. Morning 9–1, Evening 4–8. Call: 8384906044. Free first consultation.",
  keywords: [
    "homeopathic doctor Jaipur",
    "homeopathy clinic Jaipur",
    "best homeopathic doctor Muhana Jaipur",
    "Dr Amit Kumar Jatwa",
    "BHMS doctor Jaipur",
    "Santosh Homeopathic Clinic",
    "homeopathic clinic Muhana",
    "homeopathic doctor Kapurawala road",
    "homeopathic treatment chronic disease Jaipur",
    "homeopathy for skin disease Jaipur",
    "homeopathy for child Jaipur",
    "PCOS treatment homeopathy Jaipur",
    "anxiety depression homeopathy Jaipur",
    "homeopathic medicine Sanganer",
    "natural treatment Jaipur",
    "होम्योपैथिक डॉक्टर जयपुर",
    "होम्योपैथी क्लिनिक मुहाना जयपुर",
  ],
  authors: [{ name: "Dr. Amit Kumar Jatwa", url: "https://santoshhomeopathicclinic.in" }],
  creator: "Dr. Amit Kumar Jatwa",
  publisher: "Santosh Homeopathic Clinic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Santosh Homeopathic Clinic | Dr. Amit Kumar Jatwa – Muhana, Jaipur",
    description:
      "Trusted homeopathic clinic in Muhana, Jaipur. Dr. Amit Kumar Jatwa (BHMS, DNHE) – 4+ years experience, 5000+ patients treated. Book your free consultation: 8384906044.",
    type: "website",
    locale: "en_IN",
    siteName: "Santosh Homeopathic Clinic",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Santosh Homeopathic Clinic Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Homeopathic Clinic | Dr. Amit Kumar Jatwa – Jaipur",
    description: "Best homeopathic doctor in Muhana, Jaipur. Free first consultation. Call: 8384906044.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://santoshhomeopathicclinic.in",
  },
  verification: {
    google: "add-your-google-search-console-verification-code-here",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://santoshhomeopathicclinic.in",
  name: "Santosh Homeopathic Clinic",
  description:
    "Homeopathic clinic in Muhana, Jaipur providing holistic treatment for chronic diseases, skin disorders, child health, women's health and mental wellness.",
  url: "https://santoshhomeopathicclinic.in",
  telephone: "+918384906044",
  email: "amitkumarjatwa82@gmail.com",
  image: "https://santoshhomeopathicclinic.in/doctor.jpeg",
  priceRange: "₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  medicalSpecialty: "Homeopathy",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Siyaram Market, Kapurawala Road",
    addressLocality: "Muhana",
    addressRegion: "Rajasthan",
    postalCode: "302029",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.7918493,
    longitude: 75.7242146,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "16:00",
      closes: "20:00",
    },
  ],
  hasMap: "https://www.google.com/maps?q=26.7918493,75.7242146",
  sameAs: [],
  founder: {
    "@type": "Person",
    name: "Dr. Amit Kumar Jatwa",
    jobTitle: "Homeopathic Physician",
    qualification: "BHMS, DNHE",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
        <MobileStickyCTA />
        <ExitIntent />
      </body>
    </html>
  );
}
