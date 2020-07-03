import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Title from 'components/title'
import PropTypes from 'prop-types'
import Text from 'components/text'
import Container from 'components/container'
import Work from 'components/work'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components


const WorkType = ({ data: { allMarkdownRemark: { group } } }) => (
    <div>
        <h1>Disciplines</h1>
        <ul>
            {group.map((discipline, i) => (
                <li key={i}>
                    <Title>{discipline.fieldValue}</Title>
                    <Text>({discipline.totalCount})</Text>
                    <Work items={discipline.nodes} grouped={true}></Work>
                </li>
            )
            )
            }
        </ul>
    </div>
)

WorkType.propTypes = {
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

export default function MyWorkType(props) {
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
                  group(field: frontmatter___disciplines, limit: 2000) {
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
            render={data => <WorkType data={data} {...props} />}
        />
    )
}