import React from "react";
import "./gallery.css";
import { images } from "../../constants";
import Subheading from "../SubHeading/Subheading";
import spoon from "../../assets/spoon.svg";
import { BsInstagram } from "react-icons/bs";

const Photo = ({ imgUrl }) => {
  return (
    <div className="gallery__container">
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img src={imgUrl} alt="food" />
      </a>
      <BsInstagram className="gallery__image-icon" />
    </div>
  );
};

function Gallery() {
  return (
    <div className="gallery__section" id="social">
      <div className="gallery__header">
        <Subheading text="Instagram" imgUrl={spoon} />
        <h2>Photo Gallery</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button">View More</button>
      </div>
      <div className="gallery__images">
        {[
          images.gallery01,
          images.gallery02,
          images.gallery03,
          images.gallery04,
        ].map((img, index) => (
          <Photo imgUrl={img} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
