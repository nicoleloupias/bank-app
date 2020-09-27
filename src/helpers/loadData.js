import { db } from '../firebase/firebaseConfig';
import dayjs from 'dayjs';

export const loadData = async (email) => {
  const snapBalance = await db.collection(`${email}/`).get();
  const [{ balance }] = snapBalance.docs.map((doc) => doc.data());
  const snapMovements = await db
    .collection(`${email}/data/movements`)
    .get();
  const unorderedMovements = snapMovements.docs.map((doc) =>
    doc.data(),
  );
  debugger;
  const movements = [...unorderedMovements]
    .sort((a, b) => b.date - a.date)
    .map((movement) => ({
      ...movement,
      date: dayjs(movement.date).format('MMM D, HH:mm A'),
    }));

  return {
    balance,
    movements,
  };
};
