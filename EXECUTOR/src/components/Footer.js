import React from "react";
import "./Footer.css";
import g7 from "./pages/images/Group7.png";
import imagee from "./pages/images/Imagee.png";

export const Footer = () => {
  return (
    <div className="box">
      <footer className="footer">
        <img className="image" alt="Image" src={imagee} />
        <div className="group">
          <p className="text-wrapper">
            Corem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="best-graduation">
            Best Graduation
            <br />
            Photographer
            <br />
            in Town
          </div>
        </div>
        <img className="img" alt="Group" src={g7} />
      </footer>
    </div>
  );
};

export default Footer;
