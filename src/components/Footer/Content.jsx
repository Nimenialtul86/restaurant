import React from "react";
import "./content.css";
import spoon from "../../assets/spoon.svg";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

function Content() {
  return (
    <div className="footer__container" id="contact">
      <div className="column-reverse">
        <div className="footer">
          <h3>Contact Us</h3>
          <p>
            9 W 53rd St, <br /> New York, NY 10019, <br /> USA <br/> <br />
            +1 212-344-1230 <br />
            +1 212-555-1230
          </p>
        </div>
        <div className="footer-middle">
          <h2>GERICHT</h2>
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={spoon} alt="spoon" />
          <div className="social">
            <FiFacebook  className="social-link"/>
            <FiTwitter className="social-link"/>
            <FiInstagram className="social-link"/>
          </div>
        </div>
      </div>

      <div className="footer">
        <h3>Working Hours</h3>
        <p>
          Monday-Friday: <br /> 08:00 am - <br /> 12:00 am
        </p>
        <p>
          Saturday-Sunday: <br /> 07:00am - <br /> 11:00 pm
        </p>
      </div>
    </div>
  );
}

export default Content;
