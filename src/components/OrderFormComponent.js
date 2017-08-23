import React from 'react';

export default function OrderFormComponent({ customer }) {
  //console.log(customer);
  if (!customer) return null;
  return (
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_name" type="text" className="validate" />
          <label htmlFor="icon_name">
            {customer.name}
          </label>
        </div>

        <div className="input-field col s12">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label htmlFor="icon_telephone">
            {customer.phoneNumber}
          </label>
        </div>

        <div className="input-field col s12">
          <i className="material-icons prefix">business</i>
          <textarea id="textarea1" className="materialize-textarea" />
          <label htmlFor="textarea1">
            {customer.address}
          </label>
        </div>

        <div className="col s12 center">
          <a
            href="#"
            id="placeAnOrder"
            className="waves-effect waves-light btn-large green accent-5">
            PLACE ORDER
          </a>
        </div>
      </div>
    </form>
  );
}
