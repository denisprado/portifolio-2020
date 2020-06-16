/** @jsx jsx */
import { jsx } from '@emotion/core';
import Footer from 'components/slider/footer';
import { SlideContainer, FooterContainer } from './slide.css';

const Slide = ({ content, width }) => (
  <SlideContainer
    background={content.slide.childImageSharp.fluid.src}
    width={width}
  >
    <FooterContainer>
      <Footer content={content}></Footer>
    </FooterContainer>
  </SlideContainer>
);

export default Slide;
