import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth';

export const TheNavbar = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="TheNavbar">
      <Link to="/" className="m-2">
        Smart Bank
      </Link>
      {uid ? (
        <button className="btn-primary m-2" onClick={handleSignOut}>
          <span>Sign out</span>
        </button>
      ) : (
        <Link to="/auth">
          <button renderas="button" className="btn-primary m-2">
            <span>Sign in</span>
          </button>
        </Link>
      )}
    </nav>
  );
};
