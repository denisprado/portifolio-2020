import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  color: white;
  margin-bottom: 1rem;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '500';
      default:
        return '900';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
