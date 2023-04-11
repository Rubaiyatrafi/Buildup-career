import React from "react";
import "./NotFound.css";
import image from "../../../public/images.jpg";
const NotFound = () => {
  return (
    <div>
      <img className="not-img" src={image} alt="" />
      <h1 className="not">404</h1>
      <h1 className="not">This Link is not Available</h1>
    </div>
  );
};

export default NotFound;
