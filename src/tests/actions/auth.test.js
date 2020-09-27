import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { types } from '../../types/types';
import {
  login,
  logout,
  startLogout,
  startLoginEmailPassword,
  startRegisterWithEmailPasswordName,
} from '../../actions/auth';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('login y logout deben de crear la acción respectiva', () => {
    const uid = 'qPERHk77DTQRItKT2fOvN0JNr603';
    const email = 'test-bank@testing.com';
    const displayName = '';

    const loginAction = login(uid, email, displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid,
        email,
        displayName,
      },
    });

    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });

  test('debe de realizar el startLogout', async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.logout,
    });

    expect(actions[1]).toEqual({
      type: types.moneyLogout,
    });
  });

  test('debe de iniciar el startLoginEmailPassword', async () => {
    await store.dispatch(
      startLoginEmailPassword('test-bank@testing.com', '123456'),
    );
    const actions = store.getActions();
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: 'z5IidGj53bMPYRtNEiR1XCqzTIg2',
        email: 'test-bank@testing.com',
        displayName: 'Name Lastname',
      },
    });
  });
});
