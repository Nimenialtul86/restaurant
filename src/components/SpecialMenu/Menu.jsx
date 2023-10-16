import React from "react";
import "./menu.css";

function Menu({ title, price, tags }) {
  return (
    <div className="prices">
      <div className="items">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="line"></div>
        <p>{price}</p>
      </div>
      <div className="tag">
        <p>{tags}</p>
      </div>
    </div>
  );
}

export default Menu;
