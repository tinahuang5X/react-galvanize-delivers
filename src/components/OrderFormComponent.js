import React, { Component } from 'react';

export default class OrderFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasValidationError: false };
  }
  render() {
    return (
      <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_name"
              type="text"
              className="validate"
              placeholder="Name"
              required
            />
            <label htmlFor="icon_name" />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">phone</i>
            <input
              id="icon_telephone"
              type="tel"
              className="validate"
              placeholder="Telephone"
              required
            />
            <label htmlFor="icon_telephone" />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">business</i>
            <textarea
              id="textarea1"
              className="materialize-textarea"
              placeholder="Address"
              required
            />
            <label htmlFor="textarea1" />
          </div>

          <div className="col s12 center">
            <button
              className="btn waves-effect waves-light green accent-5"
              type="submit"
              name="action">
              PLACE AN ORDER
            </button>
            {this.state.hasValidationError
              ? <p style={{ color: 'red', fontWeight: 'bold' }}>
                  {' '}Plaase enter valid data.{' '}
                </p>
              : null}
          </div>
        </div>
      </form>
    );
  }
  handleSubmit = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const name = $form.icon_name.value.trim();
    const phone = $form.icon_telephone.value.trim();
    const address = $form.textarea1.value.trim();
    //console.log({ name, phone, address });
    let regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(regPhone) && name) {
      this.props.onSubmit({ name, phone, address });
    } else this.setState({ hasValidationError: true });
  };
}
