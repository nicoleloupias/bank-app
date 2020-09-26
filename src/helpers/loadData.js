import { db } from '../firebase/firebaseConfig';
export const loadData = async (email) => {
  const snapBalance = await db.collection(`${email}/`).get();
  const [{ balance }] = snapBalance.docs.map((doc) => doc.data());
  const snapMovements = await db.collection(`${email}/data/movements`).get();
  const unorderedMovements = snapMovements.docs.map((doc) => doc.data());

  const movements = [...unorderedMovements].sort((a, b) => b.date - a.date);
  debugger;
  return {
    balance,
    movements,
  };
};
