import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {


  return(
    <div id="toy-collection">
      {props.toyData.map( toy => (
        <ToyCard 
          key={toy.id}
          toy={toy}
          donate={props.donate}
          addLike={props.addLike}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
