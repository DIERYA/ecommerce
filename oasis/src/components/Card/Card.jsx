import React from "react";
import "./Card.css";

const Card = ({ cardData }) => {


  return (
    <div className="card-container">
  
        <div className="card" key={cardData.id}>
          <div className="card-image">
            <img alt={cardData.title} src={cardData.image} />
          </div>
          <div className="card-details">
            <div className="card-title">{cardData.title}</div>
            <div className="card-price">{cardData.price}</div>
            <div className="card-delivery">{cardData.delivery}</div>
          </div>
        </div>

    </div>
  );
};

export default Card;
