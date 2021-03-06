import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import Text from 'components/text';
import { Link } from 'gatsby';
<<<<<<< HEAD

import { Title, Copy, Container, ContainerText } from './item.css';
=======
import {
  GalleryTitle,
  GalleryText,
  Container,
  ContainerText,
} from './item.css';
>>>>>>> 435bc067785279002ab7d3648fee07b636b36ae2

const Item = ({ title, text, client, image, active, setActive }) => (
  <Container image={image.childImageSharp.fluid} isActive={active}>
    <Link onClick={setActive} activeClassName={'active'} to="/about">
      <ContainerText>
        <GalleryTitle>
          <Title size={'large'}>{title}</Title>
        </GalleryTitle>
        <GalleryText>
          <Text size={'large'}>{text}</Text>
        </GalleryText>
        <div>
          <Text>{client}</Text>
        </div>
      </ContainerText>
    </Link>
  </Container>
);

Item.propTypes = {
  title: PropTypes.string,
  client: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
  setActive: PropTypes.func,
  image: PropTypes.object.isRequired,
};

export default Item;
