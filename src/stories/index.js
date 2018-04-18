import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../../src/components/Header';

storiesOf('Components', module)
  .add('Heading', () => <Header />);
