import React from "react"
import "./Prime.css";

const Prime = () => {
  return (
    <div>
      <h1 className="header1">Welcome to Oasis Prime</h1>
      <h2 className="header2">New members, try Oasis Prime free for 30 days Free delivery, award-winning TV, exclusive deals, and more</h2>
      <button type="button" className="btn btn-primary">
        Start Free Trial Now
      </button>

      <h1 className="header3">Enjoy Fast, free delivery</h1>
      <div className="card border-secondary mb-3">
        <div className="card-header">Convient Options </div>
        <div className="card-body">
          <h4 className="card-title">Includes...</h4>
          <p className="card-text">Enjoy Same-Day, One-Day, and Two-Day Delivery on millions of items.</p>
        </div>
      </div>
      <div className="card border-secondary mb-3">
        <div className="card-header">Grocerias </div>
        <div className="card-body">
          <h4 className="card-title">Has...</h4>
          <p className="card-text">Exclusive Prime member discounts and free shipping on orders of $100 at Amazon Fresh stores.</p>
        </div>
      </div>
      <div className="card border-secondary mb-3">
        <div className="card-header">Oasis Day</div>
        <div className="card-body">
          <h4 className="card-title">Allows you too...</h4>
          <p className="card-text">Shop throughout the week and receive your orders on a single day..</p>
        </div>
      </div>
      <h1 className="prime-header ">More Prime Benefits</h1>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Prime Gaming
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Get games, a channel subscription, and more gaming benefits every month.*</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Exclusive deals
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Prime Members save on thousands of items.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Prime Reading
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Enjoy hundreds of new books, magazines, and more each month.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prime;
