import React from 'react'
import  './CategoryStyles.css'

const Categroies = () => {
    return (

        <div className="container container-nav">
          <ul>
            <li className="border-white" id="open-nav-sidebar">
              <span className="open-nav-slider">
                <i className="fa-solid fa-bars"></i>
                All
              </span>
            </li>
            <li className="border-white">
              <a href="#">Best Sellers</a>
            </li>
            <li className="border-white">
              <a href="#">Today's Deals</a>
            </li>
            <li className="border-white">
              <a href="#">Mobiles</a>
            </li>
            <li className="border-white">
              <a href="#">Customer Service</a>
            </li>
            <li className="border-white">
              <a href="#">Electronic</a>
            </li>
            <li className="border-white">
              <a href="#">Home & Kitchen</a>
            </li>
            <li className="border-white">
              <a href="#">Fashion</a>
            </li>
            <li className="border-white">
              <a href="#">Book</a>
            </li>
            <li className="border-white prime-image-hover">
              <a href="#">Prime</a>
         
            </li>
          </ul>
      
        </div>
    )
}

export default Categroies;