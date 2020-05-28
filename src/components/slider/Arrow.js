/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import leftArrow from 'images/left-arrow.svg'
import rightArrow from 'images/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => (
  <div role="button" tabIndex="0" onKeyPress={handleClick}
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 40%;
      ${direction === 'right' ? 'right: 25px' : 'left: 25px'};
      height: 50px;
      width: 50px;
      justify-content: center;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;

      &:hover {
        transform: scale(1.1);
      }

      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        height: 50px;
        width: 50px;
        &:focus {
          outline: none;
          
        }
      }
    `}
  >
    {direction === 'right' ? <img src={rightArrow} alt={'Previous'} /> : <img src={leftArrow} alt={'Next'} />}
  </div>
)

export default Arrow
