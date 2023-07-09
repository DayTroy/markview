import React from "react";

const Header = ({ icon, text }) => {
  return (
    <div className="header">
      <img
        src={icon}
        style={{ width: "50px", height: "50px" }}
      />
      <p className="header__text">{text}</p>
    </div>
  );
};

export default Header;
