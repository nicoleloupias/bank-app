import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from '../../types/types';
import { db } from '../../firebase/firebaseConfig';
import {
  startLoadingData,
  startAddMovement,
  startUpdateBalance,
  moneyLogout,
} from './../../actions/money';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: 'qPERHk77DTQRItKT2fOvN0JNr603',
    email: 'test-bank@testing.com',
    name: '',
  },
  ui: {
    loading: false,
    msgError: null,
  },
  money: {
    balance: 10,
    movements: [],
  },
};

let store = mockStore(initState);

describe('Pruebas con las acciones de Money', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('startLoadingData debe cargar los datos', async () => {
    await store.dispatch(startLoadingData('test-bank@testing.com'));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.dataLoaded,
      payload: {
        balance: expect.any(Number),
        movements: expect.any(Array),
      },
    });
  });

  test('startUpdateBalance debe actualizar balance', async () => {
    await store.dispatch(startUpdateBalance('test-bank@testing.com', 20));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.updateBalance,
      payload: 20,
    });
  });
  test('startAddMovement debe añadir un movimiento nuevo', async () => {
    const movement = {
      sender: 'Test sender',
      receiver: 'Test receiver',
      quantity: 40,
      action: 'Deposit',
      date: Date.now(),
    };
    await store.dispatch(startAddMovement('test-bank@testing.com', movement));
    const actions = store.getActions();
    expect(actions[0]).toMatchObject({
      type: types.addMovement,
      payload: {
        id: expect.any(String),
        sender: expect.any(String),
        receiver: expect.any(String),
        quantity: expect.any(Number),
        action: expect.any(String),
        date: expect.any(Number),
      },
    });
  });

  test('moneyLogout debe borrar money store', async () => {
    await store.dispatch(moneyLogout());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.moneyLogout,
    });
  });
});
