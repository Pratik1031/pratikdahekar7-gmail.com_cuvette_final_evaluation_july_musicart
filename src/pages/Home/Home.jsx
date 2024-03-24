import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Home/Navbar';
import Banner from '../../components/Home/Banner';
import Searchbar from '../../components/Home/Searchbar';
import Styles from './home.module.css';
import logo from '../../assets/icons/logo.svg';
import Footer from '../../components/Home/Footer';
import HeroSection from '../../components/Home/HeroSection';
import { Link } from 'react-router-dom';
import Main from '../../components/Home/Main';
import axios from 'axios';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('user');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

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
      <Navbar />
      <div className={Styles.logo}>
        <img src={logo} alt='logo' style={{ width: '10rem', height: '5rem' }} />
        {isLoggedIn && (
          <>
            <Link to='/'>Home</Link>
            <Link to='/invoice'>Invoice</Link>
          </>
        )}
        {!isLoggedIn && <Link to='/'>Home</Link>}
      </div>
      <div>
        <Banner />
        <Searchbar />
        <HeroSection setFilteredProducts={setFilteredProducts} />
        <Main
          products={filteredProducts.length > 0 ? filteredProducts : products}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
