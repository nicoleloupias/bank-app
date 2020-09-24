import React from 'react';
import landingImg from '../assets/landingImg.png';
import { Link } from 'react-router-dom';

export const LandingScreen = () => {
  return (
    <div className="Landing Container">
      <div className="LeftContent m-3">
        <div className="Content">
          <h1>Your favourite online wallet</h1>
          <Link to="/auth">
            <button renderas="button" className="btn-primary">
              <span>Get started</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="RightContent">
        <img src={landingImg} alt="Landing" className="Img" />
      </div>
    </div>
  );
};
