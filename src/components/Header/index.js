import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

const Header = () => (
  <HeaderContainer>
      <HeaderLogo>FLIX</HeaderLogo>
      <Nav marginContent="250px">
          <Ul>
              <Li>
                  <StyledLink to='/'>Home</StyledLink>
              </Li>
              <Li>
                  <StyledLink to='/'>TV Shows</StyledLink>
              </Li>
              <Li>
                  <StyledLink to='/'>Movies</StyledLink>
              </Li>
              <Li>
                  <StyledLink to='/'>Recently Added</StyledLink>
              </Li>
              <Li>
                  <StyledLink to='/'>My List</StyledLink>
              </Li>
          </Ul>
      </Nav>
      <Nav>
          <Ul>
              <Li>
                  <StyledLink to='/'>Home</StyledLink>
              </Li>
              <Li>
                  <StyledLink to='/'>KIDS</StyledLink>
              </Li>
              <Li>
                  <StyledLink to='/'>DVD</StyledLink>
              </Li>
              <Li>
                  <StyledLink to='/'>Recently Added</StyledLink>
              </Li>
              <Li>
                  <StyledLink to='/'>Logo DD</StyledLink>
              </Li>
          </Ul>
      </Nav>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Nav = styled.nav`
     margin-right: ${props => props.marginContent };
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
`
const HeaderLogo = styled.h2`
    display: inline;
    border-top: 2px solid  #B9090B;
    border-bottom: 2px solid  #B9090B;
`
const Li = styled.li`
    padding-right: 15px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    list-style: none;
    color: whtie;

    &:hover {
        color: yellow;
        border-bottom: 2px solid  #B9090B;
        transition: all 0.2s;
    }

    &:visited {
        color: white;
    }
`

export default Header;
