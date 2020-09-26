import React from 'react';

export const Movement = ({ receiver, quantity, sender, date, action }) => {
  return (
    <div>
      <h3>Receiver: </h3>
      {receiver}
      <h3>Sender: </h3>
      {sender}
      <h3>Quantity: </h3>
      {quantity}
      <h3>Date: </h3>
      {date}
      <h3>Action: </h3>
      {action}
      <hr />
    </div>
  );
};
