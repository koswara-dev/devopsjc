"use client";

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n'; // Import your i18n configuration

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
