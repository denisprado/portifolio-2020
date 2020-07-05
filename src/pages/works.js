import Work from 'components/work';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import Title from 'components/title';
import Container from 'components/container';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import WorkType from 'components/work/workType';
import WorkClient from 'components/work/workClient';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15rem 15rem 0;
  border-bottom: 1px solid black;
`;
const Body = styled.div`
  display: flex;
  margin: 0rem 7rem 0;
`;

const WorkPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Layout>
      <Container>
        <Header>
          <Title size={'large'}>Work</Title>
          <div>
            <button onClick={() => setActiveTab(0)}>Tipos de Trabalho</button>
            <button onClick={() => setActiveTab(1)}>Tipos de Cliente</button>
            <button onClick={() => setActiveTab(2)}>Todos os Trabalhos</button>
          </div>
        </Header>
        <Body>
          {activeTab === 0 && <WorkType />}
          {activeTab === 1 && <WorkClient />}
          {activeTab === 2 && (
            <Work items={data.allMarkdownRemark.nodes} grouped={false} />
          )}
        </Body>
      </Container>
    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.object,
};

export default WorkPage;

export const query = graphql`
  query workPageAndWorkPage {
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "work" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
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
        fields {
          slug
        }
      }
    }
  }
`;
