import React, {useState} from 'react';

export default function SearchResult(props) {
  // const [searchData, setSearchData] = useState()
  
  const clickHandler = () => {
    props.giveData(props)
  }

  // if(props) {
  //   setSearchData(props)
  // }

  return (
    <div className="SearchResult">
      <h4>{props.name}</h4>
      <div className="pokeDetails">
        <p>Weight: <strong>{props.weight}kg</strong></p>
        <p>Height: <strong>{props.height}0cm</strong></p>
        <div className="abilities">Abilities: {props.abilities.map(ability => {
          return (
            <div>
              <strong><em>{ability.ability.name}</em></strong>
              </div>
          )
        })} </div>
      </div>
      <button onClick={clickHandler}>Like this Pokemon.</button>
    </div>
  )
}