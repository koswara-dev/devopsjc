"use client";

import Image from "next/image";
import { CloudIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      {/* Language Switcher */}
      <div className="absolute top-0 right-0 p-4 md:p-8">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
          className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
        >
          <option value="en">English</option>
          <option value="id">Bahasa Indonesia</option>
        </select>
      </div>

      {/* Header/Logo Section */}
      <header className="absolute top-0 left-0 p-4 md:p-8 flex items-center space-x-2 md:space-x-3">
        <CloudIcon className="h-8 w-8 md:h-10 md:w-10 text-orange-600" />
        <h1 className="text-xl md:text-3xl font-bold text-orange-700">{t('header_title')}</h1>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center justify-center px-4 py-8 md:p-8 gap-8 md:gap-12 max-w-6xl mx-auto mt-16 md:mt-24">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6">
            {t('hero_title')}
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
            {t('hero_description')}
          </p>
          <a
            href="https://juaracoding.co.id"
            target="_blank"
            className="inline-block bg-orange-600 text-white text-base md:text-lg font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 ease-in-out"
          >
            {t('explore_courses')}
          </a>
        </div>
        <div className="w-full lg:w-1/2 relative h-74">
          <Image
            src="/images/hero-orange.jpg"
            alt="DevOps Team Collaboration"
            fill
            className="rounded-lg shadow-xl object-cover absolute inset-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </main>

      {/* Footer Section (Optional, can be expanded) */}
      <footer className="mt-12 p-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} {t('footer_text')}
      </footer>
    </div>
  );
}
