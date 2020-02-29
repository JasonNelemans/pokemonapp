import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import DiscoverPokemonPage from './Pages/DiscoverPokemonPage'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import NavBar from './components/NavBar'
import LikedPokemonPage from './Pages/LikedPokemonPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/likedpokemon/" component={LikedPokemonPage} />
        <Route path="/discover/:searchtext?" component={DiscoverPokemonPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
