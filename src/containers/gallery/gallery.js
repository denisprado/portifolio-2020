import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';
import Item from 'components/gallery/item';

const GalleryContainer = (props) => (
  <Consumer>
    {({ active, setActive }) => (
      <Item active={active} setActive={setActive} {...props} />
    )}
  </Consumer>
);

GalleryContainer.propTypes = {
  children: PropTypes.node,
};

export default GalleryContainer;
