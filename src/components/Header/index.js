import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

const Index = () => <p>Home</p>

const Header = () => (
  <HeaderContainer>
      <nav>
          <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
          </ul>
      </nav>

      <Route path='/' exact component={Index} />
  </HeaderContainer>
);

const HeaderContainer = styled.header`
    background: grey;
`

export default Header;
