import getMenuItems from '../.././requests/getMenuItems';

export default function getMenuItemsProcess() {
  return (dispatch, getState) => {
    return getMenuItems().then(menuItems => {
      dispatch({ type: 'SET_ITEMS', menuItems });
      return menuItems;
    });
  };
}
