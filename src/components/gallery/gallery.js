import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';
import HorizontalScroll from 'react-scroll-horizontal';

function Gallery({ items }) {
  const child = { width: '30em', height: '100%' };
  const parent = { width: '60vh', height: '100%' };
  return (
    <Container>
      <HorizontalScroll>
        {items.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </HorizontalScroll>
    </Container>
  );
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
