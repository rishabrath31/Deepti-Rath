import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Deepti Rath | Professional LIC Financial Advisor",
  description: "Secure your future with trusted financial guidance from LIC Agent Deepti Rath. Insurance plans, retirement planning, and expert investment advice.",
  keywords: ["LIC Advisor", "Financial Planning", "Life Insurance", "Retirement Plans", "Tax Saving"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        {/* Footer will be added in page.tsx for now or as a separate component later */}
      </body>
    </html>
  );
}
