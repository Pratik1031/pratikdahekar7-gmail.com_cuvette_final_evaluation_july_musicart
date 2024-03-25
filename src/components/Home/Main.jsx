import React, { useEffect, useState } from 'react';
import Styles from './Styles/Main.module.css';
import { Link } from 'react-router-dom';
import AddCart from '../../assets/icons/addCart.svg';

const Main = ({ products, addToCartHandler }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem('data');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const redirectProduct = (id) => {
    window.location.href = `/productDetails/${id}`;
  };

  return (
    <div className={Styles.container}>
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product.id} className={Styles.card}>
            <img
              src={product.image}
              alt={product.model}
              className={Styles.productImage}
              onClick={() => redirectProduct(product.id)}
            />

            <div className={Styles.details}>
              <p>{`${product.brand} ${product.model}`}</p>
              <p>Price - ₹{product.price}</p>
              <p>{`${product.color} | ${product.type}`}</p>
              {isLoggedIn ? (
                <button onClick={() => addToCartHandler(product)}>
                  <img
                    src={AddCart}
                    alt='Add to Cart'
                    className={Styles.addCart}
                  />
                </button>
              ) : (
                <span />
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
