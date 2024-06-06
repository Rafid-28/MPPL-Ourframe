import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="wireframe-about">
      <div className="div">
        <div className="overlap">
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="/images/WhatsAppImage20240515At20391.jpeg"
          />
          <img className="IMG" alt="Img" src="./images/Rectangle2.png" />
        </div>
        <img
          className="rectangle-3"
          alt="Rectangle"
          src="./images/Rectangle82.jpeg"
        />
        <p className="capturing-milestones">
          Capturing Milestones, Creating Memories
          <br />
          Your Journey, Our Lens
        </p>
        <p className="text-wrapper-5">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
};

export default About;
