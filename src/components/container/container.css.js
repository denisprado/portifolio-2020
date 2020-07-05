import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import BREAKPOINTS from 'constants/breakpoints'
export const ContainerLayout = styled.div`
  position: relative;
  ${MEDIA.LARGE`
    max-width: ${({ full }) => full ? '100vw' : BREAKPOINTS.LARGE};
  `}
  margin: 0rem auto;
`;
