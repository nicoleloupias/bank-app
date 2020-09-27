import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DashboardScreen } from './../../screens/DashboardScreen';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    name: 'Test name',
    email: 'test-bank@testing.com',
    uid: 'uid test',
  },
  money: {
    balance: 20,
    movements: [],
  },
};

let store = mockStore(initState);

describe('Pruebas en <DashboardScreen />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <DashboardScreen />
      </MemoryRouter>
    </Provider>,
  );

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
