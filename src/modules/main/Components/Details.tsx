import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMainDispatch, useMainState } from '../../../context/gloabal';
import chevronLeft from '../../../assets/images/chevron-left.svg';
import chevronRight from '../../../assets/images/chevron-right.svg';

export const Details: React.FC<any> = () => {
  const { state }: any = useLocation();
  const { searchHistory } = useMainState();
  const [historyCard, setHistoryCard] = useState(searchHistory);
  const dispatch = useMainDispatch();

  //Avoid pushing duplicate objects in array
  const isDuplicate = (data: [], obj: Object) =>
    data.some((el: any) =>
      Object.entries(obj).every(([key, value]) => value === el[key])
    );

  const handleClickCard = (item: any) => {
    const history = historyCard;
    if (!isDuplicate(history, item)) history.push(item);
    setHistoryCard(history);
    dispatch({
      type: 'search_history',
      payload: history,
    });
  };

  useEffect(() => {
    dispatch({
      type: 'default_logo',
      payload: state.product.productLogo,
    });
  }, []);

  return (
    <>
      <div className="details-section">
        <div className="container">
          <div className="details-box">
            <div className="gallery-box">
              <div className="big-img">
                <img src={state.product.productImage} alt="img" />
              </div>
              <ul className="thumbnails">
                <li>
                  <img className="icon" src={chevronLeft} alt="chevronLeft" />
                </li>
                <li>
                  <img src={state.product.productImage} alt="img" />
                </li>
                <li>
                  <img src={state.product.productImage} alt="img" />
                </li>
                <li>
                  <img src={state.product.productImage} alt="img" />
                </li>
                <li>
                  <img src={state.product.productImage} alt="img" />
                </li>
                <li>
                  <img className="icon" src={chevronRight} alt="chevronLeft" />
                </li>
              </ul>
            </div>
            <div className="details-content">
              <img
                className="product-logo"
                src={state.product.productLogo}
                alt="logo"
                width="85"
              />
              <p className="product-title">{state.product.productName}</p>

              <div className="rate-box">
                <ul className="rate-icon">
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="far fa-star"></i>
                  </li>
                </ul>
                <p className="rate-name">4.2 of 5</p>
                <p className="rate-name">22 Rates</p>
              </div>

              <div className="price-box">
                <p className="product-price">
                  {state.product.productPrice} {state.product.productCurrency}
                </p>
                <p className="product-offer">
                  9,999 {state.product.productCurrency}
                </p>
                <p className="product-percent">30% Off</p>
              </div>

              {/* Size Section */}
              <div className="size-box">
                <h5 className="title">Size</h5>
                <ul className="size-ul">
                  <li>Small</li>
                  <li>Medium</li>
                  <li>Large</li>
                  <li>X Large</li>
                  <li>XX Large</li>
                </ul>
              </div>

              {/* Color Section */}
              <div className="size-box">
                <h5 className="title">Color</h5>
                <ul className="size-ul">
                  <li>
                    <img
                      className="img-li"
                      src={state.product.productImage}
                      alt="img"
                    />
                  </li>
                  <li>
                    <img
                      className="img-li"
                      src={state.product.productImage}
                      alt="img"
                    />
                  </li>
                </ul>
              </div>

              {/* Quantity Section */}
              <div className="quantity-box">
                <h5 className="title">Color</h5>
                <div className="quantity-count">
                  <i className="fa fa-minus"></i>
                  <p className="count">1</p>
                  <i className="fa fa-plus"></i>
                </div>
              </div>

              <div className="product-button">
                <button
                  className="button-cart"
                  onClick={() => handleClickCard(state.product)}
                >
                  Add To Cart
                </button>
                <button
                  className="button-pickup"
                  onClick={() => handleClickCard(state.product)}
                >
                  Pickup From Store
                </button>
              </div>
            </div>
          </div>

          <div className="main similar-product">
            <h3 className="head">Similar Products</h3>
            <p className="description">You may like these products also</p>
            <div className="product-section">
              <Link to="/">
                <div className="card">
                  <div className="img-box">
                    <img src={state.product.productImage} alt="img" />
                  </div>
                  <h6 className="title">{state.product.productName}</h6>
                  <div className="price-box">
                    <div className="price">
                      <p className="cost">
                        {state.product.productPrice}{' '}
                        {state.product.productCurrency}
                      </p>
                      <p className="offer">
                        <span>9,999 {state.product.productCurrency}</span>
                        <span>30%</span>
                      </p>
                    </div>
                    <img
                      src={state.product.productLogo}
                      height="40"
                      alt="img"
                    />
                  </div>
                  <div className="rate-box">
                    <ul className="rate-icon">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="far fa-star"></i>
                      </li>
                    </ul>
                    <p className="rate-name">4.2 of 5</p>
                  </div>
                  <div className="location">
                    <p>
                      From: <span>UK</span>
                    </p>
                    <p>
                      To: <span>Egypt</span>
                    </p>
                    <p>
                      in: <span>10</span>
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="card">
                  <div className="img-box">
                    <img src={state.product.productImage} alt="img" />
                  </div>
                  <h6 className="title">{state.product.productName}</h6>
                  <div className="price-box">
                    <div className="price">
                      <p className="cost">
                        {state.product.productPrice}{' '}
                        {state.product.productCurrency}
                      </p>
                      <p className="offer">
                        <span>9,999 {state.product.productCurrency}</span>
                        <span>30%</span>
                      </p>
                    </div>
                    <img
                      src={state.product.productLogo}
                      height="40"
                      alt="img"
                    />
                  </div>
                  <div className="rate-box">
                    <ul className="rate-icon">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="far fa-star"></i>
                      </li>
                    </ul>
                    <p className="rate-name">4.2 of 5</p>
                  </div>
                  <div className="location">
                    <p>
                      From: <span>UK</span>
                    </p>
                    <p>
                      To: <span>Egypt</span>
                    </p>
                    <p>
                      in: <span>10</span>
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="card">
                  <div className="img-box">
                    <img src={state.product.productImage} alt="img" />
                  </div>
                  <h6 className="title">{state.product.productName}</h6>
                  <div className="price-box">
                    <div className="price">
                      <p className="cost">
                        {state.product.productPrice}{' '}
                        {state.product.productCurrency}
                      </p>
                      <p className="offer">
                        <span>9,999 {state.product.productCurrency}</span>
                        <span>30%</span>
                      </p>
                    </div>
                    <img
                      src={state.product.productLogo}
                      height="40"
                      alt="img"
                    />
                  </div>
                  <div className="rate-box">
                    <ul className="rate-icon">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="far fa-star"></i>
                      </li>
                    </ul>
                    <p className="rate-name">4.2 of 5</p>
                  </div>
                  <div className="location">
                    <p>
                      From: <span>UK</span>
                    </p>
                    <p>
                      To: <span>Egypt</span>
                    </p>
                    <p>
                      in: <span>10</span>
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="card">
                  <div className="img-box">
                    <img src={state.product.productImage} alt="img" />
                  </div>
                  <h6 className="title">{state.product.productName}</h6>
                  <div className="price-box">
                    <div className="price">
                      <p className="cost">
                        {state.product.productPrice}{' '}
                        {state.product.productCurrency}
                      </p>
                      <p className="offer">
                        <span>9,999 {state.product.productCurrency}</span>
                        <span>30%</span>
                      </p>
                    </div>
                    <img
                      src={state.product.productLogo}
                      height="40"
                      alt="img"
                    />
                  </div>
                  <div className="rate-box">
                    <ul className="rate-icon">
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="far fa-star"></i>
                      </li>
                    </ul>
                    <p className="rate-name">4.2 of 5</p>
                  </div>
                  <div className="location">
                    <p>
                      From: <span>UK</span>
                    </p>
                    <p>
                      To: <span>Egypt</span>
                    </p>
                    <p>
                      in: <span>10</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
