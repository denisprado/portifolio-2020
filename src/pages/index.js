import Layout from 'components/layout';
import Work from 'components/work';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Index = ({ data }) => {
  return (
    <Layout inverse>
      <Work items={data.allMarkdownRemark.nodes} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "works" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          text
          collection
          date
          image {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1260) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          showSlide
          slide {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1260) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          clients
          disciplines
        }
        fields {
          slug
        }
      }
    }
  }
`;
