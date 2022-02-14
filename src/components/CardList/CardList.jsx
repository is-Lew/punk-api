import React from 'react'
import "./CardList.scss"
import Card from "../Card/Card"


const CardList = props => {
    const {beersArr} = props;

    const beerJSX = beersArr.map((beer) => {
        return <Card
            imgSrc ={beer.image_url}
            name ={beer.name.split(" ").splice(0,2).join(" ")}
            description = {beer.description}  
            key = {beer.id}     
        />;        
    } )


  return (
    <div >
      <div className='cardGrid'>{beerJSX}</div>        
    </div>
  )
}

export default CardList