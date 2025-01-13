import React from 'react';
import './hero.css';

function Hero() {
  return (
<section id="hero-1946">
    <div className="cs-container">
        <div className="cs-content">
            <h2 id="underscore" className="cs-title">Earn <span className="cs-hero-underscore">Rewards</span> Recycling 
                <div className="spinny-words">
                    <span>Paper</span>
                    <span>Glass</span>
                    <span>Bottle</span>
                    <span>Cans</span>
                </div>
            </h2>
            <div className="cs-flex">
                <p className="cs-text">Join us in turning your everyday actions into meaningful rewards while making a positive impact on the environment.</p>
                <a href="#steps-284" className="cs-button-solid">Read More</a>
            </div>
        </div>
        <picture className="cs-picture">
            <source media="(min-width: 601px)" srcSet={`${process.env.PUBLIC_URL}/img/hero-img.png`}></source>
            <source media="(max-width: 600px)" srcSet={`${process.env.PUBLIC_URL}/img/hero-img.png`}></source>
            <img decoding="async" src={`${process.env.PUBLIC_URL}/img/hero-img.png`} alt="construction site" width="1280" height="510"></img>
        </picture>
        <ul className="cs-card-group">
            <li className="cs-item">
                <picture className="cs-icon-picture">
                    <img className="cs-icon" src={`${process.env.PUBLIC_URL}/img/paper.svg`} decoding="async" alt="icon" width="40" height="40" aria-hidden="true"></img>
                </picture>
                <div className="cs-text-group">
                    <h3 className="cs-h3">Paper</h3>
                    <p className="cs-item-text">Earn rewards with Recycle2Reward by recycling used office paper and magazines!</p>
                </div>
            </li>
            <li className="cs-item">
                <picture className="cs-icon-picture">
                    <img className="cs-icon" src={`${process.env.PUBLIC_URL}/img/glass.svg`} decoding="async" alt="icon" width="40" height="40" aria-hidden="true"></img>
                </picture>
                <div className="cs-text-group">
                    <h3 className="cs-h3">Glass</h3>
                    <p className="cs-item-text">Earn rewards with Recycle2Reward by recycling empty, clean glass bottle!</p>
                </div>
            </li>
            <li className="cs-item">
                <picture className="cs-icon-picture">
                    <img className="cs-icon" src={`${process.env.PUBLIC_URL}/img/cans.svg`} decoding="async" alt="icon" width="40" height="40" aria-hidden="true"></img>
                </picture>
                <div className="cs-text-group">
                    <h3 className="cs-h3">Cans</h3>
                    <p className="cs-item-text">Earn rewards with Recycle2Reward by recycling empty, clean cans!</p>
                </div>
            </li>
            <li className="cs-item">
                <picture className="cs-icon-picture">
                    <img className="cs-icon" src={`${process.env.PUBLIC_URL}/img/bottle_small.png`} decoding="async" alt="icon" width="40" height="40" aria-hidden="true"></img>
                </picture>
                <div className="cs-text-group">
                    <h3 className="cs-h3">Bottles</h3>
                    <p className="cs-item-text">Earn rewards with Recycle2Reward by recycling clean, empty bottles!</p>
                </div>
            </li>
        </ul>
    </div>
</section>
  );
}   

export default Hero;