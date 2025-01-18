import React from 'react';
import Header from '../homepage/Header';
import Footer from '../homepage/Footer';
import { useMatchMedia } from "../util/useMatchMedia";
import './login.css';


const Login = () => {
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
                <span className="cs-topper">Quick Schedule - Recycle2Reward</span>
                <h2 className="cs-title">Quick Schedule to Recycle Items</h2>
                <p className="cs-text">&nbsp;</p>
                <a href="/recycleguest" className="cs-button-solid">Continue as Guest</a>
                <p className="cs-text">&nbsp;</p>

                <div className="cs-right-section">
                        <picture className="cs-picture">
                            <source media="(max-width: 600px)" srcSet={process.env.PUBLIC_URL + '/img/r2rsideprocess.png'}></source>
                            <source media="(min-width: 601px)" srcSet={process.env.PUBLIC_URL + '/img/r2rsideprocess.png'}></source>
                            <img className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src={process.env.PUBLIC_URL + '/img/r2rsideprocess.png'} alt="Recycle 2 Reward Process" width="462" height="338"></img>
                        </picture>
                </div>
                <p className="cs-text">&nbsp;</p>
                <a href="/sign-up" className="cs-button-solid">Sign-Up</a>
                <p className="cs-text">
                    Get Started by registering.
                </p>
                </div>
        }
            <form className="cs-form" id="cs-form-1388" name="loginform" method="post">
                <h3 className="cs-h3">Recycle2Reward Login</h3>
                <label className="cs-label cs-email">
                    Email
                    <input className="cs-input" required type="email" id="email-1388" name="email" placeholder="Email"></input>
                </label>
                <label className="cs-label">
                    Password
                    <input className="cs-input" required type="password" id="password-1388" name="password" placeholder="Password"></input>
                </label>
                <button className="cs-button-solid cs-submit" type="submit">Login</button>
            </form>
        </div>
    </section>

    <section id="subscribe-1718">
        <div className="cs-container">
            <div className="cs-content">
                <span className="cs-topper">Subscribe Us</span>
                <h2 className="cs-title">Subscribe Your Email for Newsletter & Promotion</h2>
                <p className="cs-text">
                Subscribe to our newsletter and be the first to know about:
                </p>
                <ul>
                    <li>
                        Exclusive Promotions: Special discounts and deals tailored just for you.
                    </li>
                    <li>
                        Latest News: Updates on new product launches, upcoming events, and company news.
                    </li>
                    <li>
                        Expert Insights: Helpful tips, articles, and resources straight to your inbox.
                    </li>
                </ul>
                <p className="cs-text">
                Join our community today and enjoy a special welcome gift!
                Signing up is quick and easy—just enter your email below:
                </p>
                <form className="cs-form" name="subscribelogin" method="post">
                    <input className="cs-input" type="email" id="cs-email-301-1718" name="find-us" placeholder="Email Address" required></input>
                    <button className="cs-button-solid cs-submit" type="submit">Subscribe</button>
                </form>
                <img className="cs-floater" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-spiral.svg" alt="graphic" width="1920" height="486" aria-hidden="true"></img>
            </div>
        </div>
        <picture className="cs-background">
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people1.jpg"></source>
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people1.jpg"></source>
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people1.jpg" alt="people" width="1920" height="486" aria-hidden="true"></img>
        </picture>
    </section>
    <Footer />
    </div>
  );
};

export default Login;