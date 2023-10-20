import React from "react";
import "./footer.css";
import Content from "./Content";
import Subheading from "../SubHeading/Subheading";
import spoon from "../../assets/spoon.svg";

const date = new Date();
const year = date.getFullYear();

const Newsletter = () => {
  return (
    <div className="newsletter__section">
      <div className="newsletter__heading">
        <Subheading text="Newsletter" imgUrl={spoon} />
        <h2>Subscribe to Our Newsletter</h2>
        <p>And never miss latest Updates!</p>
        <div className="form">
          <form>
            <input placeholder="Email Address" />
            <button type="button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

function Footer() {
  return (
    <div className="footer__section section__padding">
        <Newsletter />
        <Content />
        <div className="copyrights">
          <p> {year} Gerícht. All Rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
