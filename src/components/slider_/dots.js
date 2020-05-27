import React from 'react'
import { Dot as OneDot, Dots as ContainerDots } from './dots.css'

const Dot = ({ active }) => (
    <OneDot active={active} />
)

const Dots = ({ slides, activeSlide }) => (
    <ContainerDots
    >
        {slides.map((slide, i) => (
            <Dot key={slide} active={activeSlide === i} />
        ))}
    </ContainerDots>
)

export default Dots