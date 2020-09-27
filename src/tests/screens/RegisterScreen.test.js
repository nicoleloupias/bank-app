import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RegisterScreen } from './../../screens/RegisterScreen';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: '',
  },
  money: {
    balance: '',
    movements: [],
  },
};

let store = mockStore(initState);

describe('Pruebas en <RegisterScreen />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <RegisterScreen />
      </MemoryRouter>
    </Provider>,
  );

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
