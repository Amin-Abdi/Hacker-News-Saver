import React from "react";
import image from "../media/404.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h2>Opps Something went wrong!</h2>
      <Link to="/" className="error-btn btn">
        Return to Home Page
      </Link>
      <img src={image} alt="ErrorImage" className="error-image" />
    </div>
  );
};

export default Error;
