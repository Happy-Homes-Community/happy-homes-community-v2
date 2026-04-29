import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Homes Community",
    description: "Empowering families with care, support, and community connection",
    openGraph: {
        title: "Happy Homes Community",
        description: "Empowering families with care, support, and community connection.",
        url: "https://www.happyhomescommunity.org.uk",
        siteName: "Happy Homes Community",
        images: [
            {
                url: "/logos/hh-logo-full.png",
                width: 1200,
                height: 630,
                alt: "Happy Homes Community Logo",
            },
        ],
        locale: "en_GB",
        type: "website",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
