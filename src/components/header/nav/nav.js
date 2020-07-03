import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import Text from 'components/text';
const Nav = ({ inverse }) => (
  <Container>
    <ul>
      <li>
        <Link to="/works">
          <Text inverse={inverse}>Work</Text>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <Text inverse={inverse}>About</Text>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <Text inverse={inverse}>Contact</Text>
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
