import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../../src/components/Header';
import { LoginFormComponent } from '../../src/components/LoginForm';

storiesOf('Components', module)
  .add('Heading', () => <Header />)
  .add('Login Form - loading', () => {
    const props = {
      isLoading: true,
    };
    return <LoginFormComponent {...props} />;
  });
