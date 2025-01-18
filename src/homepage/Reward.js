import React from 'react';
import './reward.css';

function Reward() {
  return (
    <section id="collection-1595">
        <div className="cs-container">
            <div className="cs-content">
                <h2 className="cs-title">Featured Rewards</h2>
                <p className="cs-text">
                    Your dedication and effort results in earning rewards. There are many rewards to select from. Choose the one that you like the most.
                </p>
                <a href="/recyclereward" className="cs-button-solid">Reward List</a>
            </div>
            <div className="cs-card-group">
                <li className="cs-item">
                    <a href="" className="cs-link">
                        <picture className="cs-picture">
                            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/shirt4.png"></source>
                            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/shirt4.png"></source>
                            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/shirt4.png" alt="hats" width="1280" height="568"></img>
                        </picture>
                        <h3 className="cs-product-name">Crossback Halter Dress</h3>
                        <span className="cs-price">500 points</span>
                    </a>
                </li>
                <li className="cs-item">
                    <a href="" className="cs-link">
                        <picture className="cs-picture">
                            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/shirt5.png"></source>
                            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/shirt5.png"></source>
                            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/ecommerce/shirt5.png" alt="hats" width="1280" height="568"></img>
                        </picture>
                        <h3 className="cs-product-name">Diesel V1 Hoodie</h3>
                        <span className="cs-price">2000 points</span>
                    </a>
                </li>
            </div>
        </div>
    </section>
);
}

export default Reward;
