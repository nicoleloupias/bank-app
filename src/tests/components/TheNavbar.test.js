import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { TheNavbar } from './../../components/TheNavbar';
import { startLogout } from '../../actions/auth';

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

jest.mock('../../actions/auth', () => ({
  startLogout: jest.fn(),
}));

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <TheNavbar />
    </MemoryRouter>
  </Provider>,
);
describe('Pruebas en <TheNavbar />', () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar el logout', () => {
    wrapper.find('button').prop('onClick')();
    expect(startLogout).toHaveBeenCalled();
  });
});
