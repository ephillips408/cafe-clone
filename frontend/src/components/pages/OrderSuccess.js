import React from "react";
import { Link } from "react-router-dom";

import "../../styles/OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="message-container">
      <h1 className="thank-you-message">Thank you for placing your order!</h1>
      <p>You will now be redirected to the homepage.</p>
      <p>
        If not please {" "}
        <Link to="/" className="return-to-home">
          click here
        </Link>{" "}
        to return to the homepage.
      </p>
    </div>
  );
};

export default OrderSuccess;
