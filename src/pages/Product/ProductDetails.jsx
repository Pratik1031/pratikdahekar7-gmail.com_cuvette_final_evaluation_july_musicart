import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Home/Navbar';
import logo from '../../assets/icons/logo.svg';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Styles from './ProductDetails.module.css';
import Cart from '../../assets/icons/cart.svg';
import Footer from '../../components/Home/Footer';

const ProductDetails = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  const loadData = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/products/?:${id}`
    );

    const data = response.data;
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('data');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const addToCartHandler = (product) => {
    setCount(count + 1);
  };

  return (
    <>
      {' '}
      <Navbar />
      <div className={Styles.container}>
        <div>
          {' '}
          <div className={Styles.logo}>
            <img
              src={logo}
              alt='logo'
              style={{ width: '10rem', height: '5rem' }}
            />
            {isLoggedIn && (
              <div className={Styles.isLog}>
                <div className={Styles.routes}>
                  <Link to='/'>Home</Link>/Sony WH-CH720N
                </div>
                <div className={Styles.settings}>
                  <Link to='/cart'>
                    {' '}
                    <button className={Styles.cartBtn}>
                      <img src={Cart} alt='cart' />
                      <span>View Cart</span>
                      <span>{count}</span>
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {!isLoggedIn && <Link to='/'>Home</Link>}
          </div>
        </div>

        <Link to='/'>
          {' '}
          <button className={Styles.backBtn}>Back to Products</button>
        </Link>

        <div className={Styles.subContainer}>
          <div className={Styles.ProductHeadline}>
            Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation
            Headphones with Mic, up to 50 Hours Playtime, Multi-Point
            Connection, App Support, AUX & Voice Assistant Support for Mobile
            Phones (Black)
          </div>
          <div className={Styles.ProductDetails}>
            <div>Product images</div>
            <div>
              Product Desription
              <div>
                <h2>Sony WH-CH720N</h2>
                <p>stars(50 Customer Reviews)</p>
                <p>Price -₹3000</p>
                <p>Black | Over-ear headphone</p>
                <ul className={Styles.description}>
                  About this item{' '}
                  <li>
                    Sony’s lightest Wireless Noise-cancelling headband ever{' '}
                  </li>
                  <li>
                    {' '}
                    Up to 50-hour battery life with quick charging (3 min charge
                    for up to 1 hour of playback){' '}
                  </li>
                  <li>
                    {' '}
                    Multi-Point Connection helps to pair with two Bluetooth
                    devices at the same time
                  </li>{' '}
                  <li>
                    Take noise cancelling to the next level with Sony’s
                    Integrated Processor V1,so you can fully immerse yourself in
                    the music
                  </li>
                  <li>
                    Super comfortable and lightweight design ( 192 Grams )
                  </li>{' '}
                  <li> High sound quality and well-balanced sound tuning</li>{' '}
                </ul>
                <p>Available - In stock</p>
                <p>Brand - Sony</p>
              </div>
              <div className={Styles.btns}>
                <button className={Styles.add} onClick={addToCartHandler}>
                  Add to cart
                </button>
                <Link to='/cart'>
                  <button className={Styles.buy}>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
