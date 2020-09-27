import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm hook', () => {
  const initialForm = {
    name: 'test',
    email: 'test-bank@testing.com',
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toBe(initialForm);
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'nicole',
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({
      ...initialForm,
      name: 'nicole',
    });
  });

  test('debe de re-establecer el formulario con reset', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'nicole',
        },
      });
      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
