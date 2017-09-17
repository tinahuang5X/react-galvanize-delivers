import React, { Component } from 'react';
//import env from './env';
//import logo from './logo.svg';
//import './App.css';
// import OrderPage from './components/OrderPage';
import { Provider } from 'react-redux';
// import getMenuItems from './requests/getMenuItems';
// import getMenuItemsProcess from './redux/thunks/getMenuItemsProcess';
import setupStore from './redux/setupStore';
import OrderPageContainer from './redux/containers/OrderPageContainer';

//app = new App({});
//element = app.render()
//putItIntoDom(element);
//app.componentDidMount();

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <OrderPage
          menuItems={this.state.menuItems}
          orderItems={this.state.orderItems}
          customerInfo={this.state.customerInfo}
          onAddItem={this._addItem}
          onSubmit={this._submitOrderForm}
          onClose={this._closeOrderSuccessMessage}
        /> */}
        <Provider store={store}>
          <OrderPageContainer />
        </Provider>
      </div>
    );
  }
}
