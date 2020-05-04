import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  height: 260px;
  position: relative;
  min-width: 360px;
  display: block;
  float: left;
  overflow: hidden;
  min-height: ${(props) => (props.featured ? '600px' : '300px')};
  width: ${(props) => (props.featured ? '740px' : '360px')};
  margin-left: ${(props) => !props.featured && '20px'};
  cursor: pointer;
`;

export const ContainerImage = styled.div`
  flex-wrap: wrap;
  display: flex;
  height: calc(100% - 75px);
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

  background-color: whitesmoke;
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
