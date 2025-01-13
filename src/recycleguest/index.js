import React from 'react';
import Header from '../homepage/Header';
import Footer from '../homepage/Footer';
import './recycleguest.css';

const RecycleGuest = () => {
    return (
        <div>
            <Header />
            <div>
            &nbsp;<br></br>&nbsp;
            </div>
            <div>
                <section id="cs-contact-242">
                    <div className="cs-container">
                        <div className="cs-content">
                            <span className="cs-topper">Here To Recycle</span>
                            <h2 className="cs-title">Quick Recycle Request</h2>
                            <p className="cs-text">
                                Complete the quick form as Guest. The submission form is for a Recycle Item accepted by recycle2reward. We will get back to you as soon as possible.
                            </p>
                        </div>
                        <form id="cs-form-242" name="Contact Form" method="post">
                            <label className="cs-label">
                                Name
                                <input className="cs-input" required type="text" id="name-242" name="name" placeholder="John/Jane Doe"></input>
                            </label>
                            <label className="cs-label">
                                Email
                                <input className="cs-input" required type="text" id="email-242" name="email" placeholder="name@company.com"></input>
                            </label>
                            <label className="cs-label">
                                Phone
                                <input className="cs-input" required type="text" id="phone-242" name="phone" placeholder="+1 (206) 987-6543"></input>
                            </label>
                            <label className="cs-label">
                                How Did You Find Us
                                <input className="cs-input" type="text" id="find-242" name="find-us" placeholder="Social Media, Family, Friend..."></input>
                            </label>
                            <label className="cs-label cs-label-message">
                                Message
                                <textarea className="cs-input cs-textarea" required name="Message" id="message-242" placeholder="Hello, I’m interested in..."></textarea>
                            </label>
                            <button className="cs-button-solid cs-submit" type="submit">Submit Message Now</button>
                        </form>
                        <div className="cs-right-section">
                            <ul className="cs-ul">
                                <li className="cs-li">
                                    <picture className="cs-icon-wrapper">
                                        <img aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/mail.svg" alt="mail icon" className="cs-icon" width="36" height="36" decoding="async"></img>
                                    </picture>
                                    <div className="cs-flex-group">
                                        <span className="cs-header">Email</span>
                                        <a href="mailto:support@yourdomain.com" className="cs-link">support@yourdomain.com</a>
                                    </div>
                                </li>
                                <li className="cs-li">
                                    <picture className="cs-icon-wrapper">
                                        <img aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/phone.svg" alt="phone icon" className="cs-icon" width="36" height="36" decoding="async"></img>
                                    </picture>
                                    <div className="cs-flex-group">
                                        <span className="cs-header">Phone</span>
                                        <a href="tel:206-987-6543" className="cs-link">(206) 987-6543</a>
                                    </div>
                                </li>
                                <li className="cs-li">
                                    <picture className="cs-icon-wrapper">
                                        <img aria-hidden="true" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/pin.svg" alt="address icon" className="cs-icon" width="36" height="36" decoding="async"></img>
                                    </picture>
                                    <div className="cs-flex-group">
                                        <span className="cs-header">Address</span>
                                        <a href="" className="cs-link"><span className="cs-block">2553 Woodbridge Lane,</span> Boston Ware 120</a>
                                    </div>
                                </li>
                            </ul>
                            <picture className="cs-picture">
                                <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map-m.jpg"></source>
                                <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map.jpg"></source>
                                <img className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map.jpg" alt="google map" width="462" height="438"></img>
                            </picture>
                        </div>
                    </div>
                </section>       
            </div>
            <Footer />
        </div>
    );
};

export default RecycleGuest;
