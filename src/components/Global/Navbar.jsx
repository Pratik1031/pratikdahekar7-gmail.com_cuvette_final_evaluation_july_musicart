import React from 'react'
import Styles from './Styles/Navbar.module.css'
import phone_logo from '../Images/phonecall.png'
function Navbar() {
  return (
    <div className={Styles.container}>
        <p className={Styles.phone}><img src={phone_logo} alt="" />9874563215</p>
        <p>Get 50% off on selected items  | &nbsp; &nbsp; Shop Now</p>
        <p><span>Login</span> | <span>Signup</span> </p>
    </div>
  )
}

export default Navbar