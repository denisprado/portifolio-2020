import React from 'react';
import PropTypes from 'prop-types';
import { TextContainer } from './text.css';

const Text = ({ children, as = 'div', size }) => (
  <TextContainer as={as} size={size}>
    {children}
  </TextContainer>
);

Text.propTypes = {
  children: PropTypes.string,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default Text;
