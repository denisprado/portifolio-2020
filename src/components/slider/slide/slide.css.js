import styled from 'styled-components';

export const SlideContainer = styled.div`
  height: 100%;
  width: ${({ width }) => width}px;
  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position:relative;
`;

export const FooterContainer = styled.div`
  color: white;
  bottom: 2rem;
  position: absolute;
`;
