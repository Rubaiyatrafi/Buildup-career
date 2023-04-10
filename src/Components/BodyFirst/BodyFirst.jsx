import React from "react";
import "./BodyFirst.css";
import img from "../../../public/images/mubariz-mehdizadeh-Py8F6-hRn5o-unsplash (1).jpg";

const BodyFirst = () => {
  return (
    <div className="body1">
      <div className="responsive">
        <h1 className="body-title">
          Just One step <br /> To get your <br />
          <span className="text-blue">Dream Job</span>
        </h1>
        <p className="body-text">
          We are the most Leading Company all over the world. <br /> We can help
          you to find a better Job. We can give you proper <br /> suggestion to
          find your Dream Job.
        </p>
        <button className="body-btn">Get Started</button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BodyFirst;
