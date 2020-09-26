import React from 'react';
import { useForm } from './../hooks/useForm';
import { transferMoney } from './../actions/money';
import { useDispatch } from 'react-redux';

export const TransferScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    quantity: '',
    receiverEmail: '',
  });
  const { quantity, receiverEmail } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(transferMoney(parseFloat(quantity), receiverEmail));
  };

  return (
    <div>
      <h1> transfer screen</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          placeholder="0"
          name="quantity"
          id="quantity"
          className="input-text"
          value={quantity}
          onChange={handleInputChange}
        />
        <label htmlFor="receiverEmail">Email of the receiver:</label>
        <input
          type="email"
          placeholder="Email"
          name="receiverEmail"
          id="receiverEmail"
          className="input-text"
          value={receiverEmail}
          onChange={handleInputChange}
        />
        <button>submittttt</button>
      </form>
    </div>
  );
};
