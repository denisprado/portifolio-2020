import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
<<<<<<< HEAD
  flex-wrap: nowrap;
=======
  flex-direction: row;
>>>>>>> 435bc067785279002ab7d3648fee07b636b36ae2
  align-items: stretch;
  height: 100vh;
<<<<<<< HEAD
  width: 100%;
  &::-webkit-scrollbar {
  }
  ${MEDIA.TABLET`
=======
  overflow-y: scroll;
  white-space: nowrap;

  ${MEDIA.PHONE`
>>>>>>> 435bc067785279002ab7d3648fee07b636b36ae2
    display: block;
  `};
`;

export const GalButtons = styled.div`
  position: fixed;
  top: 40rem;
  left: 40rem;
`;
