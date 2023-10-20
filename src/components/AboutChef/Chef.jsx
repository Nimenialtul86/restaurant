import React from "react";
import "./chef.css";
import Subheading from "../SubHeading/Subheading";
import spoon from "../../assets/spoon.svg";
import sign from "../../assets/sign.png";
import chef from "../../assets/chef.png"
import quote from "../../assets/quote.png"

function Chef() {
  return (
    <div className="chef__section section__padding">
      <div className="chef__heading">
        <Subheading text="Chef's Word" imgUrl={spoon} />
        <h2>What We Believe In</h2>
        <p className="content">
          <img src={quote} alt="quote" className="quote" />Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <h4>Kevin Luo</h4>
        <p>Chef & Founder</p>
        <div className="sign">
        <img src={sign} alt="sign" />
        </div>
      </div>
      <div className="chef__image">
        <img src={chef} alt="chef" />
      </div>
    </div>
  );
}

export default Chef;
