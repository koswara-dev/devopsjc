import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevOps Juaracoding - Master DevOps Skills",
    template: "%s | DevOps Juaracoding",
  },
  description: "Unlock the power of modern software development with our comprehensive DevOps courses. Learn CI/CD, Docker, Kubernetes, Cloud, and more!",
  keywords: ["DevOps", "Juaracoding", "CI/CD", "Docker", "Kubernetes", "Cloud Computing", "Software Development", "DevOps Training", "IT Courses"],
  openGraph: {
    title: "DevOps Juaracoding - Master DevOps Skills",
    description: "Unlock the power of modern software development with our comprehensive DevOps courses. Learn CI/CD, Docker, Kubernetes, Cloud, and more!",
    url: "https://devops.juaracoding.com", // Replace with actual URL
    siteName: "DevOps Juaracoding",
    images: [
      {
        url: "/images/hero-orange.jpg", // Replace with a suitable Open Graph image
        width: 1200,
        height: 675,
        alt: "DevOps Juaracoding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Juaracoding - Master DevOps Skills",
    description: "Unlock the power of modern software development with our comprehensive DevOps courses. Learn CI/CD, Docker, Kubernetes, Cloud, and more!",
    images: ["/images/hero-orange.jpg"], // Replace with a suitable Twitter card image
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
        {children}
      </body>
    </html>
  );
}
