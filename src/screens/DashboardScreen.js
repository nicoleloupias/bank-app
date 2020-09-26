import React from 'react';
import { useSelector } from 'react-redux';
import { BalanceCard } from './../components/BalanceCard';
import { Link } from 'react-router-dom';

export const DashboardScreen = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <div className="Dashboard">
      <h1>Welcome back, {name}</h1>
      <p>You can:</p>
      <p>Check your money, transfer money or view your last movements. </p>
      <BalanceCard />
      <div className="ButtonsContainer">
        <Link to="/logged/last-movements">
          <button renderas="button" className="btn-primary">
            <span>Check last movements</span>
          </button>
        </Link>
        <Link to="/logged/transfer">
          <button renderas="button" className="btn-primary">
            <span>Transfer money</span>
          </button>
        </Link>
        <Link to="/logged/deposit">
          <button renderas="button" className="btn-primary">
            <span>Deposit money</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
