import React from 'react';

export default function OrderFormComponent({ onSubmit = () => {} }) {
  //console.log(customer);
  function handleSubmit(event) {
    event.preventDefault();
    const $form = event.target;
    const name = $form.icon_name.value;
    const phone = $form.icon_telephone.value;
    const address = $form.textarea1.value;
    console.log({ name, phone, address });
    onSubmit({ name, phone, address });
  }
  //if (!customerInfo) return null;
  return (
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_name" type="text" className="validate" />
          <label htmlFor="icon_name" />
        </div>

        <div className="input-field col s12">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label htmlFor="icon_telephone" />
        </div>

        <div className="input-field col s12">
          <i className="material-icons prefix">business</i>
          <textarea id="textarea1" className="materialize-textarea" />
          <label htmlFor="textarea1" />
        </div>

        <div className="col s12 center">
          <button
            className="btn waves-effect waves-light green accent-5"
            type="submit"
            name="action">
            PLACE AN ORDER
          </button>
        </div>
      </div>
    </form>
  );
}
