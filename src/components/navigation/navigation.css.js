import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 6rem;
  position: fixed;
  z-index: 1;
  background: blue;
  right: 0;
  bottom: 2rem;
  color: white;
  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
