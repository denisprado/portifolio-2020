import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import Text from 'components/text';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  GalleryTitle,
  GalleryText,
  Container,
  ContainerText,
  ContainerImage,
} from './item.css';

const Item = ({ title, text, client, image, featured }) => (
  <Container featured={featured}>
    <ContainerImage>
      <Img fluid={image.childImageSharp.fluid} style={{ width: '100%' }}></Img>
    </ContainerImage>
    <ContainerText>
      <GalleryTitle>
        <Title>{title}</Title>
      </GalleryTitle>
      <GalleryText>
        <Text>{text}</Text>
      </GalleryText>
    </ContainerText>
  </Container>
);

Item.propTypes = {
  title: PropTypes.string,
  client: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
  featured: PropTypes.bool,
  setActive: PropTypes.func,
  image: PropTypes.object.isRequired,
};

export default Item;
