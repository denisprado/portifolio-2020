import Layout from 'components/layout';
import { graphql } from 'gatsby';
import React from 'react';

const WorkPage = ({ data }) => {
    <Layout>
        {data.title}
    </Layout>
}

export default WorkPage;

export const query = graphql`
  query WorkpageQuery {
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
        slide {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
