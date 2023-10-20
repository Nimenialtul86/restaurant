import React from "react";
import Subheading from "../SubHeading/Subheading";
import spoon from "../../assets/spoon.svg";
import menu from "../../assets/menu.png";
import Menu from "./Menu";
import { data } from "../../constants";
import "./specialMenu.css";

function SpecialMenu() {
  return (
    <div className="menu__section section__padding" id="menu">
      <div className="subheading">
        <Subheading text="Menu that fits you palatte" imgUrl={spoon} />
      </div>
      <h2>Today's Special</h2>
      <div className="menu-category">
        <div className="menu-items">
          <div className="menu-type">
            <h3>Wine & Beer</h3>
          </div>
          <div className="prices">
            {data.wines.map((wine, index) => (
              <Menu
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className="menu-image">
          <img src={menu} alt="menu" />
        </div>
        <div className="menu-items">
          <div className="menu-type">
            <h3>Cocktails</h3>
          </div>
          <div className="prices">
            {data.cocktails.map((cocktail, index) => (
              <Menu
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="btn"><button>View more</button>
</div>
    </div>
  );
}

export default SpecialMenu;
