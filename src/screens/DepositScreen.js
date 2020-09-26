import React from 'react';
import { useForm } from './../hooks/useForm';
import { depositMoney } from './../actions/money';
import { useDispatch } from 'react-redux';

export const DepositScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    quantity: '',
  });
  const { quantity } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(depositMoney(parseFloat(quantity)));
  };

  return (
    <div>
      <h1>deposit</h1>
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
      </form>
    </div>
  );
};
