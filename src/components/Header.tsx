import React, { useState, useEffect, useRef } from 'react';
import { useMainDispatch, useMainState } from '../context/gloabal';

export const Header: React.FC<any> = () => {
  const { searchHistory } = useMainState();
  const dispatch = useMainDispatch();
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<any>(null);
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState(searchHistory);

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
          <p>
            {product.productPrice} {product.productCurrency}
          </p>
        </div>
      </div>
      <div className="drop-remove" onClick={() => removeItem(product)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </li>
  ));

  return (
    <>
      <section style={{ marginTop: sticky.offset }}>
        <header
          className={`header ${sticky.isSticky ? ' sticky' : ''}`}
          ref={headerRef}
        >
          <div className="container">
            <div className="header__box">
              <div className="header__logo">
                <img
                  className="header__logo-img"
                  src="https://www.yeshtery.com/files/69/brand-logo-yellow.svg"
                  alt="logoImg"
                />
              </div>
              <div className="header__cart-box">
                <div className="header__cart" onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff200"
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
                    <div className="drop-title">
                      <p>Cart Varieties</p>
                    </div>
                    <ul className="drop-items">
                      {data.length > 0 ? (
                        AllProducts
                      ) : (
                        <p className="empty-cart">Cart Is Empty</p>
                      )}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
