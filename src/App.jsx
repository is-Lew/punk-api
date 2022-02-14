import "./App.scss";
import React, { useState, useEffect } from "react";
import Main from "./containers/Main/Main";
import Nav from "./containers/Navbar/Nav";
import menu from "./Assets/Images/menu-icon.png";

const App = () => {
  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((beers) => {
        setBeers(beers);
      });
  };
  useEffect(() => {
    return getBeers();
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [checked, setChecked] = useState(false);
  const [checkedID, setCheckedID] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const beersArr = beers;  
  const beersPerPage = 6;
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onChange = (event) => {
    if (!checked) {
      setCheckedID(event.target.id);
    } else {
      setCheckedID("");
    }
  };

  const handleClick = () => {
    setChecked(!checked);
  };

  const searchResults = beersArr.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  });

  const filteredBeers = searchResults.filter((beer) => {
    if (!checked) {
      return searchResults;
    } else if (checkedID === "abv") {
      return beer.abv > 6;
    } else if (checkedID === "ph") {
      return beer.ph > 4;
    } else if (checkedID === "range") {
      return beer.first_brewed.split("/")[1] <= 2011;
    } else {
      return "";
    }
  });
  const currentBeers = filteredBeers.slice(indexOfFirstBeer, indexOfLastBeer);


  return (
    <div className="container">
      {!showMenu ? (
        <img
          className="container__menu "
          onClick={toggleMenu}
          src={menu}
          alt="menu icon"
        />
      ) : (
        ""
      )}
      {showMenu ? (
        <Nav
          searchTerm={searchTerm}
          handleInput={handleInput}
          toggleMenu={toggleMenu}
          onChange={onChange}
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      <Main
        beersArr={currentBeers}
        beersPerPage={beersPerPage}
        totalBeers={filteredBeers.length}
        handlePage={handlePage}
      />
    </div>
  );
};

export default App;
