import React from 'react';
import { useForm } from './../hooks/useForm';
import { depositMoney } from './../actions/money';
import { useDispatch } from 'react-redux';
import { Layout } from './../components/Layout';

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
    <Layout
      component="Deposit"
      img="actionsImg"
      title="Deposit money"
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          placeholder="0€"
          name="quantity"
          id="quantity"
          className="input-text"
          value={quantity}
          onChange={handleInputChange}
        />
        <button className="btn-primary">Deposit</button>
      </form>
    </Layout>
  );
};
