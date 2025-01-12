import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer id="cs-footer-1763">
            <div id="contactrecycle2reward" className="cs-card-group">
                <div className="cs-card">
                    <picture className="cs-picture">
                        <img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gym-footer-location-pin.svg" alt="location" loading="lazy" decoding="async" height="32" width="32"></img>
                    </picture>
                    <div className="cs-flex">
                        <h3 className="cs-h3">Location</h3>
                        <span className="cs-card-info">234-244 Stockwell Rd, 4th Floor Brixton, SW9 9SP</span>
                    </div>
                </div>
                <div className="cs-card">
                    <picture className="cs-picture">
                        <img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gym-footer-clock.svg" alt="clock" loading="lazy" decoding="async" height="32" width="32"></img>
                    </picture>
                    <div className="cs-flex">
                        <h3 className="cs-h3">Working Hours</h3>
                        <span className="cs-card-info">Monday - Saturday: 10:00 - 20:00 </span>
                        <span className="cs-card-info">Sunday: Closed</span>
                    </div>
                </div>
                <div className="cs-card">
                    <picture className="cs-picture">
                        <img className="cs-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gym-footer-call.svg" alt="phone" loading="lazy" decoding="async" height="32" width="32"></img>
                    </picture>
                    <div className="cs-flex">
                        <h3 className="cs-h3">Contact</h3>
                        <a href="" className="cs-card-info">M: +99 40 70 929 </a>
                        <a href="" className="cs-card-info">E: info@stitchgym.com</a>
                    </div>
                </div>
                <img className="cs-graphic cs-light" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/long-texture.svg" alt="graphic" height="151" width="1920" loading="lazy" decoding="async"></img>
                <img className="cs-graphic cs-dark" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/long-texture-dark.svg" alt="graphic" height="151" width="1920" loading="lazy" decoding="async"></img>
            </div>
            <div className="cs-container">
                <div className="cs-logo-group">
                    <a aria-label="go back to home" className="cs-logo" href="">
                        <img className="cs-logo-img" aria-hidden="true" loading="lazy" decoding="async" src={`${process.env.PUBLIC_URL}/img/recycle2reward1.svg`} alt="logo" width="340" height="32"></img>
                    </a>
                    <p className="cs-text">
                        Welcome to Recycle2Reward! We believe that a green and clean environment is the foundation of true wellness; nurturing the mind, body, and soul. We are here to support you every step of the way on this rewarding journey.
                    </p>
                </div>
                <div className="cs-ul-wrapper">
                    <span className="cs-header">Useful Links</span>
                    <ul className="cs-ul">
                        <li className="cs-li">
                            <a className="cs-link" href="">Accepted Recycle Items</a>
                        </li>
                        <li className="cs-li">
                            <a className="cs-link" href="">Rewards</a>
                        </li>
                        <li className="cs-li">
                            <a className="cs-link" href="#faq-1466">FAQ</a>
                        </li>
                        <li className="cs-li">
                            <a className="cs-link" href="#contactrecycle2reward">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="cs-contact">
                    <div className="cs-contact-info">
                        <span className="cs-topper">Call us anytime</span>
                        <a href="" className="cs-contact-link">+1 510 565 0590</a>
                    </div>
                    <div className="cs-contact-info">
                        <span className="cs-topper">Visit our location</span>
                        <a href="" className="cs-contact-link">Franklin, WI</a>
                    </div>
                </div>
            </div>
            <div className="cs-bottom">
                <span className="cs-credit">
                    © Copyright 2025 - <a href="/" className="cs-credit-link">Recycle2Reward</a>
                </span>
                <div className="cs-bottom-links">
                    <a href="" className="cs-bottom-link">Terms & Conditions</a>
                    <a href="" className="cs-bottom-link">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;