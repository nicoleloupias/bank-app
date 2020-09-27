import { uiReducer } from './../../reducers/uiReducer';
import { types } from './../../types/types';

describe('Pruebas en uiReducer', () => {
  test('debe settear y borrar el msgError', () => {
    const initState = {
      loading: false,
      msgError: null,
    };
    const action = {
      type: types.uiSetError,
      payload: 'Message error test',
    };
    const state = uiReducer(initState, action);
    expect(state).toEqual({
      loading: false,
      msgError: 'Message error test',
    });

    const initState2 = {
      loading: false,
      msgError: 'Name is required',
    };
    const action2 = {
      type: types.uiRemoveError,
    };
    const state2 = uiReducer(initState2, action2);
    expect(state2).toEqual({
      loading: false,
      msgError: null,
    });
  });
  test('debe empezar y acabar el loading', () => {
    const initState = {
      loading: false,
      msgError: null,
    };
    const action = {
      type: types.uiStartLoading,
    };
    const state = uiReducer(initState, action);
    expect(state).toEqual({
      loading: true,
      msgError: null,
    });

    const initState2 = {
      loading: true,
      msgError: null,
    };
    const action2 = {
      type: types.uiFinishLoading,
    };
    const state2 = uiReducer(initState2, action2);
    expect(state2).toEqual({
      loading: false,
      msgError: null,
    });
  });
});
