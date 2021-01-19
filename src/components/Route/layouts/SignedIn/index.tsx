import * as React from 'react';
import { ReactNode, ComponentType } from 'react';

import { TopBar } from 'src/components/TopBar';

interface Props {
  children?: ReactNode;
  component?: ComponentType;
}

export const SignedIn = ({ children, component: C }: Props) => (
  <>
    <TopBar />
    {children || <C />}
  </>
);
