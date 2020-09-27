import React from 'react';
import { useForm } from './../hooks/useForm';
import { transferMoney } from './../actions/money';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './../components/Layout';
import Swal from 'sweetalert2';

export const TransferScreen = () => {
  const dispatch = useDispatch();
  const { email: userEmail } = useSelector((state) => state.auth);
  const { balance } = useSelector((state) => state.money);

  const [formValues, handleInputChange, reset] = useForm({
    quantity: '',
    receiverEmail: '',
  });
  const { quantity, receiverEmail } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    if (receiverEmail === userEmail) {
      Swal.fire('Error', "You can't transfer yourself money", 'error');
      return;
    }
    if (quantity > balance) {
      Swal.fire(
        'Error',
        `You don't have that amount of money. You currently have ${balance}€ in your account.`,
        'error',
      );
      return;
    }
    dispatch(transferMoney(parseFloat(quantity), receiverEmail));
  };

  return (
    <Layout component="Transfer" img="actionsImg" title="Transfer money">
      {balance && <p>You have {balance}€ in your account.</p>}
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
        <button className="btn-primary">Transfer</button>
      </form>
    </Layout>
  );
};
