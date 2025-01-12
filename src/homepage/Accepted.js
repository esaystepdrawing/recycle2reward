import React from 'react';
import './accepted.css';

function Accepted() {
        return (
        <section id="services-1301">
            <div className="cs-container">
                <div className="cs-content">
                    <div className="cs-flex-group">
                        <span className="cs-topper">What we accept?</span>
                        <h2 className="cs-title">Recycle Items accepted</h2>
                    </div>
                    <p className="cs-text">
                        At Recycle2Reward, we currently accept a limited range of items that are safe for families and children to handle. Our goal is to make recycling a fun and engaging activity for everyone, encouraging participation from all ages.
                    </p>
                </div>
                <ul className="cs-card-group">
                    <li className="cs-item">
                        <a href="" className="cs-link">
                            <img className="cs-icon" src={`${process.env.PUBLIC_URL}/img/paperdesk.png`} loading="lazy" decoding="async" alt="icon" width="40" height="40" aria-hidden="true"></img>
                            <h3 className="cs-h3">Recycled Paper</h3>
                            <p className="cs-item-text">
                                From newspapers and magazines to used office paper, every piece recycled contributes to reducing waste and conserving resources. 
                            </p>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a href="" className="cs-link">
                            <img className="cs-icon" src={`${process.env.PUBLIC_URL}/img/bottle-glass.svg`} loading="lazy" decoding="async" alt="icon" width="40" height="40" aria-hidden="true"></img>
                            <h3 className="cs-h3">Recycled Glass</h3>
                            <p className="cs-item-text">
                                From bottles to jars, every recycled glass item helps reduce landfill waste and saves energy.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a href="" className="cs-link">
                            <img className="cs-icon" src={`${process.env.PUBLIC_URL}/img/soda-can.svg`} loading="lazy" decoding="async" alt="icon" width="40" height="40" aria-hidden="true"></img>
                            <h3 className="cs-h3">Recycled Cans</h3>
                            <p className="cs-item-text">
                                By recycling aluminum and metal cans, you help conserve natural resources and reduce waste.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a href="" className="cs-link">
                            <img className="cs-icon" src={`${process.env.PUBLIC_URL}/img/recycle-bottle.svg`} loading="lazy" decoding="async" alt="icon" width="40" height="40" aria-hidden="true"></img>
                            <h3 className="cs-h3">Recycled Bottles</h3>
                            <p className="cs-item-text">
                                By recycling plastic, you help reduce waste, conserve resources, and protect our planet.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
  );
}

export default Accepted;