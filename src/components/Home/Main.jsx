import React, { useEffect, useState } from 'react';
import Styles from './Styles/Main.module.css';

const Main = ({ products }) => {
  return (
    <div className={Styles.container}>
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product.id} className={Styles.card}>
            <img src={product.image} alt={product.model} />
            <div className={Styles.details}>
              <p>{`${product.brand} ${product.model}`}</p>
              <p>Price - ₹{product.price}</p>
              <p>{`${product.color} | ${product.type}`}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
