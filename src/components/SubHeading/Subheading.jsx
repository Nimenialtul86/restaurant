import React from 'react'
import "./subHeading.css"

function Subheading({text, imgUrl}) {
  return (
    <div className='subHeading'>
        <h3>{text}</h3>
        <img src={imgUrl} alt='knife' />
    </div>
  )
}

export default Subheading