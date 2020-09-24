import React from 'react';
import { useForm } from './../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from './../actions/auth';
import { setErrorAction, removeError } from './../actions/ui';
import validator from 'validator';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    telephone: '',
    address: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2, telephone, address } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('Email is not valid'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setErrorAction(
          'Password should be at least 6 characters and match each other',
        ),
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <form
      onSubmit={handleRegister}
      className="animate__animated animate__fadeIn animate__faster"
    >
      {msgError && <div className="auth__alert-error">{msgError}</div>}
      <label htmlFor="name">Full name:</label>
      <input
        type="text"
        placeholder="Full name"
        name="name"
        id="name"
        className="input-text"
        value={name}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className="input-text"
        value={email}
        onChange={handleInputChange}
      />
      <label htmlFor="telephone">Telephone number:</label>
      <input
        type="tel"
        placeholder="Telephone"
        name="telephone"
        id="telephone"
        className="input-text"
        value={telephone}
        onChange={handleInputChange}
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        placeholder="Address"
        name="address"
        id="address"
        className="input-text"
        value={address}
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        className="input-text"
        value={password}
        onChange={handleInputChange}
      />
      <label htmlFor="password2">Repeat password:</label>
      <input
        type="password"
        placeholder="Confirm password"
        name="password2"
        id="password2"
        className="input-text"
        value={password2}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn btn-primary btn-block mb-5">
        Sign up
      </button>
    </form>
  );
};
