import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from 'components/layout';
import Title from 'components/title';
import Text from 'components/text';
import Work from 'components/work';
import Container from 'components/container';
import { ContainerHeader, ContainerBody } from './works.css';

class WorkRoute extends React.Component {
  render() {
    const works = this.props.data.allMarkdownRemark.nodes;

    const { id } = this.props.pageContext;
    const atualWork = works.filter((w) => w.id === id && w);

    const { frontmatter, html } = atualWork[0];
    const { title, text, clients } = frontmatter;
    const Header = () => (
      <ContainerHeader>
        <div>
          <Title size={'large'}>{title}</Title>
          <Text>{clients}</Text>
        </div>
        <Text size={'large'}>{text}</Text>
      </ContainerHeader>
    );

    const Body = () => (
      <ContainerBody>
        <Text>{html}</Text>
      </ContainerBody>
    );

    return (
      <Layout>
        <Helmet title={`${title}`} />
        <Container>
          <Header />
          <Body />
          <Work items={works} />
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
`;
