import './App.scss';
import beers from './Data/beers';
import Main from './containers/Main/Main';
import Nav from './containers/Navbar/Nav';

function App() {
  
  const beersArr = beers.slice(0,6)
  return (
    <div className='container' >
      <Nav />
      <Main beersArr ={beersArr} />     
    </div>
  );
}

export default App;
