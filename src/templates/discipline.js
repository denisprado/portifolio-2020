import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Work from 'components/work';
import Title from 'components/title';
import { ContainerHeader, ContainerBody } from './templates.css';

const DisciplineRoute = ({ pageContext, data }) => {
  return (
    <Layout inverse>
      <ContainerHeader>
        <Title size={'large'}>{pageContext.discipline}</Title>
      </ContainerHeader>
      <ContainerBody>
        <Work items={data.allMarkdownRemark.nodes} grouped={false} />
      </ContainerBody>
    </Layout>
  );
}


export default DisciplineRoute;

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
      filter: { frontmatter: { disciplines: { in: [$discipline] } } }
    ) {
      totalCount

      nodes {
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
