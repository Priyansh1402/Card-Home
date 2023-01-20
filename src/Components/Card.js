import React from 'react'
import image from '../Components/old-key.png'

export const Card = () => {
  return (
    <div><div className="NewYearcard">
    <div className="cardFront">
      <h3 className="happy">We got the Key!<img src={image} alt="key"/></h3>
      <div className="balloons">
       <div className="balloonOne" />
        <div className="balloonTwo" />
          <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">warm-the-house party🥂</h3>
      <h2 >-- Bairagi Family --</h2>
      <h2>Dear One,</h2>
      <p className='p1'> Join us for a housewarming party</p>
      <p>
        FRIDAY, JAN 27TH AT 12PM
        SHIVASHISH, B/37, GIRIRAJRATAN
        TARANA ROAD, UJJAIN 456006
     </p>
     <p>RSVP : DINESH BAIRAGI "8269346144"</p>
    
      <p className="name"></p>
      <p onTouchMove={TouchEvent}></p>
    </div>
  </div></div>
  )
}
