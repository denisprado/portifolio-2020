import React from 'react';
import PropTypes from 'prop-types';
import { Container as ContainerSection } from './section.css';

const Container = ({ children }) => (
    <ContainerSection>{children}</ContainerSection>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    full: PropTypes.bool
};

export default Container;