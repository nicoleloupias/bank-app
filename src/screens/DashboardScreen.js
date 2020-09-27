import React from 'react';
import { useSelector } from 'react-redux';
import { BalanceCard } from './../components/BalanceCard';
import { Link } from 'react-router-dom';
import { Layout } from './../components/Layout';

export const DashboardScreen = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <Layout
      component="Dashboard"
      img="actionsImg"
      title={`Welcome back, ${name}!`}
    >
      <p>You can:</p>
      <p>Deposit money, transfer money or view your last movements. </p>

      <BalanceCard />

      <div className="ButtonsContainer">
        <Link to="/logged/last-movements">
          <button className="btn-primary">
            <span>Check last movements</span>
          </button>
        </Link>
        <Link to="/logged/transfer">
          <button className="btn-primary">
            <span>Transfer money</span>
          </button>
        </Link>
        <Link to="/logged/deposit">
          <button className="btn-primary">
            <span>Deposit money</span>
          </button>
        </Link>
      </div>
    </Layout>
  );
};
