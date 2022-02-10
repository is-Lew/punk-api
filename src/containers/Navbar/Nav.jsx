import cross from "../../Assets/Images/white-cross.png"
import SearchBox from '../../components/SearchBox/SearchBox'
import "./Nav.scss"

function Nav(props) {
  const {searchTerm, handleInput, handleAbvClick, handlePhClick, handleRangeClick, toggleMenu} = props;
  

  return (
    <div className='navContainer'>
      <img className="navContainer__cross" onClick={toggleMenu} src={cross} alt="close Menu" />
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      
      <div className="navContainer__checkInput">
      <label htmlFor="abv">{`High Abv (> 6%)`}</label>
      <input className="navContainer___checkbox" type="checkbox" id="abv" name="abv" onInput={handleAbvClick}/>
      </div>
      <div className="navContainer__checkInput">
      <label htmlFor="range">{`Classic Range`}</label>
      <input className="navContainer___checkbox" type="checkbox" id="range" name="range" onInput={handleRangeClick} />
      </div>
      <div className="navContainer__checkInput">
      <label htmlFor="ph">{`Acidic (ph < 4)`}</label>
      <input className="navContainer___checkbox" type="checkbox" id="ph" name="ph" onInput={handlePhClick} />
      </div>
      
    </div>
  )
}

export default Nav