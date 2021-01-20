import * as React from 'react';
import { ReactNode, ComponentType } from 'react';
import { Container } from '@material-ui/core';

import { TopBar } from 'src/components/TopBar';

interface Props {
  children?: ReactNode;
  component?: ComponentType;
}

export const SignedIn = ({ children, component: C }: Props) => (
  <>
    <TopBar isSignedIn />
    <Container maxWidth="md">
      {children || <C />}
    </Container>
  </>
);
