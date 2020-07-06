import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import OrganizedWork from './organizedWork'


const WorkClient = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
    <OrganizedWork group={group} />
  );

WorkClient.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
};

export default function MyWorkClient(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteTitle
            }
          }
          allMarkdownRemark {
            group(field: frontmatter___clients, limit: 2000) {
              fieldValue
              totalCount
              nodes {
                id
                html
                fields {
                  slug
                }
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
              }
            }
          }
        }
      `}
      render={(data) => <WorkClient data={data} {...props} />}
    />
  );
}
