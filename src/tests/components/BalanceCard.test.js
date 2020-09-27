import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { BalanceCard } from './../../components/BalanceCard';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  money: {
    balance: 20,
  },
};

let store = mockStore(initState);

const wrapper = mount(
  <Provider store={store}>
    <BalanceCard />
  </Provider>,
);

describe('Pruebas para <BalanceCard />', () => {
  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
