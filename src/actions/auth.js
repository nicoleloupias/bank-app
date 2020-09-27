import Swal from 'sweetalert2';
import { types } from '../types/types.js';
import { db, firebase } from '../firebase/firebaseConfig';
import { startLoading, finishLoading } from './ui';
import { startLoadingData, moneyLogout } from './money';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(startLoadingData(user.email));
        dispatch(login(user.uid, user.email, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        dispatch(finishLoading());
        Swal.fire('Error', e.message, 'error');
      });
  };
};
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        const info = {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
        };
        await db.doc(`${user.email}/info`).set(info);
        await db.doc(`/${user.email}/data/`).set({ balance: 0 });
        dispatch(login(user.uid, user.email, user.displayName));
        dispatch(startLoadingData(user.email));
      })
      .catch((e) => {
        console.log(e);
        Swal.fire('Error', e.message, 'error');
      });
  };
};

export const login = (uid, email, displayName) => ({
  type: types.login,
  payload: {
    uid,
    email,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(moneyLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
