import React, {useState, useEffect} from 'react';

export default function LikedPokemonPage(props) {
  // const [receivedData, setReceivedData] = useState();
  



  // console.log('Received data in like pokemon page: ', receivedData)  
  // console.log('this is const received: ', received)
  
  {console.log('Props in LIKED POKEMON PAGE:', props )}
  return (
    <div>
      {props.likedArray.map(poke => {
        if(poke.name) {
          return (
            <p>{poke.name}</p>
          )
        }
      })}
    </div>
  )
}