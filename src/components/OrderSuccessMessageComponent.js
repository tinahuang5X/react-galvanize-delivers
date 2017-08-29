import React from 'react';

export default function OrderSuccessMessageComponent({
  customerInfo = {},
  onClose = () => {}
}) {
  function handleClick(event) {
    onClose();
  }
  return (
    <div className="card-panel grey lighten-3 OrderSuccessMessageComponent">
      <p>
        Thank you, <b>{customerInfo.name}</b>.
      </p>
      <p>Your order was submitted successfully!</p>
      <p>
        We will deliver the above items to <b>{customerInfo.address}</b>. The
        delivery driver will call you at <b>{customerInfo.phone}</b> before
        arriving.
      </p>
      <p>
        <span>Best regards,</span>
        <br />
        <i>Customer Support Team</i>
        <br />
        <span>Galvanize Delivers</span>
      </p>
      <button className="waves-effect waves-light btn" onClick={handleClick}>
        PLACE ANOTHER ORDER
      </button>
    </div>
  );
}
