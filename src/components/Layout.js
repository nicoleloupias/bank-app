import React from 'react';

export const Layout = ({ component, img, title, children, ...rest }) => {
  return (
    <>
      <div className={`Container ${component}`}>
        <div className="LeftContent">
          <div className="Content">
            {title && <h1> {`${title}`} </h1>}
            {children}
          </div>
        </div>
        <div className="RightContent">
          <img src={require(`./../assets/${img}.png`)} alt={img} />
        </div>
      </div>
    </>
  );
};
