import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { startLoginEmailPassword } from '../../actions/auth';
import { LoginForm } from './../../components/LoginForm';

jest.mock('../../actions/auth', () => ({
  startLoginEmailPassword: jest.fn(),
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

const wrapper = mount(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
);

describe('Pruebas en <LoginForm />', () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de disparar el startLogin con los respectivos argumentos', () => {
    wrapper.find('form').prop('onSubmit')({
      preventDefault() {},
    });

    expect(startLoginEmailPassword).toHaveBeenLastCalledWith('', '');
  });
});
