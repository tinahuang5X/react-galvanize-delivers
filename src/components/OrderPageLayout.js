import React from 'react';

export default function OrderPageLayout(props) {
  if (!props.children || !props.children[0] || !props.children[1]) return null;

  return (
    <div className="OrderPageLayout">
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper light-green">
              <a
                href="index.html"
                className="brand-logo"
                style={{
                  marginLeft: '20px'
                }}>
                Galvanize Delivers
              </a>
              <a
                href="."
                data-activates="orderMenu"
                className="button-collapse">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li className="active">
                  <a href=".">Order Delivery</a>
                </li>
              </ul>
              <ul className="side-nav" id="orderMenu">
                <li className="active">
                  <a href=".">Order Delivery</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="Container" style={{ height: '900px' }}>
        <div
          className="Menu"
          style={{
            display: 'inline-table',
            float: 'left',
            width: '60%'
          }}>
          {props.children[0]}
        </div>
        <div
          className="OrderTable"
          style={{
            display: 'inline-table',
            float: 'left',
            flexdirection: 'column',
            width: '30%'
          }}>
          {props.children[1]}
        </div>
        <div
          className="OrderForm"
          style={{
            display: 'flex',
            flexdirection: 'column',
            width: '30%'
          }}>
          {props.children[2]}
        </div>
      </div>
      <footer className="page-footer light-green">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Galvanize Delivers</h5>
              <p className="white-text">Fine Dining, Delivered.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h6>
                <a className="white-text" href="index.html">
                  Home
                </a>
                <br />
                <br />
                <a className="white-text" href=".">
                  Order Delivery
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <a className="white-text" href="index.html">
              @2017 Galvanize Delivers
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
