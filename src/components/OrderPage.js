import React from 'react';

import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';
import './MenuItemComponent.story.css';

export default function OrderPage({
  //id,
  menuItems,
  orderItems,
  customerInfo,
  onAddItem,
  onSubmit,
  onClose
}) {
  return (
    //<div id={id} className="OrderPage">
    <div className="OrderPage">
      <OrderPageLayout>
        <MenuComponent items={menuItems} onAddItem={onAddItem} />
        <OrderTableComponent items={orderItems} />
        {customerInfo
          ? <OrderSuccessMessageComponent
              customerInfo={customerInfo}
              onClose={onClose}
            />
          : <OrderFormComponent onSubmit={onSubmit} />}
      </OrderPageLayout>
    </div>
  );
}
