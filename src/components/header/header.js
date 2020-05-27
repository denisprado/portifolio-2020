import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Container from 'components/container';
import Title from 'components/title';
import Nav from 'components/header/nav';
import { HeaderContainer } from './header.css'

const Header = ({ title }) => (
  <Container>
    <HeaderContainer>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>
      <Nav />
    </HeaderContainer>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
