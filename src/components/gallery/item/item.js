import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import {
  Title,
  Copy,
  Container,
  ContainerText,
  BackgroundImage,
} from './item.css';

const Item = ({ title, copy, image }) => (
  <Container>
    <Link to="/about">
      <figure>
        <Img
          fluid={image ? image.childImageSharp.fluid : {}}
          alt={title}
          objectFit="cover"
          style={{ position: 'unset', width: '33vw' }}
        />

        <ContainerText>
          <figcaption>
            <Title>{title}</Title>
            <Copy>{copy}</Copy>
          </figcaption>
        </ContainerText>
      </figure>
    </Link>
  </Container>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
