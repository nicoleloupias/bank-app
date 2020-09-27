import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { RegisterForm } from './../../components/RegisterForm';
import { types } from './../../types/types';

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

const wrapper = mount(
  <Provider store={store}>
    <RegisterForm />
  </Provider>,
);

describe('Pruebas en <RegisterForm />', () => {
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de hacer el dispatch de la acción respectiva', () => {
    const nameField = wrapper.find('input[name="name"]');

    nameField.simulate('change', {
      target: {
        value: '',
        name: 'name',
      },
    });

    wrapper.find('form').simulate('submit', {
      preventDefault() {},
    });

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: 'Name is required',
    });
  });

  test('debe de mostrar la caja de alerta con el error', () => {
    const initState = {
      auth: {},
      ui: {
        loading: false,
        msgError: 'Email no es correcto',
      },
      money: {
        balance: '',
        movements: [],
      },
    };

    const store = mockStore(initState);

    const wrapper = mount(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );

    expect(wrapper.find('.msgError').exists()).toBe(true);
    expect(wrapper.find('.msgError').text().trim()).toBe(initState.ui.msgError);
  });
});
