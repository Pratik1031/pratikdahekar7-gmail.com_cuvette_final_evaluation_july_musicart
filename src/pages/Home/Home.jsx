import React from 'react';
import Navbar from '../../components/Home/Navbar';
import Banner from '../../components/Home/Banner';
import Searchbar from '../../components/Home/Searchbar';
import Styles from './home.module.css';
import logo from '../../assets/icons/logo.svg';
import Footer from '../../components/Home/Footer';
import HeroSection from '../../components/Home/HeroSection';

const Home = () => {
  return (
    <div className={Styles.container}>
      <Navbar />
      <div className={Styles.logo}>
        <img src={logo} alt='logo' style={{ width: '10rem', height: '5rem' }} />
        <p>Home</p>
      </div>
      <div>
        <Banner />
        <Searchbar />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
