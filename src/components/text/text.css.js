import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const TextContainer = styled.p`
  line-height: 2.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 2.8em;

  color: ${({ inverse }) => (inverse ? '#fff' : '#000')};

  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '500';
      default:
        return '500';
    }
  }};

  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '2rem';
      default:
        return '1.9rem';
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
