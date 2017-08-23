import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';

storiesOf('OrderFormComponent', module).add('Customer path', () =>
  <OrderFormComponent
    customer={{
      id: 101,
      name: 'Warren Buffett',
      phoneNumber: '(415) 866-9447',
      address: '123 Breakfast Dr. MA 15667'
    }}
  />
);
