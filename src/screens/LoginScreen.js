import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from './../components/LoginForm';
import { Layout } from './../components/Layout';

export const LoginScreen = () => {
  return (
    <Layout component="Login" img="authImg" title="Sign in">
      <LoginForm />
      <div className="otherAuth">
        <p>Don't have an account?</p>
        <Link to="/auth/register" className="link">
          Sign up
        </Link>
      </div>
    </Layout>
  );
};
