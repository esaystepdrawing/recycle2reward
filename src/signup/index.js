import React from 'react';
import Header from '../homepage/Header';
import Footer from '../homepage/Footer';
import { useMatchMedia } from "../util/useMatchMedia";
import '../login/login.css';


const Signup = () => {
    const isDesktopResolution = useMatchMedia("(min-width:780px)", true);
  return (
    <div>
    <Header />
    <div>
      &nbsp;<br></br>&nbsp;
    </div>
    <section id="contact-1388">
        <div className="cs-container">
        {isDesktopResolution &&
            <div className="cs-content">
                <span className="cs-topper">Contact Us</span>
                <h2 className="cs-title">Get in Touch</h2>
                <p className="cs-text">
                    We are a team of passionate and creative individuals dedicated to crafting captivating designs that leave a lasting impression.
                </p>
                <ul className="cs-ul">
                    <li className="cs-li">
                        <picture className="cs-icon-wrapper">
                            <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg" alt="address icon" className="cs-icon" width="40" height="40" decoding="async"></img>
                        </picture>
                        <div className="cs-flex-group">
                            <span className="cs-header">Email</span>
                            <a href="mailto:Email@stitch.com" className="cs-link">Email@stitch.com</a>
                        </div>
                    </li>
                </ul>
                <p className="cs-text">&nbsp;</p>
                <a href="/login" className="cs-button-solid">Login</a>
                <p className="cs-text">
                    Already registerd... Login and schedule your recycle pickup and enjoy rewards.
                </p>
            </div>
        }
            <form className="cs-form" id="cs-form-1388" name="Contact Form" method="post">
                <h3 className="cs-h3">Recycle2Reward Sign Up</h3>
                <label className="cs-label">
                    Name
                    <input className="cs-input" required type="text" id="name-1388" name="name" placeholder="Name"></input>
                </label>
                <label className="cs-label cs-email">
                    Email
                    <input className="cs-input" required type="email" id="email-1388" name="email" placeholder="Email"></input>
                </label>
                <label className="cs-label cs-phone">
                    Phone
                    <input className="cs-input" required type="number" id="phone-1388" name="phone" placeholder="Phone"></input>
                </label>
                <label className="cs-label">
                    Password
                    <input className="cs-input" required type="password" id="password-1388" name="password" placeholder="Password"></input>
                </label>
                <button className="cs-button-solid cs-submit" type="submit">Register</button>
            </form>
        </div>
    </section>
    <Footer />
    </div>
  );
};

export default Signup;