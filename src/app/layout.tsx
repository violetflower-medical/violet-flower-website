import type { Metadata } from "next";
import { Inter, Outfit, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Violet Flower | Medical Equipment & Diagnostics",
  description: "Leading providers of premium medical diagnostic equipment and clinical solutions for modern healthcare facilities.",
  keywords: ["medical equipment", "diagnostic equipment", "MRI scanner", "ultrasound machine", "hospital technology", "clinical solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${cairo.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
