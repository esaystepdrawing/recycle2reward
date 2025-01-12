import React from 'react';

function Header() {
  return (
    <header id="cs-navigation">
    <div className="cs-container">
        <a href="/" className="cs-logo" aria-label="back to home">
            <img src={`${process.env.PUBLIC_URL}/img/recycle2reward1.svg`} alt="logo" width="210" height="29" aria-hidden="true"></img>
        </a>
        <nav className="cs-nav" role="navigation">
            <button className="cs-toggle" aria-label="mobile menu toggle">
                <div className="cs-box" aria-hidden="true">
                    <span className="cs-line cs-line1" aria-hidden="true"></span>
                    <span className="cs-line cs-line2" aria-hidden="true"></span>
                    <span className="cs-line cs-line3" aria-hidden="true"></span>
                </div>
            </button>
            <div className="cs-ul-wrapper">
                <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                    <li className="cs-li">
                        <a href="/login" className="cs-li-link">
                            Login
                        </a>
                    </li>
                    <li className="cs-li">
                        <a href="/sign-up" className="cs-li-link">
                            Sign-Up
                        </a>
                    </li>
                    <li className="cs-li">
                        <a href="#contactrecycle2reward" className="cs-button-solid cs-nav-button">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
  );
}

export default Header;