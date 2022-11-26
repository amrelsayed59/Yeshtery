import React, { useState, useEffect } from 'react';

const BottomHeader: React.FC<any> = () => {
  return (
    <>
      <div className="bottom-header">
        <div className="container">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
            <li>Kids</li>
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li>Offers</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
