import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const HomeWork = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ContainerWorkRow = styled.div`
  display: flex;
  flex-direction: ${({ right }) => (right ? 'row' : 'row-reverse')};
  margin: 0 auto; /* centraliza a linha dos trabalhos */
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
  margin-left: ${({ right, featured }) =>
    right ? '20px' : featured ? '40px' : '0px'};
  display: flex;
  flex-wrap: wrap;

  ${MEDIA.MIN_DESKTOP`
    width: ${({ featured }) =>
      featured
        ? 'calc((((100vw - 320px)/ 12) * 6) + 100px)'
        : 'calc(((((100vw - 320px)/ 12) * 6) + 100px) + 20px)'};
    height:${({ grouped }) => !grouped && '100%'};
`}

  ${MEDIA.MIN_PHONE`
  
  width: ${({ featured, grouped }) =>
      (featured && grouped)
        ? 'calc((((100vw - 320px)/ 12) * 6) + 100px)' // index page featured item
        : (!featured && grouped) ? // index page not featured item
          'calc(((((100vw - 320px)/ 12) * 6) + 100px) + 20px)' :
          (!featured && !grouped) && //works page not featured
          'calc((((100vw - 320px)/ 12) * 2) + 100px)'
    };
height:${({ grouped }) => !grouped && '100%'};  

`}
  
`;

export const GalButtons = styled.div`
  position: fixed;
  top: 40rem;
  left: 40rem;
`;
