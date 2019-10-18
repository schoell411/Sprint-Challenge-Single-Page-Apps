import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



export default function Header() {
  const Header = styled.h1`
    font-size: 3rem;
    color: blue;
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
  `;
  const StyledLink = styled.span`
    padding: 1rem;
    font-size: 1.5rem;
  `;
  
  
  return (
    <MainHeader className="ui centered">
      <Header>Rick &amp; Morty Fan Page</Header>
      <Nav>
        <Link to="/"><StyledLink>Home</StyledLink></Link>
        <Link to="/characters"><StyledLink>Character List</StyledLink></Link>
      </Nav>
    </MainHeader>
  );
}
