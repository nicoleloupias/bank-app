import { types } from '../types/types.js';
import { db } from '../firebase/firebaseConfig';
import { loadData } from './../helpers/loadData';

export const startLoadingData = (email) => {
  return async (dispatch) => {
    const data = await loadData(email);
    dispatch(dataLoaded(data));
  };
};

export const dataLoaded = (data) => ({
  type: types.dataLoaded,
  payload: data,
});

export const depositMoney = (quantity) => {
  return async (dispatch, getState) => {
    const { email, name } = getState().auth;
    const { balance } = getState().money;
    const newQuantity = balance + quantity;
    dispatch(startUpdateBalance(email, newQuantity));
    const movement = {
      sender: name,
      receiver: name,
      quantity,
      action: 'Deposit',
      date: Date.now(),
    };
    dispatch(startAddMovement(email, movement));
  };
};

export const transferMoney = (quantity, receiverEmail) => {
  return async (dispatch, getState) => {
    debugger;
    const { email, name: senderName } = getState().auth;
    const { balance } = getState().money;
    const snapReceiverInfo = await db.doc(`${receiverEmail}/info`).get();
    const { name: receiverName } = snapReceiverInfo.data();
    const newQuantity = balance - quantity;
    dispatch(startUpdateBalance(email, newQuantity)); // users update

    const movement = {
      sender: senderName,
      receiver: receiverName,
      quantity,
      action: 'Transfer',
      date: Date.now(),
    };
    dispatch(startAddMovement(email, movement));

    const snapReceiverBalance = await db.collection(`${receiverEmail}/`).get();
    const [{ balance: receiverBalance }] = snapReceiverBalance.docs.map((doc) =>
      doc.data(),
    );
    const newQuantityReceiver = receiverBalance + quantity;
    dispatch(startUpdateBalance(receiverEmail, newQuantityReceiver)); // receiver update

    const receiverMovement = {
      sender: senderName,
      receiver: receiverName,
      quantity,
      action: 'Deposit',
      date: Date.now(),
    };
    dispatch(startAddMovement(receiverEmail, receiverMovement));
  };
};

export const startUpdateBalance = (email, newQuantity) => {
  return async (dispatch, getState) => {
    await db.doc(`/${email}/data/`).update({ balance: newQuantity });

    const { email: userEmail } = getState().auth;

    if (userEmail === email) {
      dispatch(updateBalance(newQuantity));
    }
  };
};

export const updateBalance = (quantity) => ({
  type: types.updateBalance,
  payload: quantity,
});

export const startAddMovement = (email, movement) => {
  return async (dispatch) => {
    const doc = await db.collection(`${email}/data/movements`).add(movement);
    dispatch(addMovement(doc.id, movement));
  };
};

export const addMovement = (id, movement) => ({
  type: types.addMovement,
  payload: {
    id,
    ...movement,
  },
});

export const moneyLogout = () => ({
  type: types.moneyLogout,
});
