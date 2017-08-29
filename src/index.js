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

let orderItems = [];

let customerInfo = null;

//render();

function handleAddItem(itemId) {
  orderItems.push(menuItems.find(item => item.id === itemId));
  render();
}

function onSubmit(info) {
  customerInfo = info;
  render();
}

function onClose() {
  //console.log('successfully');
  customerInfo = null;
  orderItems = [];
  render();
}

function render() {
  ReactDOM.render(
    <OrderPage
      menuItems={menuItems}
      orderItems={orderItems}
      customerInfo={customerInfo}
      onAddItem={handleAddItem}
      onSubmit={onSubmit}
      onClose={onClose}
    />,
    document.getElementById('root')
  );
}
render();
