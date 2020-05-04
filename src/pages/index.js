import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Container from 'components/container';
import Title from 'components/title';
import Work from 'components/work';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Container>
      <Work items={data.homeJson.gallery} />
    </Container>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        id
        title
        text

        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
