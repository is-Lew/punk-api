import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {
    const { searchTerm, handleInput} = props;

  return (
    <div className='searchBox'>
        <input className="searchBox__input" placeholder="Search..." type="text" value={searchTerm} onInput={handleInput}/>
    </div>
  )
}

export default SearchBox