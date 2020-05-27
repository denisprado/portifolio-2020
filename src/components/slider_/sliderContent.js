import React from 'react'
import { Container } from './slideContent.css'

const SliderContent = ({ children, translate, transition, width }) => (
    <Container translate={translate} transition={transition} width={width}>
        {children}
    </Container>
)

export default SliderContent