import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  position: fixed;
  background-color: #ccc;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 6rem;
  z-index: 1;
  left: 0;
  right: 0;
  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
