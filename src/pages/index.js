import Layout from 'components/layout';
import Work from 'components/work';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Index = ({ data }) => {
  // const ComponentName = <pre style={{ color: 'black' }}>{JSON.stringify(data, null, 4)}</pre>
  return (
    <Layout>
    </Layout>
  )
};

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;

