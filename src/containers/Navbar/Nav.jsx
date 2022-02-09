import React from 'react'
import "./Nav.scss"

function Nav() {
  return (
    <div className='navContainer'>
      <input className="navContainer__input" placeholder="Search..." type="text" />
      <div className="navContainer__checkInput">
      <label htmlFor="abv">{`HIGH ABV(> 6%)`}</label>
      <input className="navContainer___checkbox" type="checkbox" id="abv" name="abv" />
      </div>
      <div className="navContainer__checkInput">
      <label htmlFor="range">{`Classic Range`}</label>
      <input className="navContainer___checkbox" type="checkbox" id="range" name="range" />
      </div>
      <div className="navContainer__checkInput">
      <label htmlFor="ph">{`Acidic (ph < 4)`}</label>
      <input className="navContainer___checkbox" type="checkbox" id="ph" name="ph" />
      </div>
      
    </div>
  )
}

export default Nav