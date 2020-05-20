import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 5rem;
  z-index: 1;

  a {
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
