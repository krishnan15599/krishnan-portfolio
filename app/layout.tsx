import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Krishnan K | Frontend Engineer",
  description: "Product-focused developer crafting omnichannel CRM platforms and enterprise UIs.",
  authors: [{ name: "Krishnan K" }],
  keywords: ["Frontend Developer", "Angular Expert", "React", "SaaS", "Enterprise UI"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#030712] text-white antialiased font-sans selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}