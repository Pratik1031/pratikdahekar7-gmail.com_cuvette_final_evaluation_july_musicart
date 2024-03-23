import React from 'react';
import Styles from './register.module.css';
import Login from '../../components/Register/Login/Login';
import Signup from '../../components/Register/Signup/Signup';

const Register = () => {
  return (
    <div className={Styles.container}>
      <Login />
    </div>
  );
};

export default Register;
