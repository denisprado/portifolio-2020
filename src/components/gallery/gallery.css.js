import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  height: 100vh;
  width: 100%;
  &::-webkit-scrollbar {
  }
  ${MEDIA.TABLET`
    display: block;
  `};
`;
