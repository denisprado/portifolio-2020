import React, { useRef, Component } from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/gallery';
import { Container, GalButtons } from './gallery.css';
import HorizontalScroll from 'react-scroll-horizontal';

const scrollToRef = ref =>
  ref.current.hScrollParent.scroll({
    left: ref.current.hScrollParent.scrollLeft + 600,
    behavior: 'smooth',
  });

const Gallery = ({ items }) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <Container>
        <HorizontalScroll
          ref={myRef}
          reverseScroll
          config={{ stiffness: 100, damping: 26 }}
        >
          {items.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </HorizontalScroll>
        <GalButtons>
          <button onClick={executeScroll}>Click to scroll </button>
        </GalButtons>
      </Container>
    </>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
