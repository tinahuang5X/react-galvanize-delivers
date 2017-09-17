import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import OrderPage from '../../components/OrderPage';

import getMenuItemsProcess from '../thunks/getMenuItemsProcess';

function mapStateToProps(state, ownProps) {
  return {
    menuItems: state.menuItems,
    orderItems: state.orderItems,
    customerInfo: state.customerInfo
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  // let itemToBeAddedToState = this.state.menuItems.find(
  //   menuItem => menuItem.id === itemId
  //);
  return {
    onMount: () => dispatch(getMenuItemsProcess()),
    onAddItem: itemId => dispatch({ type: 'ADD_ITEM', itemId }),
    onSubmit: ({ name, phone, address }) =>
      dispatch({
        type: 'SUBMIT_ORDER',
        customerInfo: { name, phone, address }
      }),
    onClose: () =>
      dispatch({
        type: 'CLOSE_ORDER',
        customerInfo: null,
        orderItems: []
      })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(OrderPage);
