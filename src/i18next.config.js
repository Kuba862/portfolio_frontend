import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18next
  // initialize i18next
  .use(initReactI18next)
  // detect user language
  .use(LanguageDetector)
  // load translation using http -> see /public/locales
  .use(HttpApi)
  // pass the i18n instance to react-i18next
  .init({
    supportedLngs: [
      'pl',
      'en'
    ],
    nonExplicitSupportedLngs: false,
    cleanCode: true,
    fallbackLng: 'en',
    lowerCaseLng: true,
    detection: {
      // order and from where user language should be detected
      order: [
        'path',
        'cookie',
        'navigator',
        'localStorage',
        'subdomain',
        'htmlTag',
      ],
      // keys or params to lookup language from
      caches: ['cookie'],
    },
    // dir to load translation files
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
    initImmediate: false,
    debug: false,
  });

export default i18next;
