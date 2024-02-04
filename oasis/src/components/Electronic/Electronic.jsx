import React from "react";
import "./Electronic.css";
import Card from "../Card/Card";
import electronics from "../../data/electronics-data";

const Electronic = () => {
  

  return (
    <div className="electronic-container">
      {electronics.map((electronicData) => (
        <Card cardData={electronicData} key={electronicData.id} />
      ))}
    </div>
  );
};

export default Electronic;
