import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from 'components/layout';
import Title from 'components/title';
import Text from 'components/text';
import Container from 'components/container';
import { ContainerHeader } from './works.css';

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
    const { id } = this.props.pageContext;
    const atualWork = works.filter((w) => w.id === id && w);

    const { frontmatter } = atualWork[0];
    const { title, text, body } = frontmatter;
    const Header = () => (
      <ContainerHeader>
        <Title size={'large'}>{title}</Title>
        <Text size={'large'}>{text}</Text>
      </ContainerHeader>
    );

    const Body = () => (
      <>
        <Text>{body}</Text>
      </>
    );

    return (
      <Layout>
        <Helmet title={`${title}`} />
        <Container>
          <Header />
          <Body />
          <ul className="worklist">{workLinks}</ul>
          <p>
            <Link to="/works/">veja mais trabalhos</Link>
          </p>
        </Container>
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
        id
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
`;
