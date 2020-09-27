import React from 'react';

export const Movement = ({
  receiver,
  quantity,
  sender,
  date,
  action,
}) => {
  return (
    <div className="Movement">
      <div className="Details">
        <h3>From: </h3>
        <span>{sender}</span>
        <h3>To: </h3>
        <span>{receiver} </span>
        <h3>Date:</h3>
        <span>{date}</span>
      </div>
      <div className="Quantity">
        <h2>{`${action === 'Transfer' ? '-' : '+'} ${quantity}€`}</h2>
      </div>
    </div>
  );
};
