import React from 'react';
import { RegisterForm } from './../components/RegisterForm';
import { Link } from 'react-router-dom';
import authImg from './../assets/authImg.png';

export const RegisterScreen = () => {
  return (
    <div className="Register Container">
      <div className="LeftContent m-3">
        <div className="Content">
          <h1>Sign up</h1>
          <RegisterForm />
          <p>Already registered?</p>
          <Link to="/auth/login" className="link">
            Sign in
          </Link>
        </div>
      </div>
      <div className="RightContent">
        <img src={authImg} alt="Auth" className="Img" />
      </div>
    </div>
  );
};
