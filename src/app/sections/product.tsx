import React from 'react';
import Image from 'next/image';
import Featured1 from '../assets/Featured1.png';
import Featured2 from '../assets/Featured2.png';
import Featured3 from '../assets/Featured3.png';

const Product = () => {
  return (
    <div className="product-container flex justify-between">
      <div className="product">
        <div className="image-container">
          <Image src={Featured1} alt="Product 1" width={200} height={200} />
        </div>
        <div className="product-details">
          <h3>Product 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="product">
        <div className="image-container">
          <Image src={Featured2} alt="Product 2" width={200} height={200} />
        </div>
        <div className="product-details">
          <h3>Product 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="product">
        <div className="image-container">
          <Image src={Featured3} alt="Product 3" width={200} height={200} />
        </div>
        <div className="product-details">
          <h3>Product 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
