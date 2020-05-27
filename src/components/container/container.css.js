import styled from 'styled-components';
import BREAKPOINTS from 'constants/breakpoints'

export const ContainerLayout = styled.div`
  position: relative;
  width: ${({ full }) => full ? 'auto' : BREAKPOINTS.LARGE + 'px'};
  margin: 0rem auto;
`;
