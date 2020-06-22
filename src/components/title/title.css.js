import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: ${({ fontType }) => fontType && fontType} !important;
  color: ${({ color }) => color && color};
  color: ${({ inverse }) => inverse && 'white'};
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
        return '3.2rem';
      default:
        return '1.9rem';
    }
  }};

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
