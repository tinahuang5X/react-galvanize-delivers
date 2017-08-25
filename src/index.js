import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import OrderPage from './components/OrderPage';

const menuItems = [
  {
    id: 101,
    name: 'Some Item A',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 102,
    name: 'Some Item B',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 103,
    name: 'Some Item C',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 104,
    name: 'Some Item D',
    price: 6.99,
    imagePath: '//via.placeholder.com/300x200'
  }
];

const orderItems = [
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
];

const customerInfo = {
  id: 101,
  name: 'Warren Buffett',
  phoneNumber: '(415) 866-9447',
  address: '123 Breakfast Dr. MA 15667'
};

function handleAddItem(itemId) {
  orderItems.push(menuItems.find(item => item.id === itemId));
  render();
}

function render() {
  ReactDOM.render(
    <OrderPage
      menuItems={menuItems}
      orderItems={orderItems}
      customerInfo={customerInfo}
      onAddItems={handleAddItem}
    />,
    document.getElementById('root')
  );
}
render();
