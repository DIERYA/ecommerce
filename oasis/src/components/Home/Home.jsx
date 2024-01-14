import React from "react";
import oasisImage from "../../images/oasis.jpg";
import './Home.css';

const Home = () => {
  return (
    <div className="title">
      <div className="title-container" style={{ backgroundImage: `url(${oasisImage})` }}>
        <h1 id="title">Oasis</h1>
      </div>
    </div>
  );
};

export default Home;
