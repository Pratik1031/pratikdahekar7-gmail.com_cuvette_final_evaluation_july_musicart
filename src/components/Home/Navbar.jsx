import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Styles from './Styles/Navbar.module.css';
import phone_logo from '../../assets/icons/phone.svg';

function Navbar() {
  return (
    <div className={Styles.container}>
      <p className={Styles.phone}>
        <img src={phone_logo} alt='phoneCall' />
        9874563215
      </p>
      <p>Get 50% off on selected items | &nbsp; &nbsp; Shop Now</p>
      <div className={Styles.registerBtns}>
        <span>
          <Link to='/register'>Login</Link>
        </span>
        |
        <span>
          <Link to='/register'>Signup</Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
