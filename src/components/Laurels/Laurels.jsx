import React from 'react'
import "./laurels.css"
import { data } from "../../constants";
import Subheading from '../SubHeading/Subheading'
import spoon from "../../assets/spoon.svg"
import laurels from "../../assets/laurels.png"

const Award = ({award: {imgUrl, title, subtitle}}) => {
  return (
          <div className='card__container'>
      <div className='card__image'>
          <img src={imgUrl} alt='award' />
      </div>
      <div className='card__content'>
          <h3>{title}</h3>
          <p>{subtitle}</p>
      </div>
    </div>
  
  )
}

function Laurels() {
  return (
    <div className='laurels__section section__padding'>
        <div className='laurels__heading'>
            <Subheading 
            imgUrl={spoon}
            text="Awards & recognition" />
            <h2>Our Laurels</h2>
            <div className='laurels__items'>
              {
                data.awards.map((award, index) => 
                    <Award award={award} key={award.title + index} />
                )
              }
            </div>
        </div>
        <div className='laurels__image'>
        <img src={laurels} alt='laurels' />
        </div>
    </div>
  )
}

export default Laurels