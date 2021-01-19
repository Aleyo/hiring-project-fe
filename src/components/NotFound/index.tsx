import * as React from 'react';
import i from 'i18next';

export const NotFound = () => (
  <>
    <h2 className="account-box__title mt-4">{i.t('notFound.error')}</h2>
    <p className="pt-1">{i.t('notFound.pageNotFound')}</p>
  </>
);
