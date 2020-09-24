import Swal from 'sweetalert2';
import { types } from '../types/types.js';
import { firebase } from '../firebase/firebaseConfig';
import { startLoading, finishLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.email, user.displayName));
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
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.email, user.displayName));
      })
      .catch((e) => {
        console.log(e);
        Swal.fire('Error', e.message, 'error');
      });
  };
};

export const login = (email, displayName) => ({
  type: types.login,
  payload: {
    email,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    // dispatch(noteLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
