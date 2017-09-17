/* eslint-disable import/first */
import getMenuItemsProcess from './getMenuItemsProcess';

jest.mock('../../requests/getMenuItems');
import getMenuItems from '../../requests/getMenuItems';
import data from '../../mock-data';

describe('getMenuItemsProcess', () => {
  it('should return a function', () => {
    const thunk = getMenuItemsProcess();
    expect(typeof thunk).toBe('function');

    getMenuItems.mockReturnValueOnce(Promise.resolve([...data]));
    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState).then(menuItems => {
      expect(getMenuItems).toBeCalled();
    });
  });
});
