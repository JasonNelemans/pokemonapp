import React from 'react';

export default function SearchResult(props) {
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
      <button>Like this Pokemon.</button>
    </div>
  )
}