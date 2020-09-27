import React from 'react';
import { LastMovementsScreen } from './../../screens/LastMovementsScreen';
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
  ui: {
    loading: false,
    msgError: null,
  },
  money: {
    balance: 20,
    movements: [
      {
        id: 'id',
        quantity: 35,
        sender: 'Test sender',
        receiver: 'Test receiver',
        action: 'Test action',
        date: 'Test date',
      },
    ],
  },
};

let store = mockStore(initState);

describe('Pruebas en <LastMovementsScreen />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <LastMovementsScreen />
    </Provider>,
  );

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
