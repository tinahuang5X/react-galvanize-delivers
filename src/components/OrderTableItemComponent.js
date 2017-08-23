import React from 'react';

export default function OrderTableItemComponent({ item }) {
  if (!item) return null;
  return (
    <tr>
      <td>
        {item.name}
      </td>

      <td className="right-align">
        {`$${item.price.toFixed(2)}`}
      </td>
    </tr>
  );
}
