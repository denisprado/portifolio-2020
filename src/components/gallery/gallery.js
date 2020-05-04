import React, { useRef, Component } from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/gallery';
import { Container, GalButtons } from './gallery.css';
import HorizontalScroll from 'react-scroll-horizontal';

const scrollToRef = (ref) => {
  console.log(ref.current.hScrollParent.scrollLeft);
  ref.current.hScrollParent.scroll({
    left: ref.current.hScrollParent.scrollLeft + 600,
    behavior: 'smooth',
  });
};

const myConsole = (ref) => {
  console.log('ref' + ref.current.hScrollParent.scrollLeft);
};

const Gallery = ({ items }) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const ExecuteMyConsole = () => myConsole(myRef);
  return (
    <>
      <Container>
        <HorizontalScroll
          ref={myRef}
          onMouseWheel={ExecuteMyConsole}
          reverseScroll
          config={{ stiffness: 100, damping: 26 }}
        >
          {items.map((item) => (
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
