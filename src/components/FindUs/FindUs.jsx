import React from 'react'
import Subheading from '../SubHeading/Subheading'
import spoon from "../../assets/spoon.svg"
import findUs from "../../assets/findus.png"
import "./findUs.css"

function FindUs() {
  return (
    <div className='findUs__section section__padding'>
        <div className='findUs__header'>
          <Subheading text="Contact" imgUrl={spoon} />
            <h2>Find Us</h2>
            <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <h3>Opening Hours</h3>
            <p>Mon - Fri: 10:00 am - 02:00 am</p>
            <p>Sat - Sun: 10:00 am - 03:00 am</p>
            <button type='button'>Visit Us</button>
            </div>
            <div className='findUs__image'>
                <img src={findUs} alt='drink' />
            </div>
    </div>
  )
}

export default FindUs