import Gallery from 'components/gallery';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollingHorizontally from 'components/horizontalscroll';

const Index = ({ data }) => (
  <Layout>
    <ScrollingHorizontally>
      <Gallery items={data.homeJson.gallery} />
    </ScrollingHorizontally>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
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
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
