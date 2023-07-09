import React from 'react'

const Header = (props) => {
  return (
    <div className="header">
        <img src={props.icon} alt='editor-icon' style={{width: "50px", height: "50px"}}/>
        <p className="header__text">{props.text}</p>
    </div>
  );
}

export default Header
