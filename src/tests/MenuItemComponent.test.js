// Write a unit test for MenuItemComponent using Jest/Enzyme which validates the following (at minimum):
//
//     The item's name gets rendered
//     The item's price gets rendered
//     The onAddItem callback gets triggered when you click on the "Add to Order" button/link
//     Note: Shallow rendering should be sufficient
//
// Also, write a snapshot test for MenuItemComponent using Jest.

import React from 'react';
import { mount, shallow } from 'enzyme';
import MenuItemComponent from '../components/MenuItemComponent';

describe('a unit test for MenuItemComponent', () => {
  const item = {
    name: 'Some Item A',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  };
  const onAddItem = jest.fn();
  const shallowWrapper = shallow(
    <MenuItemComponent item={item} onAddItem={onAddItem} />
  );

  it('item name gets rendered', () => {
    expect(shallowWrapper.find('.card-title').text()).toEqual(`Some Item A`);
  });

  it('item price gets rendered', () => {
    expect(shallowWrapper.find('.card-price').text()).toEqual('$9.99');
  });

  it('onAddItem function was triggered', () => {
    mount(<MenuItemComponent onAddItem={onAddItem} item={item} />)
      .find('.testClick')
      .simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });

  it('should pass snapshot test', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});
