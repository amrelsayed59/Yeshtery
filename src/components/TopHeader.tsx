import React from 'react';
import blackLogo from '../assets/images/black-logo.svg';
import menu from '../assets/images/menu.svg';
import location from '../assets/images/location.svg';
import cart from '../assets/images/cart.svg';
import phone from '../assets/images/phone.svg';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';
import { Link } from 'react-router-dom';

const TopHeader: React.FC<any> = () => {
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="top-box">
            <div className="top-item">
              <div className="text">
                <img className="pr-2" src={menu} alt="menu" />
                <Link to="/">
                  <img src={blackLogo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="top-item">
              <div className="text">
                <img width="8" src={chevronLeft} alt="chevronLeft" />
                <p>
                  Valentine’s Day Offers! Buy Two Get One Free
                  <a href="#">Shop Now</a>
                  <img width="8" src={chevronRight} alt="chevronRight" />
                </p>
              </div>
            </div>
            <div className="top-item">
              <div className="item">
                <img src={phone} alt="location" />
                <p>Contact Us</p>
              </div>

              <div className="item">
                <img src={cart} alt="location" />
                <p>Track Order</p>
              </div>
              <div className="item">
                <img src={location} alt="location" />
                <p>Find A Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
