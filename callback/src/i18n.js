import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_DE } from './languageFiles/german';
import { TRANSLATIONS_EN } from './languageFiles/english';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
     
      en: {
        translation: TRANSLATIONS_EN,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
    },
  });

i18n.changeLanguage('de');
W6