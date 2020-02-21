import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Container from 'components/container';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Container>
      <Box>
        <Title as="h2" size="large">
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </Title>
      </Box>
      <Gallery items={data.homeJson.gallery} />
    </Container>
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
