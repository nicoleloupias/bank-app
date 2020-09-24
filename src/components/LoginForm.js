import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from './../hooks/useForm';
import { startLoginEmailPassword } from './../actions/auth';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  return (
    <form
      className="animate__animated animate__fadeIn animate__faster"
      onSubmit={handleLogin}
    >
      <input
        type="text"
        placeholder="Email"
        name="email"
        className="input-text"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        className="input-text"
        value={password}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn-primary">
        Sign in
      </button>
    </form>
  );
};
