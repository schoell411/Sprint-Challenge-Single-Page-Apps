import React from "react";
import styled from "styled-components"

export default function WelcomePage() {

  // styles
  const Title = styled.h1`
    font-size: 4rem;
    font-family: 'Long Cang', cursive;
    text-align: center;
    border: 2px dashed blue;
  `;
  const HomeContainer = styled.div`
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    img {
      width: 50%;
      margin: 1rem auto;
    }
  `;

  return (
    <section className="welcome-page">
      <HomeContainer>
        <Title>Welcome to the ultimate fan site!</Title>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HomeContainer>
    </section>
  );
}
