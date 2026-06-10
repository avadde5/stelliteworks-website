import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stelliteworks.com"),
  title: {
    default: "Stellite Works — SAP Consulting & Implementation, Engineered to Endure",
    template: "%s · Stellite Works",
  },
  description:
    "Stellite Works is an SAP consulting and implementation firm specializing in SAP AMS, S/4HANA, EWM, and FI/CO. We design, build, and harden SAP landscapes that run under pressure — and keep running.",
  keywords: [
    "SAP consulting",
    "SAP implementation",
    "SAP AMS",
    "Application Management Services",
    "S/4HANA",
    "SAP EWM",
    "SAP FI/CO",
    "SAP migration",
  ],
  openGraph: {
    title: "Stellite Works — SAP, Engineered to Endure",
    description:
      "SAP AMS, S/4HANA, EWM, and FI/CO — implementation and managed services for landscapes that can't go down.",
    type: "website",
    siteName: "Stellite Works",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
