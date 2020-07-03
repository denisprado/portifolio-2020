import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const HomeWork = styled.div`
  padding-top: 80px;
  width: 100vw;
  padding-right: 4rem;
  padding-left: 4rem;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${MEDIA.MIN_LARGE`
    padding-right: 5rem;
    padding-left: 5rem;
  `}
`;

export const ContainerWorkRow = styled.div`
  display: flex;
  flex-direction: ${({ right }) => right ? 'row' : 'row-reverse'};
  margin: 0 auto;
`;

export const ContainerWork = styled.div`
  margin-left: -20px;
  flex-flow: row wrap;
  ${MEDIA.MIN_LARGE`
    width: 760px;
  `}
`;

export const ItemContainer = styled.article`
  width: ${({ featured }) => (featured ? '740px' : '760px')};
  margin-left: ${({ right, featured }) => right ? '20px' : featured ? '40px' : '0px'};
  display: flex;
  flex-wrap: wrap;
  ${MEDIA.MIN_DESKTOP`
    width: ${({ featured }) => (featured ? 'calc((((100vw - 320px)/ 12) * 6) + 100px)' : 'calc(((((100vw - 320px)/ 12) * 6) + 100px) + 20px)')};
    height: 100%;
  `}
  ${MEDIA.MIN_TABLET`
  width: ${({ featured }) => (featured ? 'calc((((100vw - 320px)/ 12) * 6) + 100px)' : 'calc(((((100vw - 320px)/ 12) * 6) + 100px) + 20px)')};
  `}
  ${MEDIA.MIN_PHONE`
  width: ${({ featured }) => (featured ? 'calc((((100vw - 320px)/ 12) * 6) + 100px)' : 'calc(((((100vw - 320px)/ 12) * 6) + 100px) + 20px)')};
  `}
  
`;

export const GalButtons = styled.div`
position: fixed;
top: 40rem;
left: 40rem;
`;
