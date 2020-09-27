import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LoginScreen } from './../../screens/LoginScreen';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  money: {
    balance: '',
    movements: [],
  },
};

let store = mockStore(initState);

describe('Pruebas en <LoginScreen />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>,
  );

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
