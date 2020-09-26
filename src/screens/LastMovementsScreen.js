import React from 'react';
import { useSelector } from 'react-redux';
import { Movement } from './../components/Movement';

export const LastMovementsScreen = () => {
  const { movements } = useSelector((state) => state.money);

  return (
    <div>
      <h1>Last movements</h1>
      {movements.map((movement) => (
        <Movement {...movement} />
      ))}
    </div>
  );
};
