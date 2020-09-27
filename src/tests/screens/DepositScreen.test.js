import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { types } from './../../types/types';
import { DepositScreen } from './../../screens/DepositScreen';
import { depositMoney } from './../../actions/money';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: 'test uid',
    name: 'Name Lastname',
    email: 'test-bank@testing.com',
  },
  ui: {
    loading: false,
    msgError: null,
  },
  money: {
    balance: 50,
    movements: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <DepositScreen />
  </Provider>,
);
jest.mock('../../actions/money', () => ({
  depositMoney: jest.fn(),
}));

describe('Pruebas en <DepositScreen />', () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de hacer el dispatch de la acción respectiva', () => {
    wrapper.find('form').prop('onSubmit')({
      preventDefault() {},
    });
    expect(depositMoney).toHaveBeenCalled();
  });
});
