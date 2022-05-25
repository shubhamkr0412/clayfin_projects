import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

export const ExampleComponent = () => {
  const { t} = useTranslation();
  

  return (
    <div>
      <p>{t('good')}</p>
    </div>
  );
};
