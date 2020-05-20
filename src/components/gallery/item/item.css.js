import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
<<<<<<< HEAD
  flex: 0 0 auto;
  min-width: 30vw;
=======
  flex-basis: 3;
  flex-shrink: 3;
  flex-grow: 3;
  min-width: 33vw;
  width: 33vw;
>>>>>>> 435bc067785279002ab7d3648fee07b636b36ae2
  position: relative;
  background-image: url(${(props) => props.image && props.image.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  & a.active {
    animation: all 5s ease-in-out;
    width: 100vw;
  }
`;

export const ContainerText = styled.div`
  white-space: normal;
  position: absolute;
  display: block;
  left: 0;
  top: 50vh;
  padding: 17vh 5rem;
  width: 100%;
  height: auto;
  color: #fff;
`;

export const GalleryTitle = styled.div``;

export const GalleryText = styled.div`
  overflow-y: hidden;
  max-width: 400px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  height: 0px;
  transition: 0.75s height ease-out;
  ${Container}:hover & {
    height: 80px;
    transition: 0.75s height cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
