import React from 'react';
import './CategoryStyles.css';
import { Link } from "react-router-dom";




const Categroies = () => {
  return (

      <div className="tab-bar">
        <ul class="horizontal-scroll">
          <li>
            <Link to="/bestsellers">Best Sellers</Link>
          </li>
          <li>
            <Link to="/todaysDeals">Today's Deals</Link>
          </li>
          <li>
            <Link to="/mobiles">Mobiles</Link>
          </li>
          <li>
            <Link to="/customService">Customer Service</Link>
          </li>
          <li>
            <Link to="/elec">Electronic</Link>
          </li>
          <li>
            <Link to="/home">Home & Kitchen</Link>
          </li>
          <li>
            <Link to="/fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li className="border-white prime-image-hover">
            <Link to="/prime">Prime</Link>
          </li>
        </ul>
       
      </div>
   
  );
};

export default Categroies;
