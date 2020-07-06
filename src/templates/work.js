import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from 'components/layout';
import Title from 'components/title';
import Text from 'components/text';
import Container from 'components/container';
import Section from 'components/section';
import { ContainerHeader, ContainerBody } from './templates.css';
const _ = require('lodash');
class WorkRoute extends React.Component {
  render() {
    const works = this.props.data.allMarkdownRemark.nodes[0];

    const { frontmatter, html } = works;
    const { title, text, clients, disciplines } = frontmatter;
    const Header = () => (
      <ContainerHeader>
        <div>
          <Title size={'large'}>{title}</Title>
          <Link to={`/clients/${_.kebabCase(clients)}`}><Text>{clients}</Text></Link>
          {disciplines.map(discipline =>
            (
              <Link key={discipline} to={`/discipline/${_.kebabCase(discipline)}`}>
                <Text >{discipline}</Text>
              </Link>
            )
          )
          }
        </div>
        <Text size={'large'}>{text}</Text>
      </ContainerHeader >
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
          <Section>
            <Header />
            <Body />
          </Section>
        </Container>
      </Layout>
    );
  }
}

export default WorkRoute;

export const workPageQuery = graphql`
  query WorkPage($id: String) {
    site {
      siteMetadata {
        siteTitle
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { id:  { eq: $id  } }
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
