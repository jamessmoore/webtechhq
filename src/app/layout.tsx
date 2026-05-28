import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "WebTechHQ",
  description: "WebTechHQ — where web technology meets the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} h-full`}>
      <body className="blade-bg min-h-full flex flex-col">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
