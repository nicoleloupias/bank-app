import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const LandingScreen = () => {
  return (
    <Layout
      component="Landing"
      title="Your favourite online wallet"
      img="landingImg"
    >
      <Link to="/auth">
        <button renderas="button" className="btn-primary">
          <span>Get started</span>
        </button>
      </Link>
    </Layout>
  );
};
