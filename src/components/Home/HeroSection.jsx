import React from 'react';
import Styles from './Styles/hero.module.css';
import grid from '../../assets/icons/grid.svg';
import list from '../../assets/icons/list.svg';

const HeroSection = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.filters}>
        <div className={Styles.subContainer}>
          <div className={Styles.types}>
            <img src={grid} alt='grid' />
            <img src={list} alt='list' />
          </div>
          <div className={Styles.filterby}>
            <select
              name='headphoneType'
              id='headphoneType'
              className={Styles.filterBtn}
            >
              <option value=''>Headphone Type</option>
              <option value='featured'>Features</option>
              <option value='In-ear headphone'>In-ear headphone</option>
              <option value='On-ear headphone'>On-ear headphone</option>
              <option value='Over-ear headphone'>Over-ear headphone</option>
            </select>
            <select name='company' id='company' className={Styles.filterBtn}>
              <option value=''>Company</option>
              <option value='Featured'>Featured</option>
              <option value='JBL'>JBL</option>
              <option value='Sony'>Sony</option>
              <option value='Boat'>Boat</option>
              <option value='Marshall'>Marshall</option>
              <option value='Zebronics'>Zebronics</option>
              <option value='Ptron'>Ptron</option>
            </select>
            <select name='color' id='color' className={Styles.filterBtn}>
              <option value=''>Colour</option>
              <option value='Featured'>Featured</option>
              <option value='blue'>Blue</option>
              <option value='black'>black</option>
              <option value='white'>White</option>
              <option value='brown'>Brown</option>
            </select>
            <select name='price' id='price' className={Styles.filterBtn}>
              <option value=''>Price</option>
              <option value='Featured'>Featured</option>
              <option value=''>₹0 - ₹1,000</option>
              <option value=''>₹1,000 - ₹10,000</option>
              <option value=''>₹10,000 - ₹20,000</option>
            </select>
          </div>
        </div>
        <div>
          <select
            name='sort_products'
            id='sort_products'
            className={Styles.SortBtn}
          >
            <option value='Featured'>Sort By :Featured</option>
            <option value='lowest'>Price:Lowest</option>
            <option value='highest'>Price:Highest</option>
            <option value='atoz'>Name:(A-Z)</option>
            <option value='ztoa'>Name:(Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
