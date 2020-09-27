import '@testing-library/jest-dom';
import { types } from '../../types/types';
import {
  finishLoading,
  startLoading,
  setErrorAction,
  removeError,
} from '../../actions/ui';

describe('Pruebas en las acciones de Ui', () => {
  test('startLoading y finishLoading deben de crear la acción respectiva', () => {
    const startLoadingAction = startLoading();
    const finishLoadingAction = finishLoading();

    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
    });

    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading,
    });
  });

  test('setError y removeError deben de crear la acción respectiva', () => {
    const setErrorTry = setErrorAction();
    const removeErrorTry = removeError();

    expect(setErrorTry).toEqual({
      type: types.uiSetError,
    });

    expect(removeErrorTry).toEqual({
      type: types.uiRemoveError,
    });
  });
});
