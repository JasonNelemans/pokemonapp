import React, {useState} from 'react';
import axios from 'axios';
import SearchResult from '../components/SearchResult'
import LikedPokemonPage from './LikedPokemonPage';

export default function DiscoverPokemonPage() {
  const [searchText, setSearchText] = useState();
  const [pokeData, setPokeData] = useState();
  const [renderMessage, setRenderMessage] = useState();

  const search = async () => {
    try {
      
      const queryParam = encodeURIComponent(searchText.toLowerCase());
      
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${queryParam}`
      );
      // /api/v2/pokemon/{id or name}/
      // https://pokeapi.co/api/v2/ability/110/
      if(response.data) {
        setPokeData(response.data);
        setRenderMessage('')
      } 
    }
    catch (error) {
      console.log('error message: ', error.message)
      setRenderMessage('Unable to find.')
    }
  }

  // console.log('pokeData: ', pokeData)

  const giveDataHandler = (data) => {
    return (
      <LikedPokemonPage
        name={data.name}
      />
    )
  }
  //How can I pass the data to the LikedPokemonPage?
  
  const condition = pokeData 
  ? <SearchResult 
      name={pokeData.name}
      weight={pokeData.weight}
      abilities={pokeData.abilities}
      height={pokeData.height}
      giveData={giveDataHandler}
    /> 
  : ''

  return (
    <div className="DiscoverPokemonPage">
      <h2>Hello, this is the discover page.</h2>
      <h3>Type in the search box to find all your favorite pokemon.</h3>
      
      <input value={searchText} 
        onChange={e => setSearchText(e.target.value)}
      /> 
      <button onClick={search}>Search</button>
      <h4>{renderMessage}</h4>
      {condition}
    </div>
  )
}