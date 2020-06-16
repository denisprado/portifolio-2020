import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

class WorkRoute extends React.Component {
  render() {
    const works = this.props.data.allMarkdownRemark.nodes;

    const workLinks =
      works &&
      works.map((work) => (
        <li key={work.fields.slug}>
          <Link to={work.fields.slug}>
            <h2 className="is-size-2">{work.frontmatter.title}</h2>
          </Link>
        </li>
      ));
    const work = this.props.pageContext.work;
    const title = this.props.data.site.siteMetadata.siteTitle;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const workHeader = `${totalCount} work${
      totalCount === 1 ? '' : 's'
    } tagged with “${work}”`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${work} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{workHeader}</h3>
                <ul className="worklist">{workLinks}</ul>
                <p>
                  <Link to="/works/">veja mais trabalhos</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default WorkRoute;

export const workPageQuery = graphql`
  query WorkPage {
    site {
      siteMetadata {
        siteTitle
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { collection: { eq: "works" } } }
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
`;
