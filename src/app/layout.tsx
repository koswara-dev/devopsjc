import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from '../components/I18nProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devops.juaracoding.com'), // Add your actual domain here
  title: {
    default: "DevOps Juaracoding - Master DevOps Skills",
    template: "%s | DevOps Juaracoding",
  },
  description: "Buka kekuatan pengembangan perangkat lunak modern dengan kursus DevOps komprehensif kami. Pelajari CI/CD, Docker, Kubernetes, Cloud, dan banyak lagi!",
  keywords: ["DevOps", "Juaracoding", "CI/CD", "Docker", "Kubernetes", "Cloud Computing", "Software Development", "DevOps Training", "IT Courses"],
  openGraph: {
    title: "DevOps Juaracoding - Master DevOps Skills",
    description: "Buka kekuatan pengembangan perangkat lunak modern dengan kursus DevOps komprehensif kami. Pelajari CI/CD, Docker, Kubernetes, Cloud, dan banyak lagi!",
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
    description: "Buka kekuatan pengembangan perangkat lunak modern dengan kursus DevOps komprehensif kami. Pelajari CI/CD, Docker, Kubernetes, Cloud, dan banyak lagi!",
    images: ["/images/hero-orange.jpg"], // Replace with a suitable Twitter card image
  },
  icons: {
    icon: "/images/favicon.png",
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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
