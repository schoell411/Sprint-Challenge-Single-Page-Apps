import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

export default function CharacterList() {
  const CharacterContainer = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: green;
    background-color: papayawhip;
    img {
      min-width: 100%;
      max-width: 100%;
    }
  `;

  const [characters, setCharacters] = useState([]);

  const [searchCharacter, setSearchCharacter] = useState("");

  const handleChange = event => {
    setSearchCharacter(event.target.value);
  }

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data);
      const characterData = response.data.results.filter(character => character.name.toLowerCase().includes(searchCharacter.toLowerCase()));
      setCharacters(characterData);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
  }, [searchCharacter]);
  
  return (
    <div>
      <SearchForm
        value={searchCharacter}
        onChange={handleChange}
        />
    {characters.map((character) => {
        // console.log(characters);
        return (
          <CharacterContainer>
          <CharacterCard
            key={character.id}
            picture={character.image}
            name={character.name}
            gender={character.gender}
            species={character.species}
          />
          </CharacterContainer>
        );
      })}
    </div>
  );
}
