import React from "react";
import styled from "styled-components";

const CharacterCard = props => {
  
  // styles

  const CharacterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1rem 0;
    img {
      height: 200px;
      width: 200px;
      margin: 1rem auto;
    }
  `;

  const CharacterName = styled.h1`
    font-size: 4rem;
    color: blue;
    background-color: white;
  `;
  
  const CharacterInfo = styled.p`
    font-size: 2rem;
    color: blue;
    background-color:white;
    text-align: center;
    margin: .5rem auto;
    width: 50%;
  `;

  // styles

  return (
    
    <CharacterContainer>
      <img src={props.picture}/>
      <CharacterName>{props.name}</CharacterName>
      <CharacterInfo>Gender: {props.gender}</CharacterInfo>
      <CharacterInfo>Species: {props.species}</CharacterInfo>
    </CharacterContainer>
  );
};

export default CharacterCard;