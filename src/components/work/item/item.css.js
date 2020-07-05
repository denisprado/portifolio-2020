import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  float: left;
  overflow: hidden;
  width: ${({ featured, grouped }) => (!grouped && featured ? '740px' : '360px')};
  
  ${MEDIA.LARGE`
    min-height: ${({ featured, grouped }) => (!grouped && featured ? '432px' : '100px')};
    width: ${({ featured, grouped }) =>
      !grouped && featured
        ? 'calc((((100vw - 320px)/ 12) * 6) + 100px)'
        : !grouped && 'calc((((100vw - 320px)/ 12) * 3) + 40px);'};
  `}
  ${MEDIA.DESKTOP`
  background:red;

    width: ${({ featured, grouped }) =>
      !grouped && featured
      && 'calc((((100vw - 300px)/ 12) * 6) + 100px)'};
  `}
  ${MEDIA.TABLET`
    min-height: ${({ featured, grouped }) => (!grouped && featured ? '600px' : '300px')};
    width: ${({ featured, grouped }) => (!grouped && featured ? '740px' : '360px')};
    //border: 1px solid yellow;
    `}
  ${MEDIA.PHONE`
    width: 90%;
  `}
  margin-left: ${({ featured }) => !featured && '20px'};
  width: ${({ grouped }) => grouped && 'calc((((100vw - 320px)/ 12) * 2) + 40px)'};
`;

export const ContainerImage = styled.div`
  min-height: calc(100% - 75px);
  flex-wrap: wrap;
  display: flex;
  overflow: hidden;
  padding-bottom: 0;
`;

export const ContainerText = styled.div`
  white-space: normal;
  display: block;
  width: 100%;
  height: 75px;
  color: #000;
  position: absolute;
  min-height: 0;
  overflow: hidden;
  padding-right: 5%;
  padding-top: 10px;
  position: relative;
`;

export const GalleryTitle = styled.div`
  position: absolute;
  ${Container}:hover & {
    display: none;
    height: 0px;
    transition: 0.75s height cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export const GalleryText = styled.div`
  overflow-y: hidden;
  position: absolute;
  width: 100%;
  height: 75px;
  display: none;
  transition: 0.75s height ease-out;
  ${Container}:hover & {
    display: block;
    float: left;
    transition: 0.75s all cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
