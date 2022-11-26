import React from 'react';
import { Link } from 'react-router-dom';

export const Item: React.FC<any> = ({ product }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/${product.id}`,
          state: { product },
        }}
      >
        <div className="card">
          <div className="img-box">
            <img src={product.productImage} alt="img" />
          </div>
          <h6 className="title">{product.productName}</h6>
          <div className="price-box">
            <div className="price">
              <p className="cost">
                {product.productPrice} {product.productCurrency}
              </p>
              <p className="offer">
                <span>9,999 {product.productCurrency}</span>
                <span>30%</span>
              </p>
            </div>
            <img src={product.productLogo} height="40" alt="img" />
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
    </>
  );
};

export default Item;
