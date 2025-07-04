import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'id',
    lng: 'id', // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        common: (await import('../public/locales/en/common.json')).default,
      },
      id: {
        common: (await import('../public/locales/id/common.json')).default,
      },
    },
  });

export default i18n;
