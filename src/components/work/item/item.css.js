import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  position: relative;
  display: block;
  float: left;
  overflow: hidden;
  // border: 1px solid grey;
  width: ${(props) => (props.featured ? '740px' : '360px')};
  ${MEDIA.MIN_TABLET`
    width: calc((((100vw - 300px)/ 12) * 6) + 100px);
    // border:1px solid blue;
  `}
  ${MEDIA.MIN_DESKTOP`
    min-height: ${(props) => (props.featured ? '432px' : '100px')};
    width: ${(props) => (props.featured ? 'calc((((100vw - 320px)/ 12) * 6) + 100px)' : 'calc((((100vw - 320px)/ 12) * 3) + 40px);')};
    // border:1px solid red;
  `}
  ${MEDIA.MIN_LARGE`
    min-height: ${(props) => (props.featured ? '600px' : '300px')};
    width: ${(props) => (props.featured ? '740px' : '360px')};
    // border: 1px solid yellow;
  `}
  margin-left: ${(props) => !props.featured && '20px'};
  cursor: pointer;
`;

export const ContainerImage = styled.div`
  flex-wrap: wrap;
  display: flex;
  overflow: hidden;
  position: relative;
  display: block;
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
