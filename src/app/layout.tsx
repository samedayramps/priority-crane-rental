import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priority Crane Rentals - Pittsburgh's Trusted Crane Rental Experts",
  description: "Professional crane rental services in Pittsburgh and the East Coast. Available 24/7 with expert operators and equipment from 30 to 500 tons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen bg-white pt-16 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
