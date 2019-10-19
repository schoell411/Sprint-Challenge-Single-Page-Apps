import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const Header = styled.h1`
    font-size: 3rem;
    color: blue;
    text-align: center;
    font-family: 'Inconsolata', monospace;
`;
  const MainHeader = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    border: 1px solid green;
  `;
  const Nav = styled.nav`
    display: flex;
    padding: 2rem;
    a {
      text-decoration: none;
      padding: 0 1rem;
      font-size: 2rem;
      font-family: 'Long Cang', cursive;
      color: blue;
    }
  `;
  
  
  return (
    <MainHeader className="ui centered">
      <Header>Rick &amp; Morty Fan Page</Header>
      <Nav>
        <Link to="/"><i class="fas fa-home"></i>Home</Link>
        <Link to="/characters"><i class="fas fa-user-ninja"></i>Character List</Link>
      </Nav>
    </MainHeader>
  );
}
