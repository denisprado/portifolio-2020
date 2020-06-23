import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const HeaderContainer = styled.header`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding-top: 3rem;
  padding-right: 4rem;
  padding-left: 4rem;
  ${MEDIA.MIN_LARGE`
    padding-right: 5rem;
    padding-left: 5rem;
  `}
  a {
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
