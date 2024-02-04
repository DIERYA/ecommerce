import React from "react";
import "./CustomService.css";
const CustomService = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-container">
        <h2 className="welcomeHeader">Welcome to Oasis Customer Service</h2>
        <h3 className="welcomeHeader2">What Can Help You With Today?</h3>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            A delivery, order or return
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>A delivery, order or return: This usually occurs when a customer has placed an order and it has not been delivered as expected.</p>
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
            Prime
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Prime: This is a subscription service offered by Amazon that provides access to exclusive content and perks.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingChangeThis">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseChangeThis"
            aria-expanded="false"
            aria-controls="collapseChangeThis"
          >
            Payment, charges or gift cards
          </button>
        </h2>
        <div id="collapseChangeThis" className="accordion-collapse collapse" aria-labelledby="headingChangeThis" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
              Payment: This refers to the process of making a payment to Amazon for the purchase of goods or services. This is where customers can apply for or
              use gift cards to make purchases.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Address, security & privacy
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
              Address, security & privacy: This includes the ability to update or change their address, manage their payment and privacy settings, and view
              their order history.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Memberships, subscriptions or communications
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
              Memberships, subscriptions or communications: This includes the ability to manage their memberships, subscriptions, and communication preferences.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            Kindle, Fire, Alexa or other Amazon devices
          </button>
        </h2>
        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
              Kindle, Fire, Alexa or other Amazon devices: This includes the ability to access and use the Kindle app, Fire TV, Alexa, and other Amazon devices.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSeven">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
            eBooks, Prime Videos, Music or Games
          </button>
        </h2>
        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
              eBooks, Prime Videos, Music or Games: This includes the ability to purchase and download eBooks, Prime Video content, listen to music, and play
              games.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingEight">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEight"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
            Accessibility
          </button>
        </h2>
        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
              Accessibility: This includes the ability to access the website and app using assistive technologies such as screen readers and voice assistants.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingNine">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseNine"
            aria-expanded="false"
            aria-controls="collapseNine"
          >
            Something else
          </button>
        </h2>
        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Contact in-person staff</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTen">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTen"
            aria-expanded="false"
            aria-controls="collapseTen"
          >
            Login & password
          </button>
        </h2>
        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Login & password: This includes the ability to log in to the website or app using a username and password.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingEleven">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsegEleven"
            aria-expanded="false"
            aria-controls="collapsegEleven"
          >
            Report Something Suspicous
          </button>
        </h2>
        <div id="collapsegEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Report Something Suspicious: This includes the ability to report any suspicious activity or behavior on the website or app.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomService;
