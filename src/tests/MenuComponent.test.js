// Write a unit test for MenuComponent using Jest/Enzyme which validates the following (at minimum):
//
//     Verify the expected number of MenuItemComponents are rendered based on the number of items that are passed into MenuComponent
//     The onAddItem callback gets triggered when you click on one of the "Add to Order" buttons

import React from 'react';
import { shallow, mount } from 'enzyme';

import MenuComponent from '../components/MenuComponent';

describe('a unit test for MenuComponent', () => {
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
  const onAddItem = jest.fn();
  it('should test if onAddItem function is triggered when "Add to Order" button is clicked', () => {
    const item = [
      {
        name: 'Some Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200',
        id: 5
      }
    ];
    const fullWrapper = mount(
      <MenuComponent items={item} onAddItem={onAddItem} />
    );
    fullWrapper.find('MenuItemComponent').find('.testClick').simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });

  it('should verify the expected number of MenuItemComponents are rendered', () => {
    const shallowWrapper = shallow(
      <MenuComponent items={menuItems} onAddItem={onAddItem} />
    );

    const numOfComponents = shallowWrapper.find('MenuItemComponent');

    expect(numOfComponents.length).toEqual(menuItems.length);
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
