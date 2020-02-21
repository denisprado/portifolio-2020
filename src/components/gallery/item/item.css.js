import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  flex-basis: 3;
  flex-shrink: 3;
  flex-grow: 3;
  min-width: 33vw;
  position: relative;
  border: 1px solid #fff;
`;

export const ContainerText = styled.div`
  left: 4rem;
  right: 2rem;
  position: absolute;
  bottom: 16rem;
`;

export const BackgroundImage = styled.span`
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  object-fit: cover;
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
