import React from 'react';

import { Link } from 'react-router-dom';

import { LoginForm } from './../components/LoginForm';
import authImg from './../assets/authImg.png';

export const LoginScreen = () => {
  return (
    <div className="Login Container">
      <div className="LeftContent m-3">
        <div className="Content">
          <h1>Sign in</h1>
          <LoginForm />
          <p>Don't have an account?</p>
          <Link to="/auth/register" className="link">
            Sign up
          </Link>
        </div>
      </div>
      <div className="RightContent">
        <img src={authImg} alt="Auth" className="Img" />
      </div>
    </div>
  );
};
