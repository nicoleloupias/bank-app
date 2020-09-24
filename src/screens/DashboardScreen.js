import React from 'react';
import { useSelector } from 'react-redux';
import { BalanceCard } from './../components/BalanceCard';

export const DashboardScreen = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome back, {name}</h1>
      <p>You can:</p>
      <p>Check your money, transfer money or view your last movements. </p>
      <BalanceCard />
    </div>
  );
};
