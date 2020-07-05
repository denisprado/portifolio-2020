import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Title from 'components/title'
import PropTypes from 'prop-types'
import Text from 'components/text'
import Work from 'components/work'
import Container from 'components/container'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components


const WorkClient = ({ data: { allMarkdownRemark: { group } } }) => (
    <ul>
        {group.map((clients, i) => (
            <li key={i}>
                <Title size={'medium'}>{clients.fieldValue}</Title>
                <Text>({clients.totalCount})</Text>
                <Work items={clients.nodes} grouped={false}></Work>
            </li>
        )
        )
        }
    </ul>
)

WorkClient.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        })
    }),
}

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
            render={data => <WorkClient data={data} {...props} />}
        />
    )
}