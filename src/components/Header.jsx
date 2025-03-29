import React from "react";

const Header = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <div className="divider"></div>
    </div>
  );
};

export default Header;
