import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data);
      setCharacters(response.data);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
  }, []);

  return (
    <div>
      characters.map(character => {
        return (
          <CharacterCard
            key={character.id}
            picture={character.image}
            name={character.name}
            gender={character.gender}
            species={character.species}
          />
        )
      })
    </div>
  );
}
