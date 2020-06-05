import Text from 'components/text';
import Title from 'components/title';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, ContainerImage, ContainerText, GalleryText, GalleryTitle } from './item.css';

const Item = ({ frontmatter, featured }) => (
  <Container featured={featured}>
    <ContainerImage featured={featured}>
      <Img fluid={frontmatter.image && frontmatter.image.childImageSharp.fluid} style={{ width: '100%' }} alt={frontmatter.title}></Img>
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
  frontmatter: PropTypes.object
};

export default Item;
