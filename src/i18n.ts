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
        common: require('../public/locales/en/common.json'),
      },
      id: {
        common: require('../public/locales/id/common.json'),
      },
    },
  });

export default i18n;
