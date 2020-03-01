import React, {useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import DiscoverPokemonPage from './Pages/DiscoverPokemonPage'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import NavBar from './components/NavBar'
import LikedPokemonPage from './Pages/LikedPokemonPage';

function App() {
  const [likedPokemon, setLikedPokemon] = useState([]);

  const testHandler = x => {
    setLikedPokemon([...likedPokemon, x])
  }

  const likedArray = likedPokemon;
  console.log('likedArray in APP:', likedArray)

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/likedpokemon/" render={(props) => <LikedPokemonPage {...props} likedArray={likedArray}/>} />
        <Route path="/discover/" render={(props) => <DiscoverPokemonPage {...props} testingMethod={testHandler} />} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
