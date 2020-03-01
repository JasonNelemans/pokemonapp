import React, {useState, useEffect} from 'react';

export default function LikedPokemonPage(props) {
  // const [receivedData, setReceivedData] = useState();
  



  // console.log('Received data in like pokemon page: ', receivedData)  
  // console.log('this is const received: ', received)

  return (
    <div>
      <li>
      <p>{props.name}</p>
      </li>
    </div>
  )
}