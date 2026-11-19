import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vallabh Dental Care | Best Dentist in Gomti Nagar, Lucknow",
  description: "Vallabh Dental Care is a premium dental clinic in Sector 6, Gomti Nagar, Lucknow. We offer advanced general, cosmetic, and surgical dental treatments. Book your appointment today!",
  keywords: ["Dr. Medha Upadhyay", "Best Dentist in Gomti Nagar", "Dental Clinic in Sector 6 Gomti Nagar", "Top Dentist in Khargapur", "Dentist in Lucknow", "Vallabh Dental Care"],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
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
