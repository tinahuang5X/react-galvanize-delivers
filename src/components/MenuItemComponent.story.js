import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import './MenuItemComponent.story.css';
//let item;
storiesOf('MenuItemComponent', module)
  .add('Complete item passed in', () =>
    <MenuItemComponent
      item={{
        id: '101',
        name: 'Some Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200'
      }}
      onAddItem={itemId => {
        console.log(itemId);
      }}
    />
  )
  .add('Incomplete item passed in', () =>
    <MenuItemComponent item={{ imagePath: '//via.placeholder.com/300x200' }} />
  )
  .add('Empty item object passed in', () => <MenuItemComponent item={{}} />)
  //.add('No item passed in', () => item && <MenuItemComponent item={item} />);
  .add('No item passed in', () => <MenuItemComponent />);
