import styled from 'styled-components'

export const Container = styled.div`
      transform: translateX(-${({ translate }) => translate && translate}px);
      transition: transform ease-out ${({ transition }) => transition && transition}s;
      height: 100%;
      width: ${({ width }) => width && width}px;
      display: flex;
    `;

export default Container