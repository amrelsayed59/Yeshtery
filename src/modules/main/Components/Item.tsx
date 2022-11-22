import React from 'react';

export const Item: React.FC<any> = ({ product, handleClickCard }) => {
  return (
    <>
      <div className="card">
        <div className="img-box">
          <img src={product.productImage} alt="img" />
        </div>
        <h6 className="title">{product.productName}</h6>
        <div className="price-box">
          <p className="price">{product.productPrice} {product.productCurrency}</p>
          <img src={product.productLogo} height="40" alt="img" />
        </div>
        <button onClick={() => handleClickCard(product)} className="add-cart">Add To Cart</button>
      </div>
    </>
  );
};

export default Item;
