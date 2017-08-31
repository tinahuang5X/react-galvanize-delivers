import React from 'react';
import OrderTableItemComponent from './OrderTableItemComponent';
export default function OrderTableComponent({ items }) {
  // const { items } = props;
  // const items = props.items;
  //console.log(items, 'print');
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price;
  }
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  return (
    <table className="striped">
      <thead>
        <tr>
          <th>{`Item`}</th>
          <th className="right-align">{`Price`}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) =>
          <OrderTableItemComponent key={i} item={item} />
        )}
      </tbody>
      <tfoot>
        <tr>
          <td className="right-align">
            {`Subtotal`}
          </td>
          <td className="right-align">
            {`$${subtotal.toFixed(2)}`}
          </td>
        </tr>
        <tr>
          <td className="right-align">{`Tax`}</td>
          <td className="right-align">
            {`$${tax.toFixed(2)}`}
          </td>
        </tr>
        <tr>
          <td className="right-align">{`Total`}</td>
          <td className="right-align">
            {`$${total.toFixed(2)}`}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
