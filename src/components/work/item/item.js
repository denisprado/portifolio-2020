import Text from 'components/text';
import Title from 'components/title';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, ContainerImage, ContainerText, GalleryText, GalleryTitle } from './item.css';

const Item = ({ frontmatter }) => (
  <Container featured={frontmatter.featured}>
    <ContainerImage featured={frontmatter.featured}>
      <Img fluid={frontmatter.image.childImageSharp.fluid} style={{ width: '100%' }} objectFit="cover"></Img>
    </ContainerImage>
    <ContainerText>
      <GalleryText>
        <Text>{frontmatter.text}</Text>
      </GalleryText>
      <GalleryTitle>
        <Title>{frontmatter.title}</Title>
      </GalleryTitle>
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
