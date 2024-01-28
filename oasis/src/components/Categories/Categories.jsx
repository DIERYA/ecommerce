import React from 'react';
import './CategoryStyles.css';

const Categroies = () => {
  return (
    <div className='tab-bar'>
      <ul class='horizontal-scroll'>
        <li>
          <a href='#'>Best Sellers</a>
        </li>
        <li>
          <a href='#'>Today's Deals</a>
        </li>
        <li>
          <a href='#'>Mobiles</a>
        </li>
        <li>
          <a href='#'>Customer Service</a>
        </li>
        <li>
          <a href='#'>Electronic</a>
        </li>
        <li>
          <a href='#'>Home & Kitchen</a>
        </li>
        <li>
          <a href='#'>Fashion</a>
        </li>
        <li>
          <a href='#'>Book</a>
        </li>
        <li className='border-white prime-image-hover'>
          <a href='#'>Prime</a>
        </li>
      </ul>
    </div>
  );
};

export default Categroies;
