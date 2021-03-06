import React from 'react';
import { useSelector } from 'react-redux';

export const BalanceCard = () => {
  const { balance } = useSelector((state) => state.money);
  return (
    <div className="BalanceCard">
      <h2>Balance:</h2>
      {typeof balance === 'number' && <p className="Number"> {balance}€</p>}
    </div>
  );
};
