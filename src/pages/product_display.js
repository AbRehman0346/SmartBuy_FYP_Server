import React from "react";

const ProductDisplay = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map((product, index) => (
        <div key={index} className='product'>
          <img
            src={product.image}
            alt={product.title}
            className='product-image'
          />
          <div className='product-details'>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Specifications: {product.specifications}</p>
            <a href={product.link} target='_blank' rel='noopener noreferrer'>
              View Product
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
