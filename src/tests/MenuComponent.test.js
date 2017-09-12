// Write a unit test for MenuComponent using Jest/Enzyme which validates the following (at minimum):
//
//     Verify the expected number of MenuItemComponents are rendered based on the number of items that are passed into MenuComponent
//     The onAddItem callback gets triggered when you click on one of the "Add to Order" buttons

import React from 'react';
import { mount } from 'enzyme';
import MenuItemComponent from '../components/MenuItemComponent';
import MenuComponent from '../components/MenuComponent';

const item = {
  name: 'Some Item A',
  price: 9.99,
  imagePath: '//via.placeholder.com/300x200'
};

const menuItems = [
  {
    name: 'Smoked Swine',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 1
  },
  {
    name: 'Royale with Cheese',
    price: 11.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 2
  },
  {
    name: 'Arugula Pie',
    price: 14.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 3
  },
  {
    name: 'Ice Cream Biscuit',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 4
  }
];

describe('a unit test for MenuComponent', () => {
  it('should test if onAddItem function was triggered', () => {
    const onAddItem = jest.fn();
    mount(<MenuItemComponent onAddItem={onAddItem} item={item} />)
      .find('.testClick')
      .simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });

  it('should verify the expected number of MenuItemComponents are rendered', () => {
    const fullWrapper = mount(<MenuItemComponent item={item} />);
    expect(fullWrapper.props().item).toEqual(item);
  });

  it('tests children elemenets with full rendering', () => {
    expect(mount(<MenuComponent items={menuItems} />).children()).toHaveLength(
      4
    );
  });
  it('tests against parent and children components', () => {
    expect(
      mount(<MenuComponent items={menuItems} />).find('.card')
    ).toHaveLength(menuItems.length);
  });
});
