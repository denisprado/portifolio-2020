import styled from 'styled-components';

export const ContainerLayout = styled.div`
  position: relative;
  width: ${({ full }) => full ? 'auto' : '100vw'};
  margin: 0rem auto;
`;
