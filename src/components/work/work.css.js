import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const HomeWork = styled.div`
  padding-top: 80px;
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const Container = styled.div`
  width: auto;
  padding-right: 50px;
  padding-left: 50px;
`;

export const ContainerWork = styled.div`
  float: left;
  display: flex;
  margin-left: -20px;
  display: block;
  float: left;
`;

export const ItemContainer = styled.article`
  width: ${(props) => (props.featured ? '740px' : '760px')};
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const GalButtons = styled.div`
  position: fixed;
  top: 40rem;
  left: 40rem;
`;
