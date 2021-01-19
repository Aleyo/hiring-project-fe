import * as React from 'react';
import { ReactNode, ComponentType } from 'react';
import { Container } from '@material-ui/core';

import { TopBar } from 'src/components/TopBar';

interface Props {
  children?: ReactNode;
  component?: ComponentType;
}

export const Auth = ({ children, component: C }: Props) => (
  <>
    <TopBar />
    <Container maxWidth="sm">
      {children || <C />}
    </Container>
  </>
);
