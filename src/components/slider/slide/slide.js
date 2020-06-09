/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Title from 'components/title';

const Slide = ({ content, width }) => (
  <>
    <div
      css={css`
      height: 100%;
      width: ${width}px;
      background-image: url('${content.slide.childImageSharp.fluid.src}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
    >
    </div>
    <Title css={css`
      width: 100px;
      bottom: 2rem;
      position: absolute;
    `}>{content.title}</Title>
  </>
)

export default Slide
