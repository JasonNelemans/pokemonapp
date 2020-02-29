import React, {useState, useEffect} from 'react';

export default function LikedPokemonPage(props) {
  // const [receivedData, setReceivedData] = useState();
  



  // console.log('Received data in like pokemon page: ', receivedData)  
  // console.log('this is const received: ', received)

  return (
    <div>
      <h3>This is a liked Pokemon page</h3>
      <p>{props.name}</p>
    </div>
  )
}