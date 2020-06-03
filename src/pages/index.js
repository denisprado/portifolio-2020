import Layout from 'components/layout';
import Work from 'components/work';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Index = ({ data }) => {

  return (
    <Layout>
      {console.log(data)}
      <Work items={data.allMarkdownRemark.nodes} />
    </Layout>
  )
};

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(filter: {frontmatter: {collection: {eq: "work"}}}) {
      nodes {
          frontmatter {
            title
            text
            collection
            date
            image {
              childImageSharp {
                fluid {
                  base64
                }
              }
            }
            slide {
              childImageSharp {
                fluid {
                  base64
                }
              }
            }
            client
            discipline
            description
          }
        }
      
    }
  }
    
    
  
`;
