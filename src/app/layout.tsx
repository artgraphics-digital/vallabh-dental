import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vallabhdental.in"),
  title: "Vallabh Dental Care | Best Dentist in Gomti Nagar, Lucknow",
  description: "Vallabh Dental Care is a premium dental clinic in Sector 6, Gomti Nagar, Lucknow. We offer advanced general, cosmetic, and surgical dental treatments. Book your appointment today!",
  keywords: ["Dr. Medha Upadhyay", "Best Dentist in Gomti Nagar", "Dental Clinic in Sector 6 Gomti Nagar", "Top Dentist in Khargapur", "Dentist in Lucknow", "Vallabh Dental Care"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vallabhdental.in",
    siteName: "Vallabh Dental Care",
    title: "Vallabh Dental Care | Best Dentist in Gomti Nagar, Lucknow",
    description: "Vallabh Dental Care is a premium dental clinic in Sector 6, Gomti Nagar, Lucknow led by Dr. Medha Upadhyay. Advanced, hygienic, and pain-free dental treatments.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Vallabh Dental Care Clinic Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vallabh Dental Care | Best Dentist in Gomti Nagar, Lucknow",
    description: "Advanced, hygienic, and pain-free dental treatments in Sector 6, Gomti Nagar, Lucknow.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon-192x192.png",
    apple: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-slate-900 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
