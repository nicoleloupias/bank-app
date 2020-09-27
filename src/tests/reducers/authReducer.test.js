import { authReducer } from './../../reducers/authReducer';
import { types } from './../../types/types';

describe('Pruebas en authReducer', () => {
  test('debe de realizar el login', () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: 'test uid',
        displayName: 'Nicole',
        email: 'test-bank@testing.com',
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({
      uid: 'test uid',
      name: 'Nicole',
      email: 'test-bank@testing.com',
    });
  });

  test('debe de realizar el logout', () => {
    const initState = {
      uid: 'test uid',
      name: 'Nicole',
      email: 'test-bank@testing.com',
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });

  test('no debe hacer cambios en el state si se introduce una accion no definida', () => {
    const initState = {
      uid: 'test uid',
      name: 'Nicole',
      email: 'test-bank@testing.com',
    };
    const action = {
      type: 'random',
    };
    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
