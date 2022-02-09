import React from 'react'
import "./CardList.scss"
import Card from "../Card/Card"


const CardList = props => {
    const {beersArr} = props;

    const beerJSX = beersArr.map((beer) => {
        return <Card
            imgSrc ={beer.image_url}
            name ={beer.name}
            description = {beer.description}        
        />;        
    } )


  return (
    <div >
      <div className='cardGrid'>{beerJSX}</div>        
    </div>
  )
}

export default CardList