import React from 'react'
import "./Card.scss"
const Card = props => {    
    const {imgSrc, name, description} = props;

  return (
    <div className='CardContainer'>
        <img src={imgSrc} alt={name} />
        <h1>{name}</h1>
        <p>{description}</p>        
    </div>
  )
}

export default Card


