import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';

storiesOf('OrderFormComponent', module).add('Customer path', () =>
  <OrderFormComponent onSubmit={customerInfo => console.log(customerInfo)} />
);
