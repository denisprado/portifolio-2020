import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      text-transform: uppercase;
      font-size: 2.2rem;
      font-variant: normal;
      font-feature-settings: 'smcp';
      letter-spacing: .5px;
      & + li {
        margin-left: 3.5rem;
      }
    }
  }
`;
