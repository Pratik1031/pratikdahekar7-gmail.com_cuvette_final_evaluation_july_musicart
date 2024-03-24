import React, { useEffect, useState } from 'react';
import Styles from './Styles/Main.module.css';
import axios from 'axios';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/products/allProduct'
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
