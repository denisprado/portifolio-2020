import React from 'react';
import PropTypes from 'prop-types';
import { ContainerLayout } from './container.css';

const Container = ({ children }) => (
  <ContainerLayout>{children}</ContainerLayout>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
