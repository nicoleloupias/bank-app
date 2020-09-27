import React from 'react';
import { useSelector } from 'react-redux';
import { Movement } from './../components/Movement';
import { Layout } from './../components/Layout';

export const LastMovementsScreen = () => {
  const { movements } = useSelector((state) => state.money);

  return (
    <Layout
      component="LastMovements"
      img="actionsImg"
      title="Last movements"
    >
      <div className="MovementsContainer">
        {movements.length > 0 ? (
          movements.map((movement, index) => (
            <Movement
              key={`${index}-${movement.date}`}
              {...movement}
            />
          ))
        ) : (
          <p>You don't have any movements yet.</p>
        )}
      </div>
    </Layout>
  );
};
