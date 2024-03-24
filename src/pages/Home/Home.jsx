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

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('user');
    // console.log('Access Token', accessToken);

    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
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
        <HeroSection />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
