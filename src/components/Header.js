import React from "react";

const Header = ({ image }) => {
  return (
    <div className="header">
      <img src={image} alt="" />
    </div>
  );
};

export default Header;
