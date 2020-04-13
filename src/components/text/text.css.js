import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const TextContainer = styled.p`
  color: white;
  line-height: 1.6;
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
        return '2rem';
      default:
        return '1.6rem';
    }
  }};

  ${MEDIA.PHONE`
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
