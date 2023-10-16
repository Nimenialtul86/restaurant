import React from "react";
import "./aboutUs.css"
import spoon from "../../assets/spoon.svg"
import knife from "../../assets/knife.png"
import G from "../../assets/G.png"

const About = ({ title, urlImg, text}) => {
  return (
    <div>
      <div className="aboutUs">
        <h2>{title}</h2>
=      </div>
      <div className="aboutUs-content">
          <p>{text}</p>
          <button type="button">Know More</button>
      </div>
    </div>
  );
};

function AboutUs() {
  return (
    <div className="aboutUs__section section__padding">
      <About title="About Us" urlImg={spoon} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et." />
      <img src={knife} alt="knife" className="knife" />
      <div className="G-background" >
      <img src={G} alt="G" />
      </div>
      <About title="Our History" urlImg={spoon} text="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet." />
    </div>
  );
}

export default AboutUs;
