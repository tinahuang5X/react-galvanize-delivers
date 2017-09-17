import rootReducer from './rootReducer';

// import deepFreeze from 'deep-freeze-node';

import data from '../../mock-data';

// describe('rootReducer', () => {
//   it('action.type SET_ITEMS', () => {
//     const action = {
//       type: 'SET_ITEMS',
//       menuItems: [...data.menuItems]
//     };
//
//     const currentState = {
//       menuItems: []
//     };
//
//     deepFreeze(currentState);
//
//     const nextState = {
//       menuItems: action.menuItems
//     };
//
//     expect(rootReducer(currentState, action)).toEqual(nextState);
//   });
//
//   it('action.type ADD_ITEM', () => {
//     const action = {
//       type: 'ADD_ITEM',
//       menuItems: { ...data.menuItems[0] }
//     };
//
//     const currentState = {
//       orderItems: [],
//       selectedItemId: []
//     };
//
//     deepFreeze(currentState);
//
//     const nextState = {
//       orderItems: [data.menuItems[1]],
//       selectedItemId: action.menuItems.id
//     };
//
//     expect(rootReducer(currentState, action)).toEqual(nextState);
//   });
//
//   it('action.type SUBMIT_ORDER', () => {
//     const action = {
//       type: 'SUBMIT_FORM',
//       customerInfo: {
//         name: 'Tina',
//         phone: '(415)333-3333',
//         address: '123 Breakfast Ave.'
//       }
//     };
//     const currentState = {
//       customerInfo: null
//     };
//
//     deepFreeze(currentState);
//
//     const nextState = {
//       customerInfo: {
//         name: 'Tina',
//         phone: '(415)333-3333',
//         address: '123 Breakfast Ave.'
//       }
//     };
//     expect(rootReducer(currentState, action)).toEqual(nextState);
//   });
//   it('action.type CLOSE_ORDER', () => {
//     const action = { type: 'CLOSE_ORDER' };
//     const currentState = {
//       orderItems: [
//         {
//           id: 1001,
//           name: 'Royale with Cheese',
//           price: 8.99,
//           imagePath: 'img/burger.jpg'
//         }
//       ],
//       customerInfo: {
//         name: 'Tina',
//         phone: '(415)333-3333',
//         address: '123 Breakfast Ave.'
//       }
//     };
//
//     deepFreeze(currentState);
//
//     const nextState = {
//       orderItems: null,
//       customerInfo: null
//     };
//     expect(rootReducer(currentState, action)).toEqual(nextState);
//   });

test('reducers', () => {
  let state;
  state = rootReducer(
    { menuItems: null, orderItems: [], customerInfo: null },
    {
      type: 'SET_ITEMS',
      menuItems: [...data.menuItems]
    }
  );
  expect(state).toEqual({
    menuItems: [...data.menuItems],
    orderItems: [],
    customerInfo: null
  });
});

test('reducers', () => {
  let state;
  state = rootReducer(
    {
      menuItems: [...data.menuItems],
      orderItems: [],
      customerInfo: null
    },
    {
      type: 'ADD_ITEM',
      itemToBeAdded: {
        id: 1004,
        name: 'Ice Cream Biscut',
        price: 7.99,
        imagePath: 'img/ice_cream.jpg'
      }
    }
  );
  expect(state).toEqual({
    menuItems: [...data.menuItems],
    orderItems: [
      {
        id: 1004,
        name: 'Ice Cream Biscut',
        price: 7.99,
        imagePath: 'img/ice_cream.jpg'
      }
    ],
    customerInfo: null
  });
});

test('reducers', () => {
  let state;
  state = rootReducer(
    {
      menuItems: [...data.menuItems],
      orderItems: [
        {
          id: 1004,
          name: 'Ice Cream Biscut',
          price: 7.99,
          imagePath: 'img/ice_cream.jpg'
        }
      ],
      customerInfo: null
    },
    {
      type: 'SUBMIT_ORDER',
      customerInfo: {
        name: 'Tina',
        phone: '4153333333',
        address: '123 Breakfast Ave.'
      }
    }
  );
  expect(state).toEqual({
    menuItems: [...data.menuItems],
    orderItems: [
      {
        id: 1004,
        name: 'Ice Cream Biscut',
        price: 7.99,
        imagePath: 'img/ice_cream.jpg'
      }
    ],
    customerInfo: {
      name: 'Tina',
      phone: '4153333333',
      address: '123 Breakfast Ave.'
    }
  });
});

test('reducers', () => {
  let state;
  state = rootReducer(
    {
      menuItems: [...data.menuItems],
      orderItems: [
        {
          id: 1004,
          name: 'Ice Cream Biscut',
          price: 7.99,
          imagePath: 'img/ice_cream.jpg'
        }
      ],
      customerInfo: {
        name: 'Tina',
        phone: '4153333333',
        address: '123 Breakfast Ave.'
      }
    },
    { type: 'CLOSE_ORDER', customerInfo: null, orderItems: [] }
  );
  expect(state).toEqual({
    menuItems: [...data.menuItems],
    orderItems: [],
    customerInfo: null
  });
});
