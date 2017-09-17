export default function rootReducer(
  currentState = {
    menuItems: null,

    orderItems: [],
    customerInfo: null
  },
  action
) {
  switch (action.type) {
    //console.log(action);
    case 'SET_ITEMS':
      return { ...currentState, menuItems: action.menuItems };
    case 'ADD_ITEM':
      return {
        ...currentState,
        orderItems: [
          ...currentState.orderItems,
          currentState.menuItems.find(menuItem => menuItem.id === action.itemId)
        ]
      };
    case 'SUBMIT_ORDER':
      return {
        ...currentState,
        customerInfo: action.customerInfo
      };

    case 'CLOSE_ORDER':
      return {
        ...currentState,
        customerInfo: action.customerInfo,
        orderItems: action.orderItems
      };
    default:
      return currentState;
  }
}
