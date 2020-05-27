import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import Text from 'components/text'
const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/work"><Text>Work</Text></Link>
      </li>
      <li>
        <Link to="/about"><Text>About</Text></Link>
      </li>
      <li>
        <Link to="/contact"><Text>Contact</Text></Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
