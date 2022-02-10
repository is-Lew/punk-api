import "./App.scss";
import React, { useState, useEffect } from "react";
// import beers from './Data/beers';
import Main from "./containers/Main/Main";
import Nav from "./containers/Navbar/Nav";
import menu from "./Assets/Images/menu-icon.png";

function App() {
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((beers) => {
        setBeers(beers);
      });
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [abv, setAbv] = useState(false);
  const [range, setRange] = useState(false);
  const [ph, setPh] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [beers, setBeers] = useState([]);
  const beersArr = beers;

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleAbvClick = () => {
    setAbv(!abv);
  };
  const handlePhClick = () => {
    setPh(!ph);
  };
  const handleRangeClick = () => {
    setRange(!range);
  };

  const searchResults = beersArr.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  });

  const filteredBeers = searchResults.filter((beer) => {
    if (!abv && !ph && !range) {
      return searchResults;
    } else if (abv) {
      return beer.abv > 6;
    } else if (ph) {
      return beer.ph > 4;
    } else if (range) {
      return beer.first_brewed.split("/")[1] <= 2011;
    }
  });

  return (
    <div className="container">
      {!showMenu ? (
        <img
          onClick={toggleMenu}
          src={menu}
          className="container__menu "
          alt="menu icon"
        />
      ) : (
        ""
      )}
      {showMenu ? (
        <Nav
          searchTerm={searchTerm}
          handleInput={handleInput}
          handleAbvClick={handleAbvClick}
          handlePhClick={handlePhClick}
          handleRangeClick={handleRangeClick}
          toggleMenu={toggleMenu}
        />
      ) : (
        ""
      )}
      <Main beersArr={filteredBeers} />
    </div>
  );
}

export default App;
