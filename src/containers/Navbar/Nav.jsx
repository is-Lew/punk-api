import React from 'react'
import "./Nav.scss"

function Nav() {
  return (
    <div className='navContainer'>
      <input className="navContainer__input" placeholder="Search..." type="text" />
    </div>
  )
}

export default Nav