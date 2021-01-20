import * as React from 'react';
import { ComponentType } from 'react';
import { Route as RouteRD, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import i from 'i18next';

import { useSelector } from 'src/store';
import { SignedIn } from './layouts/SignedIn';
import { Auth } from './layouts/Auth';

export enum Layout {
  SignedIn = 'signed-in',
  Auth = 'auth',
}

interface Props {
  component?: ComponentType;
  path?: string | string[];
  exact?: boolean;
  loginRequired?: boolean;
  layout?: Layout;
}

export const Route = ({
  component: C,
  path,
  exact = false,
  layout = Layout.SignedIn,
  loginRequired = false,
}: Props) => {
  const token = useSelector(s => s.auth?.token);

  if (loginRequired && !token) {
    toast.error(i.t('errors.noLogin'));

    return <Redirect to={'/login'} />;
  }

  const getLayout = (): JSX.Element => {
    switch (layout) {
      case Layout.SignedIn:
        return <SignedIn component={C} />;
      case Layout.Auth:
        return <Auth component={C} />;
    }
  };

  return (
    <RouteRD
      path={path}
      exact={exact}
    >
      {getLayout()}
    </RouteRD>
  );
};
