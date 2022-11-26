import React from 'react';
import facebook from '../assets/images/facebook.svg';
import linkedIn from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';

const Footer: React.FC<any> = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-box">
            <div className="footer-text">
              <div className="logo">
                <img
                  src="https://www.yeshtery.com/files/69/brand-logo-yellow.svg"
                  alt="logoImg"
                />
              </div>
              <div className="content">
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
                <p className="mb-2">
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed
                </p>
                <p className="mb-2">
                  dia m nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit
                </p>
              </div>
            </div>
            <div className="footer-social">
              <div className="subscribe-box">
                <p className="mb-2">Subscribe to our newsletter</p>
                <form className="subscribe-form">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Your Mail"
                    className="subscribe-input"
                  />
                  <button className="subscribe-button">
                    Subscribe{' '}
                    <img
                      className=""
                      src="https://www.yeshtery.com/yeshtery/images/send.svg"
                      alt="Subscribe"
                    />
                  </button>
                </form>
              </div>
              <div className="social-links">
                <ul className="ul-link">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Track Order</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Sell With Us</li>
                  <li>Shipping And Returns</li>
                </ul>
                <ul className="ul-social">
                  <li>
                    <p>/Yeshtery</p>
                    <img src={facebook} alt="facebook" />
                  </li>
                  <li>
                    <p>/Yeshtery</p>
                    <img src={linkedIn} alt="linkedIn" />
                  </li>
                  <li>
                    <p>/Yeshtery</p>
                    <img src={instagram} alt="instagram" />
                  </li>
                  <li>
                    <p>/Yeshtery</p>
                    <img src={twitter} alt="twitter" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy-write">
            <p>© 2021 yeshtery, all rights reserved.</p>
            <p>Powered By Nsnav</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
