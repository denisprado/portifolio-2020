import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as, size, color, fontType, inverse }) => {
  return (
    <Text
      as={as}
      size={size}
      color={color}
      fontType={fontType}
      inverse={inverse}
    >
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default Title;
