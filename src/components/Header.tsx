import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useMainDispatch, useMainState } from '../context/gloabal';
import BottomHeader from './BottomHeader';
import TopHeader from './TopHeader';
import blackLogo from '../assets/images/black-logo.svg';

export const Header: React.FC<any> = () => {
  const { searchHistory, default_logo } = useMainState();
  const dispatch = useMainDispatch();
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<any>(null);
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState(searchHistory);
  const { pathname }: any = useLocation();

  const handleClick = () => {
    setIsShow(!isShow);
  };

  // handle scroll event
  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // Remove Item
  const removeItem = (item: any) => {
    let arr = searchHistory;
    arr.splice(item, 1);
    setData(arr);
    dispatch({
      type: 'search_history',
      payload: searchHistory,
    });
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  // all products in car dropdown
  const AllProducts = data?.map((product: any) => (
    <li className="drop-li" key={product.id}>
      <div className="drop-product">
        <div className="img-box">
          <img src={product.productImage} alt="img" />
        </div>
        <div className="drop-details">
          <h6>{product.productName}</h6>
          <p className="quantity">Quantity: 1</p>
          <p>
            {product.productPrice} {product.productCurrency}
          </p>
        </div>
      </div>
      <div className="drop-remove" onClick={() => removeItem(product)}>
        <p>Remove</p>
      </div>
    </li>
  ));

  return (
    <>
      <section style={{ marginTop: sticky.offset }}>
        <TopHeader />
        <header
          className={`header ${sticky.isSticky ? ' sticky' : ''}`}
          ref={headerRef}
        >
          <div className="container">
            <div className="header__box">
              <div className="header__search">
                <form className="search-form">
                  <button type="submit" className="search-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 19.943 20"
                      color="#000"
                    >
                      <path
                        d="M291.712,162.4l-5.845-5.844a7.734,7.734,0,1,0-1.4,1.383l5.852,5.852a.984.984,0,0,0,1.391-1.391Zm-17.688-10.6a5.758,5.758,0,1,1,5.757,5.757A5.764,5.764,0,0,1,274.024,151.8Z"
                        transform="translate(-272.057 -144.08)"
                      ></path>
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                  />
                </form>
              </div>
              <div className="header__logo">
                <img
                  className="header__logo-img"
                  src={pathname === '/' ? blackLogo : default_logo}
                  alt="logoImg"
                  width="64"
                  height="40"
                />
              </div>
              <div className="header__info">
                <div className="header__cart-box">
                  <div className="header__cart" onClick={handleClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      width="29.903"
                      height="24"
                      viewBox="0 0 29.903 24"
                    >
                      <path
                        d="M3438.544,406.339a1.179,1.179,0,0,0-.957-.491h-5.335l-7.514-9.393-.005-.006-.048-.054-.035-.037a.406.406,0,0,0-.037-.034c-.018-.017-.035-.033-.054-.048l-.006-.005-.025-.018a.686.686,0,0,0-.065-.047l-.038-.023c-.02-.012-.04-.025-.061-.036l-.049-.023c-.018-.008-.036-.017-.054-.024l-.059-.022-.047-.016-.065-.016-.046-.011-.064-.01-.049-.007c-.02,0-.04,0-.06,0l-.055,0-.054,0c-.021,0-.041,0-.061,0l-.049.007-.065.01-.045.011-.065.016-.047.016-.059.022c-.018.007-.036.016-.054.024l-.049.023c-.021.011-.041.024-.061.036l-.038.023c-.023.015-.044.031-.066.047l-.024.018-.006.005c-.019.015-.037.032-.055.048s-.025.022-.036.034-.023.025-.035.038-.033.035-.048.053l0,.006-7.514,9.393h-5.335a1.182,1.182,0,0,0-1.12,1.554l3.935,11.8a1.181,1.181,0,0,0,1.12.807h19.672a1.181,1.181,0,0,0,1.12-.807l3.935-11.8A1.179,1.179,0,0,0,3438.544,406.339Zm-14.728-7.257,5.413,6.766H3418.4Zm8.986,18.57H3414.83l-3.147-9.443h24.266Z"
                        transform="translate(-3408.865 -396.013)"
                      ></path>
                    </svg>
                    <p>Cart</p>
                    <span className="count">
                      {data.length > 0 ? data.length : 0}
                    </span>
                  </div>
                  {isShow ? (
                    <div className="drop-box">
                      <div
                        className="close-box"
                        onClick={() => setIsShow(false)}
                      >
                        <img
                          width="15"
                          src="https://www.yeshtery.com/yeshtery/images/close.svg"
                          alt="close"
                        />
                      </div>
                      <div className="drop-title">
                        <p>My Cart</p>
                      </div>
                      <h6 className="cart-summary">Cart Summary</h6>
                      <ul className="drop-items">
                        {data.length > 0 ? (
                          AllProducts
                        ) : (
                          <p className="empty-cart">Cart Is Empty</p>
                        )}
                      </ul>
                      {data?.length > 0 ? (
                        <>
                          <p className="total-price">Total: 19, 999 EGP</p>
                          <div className="review-buttons">
                            <button className="button-cart">Review Cart</button>
                            <button className="button-pickup">
                              Complete Checkout
                            </button>
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="info-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25.765"
                    height="24"
                    viewBox="0 0 25.765 24"
                    fill="#000"
                  >
                    <path
                      d="M3537.769,398.3h0a7.159,7.159,0,0,0-10.49,0l-.269.284-.268-.282a7.16,7.16,0,0,0-10.122-.372q-.194.178-.373.372a8.04,8.04,0,0,0,0,10.886l9.927,10.468a1.138,1.138,0,0,0,.8.358h.031a1.141,1.141,0,0,0,.788-.313l9.971-10.516A8.039,8.039,0,0,0,3537.769,398.3Zm-1.489,9.471-.178-.168-9.092,9.59-9.092-9.588a5.71,5.71,0,0,1,0-7.729,4.833,4.833,0,0,1,3.381-1.562c.066,0,.133,0,.2,0a4.833,4.833,0,0,1,3.3,1.29c.1.088.188.181.278.278l1.108,1.168a1.18,1.18,0,0,0,1.663-.005l1.1-1.164a4.864,4.864,0,0,1,6.876-.276c.1.088.189.18.278.277a5.65,5.65,0,0,1,0,7.725Z"
                      transform="translate(-3514.125 -396.013)"
                    ></path>
                  </svg>
                  <p>Wishlist</p>
                </div>

                <div className="info-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#000"
                  >
                    <path
                      d="M3663.132,407.618a6.59,6.59,0,1,0-8.537,0,12.019,12.019,0,0,0-7.731,11.214,1.18,1.18,0,0,0,1.18,1.181h21.639a1.181,1.181,0,0,0,1.181-1.181A12.019,12.019,0,0,0,3663.132,407.618Zm-8.5-5.015a4.229,4.229,0,1,1,4.23,4.229A4.235,4.235,0,0,1,3654.634,402.6Zm-5.338,15.049a9.64,9.64,0,0,1,19.135,0Z"
                      transform="translate(-3646.864 -396.013)"
                    ></path>
                  </svg>
                  <p>Login</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <BottomHeader />
      </section>
    </>
  );
};

export default Header;
