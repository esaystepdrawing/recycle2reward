import React, { useState } from 'react';
import Header from '../homepage/Header';
import Footer from '../homepage/Footer';
import './recycleguest.css';


const RecycleGuest = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Plastic', 'Glass', 'Can', 'Paper', 'Cardboard'];
  
    const handleSelect = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
        <div>
            <Header />
                <div>
                    &nbsp;<br></br>&nbsp;
                </div>

            <section id="cs-contact-242">
                <div className="cs-container">
                    <div className="cs-content">
                        <span className="cs-topper">Quick Schedule - Recycle2Reward</span>
                        <h2 className="cs-title">Schedule Your Recycle Items Pickup</h2>
                        <p className="cs-text">
                            Quickly submit the details and one of our team meber will get in touch for pickup. It is that simple!
                        </p>
                    </div>
                    <form id="cs-form-242" name="Contact Form" method="post">
                        <label className="cs-label">
                            Name (required)
                            <input className="cs-input" required type="text" id="name-242" name="name" placeholder="John/Jane Doe"></input>
                        </label>
                        <label className="cs-label">
                            Email (required)
                            <input className="cs-input" required type="text" id="email-242" name="email" placeholder="name@company.com"></input>
                        </label>
                        <label className="cs-label">
                            Phone (required)
                            <input className="cs-input" required type="text" id="phone-242" name="phone" placeholder="+1 (206) 987-6543"></input>
                        </label>
                        <label className="cs-label">
                            Recycle Item Type (required)
                            <select className="cs-input" value={selectedOption} onChange={handleSelect}>
                                <option value="" disabled>Select an option</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <label className="cs-label">
                            How Did You Find Us
                            <input className="cs-input" type="text" id="find-242" name="find-us" placeholder="Social Media, Family, Friend..."></input>
                        </label>
                        <label className="cs-label">
                            Address (required)
                            <input className="cs-input" required type="text" id="address-242" name="address" placeholder="1234 Main St, City, State, Zip"></input>
                        </label>
                        <label className="cs-label cs-label-message">
                            Message (required)
                            <textarea className="cs-input cs-textarea" required name="Message" id="message-242" placeholder="Hello, I’m interested in..."></textarea>
                        </label>
                        <button className="cs-button-solid cs-submit" type="submit">Submit Message Now</button>
                    </form>
                    <div className="cs-right-section">
                        <picture className="cs-picture">
                            <source media="(max-width: 600px)" srcSet={process.env.PUBLIC_URL + '/img/r2rsideprocess.png'}></source>
                            <source media="(min-width: 601px)" srcSet={process.env.PUBLIC_URL + '/img/r2rsideprocess.png'}></source>
                            <img className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src={process.env.PUBLIC_URL + '/img/r2rsideprocess.png'} alt="Recycle 2 Reward Process" width="462" height="438"></img>
                        </picture>
                    </div>
                </div>
            </section>
                                
            <Footer />
        </div>
    );
};

export default RecycleGuest;
