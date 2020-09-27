import { moneyReducer } from './../../reducers/moneyReducer';
import { types } from './../../types/types';

describe('Pruebas en moneyReducer', () => {
  test('debe de cargar los datos ', () => {
    const initState = {
      balance: '',
      movements: [],
    };
    const action = {
      type: types.dataLoaded,
      payload: {
        balance: 20,
        movements: [],
      },
    };
    const state = moneyReducer(initState, action);
    expect(state).toEqual({
      balance: 20,
      movements: [],
    });
  });
  test('debe añadir un movimiento ', () => {
    const initState = {
      balance: 30,
      movements: [],
    };
    const action = {
      type: types.addMovement,
      payload: {
        id: 'id',
        quantity: 35,
        sender: 'Test sender',
        receiver: 'Test receiver',
        action: 'Test action',
        date: 'Test date',
      },
    };
    const state = moneyReducer(initState, action);
    expect(state).toEqual({
      balance: 30,
      movements: [action.payload],
    });
  });
  test('debe actualizar el balance ', () => {
    const initState = {
      balance: 30,
    };
    const action = {
      type: types.updateBalance,
      payload: 45,
    };
    const state = moneyReducer(initState, action);
    expect(state).toEqual({
      balance: 45,
    });
  });
  test('moneylogout debe limpiar el state money ', () => {
    const initState = {
      balance: 30,
    };
    const action = {
      type: types.moneyLogout,
    };
    const state = moneyReducer(initState, action);
    expect(state).toEqual({});
  });
});
