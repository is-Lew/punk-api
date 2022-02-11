import React from 'react'
import CardList from '../../components/CardList/CardList'
import "./Main.scss"
import Pagination from "../../components/Pagination/Pagination";


const Main = props => {
    const {beersArr, beersPerPage, totalBeers, handlePage} = props;
  return (
    <div className='mainContainer'>
    <CardList beersArr = {beersArr}/> 
    <Pagination  beersPerPage={beersPerPage} totalBeers={totalBeers} handlePage={handlePage}/>   
    </div>
  )
}

export default Main


