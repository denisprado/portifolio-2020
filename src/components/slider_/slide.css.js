import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: ${({ width }) => width && width}px;
    background-image: url('${({ content }) => content && content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`