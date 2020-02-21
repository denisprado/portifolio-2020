import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  padding: 0 0rem;
  margin: 0rem 0;
  height: 100vh;
  overflow: auto;
  white-space: nowrap;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
