import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';
import './OrderTableComponent.story.css';
//let item;
storiesOf('OrderTableComponent', module).add('Order path', () =>
  <OrderTableComponent
    items={[
      {
        id: 101,
        name: 'Royale with Cheese',
        price: 8.99
      },
      {
        id: 102,
        name: 'Arugula Pie',
        price: 11.99
      },
      {
        id: 103,
        name: 'Smoked Swine',
        price: 14.99
      },
      {
        id: 104,
        name: 'Ice Cream Biscuit',
        price: 7.99
      }
    ]}
  />
);
