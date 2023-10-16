import React from 'react'
import "./header.css"
import welcome from "../../assets/welcome.png"
import Subheading from '../SubHeading/Subheading'
import spoon from "../../assets/spoon.svg"

function Header() {
  return (
    <div className='home section__padding' id='home'>
          <div className='tags'>
              <h5>#Bar</h5>
              <h5>#Gericht</h5>
          </div>
          <div className='hero'>
              <h3><Subheading 
              text="Chase the new Flavour"
              imgUrl={spoon} /></h3>
              <h1>The key to <br />Fine dining</h1>
              <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
              <button type='button'>Explore Menu</button>
          </div>
          <div className='hero-image'>
              <img src={welcome} alt='food' />
          </div>
    </div>
  )
}

export default Header