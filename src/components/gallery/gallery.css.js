import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0 0rem;
  margin: 0rem 0;
  height: 100vh;
  overflow-y: scroll;
  white-space: nowrap;

  ${MEDIA.PHONE`
    display: block;
  `};
`;

export const GalButtons = styled.div`
  position: fixed;
  top: 40rem;
  left: 40rem;
`;
