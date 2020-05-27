import React from 'react'
import leftArrow from 'images/left-arrow.svg'
import rightArrow from 'images/right-arrow.svg'
import { Arrow as ArrowContainer } from './arrows.css'

const Arrow = ({ direction, handleClick }) => (
    <ArrowContainer onClick={handleClick} direction={direction}>
        {direction === 'right' ? <img src={rightArrow} alt="Next" /> : <img src={leftArrow} alt="Previous" />}
    </ArrowContainer>
)

export default Arrow