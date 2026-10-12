import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "NinjaTech Guys | Web Applications & Technology Consulting",
  description:
    "NinjaTech Guys builds high-performance business websites, custom web applications, thoughtful UI/UX systems, and scalable technology strategies.",
  keywords: [
    "NinjaTech Guys",
    "web development",
    "custom web applications",
    "UI UX design",
    "technology consulting",
    "Valenzuela City",
  ],
  openGraph: {
    title: "NinjaTech Guys",
    description: "Turning ideas into powerful tech solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
