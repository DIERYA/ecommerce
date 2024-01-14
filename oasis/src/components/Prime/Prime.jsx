import React from "react"
import "./Prime.css";

const Prime = () => {
  return (
    <div>
      <h1 className="header1">Welcome to Oasis Prime</h1>
      <h2 className="header2">New members, try Oasis Prime free for 30 days Free delivery, award-winning TV, exclusive deals, and more</h2>
      <button type="button" class="btn btn-primary">
        Start Free Trial Now
      </button>

      <h1 className="header3">Enjoy Fast, free delivery</h1>
      <div class="card border-secondary mb-3">
        <div class="card-header">Convient Options </div>
        <div class="card-body">
          <h4 class="card-title">Includes...</h4>
          <p class="card-text">Enjoy Same-Day, One-Day, and Two-Day Delivery on millions of items.</p>
        </div>
      </div>
      <div class="card border-secondary mb-3">
        <div class="card-header">Grocerias </div>
        <div class="card-body">
          <h4 class="card-title">Has...</h4>
          <p class="card-text">Exclusive Prime member discounts and free shipping on orders of $100 at Amazon Fresh stores.</p>
        </div>
      </div>
      <div class="card border-secondary mb-3">
        <div class="card-header">Oasis Day</div>
        <div class="card-body">
          <h4 class="card-title">Allows you too...</h4>
          <p class="card-text">Shop throughout the week and receive your orders on a single day..</p>
        </div>
      </div>
      <h1 className="prime-header ">More Prime Benefits</h1>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Prime Gaming
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>Get games, a channel subscription, and more gaming benefits every month.*</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Exclusive deals
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>Prime Members save on thousands of items.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Prime Reading
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>Enjoy hundreds of new books, magazines, and more each month.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prime;
