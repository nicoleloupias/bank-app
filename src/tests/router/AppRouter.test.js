import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { firebase } from '../../firebase/firebaseConfig';

import { login } from '../../actions/auth';
import { startLoadingData } from './../../actions/money';
import { AppRouter } from '../../router/AppRouter';
import { act } from '@testing-library/react';
import { startLoading } from '../../actions/ui';

jest.mock('../../actions/auth', () => ({
  login: jest.fn(),
}));

jest.mock('../../actions/money', () => ({
  startLoadingData: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  money: {
    balance: '',
    movements: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en <AppRouter />', () => {
  test('debe de llamar el login si estoy autenticado y al startLoadingData ', async () => {
    let user;
    await act(async () => {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword('test-bank@testing.com', '123456');

      user = userCred.user;

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );
    });
    expect(login).toHaveBeenCalledWith(user.uid, user.email, user.displayName);
    expect(startLoadingData).toHaveBeenCalled();
  });
});
