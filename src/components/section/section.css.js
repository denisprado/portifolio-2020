
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.section`
  width: auto;
  margin-top: 3rem;
  margin-right: 4rem;
  margin-left: 4rem;
  margin-top: 15rem;
  ${MEDIA.MIN_LARGE`
    margin-right: 15rem;
    margin-left: 15rem;
  `}
`;
