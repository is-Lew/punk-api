import './App.scss';
import React, {useState} from 'react';
import beers from './Data/beers';
import Main from './containers/Main/Main';
import Nav from './containers/Navbar/Nav';

function App() {
  const beersArr = beers
  const [searchTerm, setSearchTerm] = useState("")
  const [abv, setAbv] = useState(false);
  const [range, setRange] = useState(false);
  const [ph, setPh] = useState(false);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
}

const handleAbvClick = () => {
  setAbv(!abv);
};
const handlePhClick = () => {
  setPh(!ph);
};
const handleRangeClick = () => {
  setRange(!range);
};


  const filteredBeers = beersArr.filter((beer) => {
    if (!abv && !ph && !range) {
      return beer.name.toLowerCase().includes(searchTerm);
    }else if (abv) {
      return beer.abv > 6;
    } else if (ph) {
      return beer.ph > 4;
    } else if (range) {
      return beer.first_brewed.split("/")[1] <= 2011;
    }
  })

  return (
    <div className='container' >
      <Nav searchTerm={searchTerm} handleInput={handleInput} handleAbvClick={handleAbvClick} handlePhClick={handlePhClick} handleRangeClick={handleRangeClick} />
      <Main beersArr ={filteredBeers} />     
    </div>
  );
}

export default App;
