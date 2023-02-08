import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from 'src/common/locales/en/translation.json';
import translationTR from 'src/common/locales/tr/translation.json';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const getLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('language');

    return value !== null ? JSON.parse(value) : null;
  } catch(e) {
    console.log(e);

    return 'en'
  }
}

const storageLanguage = getLanguage();
const storageLanguageStatus = storageLanguage === 'tr' || storageLanguage === 'en';

const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  }
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  //   .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: storageLanguageStatus ? storageLanguage : 'en',
    debug: false,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
