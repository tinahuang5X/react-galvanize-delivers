import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import OrderPage from './components/OrderPage';

import getMenuItems from './requests/getMenuItems';

//app = new App({});
//element = app.render()
//putItIntoDom(element);
//app.componentDidMount();

class App extends Component {
  //experimental syntax
  state = {
    menuItems: null,

    orderItems: [],
    customerInfo: null
  };

  render() {
    return (
      <div className="App">
        <OrderPage
          menuItems={this.state.menuItems}
          orderItems={this.state.orderItems}
          customerInfo={this.state.customerInfo}
          onAddItem={this._addItem}
          onSubmit={this._submitOrderForm}
          onClose={this._closeOrderSuccessMessage}
        />
      </div>
    );
  }

  componentDidMount() {
    getMenuItems().then(menuItems => {
      this.setState({
        menuItems
      });
    });
  }

  _addItem = itemId => {
    //const orderItems = this.state.orderItems;

    //orderItems.push(menuItems.find(item => item.id === itemId));
    //this.setState({
    //orderItems: orderItems
    //});

    this.setState(prevState => {
      const newOrderItems = prevState.orderItems.slice(0);
      //const newOrderItems = prevState.orderItems;
      console.log('before', newOrderItems);
      newOrderItems.push(prevState.menuItems.find(item => item.id === itemId));
      console.log('after', newOrderItems);
      return {
        orderItems: newOrderItems

        //new below
        //orderItems: [...prevState.orderItems, prevState.menuItems.find(item => item.id === itemId)]
      };
    });
  };

  _submitOrderForm = ({ name, phone, address }) => {
    this.setState({
      customerInfo: { name, phone, address }
    });
  };

  _closeOrderSuccessMessage = () => {
    this.setState({
      customerInfo: null,
      orderItems: []
    });
  };
}

export default App;
