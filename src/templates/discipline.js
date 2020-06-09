import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class DisciplineRoute extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const postLinks = posts.map((post) => (
            <li key={post.node.fields.slug}>
                <Link to={post.node.fields.slug}>
                    <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
                </Link>
            </li>
        ))
        const discipline = this.props.pageContext.discipline
        const title = this.props.data.site.siteMetadata.title
        const totalCount = this.props.data.allMarkdownRemark.totalCount
        const disciplineHeader = `${totalCount} post${
            totalCount === 1 ? '' : 's'
            } disciplineged with “${discipline}”`

        return (
            <Layout>
                <section className="section">
                    <Helmet title={`${discipline} | ${title}`} />
                    <div className="container content">
                        <div className="columns">
                            <div
                                className="column is-10 is-offset-1"
                                style={{ marginBottom: '6rem' }}
                            >
                                <h3 className="title is-size-4 is-bold-light">{disciplineHeader}</h3>
                                <ul className="disciplinelist">{postLinks}</ul>
                                <p>
                                    <Link to="/disciplines/">Browse all disciplines</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default DisciplineRoute

export const disciplinePageQuery = graphql`
  query DisciplinePage($discipline: String) {
    site {
      siteMetadata {
        siteTitle
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { discipline: { in: [$discipline] } } }
    ) {
      totalCount
      
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      
    }
  }
`