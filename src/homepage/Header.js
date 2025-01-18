import React from 'react';
import R2RNavbar from '../navbar';

function Header() {
  return (
    <header id="cs-navigation">
    <div className="cs-container">
        <a href="/" className="cs-logo" aria-label="back to home">
            <img src={`${process.env.PUBLIC_URL}/img/recycle2reward1.svg`} alt="logo" width="210" height="29" aria-hidden="true"></img>
        </a>
        <R2RNavbar />
    </div>
</header>
);
}

export default Header;