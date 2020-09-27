import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { RegisterForm } from './../components/RegisterForm';

export const RegisterScreen = () => {
  return (
    <Layout
      component="Register"
      img="authImg"
      title="Create an account"
    >
      <RegisterForm />
      <div className="otherAuth">
        <p>Already registered?</p>
        <Link to="/auth/login" className="link">
          Sign in
        </Link>
      </div>
    </Layout>
  );
};
