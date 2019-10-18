import React from "react";

const CharacterCard = props => {
  return (
    <div className="characterList">
      <h2>{props.name}</h2>
      <img src={props.picture} alt="character" />
      <p>Gender:{props.gender}</p> 
      <p>Species: {props.species}</p>
    </div>
  );
};

export default CharacterCard;